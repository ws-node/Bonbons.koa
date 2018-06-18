import { InjectScope, IBonbonsInjectable, InjectDIToken, ImplementToken, BonbonsDeptFactory, ImplementDIValue } from "./injectable";
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

export interface ConfigsCollection {
  get<T>(token: BonbonsToken<T>): T;
}

export interface BonbonsConfigCollection extends ConfigsCollection {
  set<T>(token: BonbonsToken<T>, entry: T): void;
  toArray(): BonbonsEntry<any>[];
}

export interface BonbonsDIEntry {
  getInstance(): any;
}

export interface ReadonlyDIContainer {
  get<T>(token: InjectDIToken): T;
}

export interface BonbonsDIContainer extends ReadonlyDIContainer {
  count: number;
  register(selector: InjectDIToken, value: any, scope: InjectScope);
  resolveDeps<T>(value: IConstructor<T>): any[];
  complete(): void;
}

export interface BonbonsDeptNode<T extends IBonbonsInjectable = IBonbonsInjectable> {
  el: InjectDIToken<T>;
  realel: ImplementDIValue<T>;
  deps: IConstructor<any>[];
  scope: InjectScope;
  fac?: BonbonsDeptFactory<T>;
}