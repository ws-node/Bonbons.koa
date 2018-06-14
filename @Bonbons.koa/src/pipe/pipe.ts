import { IPipe, PipeOnInit, PipeParamType } from "../metadata/pipe";
import { Async, IBonbonsContext, IConstructor } from "../metadata/base";
import { Reflection } from "../di/reflect";
import { Pipe } from "../decorators";

export { PipeOnInit };

export abstract class PipeMiddleware implements IPipe {
  constructor() { }
  public context!: IBonbonsContext;
  abstract process(): void | Async<void>;
}

export function createPipe<T extends IPipe>(target: IConstructor<T>) {
  return function (params: PipeParamType[] | { [key: string]: PipeParamType }) {
    if (params instanceof Array) return Pipe(...params)(target);
    return Pipe(params)(target);
  };
}

export function createPipeInstance<T extends IPipe>(type: IConstructor<T>, depts: any[]) {
  const { params, keyMatch } = Reflection.GetPipeMetadata(type.prototype);
  const initFn = type.prototype.pipeOnInit || (() => { });
  type.prototype.pipeOnInit = function () {
    (<[(string | number), string][]>keyMatch).forEach(([old, newKey]) => this[newKey] = (<any>params)[old.toString()]);
    initFn.bind(this)();
  };
  const instance = new type(...depts);
  (<any>instance).pipeOnInit();
}