import { IConstructor } from "../metadata/base";
import { Reflection } from "../di/reflect";
import { PipeParamType } from "../metadata/pipe";

type PipeDecorator = <T>(target: IConstructor<T>) => IConstructor<T>;
type PipeParamDecorator = <T>(target: T, propertyKey: string, descriptor?: any) => void;

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
  return function <T>(target: IConstructor<T>) {
    const reflect = Reflection.GetPipeMetadata(target.prototype);
    Reflection.SetPipeMetadata(target.prototype, { ...reflect, params: maps });
    return target;
  };
}

export function PipeArg(): PipeParamDecorator;
export function PipeArg(name: string): PipeParamDecorator;
export function PipeArg(index: number): PipeParamDecorator;
export function PipeArg(arg?: number | string): PipeParamDecorator {
  return function <T>(target: T, propertyKey: string, descriptor?: any) {
    const reflect = Reflection.GetPipeMetadata(target);
    const { keyMatch } = reflect;
    const list = keyMatch || [];
    list.push([!arg ? propertyKey : (typeof (arg) === "number" ? arg - 1 : arg), propertyKey]);
    console.log(list);
    Reflection.SetPipeMetadata(target, { ...reflect, keyMatch: list });
  };
}