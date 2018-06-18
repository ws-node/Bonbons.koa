import { InjectDIToken } from "../metadata/injectable";
import { ReadonlyDIContainer } from "../metadata/di";

export abstract class InjectService implements ReadonlyDIContainer {
  abstract get<T>(token: InjectDIToken): T;
}
