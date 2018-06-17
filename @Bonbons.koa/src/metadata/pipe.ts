import { Async, IConstructor, IBonbonsContext } from "./base";

export type PipeParamType = string | number | boolean;
export type PipeArrayParams = Array<PipeParamType>;
export interface PipeMapParams {
  "@params"?: PipeMapParams;
  [key: string]: any;
}

export interface IPipe<T = any> {
  params: T;
  context: IBonbonsContext;
  process(next?: () => Async<any>): Async<void> | void;
}

export interface IBonbonsPipeMetadata {
  keyMatch?: Array<[(string | number), string]>;
}

export interface PipeOnInit {
  pipeOnInit(): void;
}

export interface IPipeFactory<T> {
  (): IConstructor<IPipe<T>>;
}

export interface IPipeBundle<T> {
  params: T;
  target: IConstructor<IPipe<T>>;
}

export type BonbonsPipeEntry<T = any> = IPipeBundle<T> | IConstructor<IPipe<any>>;
