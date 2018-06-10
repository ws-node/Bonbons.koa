import { IConstructor, FormType } from "./base";
import { BonbonsConfigCollection } from "./di";
import { BaseFormOptions } from "./../metadata/options";
export declare type AllowMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
export interface IControllerConfig {
    prefix?: string;
}
export interface IRoute {
    path: string;
    allowMethods: AllowMethod[];
    funcParams: Array<{
        key: string;
        type: any;
        isQuery: boolean;
    }>;
    form: {
        parser: FormType;
        index: number;
        options?: BaseFormOptions;
    };
}
export interface BonbonsRouterConfig {
    routes: {
        [methodName: string]: IRoute;
    };
    prefix?: string;
}
export interface IBonbonsControllerMetadata {
    router: BonbonsRouterConfig;
    pipes: any[];
}
export interface IBonbonsController {
    __valid?: boolean;
    getConfig?(): IBonbonsControllerMetadata;
}
export declare type IController = IConstructor<IBonbonsController>;
export interface IBonbonsMethodResult {
    toString(configs: BonbonsConfigCollection): string;
}
export declare type Async<T> = Promise<T>;
export declare type UnionBonbonsResult = IBonbonsMethodResult | Async<IBonbonsMethodResult> | string;
