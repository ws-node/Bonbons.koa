import { FormType } from "../metadata/base";
import { IBonbonsController } from "../metadata/controller";
import { Reflection } from "../di/reflect";
import { reroute } from "./method";
import { JsonFormOptions, URLFormOptions, TextFormOptions, BaseFormOptions } from "../metadata/options";

type FormDecorator = <T>(target: T, propertyKey: string, index_descriptor: number | TypedPropertyDescriptor<T>) => void;

// /** Get form message from body when type is [multiple/form-data] */
// export function FormData();
// /** Get form message from body when default type is [multiple/form-data] */
// export function FormData(type: string);
// export function FormData(type?: string) { return formDecoratorFactory(type, FormType.MultipleFormData, null); }

/** Get form message from body when type is [application/json] */
export function FromBody(): FormDecorator;
/** Get form message from body when default type is [application/json] */
export function FromBody(type: string): FormDecorator;
/** Get form message from body when default type is [application/json] */
export function FromBody(config: JsonFormOptions): FormDecorator;
export function FromBody(config?: string | JsonFormOptions): FormDecorator {
  return formDecoratorFactory(FormType.ApplicationJson, config);
}

/** Get form message from body when type is [application/x-www-form-urlencoded] */
export function FromForm(): FormDecorator;
/** Get form message from body when default type is [application/x-www-form-urlencoded] */
export function FromForm(type: string): FormDecorator;
/** Get form message from body when default type is [application/x-www-form-urlencoded] */
export function FromForm(config: URLFormOptions): FormDecorator;
export function FromForm(config?: string | URLFormOptions): FormDecorator {
  return formDecoratorFactory(FormType.UrlEncoded, config);
}

// /** Get form message from body when type is [application/octet-stream] */
// export function RawBody();
// /** Get form message from body when default type is [application/octet-stream] */
// export function RawBody(type: string);
// /** Get form message from body when default type is [application/octet-stream] */
// export function RawBody(config: BodyParser.Options);
// export function RawBody(config?: string | BodyParser.Options) {
//   return formDecoratorFactory(config && (typeof (config) === "string" ? config : config.type), FormType.Raw, config);
// }

/** Get form message from body when type is [text/plain] */
export function TextBody(): FormDecorator;
/** Get form message from body when default type is [text/plain] */
export function TextBody(type: string): FormDecorator;
/** Get form message from body when default type is [text/plain] */
export function TextBody(config: TextFormOptions): FormDecorator;
export function TextBody(config?: string | TextFormOptions): FormDecorator {
  return formDecoratorFactory(FormType.TextPlain, config);
}

function formDecoratorFactory(parser: FormType, config?: string | BaseFormOptions): FormDecorator {
  const types = (config && (typeof (config) === "string" ? [config] : [])) || [];
  const configs = (typeof (config) === "string" ? {} : config) || {};
  configs.extends = [...(configs.extends || []), ...types];
  return function <T extends IBonbonsController>(target: T, propertyKey: string, index_descriptor: number | TypedPropertyDescriptor<T>) {
    const isParam = typeof index_descriptor === "number" && index_descriptor >= 0;
    const reflect = Reflection.GetControllerMetadata(target);
    if (isParam) {
      Reflection.SetControllerMetadata(target, reroute(reflect, propertyKey, { form: { parser, options: configs, index: <number>index_descriptor } }));
    } else {
      Reflection.SetControllerMetadata(target, reroute(reflect, propertyKey, { form: { parser, options: configs } }));
    }
  };
}
