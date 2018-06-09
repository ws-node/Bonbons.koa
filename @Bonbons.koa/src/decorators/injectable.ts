import "reflect-metadata";
import { IBonbonsInjectable } from "../metadata/injectable";
import { IConstructor } from "../metadata/base";

export function Injectable(config?: any) {
  return function <T>(target: IConstructor<T>) {
    const prototype: IBonbonsInjectable = target.prototype;
    prototype.__valid = true;
  };
}