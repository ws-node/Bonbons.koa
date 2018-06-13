import { BonbonsServerConfig } from "../metadata/core";
import { IConstructor } from "../metadata/base";
import { BonbonsServer, BaseApp } from "../core/server";
import { GLOBAL_LOGGER, GlobalLogger } from "./../plugins/logger";
import { DI_CONTAINER } from "./../di";

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
      const app = new BonbonsServer(config);
      app.start();
      const conf = app.getConfigs();
      const di = conf.get(DI_CONTAINER);
      this.logger = di.get(GlobalLogger);
      theStartup && theStartup.bind(this)();
    };
  };
}

/** Create a Bonbons.koa App server */
export const BKoa = BonbonsApp;
