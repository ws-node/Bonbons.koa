import * as decamelize from "decamelize";
import * as camel from "camelcase";


export const Formater = {
  ToCamelCase(str: string) {
    return (camel.default || camel)(str);
  },
  DeCamelCase(str: string, sec = "-") {
    return (decamelize.default || decamelize)(str, sec);
  }
};
