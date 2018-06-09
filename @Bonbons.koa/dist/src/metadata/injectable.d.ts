import { IConstructor } from "./base";
export declare enum InjectScope {
    Singleton = "__singleton",
    Scoped = "__scoped"
}
export interface IBonbonsInjectable {
    __valid?: boolean;
}
export declare type IInjectable = IConstructor<IBonbonsInjectable>;
