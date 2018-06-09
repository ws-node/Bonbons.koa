import { createToken } from "./container";
import { BonbonsConfigCollection, BonbonsDIContainer } from "../metadata/di";

export const CONFIG_COLLECTION = createToken<BonbonsConfigCollection>("CONFIG_COLLECTION");
export const DI_CONTAINER = createToken<BonbonsDIContainer>("DI_CONTAINER");
