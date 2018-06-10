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

export interface ImplementToken<T extends IBonbonsInjectable> {
  prototype?: T;
}

export type IInjectable = IConstructor<IBonbonsInjectable>;

export type BonbonsDeptFactory<T> = () => T;

export type InjectDIToken<T extends IBonbonsInjectable = IBonbonsInjectable> = IConstructor<T> | InjectableToken<any>;
export type ImplementDIValue<T extends IBonbonsInjectable = IBonbonsInjectable> = ImplementToken<T> | T | BonbonsDeptFactory<T>;
