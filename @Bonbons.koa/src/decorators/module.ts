import { BonbonsServerConfig } from "../metadata/core";
import { IConstructor } from "../metadata/base";
import { BonbonsServer, BaseApp } from "../core/server";

export function BonbonsApp(config: BonbonsServerConfig) {
  return function <T extends BaseApp>(target: IConstructor<T>) {
    const theStartup = target.prototype.start;
    target.prototype._configs = config;
    target.prototype.start = function () {
      new BonbonsServer(config).start();
      theStartup.bind(this)();
    };
  };
}