/// <reference types="koa" />
import { BonbonsToken, BonbonsEntry } from "./di";
import { KOAMiddleware } from "./source";
import { IConstructor } from "./base";
export declare type MiddlewaresFactory = () => KOAMiddleware;
export interface IBonbonsServer {
    use(mfac: MiddlewaresFactory): IBonbonsServer;
    option<T>(entry: BonbonsEntry<T>): IBonbonsServer;
    option<T>(token: BonbonsToken<T>, value: T): IBonbonsServer;
    controller<T extends IConstructor<any>>(ctlr: T): IBonbonsServer;
    scope(srv: any): IBonbonsServer;
    scope(token: any, srv: any): IBonbonsServer;
    singleton(srv: any): IBonbonsServer;
    singleton(token: any, srv: any): IBonbonsServer;
    host(host?: string): IBonbonsServer;
    port(port?: number): IBonbonsServer;
    start(): void;
}
