import { InjectScope, IBonbonsInjectable, InjectDIToken, BonbonsDeptFactory, ImplementDIValue } from "./injectable";
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
export interface BonbonsDIContainer {
    get<T>(token: InjectDIToken): T;
    register(selector: InjectDIToken, value: any, scope: InjectScope): any;
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
