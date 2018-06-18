/// <reference types="node" />
/// <reference types="koa" />
/// <reference types="koa-router" />
import { KOAContext } from "../metadata/source";
import { ConfigsCollection } from "../metadata/di";
export interface ErrorHandler {
    (configs: ConfigsCollection): (ctx: any, next: any) => Promise<any>;
}
export interface ErrorPageTemplate {
    (configs: ConfigsCollection): {
        render: (error: any) => Promise<string | Buffer>;
    };
}
export declare const ERROR_HANDLER: import("../metadata/di").BonbonsToken<ErrorHandler>;
export declare const ERROR_PAGE_TEMPLATE: import("../metadata/di").BonbonsToken<ErrorPageTemplate>;
export declare function defaultErrorHandler(configs: ConfigsCollection): (ctx: KOAContext, next: () => Promise<any>) => Promise<void>;
export declare function defaultErrorPageTemplate(configs: ConfigsCollection): {
    render: (error: any) => Promise<any>;
};
