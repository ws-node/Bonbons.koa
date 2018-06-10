import { IBonbonsServer as IServer, MiddlewaresFactory, BonbonsServerConfig, BonbonsInjectEntry } from "../metadata/core";
import {
  IController,
  IRoute,
  UnionBonbonsResult as IResult,
  IBonbonsControllerMetadata as ControllerMetadata,
  IBonbonsMethodResult as SyncResult,
} from "../metadata/controller";
import {
  DIContainer,
  CONFIG_COLLECTION,
  ConfigCollection,
  DI_CONTAINER,
  JSON_RESULT_OPTIONS,
  STATIC_TYPED_RESOLVER,
  ERROR_PAGE_TEMPLATE,
  STRING_RESULT_OPTIONS,
  JSON_FORM_OPTIONS,
  BODY_PARSE_OPTIONS,
  TEXT_FORM_OPTIONS,
  URL_FORM_OPTIONS
} from "../di";
import { BonbonsDeptFactory as InjectFactory } from "./../metadata/injectable";
import {
  BonbonsEntry as Entry,
  BonbonsToken as Token,
  BonbonsConfigCollection as IConfigs,
  BonbonsDIContainer as DIs,
  BonbonsToken,
} from "../metadata/di";
import { invalidOperation, invalidParam, TypeCheck, TypedSerializer } from "../utils";
import { KOAMiddleware, KOA, KOAContext, KOARouter, KOABodyParser, KOABodyParseOptions } from "../metadata/source";
import { InjectScope, InjectableToken, ImplementToken } from "../metadata/injectable";
import { Context } from "../controller";
import { DEFAULTS } from "./../options";
import { FormType, IConstructor } from "./../metadata/base";
import { BaseFormOptions } from "./../metadata/options";

export abstract class BaseApp {
  public get config(): BonbonsServerConfig { return this["_configs"]; }
  abstract start(): void;
}

export class BonbonsServer implements IServer {

  public static Create() { return new BonbonsServer(); }

  public static get New() { return BonbonsServer.Create(); }

  private _app = new KOA();
  private _ctlrs: IConstructor<any>[] = [];
  private _di: DIs = new DIContainer();
  private _configs: IConfigs = new ConfigCollection();
  private _mwares: MiddlewaresFactory[] = [];
  private _port = 3000;

  constructor(config?: BonbonsServerConfig) {
    this._init();
    this._readConfig(config);
  }

  /**
   * Use koa middleware.
   * ---
   * @description
   * @author Big Mogician
   * @param {MiddlewaresFactory} mfac the factory of koa middleware.
   * @returns {BonbonsServer}
   * @memberof BonbonsServer
   */
  public use(mfac: MiddlewaresFactory): BonbonsServer {
    this._mwares.push(mfac);
    return this;
  }

  /**
   * Set an option
   * ---
   * Set an option with format entry{@BonbonsEntry<T>}.
   *
   * @description
   * @author Big Mogician
   * @template T
   * @param {BonbonsEntry<T>} entry BonbonsEntry<T>
   * @returns {BonbonsServer}
   * @memberof BonbonsServer
   */
  public option<T>(entry: Entry<T>): BonbonsServer;
  /**
   * Set an option
   * ---
   * Set an option with token and provided value.
   *
   * @description
   * @author Big Mogician
   * @template T
   * @param {Token<T>} token
   * @param {T} value
   * @returns {BonbonsServer}
   * @memberof BonbonsServer
   */
  public option<T>(token: Token<T>, value: T): BonbonsServer;
  public option(...args: any[]): BonbonsServer {
    const [e1, e2] = args;
    if (!e1) {
      throw invalidOperation("DI token or entry is empty, you shouldn't call BonbonsServer.use<T>(...) without any param.");
    }
    if (!e2 || args.length === 2) {
      this._configs.set(e1, optionAssign(this._configs, e1, e2));
    } else {
      const { token, value } = <Entry<any>>e1;
      this._configs.set(token, optionAssign(this._configs, token, value));
    }
    return this;
  }

  /**
   * Set a controller
   * ---
   * * controller should be decorated by @Controller(...)
   *
   * @description
   * @author Big Mogician
   * @template T
   * @param {*} ctlr
   * @returns {BonbonsServer}
   * @memberof BonbonsServer
   */
  public controller<T>(ctlr: IConstructor<T>): BonbonsServer {
    if (!ctlr || !(<IConstructor<T>>ctlr).prototype.__valid) throw controllerError(ctlr);
    this._ctlrs.push(ctlr);
    return this;
  }

