import { IConstructor } from "../metadata/base";

export function Pipe() {
  return function <T>(target: IConstructor<T>) {
    target.prototype.__valid = true;
  };
}
