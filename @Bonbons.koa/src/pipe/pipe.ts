import { IPipe, PipeOnInit, PipeParamType, IPipeFactory } from "../metadata/pipe";
import { Async, IBonbonsContext, IConstructor } from "../metadata/base";
import { Reflection } from "../di/reflect";

export { PipeOnInit };

export abstract class PipeMiddleware<T = {}> implements IPipe<T> {
  constructor() { }
  public readonly context!: IBonbonsContext;
  abstract process(next?: () => Async<any>): Async<void> | void;
}

export function createPipeFactory<T extends IPipe>(target: IConstructor<T>): IPipeFactory<T> {
  return function (params: PipeParamType[] | { [key: string]: PipeParamType }) {
    let maps = {};
    if (params instanceof Array) {
      params.forEach((i, index) => maps[index.toString()] = i);
    } else {
      delete params["@params"];
      maps = params;
    }
    const reflect = Reflection.GetPipeMetadata(target.prototype);
    Reflection.SetPipeMetadata(target.prototype, { ...reflect, params: maps });
    return target;
  };
}

export function createPipeInstance<T extends IPipe>(type: IConstructor<T>, depts: any[], $$ctx?: IBonbonsContext) {
  const { params, keyMatch } = Reflection.GetPipeMetadata(type.prototype);
  const initFn = type.prototype.pipeOnInit || (() => { });
  type.prototype.pipeOnInit = function () {
    (<[(string | number), string][]>keyMatch).forEach(([old, newKey]) => {
      if (old === "@params") {
        this[newKey] = params;
      } else {
        this[newKey] = (<any>params)[old.toString()];
      }
    });
    initFn.bind(this)();
  };
  const instance = new type(...depts);
  instance.context = <IBonbonsContext>$$ctx;
  (<any>instance).pipeOnInit();
  return instance;
}