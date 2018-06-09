"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reflect_1 = require("../di/reflect");
const reflect_2 = require("../metadata/reflect");
function initRoutes(reflect, propertyKey) {
    return reflect.router.routes[propertyKey] || (reflect.router.routes[propertyKey] = {});
}
exports.initRoutes = initRoutes;
function reroute(reflect, propertyKey, payload) {
    Object.assign(initRoutes(reflect, propertyKey), payload);
    return reflect;
}
exports.reroute = reroute;
/**
 * Define a route method for the controller. default allowed method is 'GET'.
 * @param {string[]} allowMethods
 */
function Method(...allowMethods) {
    return function (target, propertyKey) {
        const reflect = reflect_1.Reflection.GetControllerMetadata(target);
        reflect_1.Reflection.SetControllerMetadata(target, reroute(reflect, propertyKey, { allowMethods }));
    };
}
exports.Method = Method;
/**
 * Define a method path for a route. absolute or relative path is supported. <nesessary>
 * Declare query params name to use static-typed variable.
 * @param {string} path
 * @param {string[]} query provide query params names to open static-injection for query params through method
 */
function Route(path) {
    return function (target, propertyKey) {
        const querys = Reflect.getMetadata(reflect_2.PARAMS_META_KEY, target, propertyKey);
        const reflect = reflect_1.Reflection.GetControllerMetadata(target);
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
        reflect_1.Reflection.SetControllerMetadata(target, reflect);
    };
}
exports.Route = Route;
//# sourceMappingURL=method.js.map