import { InjectDIToken } from "../metadata/injectable";
export declare abstract class InjectService {
    abstract get<T>(token: InjectDIToken): T;
}
