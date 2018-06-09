import "reflect-metadata";
import { IInjectable } from "../metadata/injectable";

export function Injectable(config?: any) {
  return function (target: IInjectable) {
    // Do Nothing, only enable the reflect metadata
    return target;
  };
}