import { PARAMS_META_KEY, CTOR_META_KEY } from "../metadata/reflect";
import { IBonbonsControllerMetadata } from "../metadata/controller";

export function getDependencies(target): any[] {
  return Reflect.getMetadata(PARAMS_META_KEY, target) || [];
}

export class ReflectionConstructor {

  public GetInjections(target: any) {
    return getDependencies(target);
  }

  public GetControllerMetadata(target: any): IBonbonsControllerMetadata {
    return Reflect.getMetadata(CTOR_META_KEY, target) || { router: { prefix: "/", routes: {} }, pipes: [] };
  }

  public SetControllerMetadata(target: any, meta: IBonbonsControllerMetadata) {
    Reflect.defineMetadata(CTOR_META_KEY, meta, target);
  }

}

export const Reflection = new ReflectionConstructor();
