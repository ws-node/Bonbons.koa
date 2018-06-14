import { KOAContext, KOARequest, KOAResponse } from "../metadata/source";
import { IBonbonsContext } from "../metadata/base";

export class Context implements IBonbonsContext {

  public get request(): KOARequest { return this.source.request; }
  public get response(): KOAResponse { return this.source.response; }

  constructor(private source: KOAContext) { }

}