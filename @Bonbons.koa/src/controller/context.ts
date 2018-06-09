import { KOAContext } from "../metadata/source";

export class Context {

  public get request() { return this.source.request; }
  public get response() { return this.source.response; }

  constructor(private source: KOAContext) { }

}