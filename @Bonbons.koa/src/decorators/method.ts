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
 *  Define a route method for the controller. default allowed method is 'GET'.
 * @description
 * @author Big Mogician
 * @export
 * @param {...AllowMethod[]} allowMethods
 * @returns
 */
export function Method(...allowMethods: AllowMethod[]) {
  return createMethodDecorator(...allowMethods);
}

export const GET = createMethodDecorator("GET");
export const POST = createMethodDecorator("POST");
export const PUT = createMethodDecorator("PUT");
export const DELETE = createMethodDecorator("DELETE");
export const PATCH = createMethodDecorator("PATCH");
export const OPTIONS = createMethodDecorator("OPTIONS");
export const HEAD = createMethodDecorator("HEAD");

function createMethodDecorator(...allowMethods: AllowMethod[]) {
  return function <T extends IBonbonsController>(target: any, propertyKey: string) {
    const reflect = Reflection.GetControllerMetadata((<T>target));
    Reflection.SetControllerMetadata(target, reroute(reflect, propertyKey, { allowMethods }));
  };
}
/**
 * Define a method path for a route. absolute or relative path is supported. <nesessary>
 * Declare query params name to use static-typed variable.
 * @description
 * @author Big Mogician
 * @export
 * @param {string} path
 * @returns
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