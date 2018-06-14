import { IConstructor, FormType, Async } from "./base";
import { ConfigsCollection } from "./di";
import { BaseFormOptions } from "./../metadata/options";

export type AllowMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";

export interface IControllerConfig {
  prefix?: string;
}

export interface IRoute {
  path: string;
  allowMethods: AllowMethod[];
  // pipes: {
  //     list: IPipeElement[];
  //     merge: boolean;
  // };
  funcParams: Array<{ key: string, type: any, isQuery: boolean }>;
  form: {
    parser: FormType;
    index: number;
    options?: BaseFormOptions;
  };
}

export interface BonbonsRouterConfig {
  routes: { [methodName: string]: IRoute };
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

export type IController = IConstructor<IBonbonsController>;

export interface IBonbonsMethodResult {
  toString(configs: ConfigsCollection): string;
}

export type UnionBonbonsResult = IBonbonsMethodResult | Async<IBonbonsMethodResult> | string;