
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

export interface BonbonsDIContainer {
  set<T>(token: BonbonsToken<T>, entry: T): void;
  get<T>(token: BonbonsToken<T>): T;
}

export interface BonbonsConfigCollection extends BonbonsDIContainer {
  toArray(): any[];
}
