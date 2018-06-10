import { IBonbonsController, IController } from "./controller";
import { BonbonsToken, BonbonsEntry, BonbonsDeptFactory } from "./di";
import { KOAMiddleware } from "./source";
import { IConstructor } from "./base";
import { InjectableToken, ImplementToken } from "./injectable";

export type MiddlewaresFactory = () => KOAMiddleware;

export interface IBonbonsServer {
  use(mfac: MiddlewaresFactory): IBonbonsServer;
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
  host(host?: string): IBonbonsServer;
  port(port?: number): IBonbonsServer;
  start(): void;
}
