import { BonbonsToken, BonbonsEntry, BonbonsConfigCollection } from "./di";
import { KOAMiddleware } from "./source";
import { IConstructor } from "./base";
import { InjectableToken, ImplementToken, BonbonsDeptFactory, ImplementDIValue } from "./injectable";
import { BonbonsPipeEntry } from "./pipe";

export { BonbonsPipeEntry };

export type MiddlewaresFactory = (...args: any[]) => KOAMiddleware;
export type KOAMiddlewareTuple = [MiddlewaresFactory, Array<any>];
export type BonbonsKOAMiddleware = MiddlewaresFactory | KOAMiddlewareTuple;


export type InjectableServiceType = IConstructor<any> | [InjectableToken<any>, ImplementDIValue<any>] | BonbonsInjectEntry<any>;

/**
 * The inject-entry for injectable service in @BonbonsApp(...)
 * @description
 * @author Big Mogician
 * @export
 * @interface BonbonsInjectEntry
 * @template T
 */
export interface BonbonsInjectEntry<T> {
  /**
   * Token to resolve dependency in runtime.
   * @description
   * @type {InjectableToken<T>}
   * @memberof BonbonsInjectEntry
   */
  token: InjectableToken<T>;
  /**
   * The implement of token.
   * @description
   * @type {ImplementDIValue<T>}
   * @memberof BonbonsInjectEntry
   */
  implement: ImplementDIValue<T>;
}

/**
 * Bonbons App Config
 * ---
 * * support for the @BonbonsApp(config:BonbonsServerConfig)
 *
 * describe the content and configs of application .
 *
 * @description
 * @author Big Mogician
 * @export
 * @interface BonbonsServerConfig
 */
export interface BonbonsServerConfig {
  mode?: "development" | "production";
  /**
   * The port to expose and listen.
   * @description
   * @type {number}
   * @memberof BonbonsServerConfig
   */
  port?: number;
  /**
   * Controllers of application
   * ---
   * * each controller represent a router module of koa.
   * * controller set here must describled by @Controller(...), or an error will throw.
   *
   * @description
   * @type {IConstructor<any>[]}
   * @memberof BonbonsServerConfig
   */
  controller?: IConstructor<any>[];
  /**
   * Koa middleware factories
   * ---
   * * each middleware set here represent a app.use(...) calling.
   * * send the factory but not the middleware result here.
   *
   * @description
   * @type {BonbonsKOAMiddleware[]}
   * @memberof BonbonsServerConfig
   */
  middlewares?: BonbonsKOAMiddleware[];
  pipes?: BonbonsPipeEntry[];
  /**
   * Scoped services
   * ---
   * service transported through a request/response pipe.
   * ```typescript
   * // you can add an option like this:
   *
   * @Injectable()
   * class FakeService { }
   * // 1. contructor inject:
   * @BonbonsApp({
   *    scoped: [FakeService]
   * })
   * class App extends BaseApp {
   * // ...
   * }
   *
   * // 2. abstract token inject with implement constructor
   * abstract class AbstractToken { }
   *
   * @Injectable()
   * class ImpService implements AbstractToken { }
   *
   * @BonbonsApp({
   *    scoped: [
   *        [AbstractToken, ImpService]
   *    ]
   * // or : scoped: [ {token: AbstractToken, implement: ImpService} ]
   * })
   * class App extends BaseApp {
   * // ...
   * }
   *
   * // 3. with implement class factory
   * @BonbonsApp({
   *    scoped: [
   *        [AbstractToken, () => new ImpService()]
   *    ]
   * })
   *
   *  // 4. with implement class instance
   * @BonbonsApp({
   *    scoped: [
   *        [AbstractToken, new ImpService()]
   *    ]
   * })
   * ```
   * @description
   * @type {(Array<(IConstructor<any> | [InjectableToken<any>, ImplementDIValue<any>] | BonbonsInjectEntry<any>)>)}
   * @memberof BonbonsServerConfig
   */
  scoped?: Array<InjectableServiceType>;
  /**
   * Singleton services
   * ---
   * service keeping unique through the application lifecycle.
   * ```typescript
   * // you can add an option like this:
   *
   * @Injectable()
   * class FakeService { }
   * // 1. contructor inject:
   * @BonbonsApp({
   *    singleton: [FakeService]
   * })
   * class App extends BaseApp {
   * // ...
   * }
   *
   * // 2. abstract token inject with implement constructor
   * abstract class AbstractToken { }
   *
   * @Injectable()
   * class ImpService implements AbstractToken { }
   *
   * @BonbonsApp({
   *    singleton: [
   *        [AbstractToken, ImpService]
   *    ]
   * // or : singleton: [ {token: AbstractToken, implement: ImpService} ]
   * })
   * class App extends BaseApp {
   * // ...
   * }
   *
   * // 3. with implement class factory
   * @BonbonsApp({
   *    singleton: [
   *        [AbstractToken, () => new ImpService()]
   *    ]
   * })
   *
   *  // 4. with implement class instance
   * @BonbonsApp({
   *    singleton: [
   *        [AbstractToken, new ImpService()]
   *    ]
   * })
   * ```
   * @description
   * @type {(Array<(IConstructor<any> | [InjectableToken<any>, ImplementDIValue<any>] | BonbonsInjectEntry<any>)>)}
   * @memberof BonbonsServerConfig
   */
  singleton?: Array<InjectableServiceType>;
  /**
   * Options to modify this application
   * ---
   * ```typescript
   * // you can add an option like this:
   * { token : option_token, value: option_value }
   * // or
   * [ option_token, option_value ]
   *
   * // token can be created by method:
   * const token : tk_type = createToken<tk_type>("tk_name")
   * // the generic type should be provided manually to keep type
   * // metadata in design time.
   * ```
   *
   * @description
   * @type {(Array<(BonbonsEntry<any> | [BonbonsToken<any>, any])>)}
   * @memberof BonbonsServerConfig
   */
  options?: Array<(BonbonsEntry<any> | [BonbonsToken<any>, any])>;
}

export interface IBonbonsServer {
  use(mfac: MiddlewaresFactory): IBonbonsServer;
  pipe(pipe: BonbonsPipeEntry): IBonbonsServer;
  option<T>(entry: BonbonsEntry<T>): IBonbonsServer;
  option<T>(token: BonbonsToken<T>, value: T): IBonbonsServer;
  controller<T>(ctlr: IConstructor<T>): IBonbonsServer;
  scoped<T>(srv: IConstructor<T>): IBonbonsServer;
  scoped<T, M>(token: InjectableToken<T>, srv: ImplementToken<M>): IBonbonsServer;
  scoped<T, M>(token: InjectableToken<T>, srv: BonbonsDeptFactory<M>): IBonbonsServer;
  scoped<T, M>(token: InjectableToken<T>, srv: M): IBonbonsServer;
  singleton<T>(srv: IConstructor<T>): IBonbonsServer;
  singleton<T, M>(token: InjectableToken<T>, srv: ImplementToken<M>): IBonbonsServer;
  singleton<T, M>(token: InjectableToken<T>, srv: BonbonsDeptFactory<M>): IBonbonsServer;
  singleton<T, M>(token: InjectableToken<T>, srv: M): IBonbonsServer;
  port(port?: number): IBonbonsServer;
  mode(mode: "development" | "production"): IBonbonsServer;
  getConfigs(): BonbonsConfigCollection;
  start(): void;
}
