import * as iconv from "iconv-lite";
import { StringResultOptions } from "../../metadata/options";
import { IBonbonsMethodResult as SyncResult } from "../../metadata/controller";
import { BonbonsConfigCollection as ConfigCollection } from "../../metadata/di";
import { STRING_RESULT_OPTIONS } from "../../di";

export class StringResult implements SyncResult {

  private options: StringResultOptions;

  constructor(private value: string, options?: StringResultOptions) {
    this.options = options || {};
  }

  public toString(configs: ConfigCollection): string {
    const options: StringResultOptions = Object.assign(configs.get(STRING_RESULT_OPTIONS) || {}, this.options || {});
    const from = (options.encoding || "UTF8").toLowerCase();
    const to = (options.decoding || "UTF8").toLowerCase();
    return iconv.decode(iconv.encode(this.value, from), to);
  }

}