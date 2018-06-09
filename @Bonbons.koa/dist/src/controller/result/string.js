import * as iconv from "iconv-lite";
import { STRING_RESULT_OPTIONS } from "../../di";
export class StringResult {
    constructor(value, options) {
        this.value = value;
        this.options = options || {};
    }
    toString(configs) {
        const options = Object.assign(configs.get(STRING_RESULT_OPTIONS) || {}, this.options || {});
        const from = (options.encoding || "UTF8").toLowerCase();
        const to = (options.decoding || "UTF8").toLowerCase();
        return iconv.decode(iconv.encode(this.value, from), to);
    }
}
//# sourceMappingURL=string.js.map