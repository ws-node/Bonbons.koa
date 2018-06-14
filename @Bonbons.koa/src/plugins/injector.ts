import { InjectDIToken } from "../metadata/injectable";

export abstract class InjectService {
  abstract get<T>(token: InjectDIToken): T;
}
