import { DIContainer } from "./container";
import { BonbonsConfigCollection } from "../metadata/di";

export class ConfigCollection extends DIContainer implements BonbonsConfigCollection {

  toArray(): any[] {
    throw new Error("Method not implemented.");
  }

}
