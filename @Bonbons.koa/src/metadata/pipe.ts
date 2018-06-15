import { Async, IConstructor, IBonbonsContext } from "./base";

export type PipeParamType = string | number | boolean;

export interface IPipe<T = {}> {
  context: IBonbonsContext;
  process(next?: () => Async<any>): Async<void> | void;
}

export interface IBonbonsPipeMetadata {
  params?: { [key: string]: any };
  keyMatch?: Array<[(string | number), string]>;
}

export interface PipeOnInit {
  pipeOnInit(): void;
}

export interface IPipeFactory<T> {
  (params: PipeParamType[] | { [key: string]: PipeParamType }): IConstructor<T>;
}

export type BonbonsPipeEntry<T = IPipe<any>> = IConstructor<T>;
