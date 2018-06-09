import { PARAMS_META_KEY, CTOR_META_KEY } from "../metadata/reflect";
export function getDependencies(target) {
    return Reflect.getMetadata(PARAMS_META_KEY, target) || [];
}
export class ReflectionConstructor {
    GetInjections(target) {
        return getDependencies(target);
    }
    GetControllerMetadata(target) {
        return Reflect.getMetadata(CTOR_META_KEY, target) || { router: { prefix: "/", routes: {} }, pipes: [] };
    }
    SetControllerMetadata(target, meta) {
        Reflect.defineMetadata(CTOR_META_KEY, meta, target);
    }
}
export const Reflection = new ReflectionConstructor();
//# sourceMappingURL=reflect.js.map