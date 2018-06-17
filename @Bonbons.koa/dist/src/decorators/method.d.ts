/// <reference types="koa" />
import { AllowMethod, IBonbonsController, IBonbonsControllerMetadata, IRoute } from "../metadata/controller";
import { BonbonsPipeEntry } from "../metadata/pipe";
import { IConstructor } from "../metadata/base";
import { KOAMiddleware } from "../metadata/source";
export declare function initRoutes(reflect: IBonbonsControllerMetadata, propertyKey: string): IRoute;
export declare function reroute(reflect: IBonbonsControllerMetadata, propertyKey: string, payload: any): IBonbonsControllerMetadata;
/**
 *  Define a route method for the controller. default allowed method is 'GET'.
 * @description
 * @author Big Mogician
 * @export
 * @param {...AllowMethod[]} allowMethods
 * @returns
 */
export declare function Method(...allowMethods: AllowMethod[]): <T extends IBonbonsController>(target: any, propertyKey: string) => void;
export declare const GET: <T extends IBonbonsController>(target: any, propertyKey: string) => void;
export declare const POST: <T extends IBonbonsController>(target: any, propertyKey: string) => void;
export declare const PUT: <T extends IBonbonsController>(target: any, propertyKey: string) => void;
export declare const DELETE: <T extends IBonbonsController>(target: any, propertyKey: string) => void;
export declare const PATCH: <T extends IBonbonsController>(target: any, propertyKey: string) => void;
export declare const OPTIONS: <T extends IBonbonsController>(target: any, propertyKey: string) => void;
export declare const HEAD: <T extends IBonbonsController>(target: any, propertyKey: string) => void;
/**
 * Define a method path for a route. absolute or relative path is supported. <nesessary>
 * Declare query params name to use static-typed variable.
 * @description
 * @author Big Mogician
 * @export
 * @param {string} path
 * @returns
 */
export declare function Route(path: string): <T extends IBonbonsController>(target: any, propertyKey: string) => void;
declare type PipesMethodDecorator = <T>(target: T, propertyKey: string) => void;
declare type PipesDecorator = <T>(target: IConstructor<T> | T, propertyKey?: string) => void;
export declare function Pipes(pipes: BonbonsPipeEntry[]): PipesDecorator;
export declare function Pipes(pipes: BonbonsPipeEntry[], merge: boolean): PipesMethodDecorator;
export declare function Middlewares(middlewares: KOAMiddleware[]): PipesDecorator;
export declare function Middlewares(middlewares: KOAMiddleware[], merge: boolean): PipesMethodDecorator;
export {};
