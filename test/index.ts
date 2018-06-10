import { Bonbons, JSON_RESULT_OPTIONS, JsonResultResolvers, BonbonsApp, BaseApp } from "@Bonbons";
import { TestService } from "./src/service/test";
import { ABC, ImplementService } from "./src/service/imp";
import { valueTest, TOKEN_TEST } from "./src/config/test";
import { TestController } from "./src/controller/test";

// Bonbons.New
//   .scoped(ImplementService)
//   .scoped(ABC, () => new ImplementService(new TestService()))
//   // .scoped(ABC, ImplementService)
//   // .scoped(ABC, new ImplementService(new TestService()))
//   .scoped(TestService)
//   .controller(TestController)
//   .option(TOKEN_TEST, valueTest)
//   .option(JSON_RESULT_OPTIONS, { staticType: true, resolver: JsonResultResolvers.decamelize })
//   .start();

@BonbonsApp({
  port: 3000,
  controller: [TestController],
  scoped: [
    ImplementService,
    { token: ABC, implement: ImplementService },
    // [ABC, ImplementService],
    // [ABC, new ImplementService(new TestService())],
    // [ABC, () => new ImplementService(new TestService())]
  ],
  singleton: [TestService],
  options: [
    { token: TOKEN_TEST, value: valueTest },
    [JSON_RESULT_OPTIONS, { staticType: true, resolver: JsonResultResolvers.decamelize }]
  ]
})
class App extends BaseApp {

  start(): void {
    console.log(this.config);
  }

}

new App().start();