  /**
   * Set a scoped servics
   * ---
   * * service should be decorated by @Injectable(...)
   *
   * Set a scoped service with constructor.
   * All scoped services will be created new instance in different request pipe
   *
   * @description
   * @author Big Mogician
   * @template T
   * @param {IConstructor<T>} srv
   * @returns {BonbonsServer}
   * @memberof BonbonsServer
   */
  public scoped<T>(srv: IConstructor<T>): BonbonsServer;
  /**
   * Set a scoped servics
   * ---
   * * service should be decorated by @Injectable(...)
   *
   * Set a scoped service with injectable token (such abstract class,
   * but not the typescript interface because there's no interface in
   * the javascript runtime) and implement service constructor. All
   * scoped services will be created new instance in different request pipe.
   *
   * @description
   * @author Big Mogician
   * @template B
   * @template T
   * @param {InjectableToken<B>} token
   * @param {ImplementToken<T>} srv
   * @returns {BonbonsServer}
   * @memberof BonbonsServer
   */
  public scoped<B, T>(token: InjectableToken<B>, srv: ImplementToken<T>): BonbonsServer;
  /**
   * Set a scoped servics
   * ---
   * * service should be decorated by @Injectable(...)
   *
   * Set a scoped service with injectable token (such abstract class,
   * but not the typescript interface because there's no interface in
   * the javascript runtime) and implement service instance factory
   * ( pure function with no side effects).
   * All scoped services will be created new instance in different request pipe.
   *
   * @description
   * @author Big Mogician
   * @template B
   * @template T
   * @param {InjectableToken<B>} token
   * @param {InjectFactory<T>} srv
   * @returns {BonbonsServer}
   * @memberof BonbonsServer
   */
  public scoped<B, T>(token: InjectableToken<B>, srv: InjectFactory<T>): BonbonsServer;
  /**
   * Set a scoped servics
   * ---
   * * service should be decorated by @Injectable(...)
   *
   * Set a scoped service with injectable token (such abstract class,
   * but not the typescript interface because there's no interface in
   * the javascript runtime) and a well-created implement service instance.
   * All scoped services will be created new
   * instance in different request pipe (but injecting by instance means
   * the instance may be changed in runtime, so please be careful. If you
   * want to prevent this situation, use a service factory here).
   *
   * @description
   * @author Big Mogician
   * @template T
   * @param {InjectableToken} token
   * @param {T} srv
   * @returns {BonbonsServer}
   * @memberof BonbonsServer
   */
  public scoped<B, T>(token: InjectableToken<B>, srv: T): BonbonsServer;
  public scoped(...args: any[]): BonbonsServer {
    return this._injectable(args[0], args[1], InjectScope.Scoped);
  }

  /**
   * Set a singleton service
   * ---
   * * service should be decorated by @Injectable(...)
   *
   * Set a singleton service with constructor.
   * All singleton services will use unique instance throught different request pipes.
   *
   * @description
   * @author Big Mogician
   * @template T
   * @param {IConstructor<T>} srv
   * @returns {BonbonsServer}
   * @memberof BonbonsServer
   */
  public singleton<T>(srv: IConstructor<T>): BonbonsServer;
  /**
   * Set a singleton service
   * ---
   * * service should be decorated by @Injectable(...)
   *
   * Set a singleton service with injectable token (such abstract class,
   * but not the typescript interface because there's no interface in
   * the javascript runtime) and implement service constructor.
   * All singleton services will use unique
   * instance throught different request pipes.
   *
   * @description
   * @author Big Mogician
   * @template B
   * @template T
   * @param {InjectableToken<B>} token
   * @param {ImplementToken<T>} srv
   * @returns {BonbonsServer}
   * @memberof BonbonsServer
   */
  public singleton<B, T>(token: InjectableToken<B>, srv: ImplementToken<T>): BonbonsServer;
  /**
   * Set a singleton service
   * ---
   * * service should be decorated by @Injectable(...)
   *
   * Set a singleton service with injectable token (such abstract class,
   * but not the typescript interface because there's no interface in
   * the javascript runtime) and implement service factory ( pure function with no side effects).
   * All singleton services will use unique
   * instance throught different request pipes.
   *
   * @description
   * @author Big Mogician
   * @template B
   * @template T
   * @param {InjectableToken<B>} token
   * @param {InjectFactory<T>} srv
   * @returns {BonbonsServer}
   * @memberof BonbonsServer
   */
  public singleton<B, T>(token: InjectableToken<B>, srv: InjectFactory<T>): BonbonsServer;
  /**
   * Set a singleton service
   * ---
   * * service should be decorated by @Injectable(...)
   *
   * Set a singleton service with injectable token (such abstract class,
   * but not the typescript interface because there's no interface in
   * the javascript runtime) and a well-created implement service instance.
   * All singleton services will use unique
   * instance throught different request pipes.
   *
   * @description
   * @author Big Mogician
   * @template T
   * @param {InjectableToken} token
   * @param {T} srv
   * @returns {BonbonsServer}
   * @memberof BonbonsServer
   */
  public singleton<B, T>(token: InjectableToken<B>, srv: T): BonbonsServer;
  public singleton(...args: any[]): BonbonsServer {
    return this._injectable(args[0], args[1], InjectScope.Singleton);
  }

