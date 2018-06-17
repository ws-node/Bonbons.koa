import { IPipe, PipeOnInit, PipeParamType, IPipeFactory, PipeMapParams, PipeArrayParams, IPipeBundle } from "../metadata/pipe";
import { Async, IBonbonsContext, IConstructor } from "../metadata/base";
import { Reflection } from "../di/reflect";
import { clone } from "./../utils/helpers";

export { PipeOnInit };

/**
 * Base BONBONS Pipe
 * ---
 * * you should always extends this Class
 * * contains input params and request/response context support
 *
 * @description
 * @author Big Mogician
 * @export
 * @abstract
 * @class PipeMiddleware
 * @implements {IPipe<T>}
 * @template T
 */
export abstract class PipeMiddleware<T = any> implements IPipe<T> {
  public readonly params!: T;
  constructor() { }
  public readonly context!: IBonbonsContext;
  abstract process(next?: () => Async<any>): Async<void> | void;
}

/**
 * Bonbons Pipe Factory Generator
 * ---
 * use this generator to create factory and params bundle.
 */
export const PipeFactory = {
  /**
   * Create a generic pipe
   * -----
   * Create a bundle with pipe which input params is a typed-object.
   * @description
   * @author Big Mogician
   * @template T
   * @param {IConstructor<IPipe<T>>} type
   * @returns
   */
  generic<T extends PipeMapParams>(type: IConstructor<IPipe<T>>) { return createGenericPipeFactory(type); },
  /**
   * Create a array pipe
   * -----
   * Create a bundle with pipe which input params is an array.
   * @description
   * @author Big Mogician
   * @template T
   * @param {IConstructor<IPipe<T>>} type
   * @returns
   */
  fromArray<T extends PipeArrayParams>(type: IConstructor<IPipe<T>>) { return createArrayPipeFactory(type); },
  /**
   *    * Create a common pipe
   * -----
   * Create a bundle with pipe which input params is an object.
   * @description
   * @author Big Mogician
   * @template T
   * @param {IConstructor<IPipe<T>>} type
   * @returns
   */
  fromMap<T = any>(type: IConstructor<IPipe<T>>) { return createPipeFactory(type); }
};

function createGenericPipeFactory<T extends PipeMapParams>(target: IConstructor<IPipe<T>>): (params: T) => IPipeBundle<T> {
  return resolvePipe(target);
}

function createArrayPipeFactory<T extends PipeArrayParams>(target: IConstructor<IPipe<T>>) {
  return resolvePipe(target);
}

function createPipeFactory<T = any>(target: IConstructor<IPipe<T>>): (params: T) => IPipeBundle<T> {
  return resolvePipe(target);
}

function resolvePipe<T extends PipeArrayParams>(target: IConstructor<IPipe<T>>): (params: T) => IPipeBundle<T>;
function resolvePipe<T extends PipeMapParams>(target: IConstructor<IPipe<T>>): (params: T) => IPipeBundle<T>;
function resolvePipe(target: IConstructor<IPipe<any>>) {
  return (params) => ({ params, target });
}

export function createPipeInstance<T extends IPipe>(type: IPipeBundle<T>, depts: any[], $$ctx?: IBonbonsContext) {
  const { target, params } = type;
  const { keyMatch } = Reflection.GetPipeMetadata(target.prototype);
  const initFn = target.prototype.pipeOnInit;
  const instance = new target(...depts);
  instance.context = <IBonbonsContext>$$ctx;
  const paramsCopy = clone(params);
  Object.defineProperty(instance, "params", { enumerable: true, configurable: false, get: () => paramsCopy });
  (<[(string | number), string][]>keyMatch).forEach(([old, newKey]) => instance[newKey] = (<any>params)[old]);
  initFn && (initFn.bind(instance))();
  return instance;
}