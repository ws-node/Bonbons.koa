import { Async, IConstructor, IBonbonsContext } from "./base";

export type PipeParamType = string | number | boolean;
export type PipeArrayParams = Array<PipeParamType>;
export interface PipeMapParams {
  "@params"?: PipeMapParams;
  [key: string]: any;
}

/**
 * Bonbons pipe struct
 * ---
 * @description
 * @author Big Mogician
 * @export
 * @interface IPipe
 * @template T
 */
export interface IPipe<T = any> {
  params: T;
  context: IBonbonsContext;
  process(next?: () => Async<any>): Async<void> | void;
}

export interface IBonbonsPipeMetadata {
  keyMatch?: Array<[(string | number), string]>;
}

/**
 * Pipe init lifecycle hook
 * ---
 * implement this hook to provide pipe initilalization ability.
 *
 * @description
 * @author Big Mogician
 * @export
 * @interface PipeOnInit
 */
export interface PipeOnInit {
  /**
   * Oninit lifycycle method
   * ---
   * this function will be called automatically when pipe init.
   *
   * @description
   * @author Big Mogician
   * @memberof PipeOnInit
   */
  pipeOnInit(): void;
}

export interface IPipeFactory<T> {
  (): IConstructor<IPipe<T>>;
}

/**
 * Pipe bundle
 * ---
 * contains the factory and params for pipe.
 *
 * @description
 * @author Big Mogician
 * @export
 * @interface IPipeBundle
 * @template T
 */
export interface IPipeBundle<T> {
  params: T;
  target: IConstructor<IPipe<T>>;
}

export type BonbonsPipeEntry<T = any> = IPipeBundle<T> | IConstructor<IPipe<any>>;
