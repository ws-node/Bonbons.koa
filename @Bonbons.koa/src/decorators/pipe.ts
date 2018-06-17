import { IConstructor } from "../metadata/base";
import { Reflection } from "../di/reflect";
import { PipeParamType, IPipe, IPipeBundle } from "../metadata/pipe";
import { PipeFactory } from "./../pipe";

type PipeDecorator = <T>(target: IConstructor<IPipe<T>>) => IPipeBundle<T>;
type PipeParamDecorator = <T extends IPipe<any>>(target: T, propertyKey: string, descriptor?: any) => void;

export function Pipe() {
  return function <T>(target: IConstructor<T>) {
    target.prototype.__valid = true;
  };
}

export function Param(): PipeParamDecorator;
export function Param(name: string): PipeParamDecorator;
export function Param(index: number): PipeParamDecorator;
export function Param(arg?: number | string) {
  return function <T>(target: T, propertyKey: string, descriptor?: any) {
    const reflect = Reflection.GetPipeMetadata(target);
    const { keyMatch } = reflect;
    const list = keyMatch || [];
    list.push([!arg ? propertyKey : (typeof (arg) === "number" ? arg - 1 : arg), propertyKey]);
    Reflection.SetPipeMetadata(target, { ...reflect, keyMatch: list });
  };
}
