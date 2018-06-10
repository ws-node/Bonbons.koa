import { InjectScope, IInjectable } from "./injectable";
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
    register(selector: any, value: any, scope: InjectScope): any;
    resolveDeps(value: any): any[];
    complete(): void;
}
