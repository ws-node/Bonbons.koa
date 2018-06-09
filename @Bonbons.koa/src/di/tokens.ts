import { BonbonsConfigCollection, BonbonsDIContainer, BonbonsTokenGenerator } from "../metadata/di";

export const createToken: BonbonsTokenGenerator = (key: string) => ({ key: Symbol(`BONBONS-KOA2-TOKEN:${key}`) });

export const CONFIG_COLLECTION = createToken<BonbonsConfigCollection>("CONFIG_COLLECTION");
export const DI_CONTAINER = createToken<BonbonsDIContainer>("DI_CONTAINER");
