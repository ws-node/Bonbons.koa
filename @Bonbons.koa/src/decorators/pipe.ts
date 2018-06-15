import { IConstructor } from "../metadata/base";
import { Reflection } from "../di/reflect";
import { PipeParamType, IPipe } from "../metadata/pipe";
import { createPipeFactory } from "../pipe";

type PipeDecorator = <T extends IPipe>(target: IConstructor<T>) => IConstructor<T>;
type PipeParamDecorator = <T extends IPipe>(target: T, propertyKey: string, descriptor?: any) => void;

export function Pipe(params: { [key: string]: PipeParamType }): PipeDecorator;
export function Pipe(...params: PipeParamType[]): PipeDecorator;
export function Pipe(...args: any[]): PipeDecorator {
  let maps = {};
  if (args.length === 1) {
    const [first] = args;
    if (first instanceof Array) {
      first.forEach((i, index) => maps[index.toString()] = i);
    } else {
      maps = first;
    }
  } else {
    args.forEach((i, index) => maps[index.toString()] = i);
  }
  return <T extends IPipe>(target: IConstructor<T>) => createPipeFactory<T>(target)(maps);
}

export function Param(): PipeParamDecorator;
export function Param(name: string): PipeParamDecorator;
export function Param(index: number): PipeParamDecorator;
export function Param(arg?: number | string): PipeParamDecorator {
  return function <T>(target: T, propertyKey: string, descriptor?: any) {
    const reflect = Reflection.GetPipeMetadata(target);
    const { keyMatch } = reflect;
    const list = keyMatch || [];
    list.push([!arg ? propertyKey : (typeof (arg) === "number" ? arg - 1 : arg), propertyKey]);
    Reflection.SetPipeMetadata(target, { ...reflect, keyMatch: list });
  };
}

export function Params(): PipeParamDecorator {
  return function <T>(target: T, propertyKey: string, descriptor?: any) {
    const reflect = Reflection.GetPipeMetadata(target);
    const { keyMatch } = reflect;
    const list = keyMatch || [];
    list.push(["@params", propertyKey]);
    Reflection.SetPipeMetadata(target, { ...reflect, keyMatch: list });
  };
}