  public port(port?: number): BonbonsServer {
    this._port = port || 3000;
    return this;
  }

  /**
   * Start application
   * ---
   * @description
   * @author Big Mogician
   * @memberof BonbonsServer
   */
  public start(): void {
    this._di.complete();
    this._useRouters();
    this._useMiddlewares();
    this._app.listen(this._port);
  }

  private _readConfig(config?: BonbonsServerConfig) {
    if (config) {
      this._port = config.port || 3000;
      this._mwares = config.middlewares || [];
      this._ctlrs = config.controller || [];
      (config.scoped || []).forEach(item => {
        if (item instanceof Array) {
          this.scoped(item[0], item[1]);
        } else {
          const { token, implement } = <BonbonsInjectEntry<any>>item;
          !token ?
            this.scoped(<IConstructor<any>>item) :
            this.scoped(token, implement);
        }
      });
      (config.singleton || []).forEach(item => {
        if (item instanceof Array) {
          this.singleton(item[0], item[1]);
        } else {
          const { token, implement } = <BonbonsInjectEntry<any>>item;
          !token ?
            this.singleton(<IConstructor<any>>item) :
            this.singleton(token, implement);
        }
      });
      (config.options || []).forEach(item => {
        if (item instanceof Array) {
          this.option(item[0], item[1]);
        } else {
          this.option(item);
        }
      });
    }
  }

  private _init() {
    this.option(DI_CONTAINER, this._di);
    this.option(CONFIG_COLLECTION, this._configs);
    this.option(STATIC_TYPED_RESOLVER, TypedSerializer);
    this.option(JSON_RESULT_OPTIONS, DEFAULTS.jsonOptions);
    this.option(STRING_RESULT_OPTIONS, DEFAULTS.stringOption);
    this.option(ERROR_PAGE_TEMPLATE, DEFAULTS.errorTemplate);
    this.option(BODY_PARSE_OPTIONS, { enableTypes: ["json", "form"] });
    this.option(JSON_FORM_OPTIONS, { jsonLimit: "1mb" });
    this.option(TEXT_FORM_OPTIONS, { textLimit: "1mb" });
    this.option(URL_FORM_OPTIONS, { formLimit: "56kb" });
  }

  private _injectable(provide: any, type: InjectScope): BonbonsServer;
  private _injectable(provide: any, classType: any, type?: InjectScope): BonbonsServer;
  private _injectable(provide: any, classType?: any, type?: InjectScope): BonbonsServer {
    if (!provide) return this;
    type = type || InjectScope.Singleton;
    this._di.register(provide, classType || provide, type);
    return this;
  }

  private _useRouters() {
    const mainRouter = new KOARouter();
    this._ctlrs.forEach(controllerClass => {
      const ct = new controllerClass();
      const { router } = <ControllerMetadata>(ct.getConfig && ct.getConfig());
      const thisRouter = new KOARouter({ prefix: router.prefix as string });
      Object.keys(router.routes).forEach(methodName => {
        const item = router.routes[methodName];
        const { path, allowMethods } = item;
        if (!allowMethods) throw invalidOperation("invalid method, you must set a HTTP method for a route.");
        allowMethods.forEach(eachMethod => {
          if (!path) return;
          const middlewares = [];
          this._selectFormParser(item, middlewares);
          this._decideFinalStep(item, middlewares, controllerClass, methodName);
          this._selectFuncMethod(thisRouter, eachMethod)(path, ...middlewares);
        });
      });
      mainRouter.use(thisRouter.routes()).use(thisRouter.allowedMethods());
    });
    const { routes, allowedMethods } = mainRouter;
    this.use(routes.bind(mainRouter));
    this.use(allowedMethods.bind(mainRouter));
  }

  private _useMiddlewares() {
    this._mwares.forEach(fac => this._app.use(fac()));
  }

