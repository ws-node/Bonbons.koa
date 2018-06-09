import { Reflection } from "../di/reflect";
export function Controller(config) {
    return function (target) {
        const prototype = target.prototype;
        prototype.getConfig = () => Reflection.GetControllerMetadata(prototype);
        prototype.__valid = true;
        const reflect = Reflection.GetControllerMetadata(prototype);
        Reflection.SetControllerMetadata(prototype, registerCompelete(registerPrefix(reflect, config)));
    };
}
/**
 * Check and edit absolute route path, merge middlewares and all work done.
 * @param ctrl controller prototype
 */
function registerCompelete(meta) {
    // console.log(JSON.stringify(meta.router.routes, null, "\t"));
    Object.keys(meta.router.routes).map(key => meta.router.routes[key]).forEach(route => {
        // if (!(route.path || "").startsWith("/")) {
        //   route.path = meta.router.prefix + route.path;
        // }
        // if (route.middleware && route.middleware.merge) {
        //     route.middleware.list = [...meta.middlewares, ...route.middleware.list];
        // } else if (!route.middleware) {
        //     route.middleware = { list: [...meta.middlewares], merge: false };
        // }
        // if (route.pipes && route.pipes.merge) {
        //     route.pipes.list = [...meta.pipes, ...route.pipes.list];
        // } else if (!route.pipes) {
        //     route.pipes = { list: [...meta.pipes], merge: false };
        // }
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
function registerPrefix(meta, config) {
    const prefix = typeof config === "string" ? config : config && config.prefix;
    meta.router.prefix = "/" + (prefix || "");
    return meta;
}
//# sourceMappingURL=controller.js.map