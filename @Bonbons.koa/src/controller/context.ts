import { KOAContext, KOARequest, KOAResponse } from "../metadata/source";

export class Context {

  public get request(): KOARequest { return this.source.request; }
  public get response(): KOAResponse { return this.source.response; }

  constructor(private source: KOAContext) { }

}