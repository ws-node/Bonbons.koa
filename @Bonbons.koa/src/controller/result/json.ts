import { BonbonsConfigCollection as ConfigCollection } from "../../metadata/di";
import { IStaticTypedResolver, JsonResultOptions, JsonResultResolver } from "../../metadata/base";
import { JSON_RESULT_OPTIONS, STATIC_TYPED_RESOLVER } from "../../di";
import { Formater, TypeCheck } from "../../utils";
import { IBonbonsMethodResult } from "../../metadata/controller";

/**
 * Represent the json to send by response.
 */
export class JsonResult implements IBonbonsMethodResult {

  private options: JsonResultOptions;

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

export class JsonResultResolvers {

  public static decamelize(key: string) {
    return Formater.DeCamelCase(key, "_");
  }

  public static camel(key: string) {
    return Formater.ToCamelCase(key);
  }

}

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