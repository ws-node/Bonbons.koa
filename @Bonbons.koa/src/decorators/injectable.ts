import "reflect-metadata";
import { IInjectable } from "../metadata/injectable";

export function Injectable(config?: any) {
  return function <T extends IInjectable>(target: any) {
    target.prototype.__valid = true;
  };
}