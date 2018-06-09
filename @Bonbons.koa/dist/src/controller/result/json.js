import { JSON_RESULT_OPTIONS, STATIC_TYPED_RESOLVER } from "../../di";
import { Formater, TypeCheck } from "../../utils";
/**
 * Represent the json to send by response.
 */
export class JsonResult {
    constructor(json, options) {
        this.json = json;
        this.options = options || {};
    }
    toString(configs) {
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
    decamelize(key) {
        return Formater.DeCamelCase(key, "_");
    },
    camel(key) {
        return Formater.ToCamelCase(key);
    }
};
function recursiveResolver(target, resolver, staticRv) {
    let payload = {};
    if (TypeCheck.IsObject(target)) {
        for (const propKey in target || {}) {
            payload[resolver(propKey)] = recursiveResolver((staticRv && staticRv.ToObject(target[propKey]) || target[propKey]), resolver);
        }
    }
    else if (TypeCheck.IsArray(target)) {
        payload = (target || []).map(i => recursiveResolver((staticRv && staticRv.ToObject(i) || i), resolver));
    }
    else {
        return target;
    }
    return payload;
}
//# sourceMappingURL=json.js.map