
export interface BonbonsDIToken<T> {
  key: symbol;
}

export interface BonbonsDIEntry<T> {
  token: BonbonsDIToken<T>;
  value: T;
}

export interface BonbonsDITokenGenerator {
  <T>(key: string): BonbonsDIToken<T>;
}

export interface BonbonsDIContainer {
  set<T>(token: BonbonsDIToken<T>, entry: T): void;
  get<T>(token: BonbonsDIToken<T>): T;
}
