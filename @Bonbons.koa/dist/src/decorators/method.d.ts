import { AllowMethod, IBonbonsController, IBonbonsControllerMetadata, IRoute } from "../metadata/controller";
export declare function initRoutes(reflect: IBonbonsControllerMetadata, propertyKey: string): IRoute;
export declare function reroute(reflect: IBonbonsControllerMetadata, propertyKey: string, payload: any): IBonbonsControllerMetadata;
/**
 * Define a route method for the controller. default allowed method is 'GET'.
 * @param {string[]} allowMethods
 */
export declare function Method(...allowMethods: AllowMethod[]): <T extends IBonbonsController>(target: any, propertyKey: string) => void;
/**
 * Define a method path for a route. absolute or relative path is supported. <nesessary>
 * Declare query params name to use static-typed variable.
 * @param {string} path
 * @param {string[]} query provide query params names to open static-injection for query params through method
 */
export declare function Route(path: string): <T extends IBonbonsController>(target: any, propertyKey: string) => void;
