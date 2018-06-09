import { IConstructor } from "./base";

export enum InjectScope {
  Singleton = "__singleton",
  Scoped = "__scoped"
}

export interface IBonbonsInjectable {
  __valid?: boolean;
}

export type IInjectable = IConstructor<IBonbonsInjectable>;
