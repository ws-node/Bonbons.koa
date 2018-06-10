import { JsonFormOptions, URLFormOptions, TextFormOptions } from "../metadata/options";
/** Get form message from body when type is [application/json] */
export declare function FromBody(): any;
/** Get form message from body when default type is [application/json] */
export declare function FromBody(type: string): any;
/** Get form message from body when default type is [application/json] */
export declare function FromBody(config: JsonFormOptions): any;
/** Get form message from body when type is [application/x-www-form-urlencoded] */
export declare function FromForm(): any;
/** Get form message from body when default type is [application/x-www-form-urlencoded] */
export declare function FromForm(type: string): any;
/** Get form message from body when default type is [application/x-www-form-urlencoded] */
export declare function FromForm(config: URLFormOptions): any;
/** Get form message from body when type is [text/plain] */
export declare function TextBody(): any;
/** Get form message from body when default type is [text/plain] */
export declare function TextBody(type: string): any;
/** Get form message from body when default type is [text/plain] */
export declare function TextBody(config: TextFormOptions): any;
