export interface JsonResultResolver {
    (propertyKey: string): string;
}
export interface JsonResultOptions {
    /** Whether to enable indentation */
    indentation?: boolean;
    /** Handle JSON keys ,return a new key to replace old one for each */
    resolver?: JsonResultResolver;
    /** Whether to enable static type processing according to a serialization contract */
    staticType?: boolean;
}
export interface StringResultOptions {
    encoding?: string;
    decoding?: string;
}
export interface BaseFormOptions {
    encoding?: string;
    strict?: boolean;
    type?: string;
    onerror?(error: any, ctx: any): any;
    extends?: string[];
}
export interface JsonFormOptions extends BaseFormOptions {
    jsonLimit?: number | string;
}
export interface URLFormOptions extends BaseFormOptions {
    formLimit?: number | string;
}
export interface TextFormOptions extends BaseFormOptions {
    textLimit?: number | string;
}
