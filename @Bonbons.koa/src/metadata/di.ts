import { InjectScope, IInjectable } from "./injectable";
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

export interface BonbonsGetCollection<K = any, V = any> {
  get<T extends V>(token: K): T;
}

export interface BonbonsSetGetCollection<K = any, V = any> extends BonbonsGetCollection<K, V> {
  set<T extends V>(token: K, entry: T): void;
}

export interface BonbonsConfigCollection<M = {}> extends BonbonsSetGetCollection<BonbonsToken<any>, M> {
  toArray(): BonbonsEntry<any>[];
}

export interface BonbonsDIEntry {
  getInstance(): any;
}

export interface BonbonsDIContainer<T extends BonbonsDIEntry = BonbonsDIEntry> extends BonbonsGetCollection<IInjectable, T> {
  register(selector: any, value: any, scope: InjectScope);
  resolveDeps(value: any): any[];
  complete(): void;
}
