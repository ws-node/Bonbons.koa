import "reflect-metadata";
import { IConstructor } from "../metadata/base";
export declare function Injectable(config?: any): <T>(target: IConstructor<T>) => IConstructor<T>;
