import { IConstructor, FormType, Async } from "./base";
import { ConfigsCollection } from "./di";
import { BaseFormOptions } from "./../metadata/options";
import { BonbonsPipeEntry } from "./pipe";
import { KOAMiddleware } from "./source";

export type AllowMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";

export interface IControllerConfig {
  prefix?: string;
}

export interface IRoute {
  path: string;
  allowMethods: AllowMethod[];
  pipes: {
    list: BonbonsPipeEntry[];
    merge: boolean;
  };
  middlewares: {
    list: KOAMiddleware[];
    merge: boolean;
  };
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
  pipes: BonbonsPipeEntry[];
  middlewares: KOAMiddleware[];
}

export interface IBonbonsController {
  __valid?: boolean;
  getConfig?(): IBonbonsControllerMetadata;
}

export type IController = IConstructor<IBonbonsController>;

export interface IMethodResult {
  toString(configs: ConfigsCollection): string;
}

export interface IBuildInTypeResult {
  toString(): string;
}

export type IBonbonsMethodResult = null | undefined | void | IMethodResult | IBuildInTypeResult;

export type UnionBonbonsResult = IBonbonsMethodResult | Async<IBonbonsMethodResult>;