import { BonbonsServerConfig } from "../metadata/core";
import { IConstructor } from "../metadata/base";
import { BonbonsServer, BaseApp } from "../core/server";

/**
 * Create a Bonbons.koa App server
 * ---
 * @description
 * @author Big Mogician
 * @export
 * @param {BonbonsServerConfig} config
 * @returns
 */
export function BonbonsApp(config: BonbonsServerConfig) {
  return function <T extends BaseApp>(target: IConstructor<T>) {
    const theStartup = target.prototype.start;
    target.prototype._configs = config;
    target.prototype.start = function () {
      new BonbonsServer(config).start();
      theStartup && theStartup.bind(this)();
    };
  };
}

/** Create a Bonbons.koa App server */
export const BKoa = BonbonsApp;
