import { BonbonsConfigCollection, BonbonsDIContainer, BonbonsTokenGenerator } from "../metadata/di";
import { JsonResultOptions, IStaticTypedResolver, ErrorPageTemplate } from "../metadata/base";

export const createToken: BonbonsTokenGenerator = (key: string) => ({ key: Symbol(`BONBONS-KOA2-TOKEN:${key}`) });

export const CONFIG_COLLECTION = createToken<BonbonsConfigCollection>("CONFIG_COLLECTION");
export const DI_CONTAINER = createToken<BonbonsDIContainer>("DI_CONTAINER");
export const STATIC_TYPED_RESOLVER = createToken<IStaticTypedResolver>("STATIC_TYPED_RESOLVER");
export const JSON_RESULT_OPTIONS = createToken<JsonResultOptions>("JSON_RESULT_OPTIONS");
export const ERROR_PAGE_TEMPLATE = createToken<ErrorPageTemplate>("ERROR_PAGE_TEMPLATE");
