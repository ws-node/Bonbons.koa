import { IBonbonsServer as IServer, MiddlewaresFactory, BonbonsServerConfig } from "../metadata/core";
import { BonbonsDeptFactory as InjectFactory } from "./../metadata/injectable";
import { BonbonsEntry as Entry, BonbonsToken as Token } from "../metadata/di";
import { InjectableToken, ImplementToken } from "../metadata/injectable";
import { IConstructor } from "./../metadata/base";
export declare abstract class BaseApp {
    protected readonly config: BonbonsServerConfig;
    start(): void;
}
export declare class BonbonsServer implements IServer {
    static Create(): BonbonsServer;
    static readonly New: BonbonsServer;
    /**
     * DI container
     * ---
     * could be change by set option DI_CONTAINER
     *
     * @description
     * @private
     * @type {IDIContainer}
     * @memberof BonbonsServer
     */
    private _di;
    private _app;
    private _ctlrs;
    private _configs;
    private _mwares;
    private _scoped;
    private _singleton;
    private _port;
    private _isDev;
    constructor(config?: BonbonsServerConfig);
    mode(mode: "development" | "production"): BonbonsServer;
    /**
     * Use koa middleware.
     * ---
     * @description
     * @author Big Mogician
     * @param {MiddlewaresFactory} mfac middleware factory
     * @param {...any[]} params factory params
     * @returns {BonbonsServer}
     * @memberof BonbonsServer
     */
    use(mfac: MiddlewaresFactory, ...params: any[]): BonbonsServer;
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
    option<T>(entry: Entry<T>): BonbonsServer;
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
    option<T>(token: Token<T>, value: T): BonbonsServer;
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
    controller<T>(ctlr: IConstructor<T>): BonbonsServer;
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
    scoped<T>(srv: IConstructor<T>): BonbonsServer;
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
    scoped<B, T>(token: InjectableToken<B>, srv: ImplementToken<T>): BonbonsServer;
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
    scoped<B, T>(token: InjectableToken<B>, srv: InjectFactory<T>): BonbonsServer;
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
    scoped<B, T>(token: InjectableToken<B>, srv: T): BonbonsServer;
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
    singleton<T>(srv: IConstructor<T>): BonbonsServer;
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
    singleton<B, T>(token: InjectableToken<B>, srv: ImplementToken<T>): BonbonsServer;
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
    singleton<B, T>(token: InjectableToken<B>, srv: InjectFactory<T>): BonbonsServer;
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
    singleton<B, T>(token: InjectableToken<B>, srv: T): BonbonsServer;
    port(port?: number): BonbonsServer;
    /**
     * Start application
     * ---
     * @description
     * @author Big Mogician
     * @param {boolean} dev
     * @memberof BonbonsServer
     */
    start(): void;
    private _clearServer;
    private _initDIContainer;
    private _readConfig;
    private _init;
    private _injectable;
    private _injectable_final;
    private _useRouters;
    private _useMiddlewares;
    private _selectFormParser;
    private _decideFinalStep;
    private _parseFuncParams;
    private _selectFuncMethod;
}
