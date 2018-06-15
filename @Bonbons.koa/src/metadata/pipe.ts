import { Async, IConstructor, IBonbonsContext } from "./base";

export type PipeParamType = string | number | boolean;

export interface IPipe<T = {}> {
  context: IBonbonsContext;
  process(): Async<void> | void;
}

export interface IBonbonsPipeMetadata {
  params?: { [key: string]: any };
  keyMatch?: Array<[(string | number), string]>;
}

export interface PipeOnInit {
  pipeOnInit(): void;
}
