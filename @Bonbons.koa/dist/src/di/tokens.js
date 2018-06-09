export const createToken = (key) => ({ key: Symbol(`BONBONS-KOA2-TOKEN:${key}`) });
export const CONFIG_COLLECTION = createToken("CONFIG_COLLECTION");
export const DI_CONTAINER = createToken("DI_CONTAINER");
export const STATIC_TYPED_RESOLVER = createToken("STATIC_TYPED_RESOLVER");
export const JSON_RESULT_OPTIONS = createToken("JSON_RESULT_OPTIONS");
export const STRING_RESULT_OPTIONS = createToken("STRING_RESULT_OPTIONS");
export const ERROR_PAGE_TEMPLATE = createToken("ERROR_PAGE_TEMPLATE");
//# sourceMappingURL=tokens.js.map