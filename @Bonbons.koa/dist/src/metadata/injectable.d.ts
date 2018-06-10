import { IConstructor } from "./base";
export declare enum InjectScope {
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
export declare type IInjectable = IConstructor<IBonbonsInjectable>;
export declare type BonbonsDeptFactory<T> = () => T;
export declare type InjectDIToken<T extends IBonbonsInjectable = IBonbonsInjectable> = IConstructor<T> | InjectableToken<any>;
export declare type ImplementDIValue<T extends IBonbonsInjectable = IBonbonsInjectable> = ImplementToken<T> | T | BonbonsDeptFactory<T>;
