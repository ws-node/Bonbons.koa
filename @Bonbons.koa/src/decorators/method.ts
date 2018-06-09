import { AllowMethod, IBonbonsController, IBonbonsControllerMetadata, IRoute } from "../metadata/controller";
import { Reflection } from "../di/reflect";
import { PARAMS_META_KEY } from "../metadata/reflect";

export function initRoutes(reflect: IBonbonsControllerMetadata, propertyKey: string): IRoute {
  return reflect.router.routes[propertyKey] || (reflect.router.routes[propertyKey] = <any>{});
}

export function reroute(reflect: IBonbonsControllerMetadata, propertyKey: string, payload: any) {
  Object.assign(initRoutes(reflect, propertyKey), payload);
  return reflect;
}

/**
 * Define a route method for the controller. default allowed method is 'GET'.
 * @param {string[]} allowMethods
 */
export function Method(...allowMethods: AllowMethod[]) {
  return function <T extends IBonbonsController>(target: any, propertyKey: string) {
    const reflect = Reflection.GetControllerMetadata((<T>target));
    Reflection.SetControllerMetadata(target, reroute(reflect, propertyKey, { allowMethods }));
  };
}

/**
 * Define a method path for a route. absolute or relative path is supported. <nesessary>
 * Declare query params name to use static-typed variable.
 * @param {string} path
 * @param {string[]} query provide query params names to open static-injection for query params through method
 */
export function Route(path: string) {
  return function <T extends IBonbonsController>(target: any, propertyKey: string) {
    const querys: any[] = Reflect.getMetadata(PARAMS_META_KEY, target, propertyKey);
    const reflect = Reflection.GetControllerMetadata(target);
    reroute(reflect, propertyKey, { path: path.split("?")[0], funcParams: [] });
    const route = reflect.router.routes[propertyKey];
    let pcount = 0;
    path.replace(/:([^\/\?&]+)(\?|\/|$)/g, (_, $1) => {
      const type = querys[pcount];
      route.funcParams.push({
        key: $1,
        type: (type === Object || type === String) ? null : type,
        isQuery: false
      });
      pcount += 1;
      return path;
    });
    path.replace(/{([^&\/\?{}]+)}/g, (_, $1) => {
      const type = querys[pcount];
      route.funcParams.push({
        key: $1,
        type: (type === Object || type === String) ? null : type,
        isQuery: true
      });
      pcount += 1;
      return path;
    });
    Reflection.SetControllerMetadata(target, reflect);
  };
}