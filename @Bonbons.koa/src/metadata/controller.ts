import { IConstructor } from "./base";

export interface BonbonsRouterConfig {
  routes: any[];
}


export interface IBonbonsController {
  getConfig?(): BonbonsRouterConfig;
}

export type IController = IConstructor<IBonbonsController>;

