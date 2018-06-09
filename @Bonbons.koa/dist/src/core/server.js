var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DIContainer, CONFIG_COLLECTION, ConfigCollection, DI_CONTAINER, JSON_RESULT_OPTIONS, STATIC_TYPED_RESOLVER, ERROR_PAGE_TEMPLATE, STRING_RESULT_OPTIONS } from "../di";
import { invalidOperation, invalidParam, TypeCheck, TypedSerializer } from "../utils";
import { KOA, KOARouter } from "../metadata/source";
import { InjectScope } from "../metadata/injectable";
import { Context } from "../controller";
export class BonbonsServer {
    constructor() {
        this._app = new KOA();
        this._ctlrs = [];
        this._di = new DIContainer();
        this._configs = new ConfigCollection();
        this._init();
    }
    static Create() { return new BonbonsServer(); }
    _init() {
        this.option(CONFIG_COLLECTION, this._configs);
        this.option(DI_CONTAINER, this._di);
        this.option(STATIC_TYPED_RESOLVER, TypedSerializer);
        this.option(JSON_RESULT_OPTIONS, defaultJsonResultOptions());
        this.option(STRING_RESULT_OPTIONS, defaultStringResultOptions());
        this.option(ERROR_PAGE_TEMPLATE, defaultErrorPageTemplate());
    }
    use(middleware) {
        this._app.use(middleware);
        return this;
    }
    option(...args) {
        const [e1, e2] = args;
        if (!e1) {
            throw invalidOperation("DI token or entry is empty, you shouldn't call BonbonsServer.use<T>(...) without any param.");
        }
        if (!e2 || args.length === 2) {
            this._configs.set(e1, optionAssign(this._configs, e1, e2));
        }
        else {
            const { token, value } = e1;
            this._configs.set(token, optionAssign(this._configs, token, value));
        }
        return this;
    }
    controller(ctlr) {
        if (!ctlr || !ctlr.prototype.__valid)
            throw controllerError(ctlr);
        this._ctlrs.push(ctlr);
        return this;
    }
    injectable(provide, classType, type) {
        if (!provide)
            return this;
        type = type || InjectScope.Singleton;
        this._di.register(provide, classType || provide, type);
        return this;
    }
    scope(...args) {
        return this.injectable(args[0], args[1], InjectScope.Scoped);
    }
    singleton(...args) {
        return this.injectable(args[0], args[1], InjectScope.Singleton);
    }
    host(host) {
        throw new Error("Method not implemented.");
    }
    port(port) {
        throw new Error("Method not implemented.");
    }
    start() {
        this._di.complete();
        const mainRouter = this._useRouters();
        this._app
            .use(mainRouter.routes())
            .use(mainRouter.allowedMethods())
            .use((ctx) => __awaiter(this, void 0, void 0, function* () {
            ctx.body = "hello koa2";
        }))
            .listen(3000);
    }
    _useRouters() {
        const mainRouter = new KOARouter();
        this._ctlrs.forEach(controllerClass => {
            const ct = new controllerClass();
            const { router } = (ct.getConfig && ct.getConfig());
            const thisRouter = new KOARouter();
            Object.keys(router.routes).forEach(methodName => {
                const item = router.routes[methodName];
                const { path, allowMethods } = item;
                allowMethods.forEach(eachMethod => {
                    if (!path)
                        return;
                    const middlewares = [];
                    this._decideFinalStep(item, middlewares, controllerClass, methodName);
                    this._selectFuncMethod(thisRouter, eachMethod)(path, ...middlewares);
                });
            });
            mainRouter.use(router.prefix, thisRouter.routes(), thisRouter.allowedMethods());
        });
        return mainRouter;
    }
    _parseFuncParams(constructor, ctx, route) {
        const querys = (route.funcParams || []).map(ele => {
            const { type, isQuery } = ele;
            if (isQuery) {
                return !type ? ctx.query[ele.key] : type(ctx.query[ele.key]);
            }
            else {
                return !type ? ctx.params[ele.key] : type(ctx.params[ele.key]);
            }
        });
        // if (route.form && route.form.index >= 0) {
        //     // when use form decorator for params, try to static-typed and inject to function params list.
        //     const staticType = (route.funcParams || [])[route.form.index];
        //     const resolver = this.staticResolver;
        //     querys[route.form.index] = !!(resolver && staticType && staticType.type) ?
        //         resolver.FromObject(req.body, staticType.type) :
        //         req.body;
        // }
        return querys;
    }
    _decideFinalStep(route, middlewares, constructor, methodName) {
        middlewares.push((ctx) => {
            const list = this._di.resolveDeps(constructor);
            const c = new constructor(...list);
            c._ctx = new Context(ctx);
            const result = constructor.prototype[methodName].bind(c)(...this._parseFuncParams(constructor, ctx, route));
            resolveResult(ctx, result, this._configs);
        });
    }
    _selectFuncMethod(router, method) {
        let invoke;
        switch (method) {
            case "GET":
            case "POST":
            case "PUT":
            case "DELETE":
            case "PATCH":
            case "OPTIONS":
            case "HEAD":
                invoke = (...args) => router[method.toLowerCase()](...args);
                break;
            default: throw invalidParam(`invalid REST method registeration : the method [${method}] is not allowed.`);
        }
        return invoke;
    }
}
function optionAssign(configs, token, newValue) {
    return TypeCheck.isFromCustomClass(newValue) ?
        newValue :
        Object.assign(configs.get(token) || {}, newValue);
}
function controllerError(ctlr) {
    return invalidParam("Controller to be add is invalid. You can only add the controller been decorated by @Controller(...).", { className: ctlr && ctlr.name });
}
function resolveResult(ctx, result, configs, isSync) {
    const isAsync = isSync === undefined ? TypeCheck.isFromCustomClass(result || {}, Promise) : !isSync;
    if (isAsync) {
        result
            .then(r => resolveResult(ctx, r, configs, true))
            .catch((error) => ctx.body = configs.get(ERROR_PAGE_TEMPLATE).render(error));
    }
    else {
        if (!result) {
            ctx.body = "";
            return;
        }
        if (typeof result === "string") {
            ctx.body = result;
            return;
        }
        ctx.body = result.toString(configs);
    }
}
function defaultErrorPageTemplate() {
    return ({
        render: (error) => !error ? "unhandled error." : `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="utf-8">
  <title>Error</title>
  </head>
  <body>
  <pre>${error.stack || ""}</pre>
  </body>
  </html>
  `
    });
}
function defaultJsonResultOptions() {
    return { indentation: true, staticType: false };
}
function defaultStringResultOptions() {
    return { encoding: "utf8", decoding: "utf8" };
}
//# sourceMappingURL=server.js.map