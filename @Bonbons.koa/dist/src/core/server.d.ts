/// <reference types="koa" />
import { IBonbonsServer as IServer } from "../metadata/core";
import { IController } from "../metadata/controller";
import { BonbonsEntry as Entry, BonbonsToken as Token } from "../metadata/di";
import { KOAMiddleware } from "../metadata/source";
export declare class BonbonsServer implements IServer {
    static Create(): BonbonsServer;
    private _app;
    private _ctlrs;
    private _di;
    private _configs;
    constructor();
    private _init;
    use(middleware: KOAMiddleware): IServer;
    option<T>(entry: Entry<T>): IServer;
    option<T>(token: Token<T>, value: T): IServer;
    controller<T extends IController>(ctlr: any): IServer;
    private injectable;
    scope(srv: any): IServer;
    scope(token: any, srv: any): IServer;
    singleton(srv: any): IServer;
    singleton(token: any, srv: any): IServer;
    host(host?: string): IServer;
    port(port?: number): IServer;
    start(): void;
    private _useRouters;
    private _parseFuncParams;
    private _decideFinalStep;
    private _selectFuncMethod;
}
