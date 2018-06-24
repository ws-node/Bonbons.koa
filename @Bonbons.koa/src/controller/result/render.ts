import * as iconv from "iconv-lite";
import { IMethodResult } from "../../metadata/controller";
import { BonbonsConfigCollection as ConfigCollection } from "../../metadata/di";
import { DI_CONTAINER } from "../../di";
import { RenderService } from "../../plugins/render";

export class RenderResult implements IMethodResult {

  public type = "text/html";

  constructor(private name: string, private data: string) { }

  public toString(configs: ConfigCollection) {
    const r = configs.get(DI_CONTAINER).get(RenderService);
    return <Promise<string>>r.render(this.name, this.data);
  }

}