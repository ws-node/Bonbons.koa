"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = (key) => ({ key: Symbol(`BONBONS-KOA2-TOKEN:${key}`) });
exports.CONFIG_COLLECTION = exports.createToken("CONFIG_COLLECTION");
exports.DI_CONTAINER = exports.createToken("DI_CONTAINER");
exports.STATIC_TYPED_RESOLVER = exports.createToken("STATIC_TYPED_RESOLVER");
exports.JSON_RESULT_OPTIONS = exports.createToken("JSON_RESULT_OPTIONS");
exports.STRING_RESULT_OPTIONS = exports.createToken("STRING_RESULT_OPTIONS");
exports.ERROR_PAGE_TEMPLATE = exports.createToken("ERROR_PAGE_TEMPLATE");
//# sourceMappingURL=tokens.js.map