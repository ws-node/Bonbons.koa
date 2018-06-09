import { BonbonsConfigCollection, BonbonsDIContainer, BonbonsTokenGenerator } from "../metadata/di";
import { JsonResultOptions, IStaticTypedResolver, ErrorPageTemplate, StringResultOptions } from "../metadata/base";
export declare const createToken: BonbonsTokenGenerator;
export declare const CONFIG_COLLECTION: import("../metadata/di").BonbonsToken<BonbonsConfigCollection>;
export declare const DI_CONTAINER: import("../metadata/di").BonbonsToken<BonbonsDIContainer<import("../metadata/di").BonbonsDIEntry>>;
export declare const STATIC_TYPED_RESOLVER: import("../metadata/di").BonbonsToken<IStaticTypedResolver>;
export declare const JSON_RESULT_OPTIONS: import("../metadata/di").BonbonsToken<JsonResultOptions>;
export declare const STRING_RESULT_OPTIONS: import("../metadata/di").BonbonsToken<StringResultOptions>;
export declare const ERROR_PAGE_TEMPLATE: import("../metadata/di").BonbonsToken<ErrorPageTemplate>;