  private _selectFormParser(route: IRoute, middlewares: any[]) {
    if (route.form && route.form.parser) resolveFormParser(middlewares, route, this._configs);
  }

  private _decideFinalStep(route: IRoute, middlewares: KOAMiddleware[], constructor: any, methodName: string) {
    middlewares.push((ctx) => {
      const list = this._di.resolveDeps(constructor);
      const c = new constructor(...list);
      c._ctx = new Context(ctx);
      const result: IResult = constructor.prototype[methodName].bind(c)(...this._parseFuncParams(constructor, ctx, route));
      resolveResult(ctx, result, this._configs);
    });
  }

  private _parseFuncParams(constructor: any, ctx: KOAContext, route: IRoute) {
    const querys = (route.funcParams || []).map(({ key, type, isQuery }) => {
      const pack = isQuery ? ctx.query : ctx.params;
      return !type ? pack[key] : type(pack[key]);
    });
    if (route.form && route.form.index >= 0) {
      const { index } = route.form;
      // when use form decorator for params, try to static-typed and inject to function params list.
      const staticType = (route.funcParams || [])[index];
      const resolver = this._configs.get(STATIC_TYPED_RESOLVER);
      querys[index] = !!(resolver && staticType && staticType.type) ?
        resolver.FromObject(ctx.request.body, staticType.type) :
        ctx.request.body;
    }
    return querys;
  }

  private _selectFuncMethod(router: KOARouter, method: string) {
    let invoke: (...args: any[]) => void;
    switch (method) {
      case "GET":
      case "POST":
      case "PUT":
      case "DELETE":
      case "PATCH":
      case "OPTIONS":
      case "HEAD": invoke = (...args: any[]) => router[method.toLowerCase()](...args); break;
      default: throw invalidParam(`invalid REST method registeration : the method [${method}] is not allowed.`);
    }
    return invoke;
  }

}

function resolveFormParser(middlewares: any[], route: IRoute, configs: IConfigs) {
  const parser = resolveParser(route.form.parser, configs, route.form.options);
  if (parser) middlewares.unshift(parser);
}

function resolveParser(type: FormType, configs: IConfigs, options?: BaseFormOptions) {
  // console.log(options);
  switch (type) {
    // case FormType.MultipleFormData:
    //     return MultiplePartParser().any();
    case FormType.ApplicationJson:
      return resolveParserOptions(JSON_FORM_OPTIONS, configs, { type: "json", ...options });
    case FormType.UrlEncoded:
      return resolveParserOptions(URL_FORM_OPTIONS, configs, { type: "form", ...options });
    // case FormType.Raw:
    //   return RawParser(resolveParserOptions(BODY_RAW_PARSER, configs, options));
    case FormType.TextPlain:
      return resolveParserOptions(TEXT_FORM_OPTIONS, configs, { type: "text", ...options });
    default: return null;
  }
}

function resolveParserOptions<T>(key: BonbonsToken<T>, configs: IConfigs, options: BaseFormOptions): KOAMiddleware {
  // console.log(options);
  const { type, extends: extendsV } = options;
  (<any>options).enableTypes = [type];
  const etx = (<KOABodyParseOptions>options).extendTypes = {};
  etx[(<string>type)] = extendsV || [];
  delete options.type;
  delete options.extends;
  // console.log(JSON.stringify(Object.assign(configs.get(key) || {}, options)));
  return KOABodyParser(Object.assign(configs.get(key) || {}, options));
}

function optionAssign(configs: IConfigs, token: any, newValue: any) {
  return TypeCheck.isFromCustomClass(newValue || {}) ?
    newValue :
    Object.assign(configs.get(token) || {}, newValue);
}

function controllerError(ctlr: any) {
  return invalidParam("Controller to be add is invalid. You can only add the controller been decorated by @Controller(...).", { className: ctlr && ctlr.name });
}

function resolveResult(ctx: KOAContext, result: IResult, configs: IConfigs, isSync?: boolean) {
  const isAsync = isSync === undefined ? TypeCheck.isFromCustomClass(result || {}, Promise) : !isSync;
  if (isAsync) {
    (<Promise<SyncResult>>result)
      .then(r => resolveResult(ctx, r, configs, true))
      .catch((error: Error) => ctx.body = configs.get(ERROR_PAGE_TEMPLATE).render(error));
  } else {
    if (!result) { ctx.body = ""; return; }
    if (typeof result === "string") { ctx.body = result; return; }
    ctx.body = (<SyncResult>result).toString(configs);
  }
}
