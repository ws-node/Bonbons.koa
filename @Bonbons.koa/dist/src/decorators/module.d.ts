import { BonbonsServerConfig } from "../metadata/core";
import { IConstructor } from "../metadata/base";
import { BaseApp } from "../core/server";
export declare function BonbonsApp(config: BonbonsServerConfig): <T extends BaseApp>(target: IConstructor<T>) => void;
