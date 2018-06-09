import { IBonbonsControllerMetadata } from "../metadata/controller";
export declare function getDependencies(target: any): any[];
export declare class ReflectionConstructor {
    GetInjections(target: any): any[];
    GetControllerMetadata(target: any): IBonbonsControllerMetadata;
    SetControllerMetadata(target: any, meta: IBonbonsControllerMetadata): void;
}
export declare const Reflection: ReflectionConstructor;
