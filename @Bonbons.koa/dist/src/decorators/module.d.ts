import { BonbonsServerConfig } from "../metadata/core";
import { IConstructor } from "../metadata/base";
import { BaseApp } from "../core/server";
/**
 * Create a Bonbons.koa App server
 * ---
 * @description
 * @author Big Mogician
 * @export
 * @param {BonbonsServerConfig} config
 * @returns
 */
export declare function BonbonsApp(config: BonbonsServerConfig): <T extends BaseApp>(target: IConstructor<T>) => void;
/** Create a Bonbons.koa App server */
export declare const BKoa: typeof BonbonsApp;
