import { JsonResultOptions, StringResultOptions, ErrorPageTemplate } from "../metadata/base";

function defaultErrorPageTemplate(): ErrorPageTemplate {
  return ({
    render: (error) => !error ? "unhandled error." : `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="utf-8">
  <title>Error</title>
  </head>
  <body>
  <pre>${error.stack || ""}</pre>
  </body>
  </html>
  `});
}

function defaultJsonResultOptions(): JsonResultOptions {
  return { indentation: true, staticType: false };
}

function defaultStringResultOptions(): StringResultOptions {
  return { encoding: "utf8", decoding: "utf8" };
}

export const DEFAULTS = {
  jsonOptions: defaultJsonResultOptions(),
  stringOption: defaultStringResultOptions(),
  errorTemplate: defaultErrorPageTemplate()
};
