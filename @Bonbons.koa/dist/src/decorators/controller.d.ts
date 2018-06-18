import { IControllerConfig } from "../metadata/controller";
import { IConstructor } from "../metadata/base";
declare type ControllerDecorator = <T>(target: IConstructor<T>) => void;
/**
 * Define a controller with config. the config is used for route prefix and other features.
 * @param {string} config prefix string
 */
export declare function Controller(config?: string): ControllerDecorator;
/**
 * Define a controller with config. the config is used for route prefix and other features.
 * @param {string} config an object contains some editable params
 */
export declare function Controller(config?: IControllerConfig): ControllerDecorator;
export {};
