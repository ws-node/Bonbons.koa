import { IBonbonsController, IController } from "./controller";
import { BonbonsToken, BonbonsEntry } from "./di";

export interface IBonbonsServer {
  option<T>(entry: BonbonsEntry<T>): IBonbonsServer;
  option<T>(token: BonbonsToken<T>, value: T): IBonbonsServer;
  controller<T extends IController>(ctlr: T): IBonbonsServer;
  scope(srv: any): IBonbonsServer;
  scope(token: any, srv: any): IBonbonsServer;
  singleton(srv: any): IBonbonsServer;
  singleton(token: any, srv: any): IBonbonsServer;
  host(host?: string): IBonbonsServer;
  port(port?: number): IBonbonsServer;
  start(): void;
}
