import { IController, IBonbonsControllerMetadata, IControllerConfig, IBonbonsController } from "../metadata/controller";
import { Reflection } from "../di/reflect";
import { IConstructor } from "../metadata/base";

type ControllerDecorator = <T>(target: IConstructor<T>) => void;

/**
 * Define a controller with config. the config is used for route prefix and other features.
 * @param {string} config prefix string
 */
export function Controller(config?: string): ControllerDecorator;
/**
 * Define a controller with config. the config is used for route prefix and other features.
 * @param {string} config an object contains some editable params
 */
export function Controller(config?: IControllerConfig): ControllerDecorator;
export function Controller(config?: string | IControllerConfig): ControllerDecorator {
  return function <T>(target: IConstructor<T>) {
    const prototype: IBonbonsController = target.prototype;
    prototype.getConfig = () => Reflection.GetControllerMetadata(prototype);
    prototype.__valid = true;
    const reflect = Reflection.GetControllerMetadata(prototype);
    Reflection.SetControllerMetadata(prototype, registerCompelete(registerPrefix(reflect, config)));
    return target;
  };
}

/**
 * Check and edit absolute route path, merge middlewares and all work done.
 * @param ctrl controller prototype
 */
function registerCompelete(meta: IBonbonsControllerMetadata) {
  // console.log(JSON.stringify(meta.router.routes, null, "\t"));
  Object.keys(meta.router.routes).map(key => meta.router.routes[key]).forEach(route => {
    if (route.middlewares && route.middlewares.merge) {
      route.middlewares.list = [...meta.middlewares, ...route.middlewares.list];
    } else if (!route.middlewares) {
      route.middlewares = { list: [...meta.middlewares], merge: false };
    }
    if (route.pipes && route.pipes.merge) {
      route.pipes.list = [...meta.pipes, ...route.pipes.list];
    } else if (!route.pipes) {
      route.pipes = { list: [...meta.pipes], merge: false };
    }
  });
  return meta;
}

/**
 * Config controller prefix
 * @description
 * @author Big Mogician
 * @param {IControllerMetadata} meta
 * @param {(string | IControllerConfig)} [config]
 * @returns
 */
function registerPrefix(meta: IBonbonsControllerMetadata, config?: string | IControllerConfig) {
  const prefix = typeof config === "string" ? config : config && config.prefix;
  meta.router.prefix = "/" + (prefix || "");
  return meta;
}