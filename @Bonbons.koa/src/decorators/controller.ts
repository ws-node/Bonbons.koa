import { IController } from "../metadata/controller";

export function Controller() {
  return function (target: IController) {
    target.prototype.getConfig = () => ({ routes: [] });
  };
}