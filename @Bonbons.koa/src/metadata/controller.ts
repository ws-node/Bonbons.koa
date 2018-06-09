import { IConstructor } from "./base";

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
  // form: {
  //     parser: FormDcsType;
  //     index: number;
  //     options?: any;
  //     type?: string;
  // };
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
  getConfig?(): IBonbonsControllerMetadata;
}

export type IController = IConstructor<IBonbonsController>;

