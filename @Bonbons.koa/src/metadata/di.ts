import { InjectScope, IInjectable, IBonbonsInjectable } from "./injectable";
import { IConstructor } from "./base";

export interface BonbonsToken<T> {
  key: symbol;
}

export interface BonbonsEntry<T> {
  token: BonbonsToken<T>;
  value: T;
}

export interface BonbonsTokenGenerator {
  <T>(key: string): BonbonsToken<T>;
}

export interface BonbonsConfigCollection {
  set<T>(token: BonbonsToken<T>, entry: T): void;
  get<T>(token: BonbonsToken<T>): T;
  toArray(): BonbonsEntry<any>[];
}

export interface BonbonsDIEntry {
  getInstance(): any;
}

export interface BonbonsDIContainer<T extends BonbonsDIEntry = BonbonsDIEntry> {
  get<T>(token: IInjectable): T;
  register(selector: any, value: any, scope: InjectScope);
  resolveDeps(value: any): any[];
  complete(): void;
}

export type BonbonsDeptFactory<T> = () => T;

export interface BonbonsDeptNode<T extends IBonbonsInjectable = IBonbonsInjectable> {
  el: IConstructor<T>;
  realel: IConstructor<T> | T | BonbonsDeptFactory<T>;
  deps: IConstructor<any>[];
  scope: InjectScope;
  fac?: BonbonsDeptFactory<T>;
}