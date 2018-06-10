import { BonbonsConfigCollection, BonbonsDIContainer, BonbonsTokenGenerator } from "../metadata/di";
import { IStaticTypedResolver } from "../metadata/base";
import {
  JsonResultOptions,
  StringResultOptions,
  ErrorPageTemplate,
  JsonFormOptions,
  URLFormOptions,
  TextFormOptions
} from "../metadata/options";
import { KOABodyParseOptions } from "../metadata/source";

export const createToken: BonbonsTokenGenerator = (key: string) => ({ key: Symbol(`BONBONS-KOA2-TOKEN:${key}`) });

export const CONFIG_COLLECTION = createToken<BonbonsConfigCollection>("CONFIG_COLLECTION");
export const DI_CONTAINER = createToken<BonbonsDIContainer>("DI_CONTAINER");
export const STATIC_TYPED_RESOLVER = createToken<IStaticTypedResolver>("STATIC_TYPED_RESOLVER");
export const JSON_RESULT_OPTIONS = createToken<JsonResultOptions>("JSON_RESULT_OPTIONS");
export const STRING_RESULT_OPTIONS = createToken<StringResultOptions>("STRING_RESULT_OPTIONS");
export const ERROR_PAGE_TEMPLATE = createToken<ErrorPageTemplate>("ERROR_PAGE_TEMPLATE");
export const BODY_PARSE_OPTIONS = createToken<KOABodyParseOptions>("BODY_PARSE_OPTIONS");
export const JSON_FORM_OPTIONS = createToken<JsonFormOptions>("JSON_FORM_OPTIONS");
export const URL_FORM_OPTIONS = createToken<URLFormOptions>("URL_FORM_OPTIONS");
export const TEXT_FORM_OPTIONS = createToken<TextFormOptions>("TEXT_FORM_OPTIONS");