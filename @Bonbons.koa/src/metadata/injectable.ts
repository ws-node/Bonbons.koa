import { IConstructor } from "./base";

export enum InjectScope {
  Singleton = "__singleton",
  Scoped = "__scoped"
}

export interface IBonbonsInjectable {
  __valid?: boolean;
}

export interface InjectableToken<T> {
  prototype?: T;
}

export interface ImplementToken<T> {
  prototype?: T;
}

export type IInjectable = IConstructor<IBonbonsInjectable>;
