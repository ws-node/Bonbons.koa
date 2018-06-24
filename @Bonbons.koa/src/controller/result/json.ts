import { BonbonsConfigCollection as ConfigCollection } from "../../metadata/di";
import { IStaticTypedResolver } from "../../metadata/base";
import { JSON_RESULT_OPTIONS, STATIC_TYPED_RESOLVER } from "../../di";
import { Formater, TypeCheck } from "../../utils";
import { IMethodResult } from "../../metadata/controller";
import { JsonResultOptions, JsonResultResolver } from "./../../metadata/options";

/**
 * Represent the json to send by response.
 */
export class JsonResult implements IMethodResult {

  private options: JsonResultOptions;

  public type = "application/json";

  constructor(private json: any, options?: JsonResultOptions) {
    this.options = options || {};
  }

  toString(configs: ConfigCollection) {
    if (configs) {
      this.options = Object.assign(configs.get(JSON_RESULT_OPTIONS) || {}, this.options);
    }
    const staticResolver = configs.get(STATIC_TYPED_RESOLVER);
    let json = (staticResolver && staticResolver.ToObject(this.json)) || this.json;
    if (this.options.resolver) {
      const resolver = this.options.resolver;
      json = recursiveResolver(this.json, resolver, staticResolver);
    }
    return JSON.stringify(json, null, this.options.indentation ? "  " : 0);
  }

}

export const JsonResultResolvers = {
  decamelize(key: string): string {
    return Formater.DeCamelCase(key, "_");
  },
  camel(key: string): string {
    return Formater.ToCamelCase(key);
  }
};

function recursiveResolver(target: any, resolver: JsonResultResolver, staticRv?: IStaticTypedResolver) {
  let payload = {};
  if (TypeCheck.IsObject(target)) {
    for (const propKey in target || {}) {
      payload[resolver(propKey)] = recursiveResolver((staticRv && staticRv.ToObject(target[propKey]) || target[propKey]), resolver);
    }
  } else if (TypeCheck.IsArray(target)) {
    payload = (<any[]>target || []).map(i => recursiveResolver((staticRv && staticRv.ToObject(i) || i), resolver));
  } else {
    return target;
  }
  return payload;
}