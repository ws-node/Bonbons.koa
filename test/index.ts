import { Bonbons, JSON_RESULT_OPTIONS, JsonResultResolvers, BonbonsApp, BaseApp, ENV_MODE } from "@Bonbons";
import { TestService } from "./src/service/test";
import { ABC, ImplementService } from "./src/service/imp";
import { valueTest, TOKEN_TEST } from "./src/config/test";
import { TestController } from "./src/controller/test";
import { MoreController } from "./src/controller/more";

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
  mode: "development",
  port: 3000,
  controller: [
    TestController,
    MoreController
  ],
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
    { token: ENV_MODE, value: { trace: false } },
    [JSON_RESULT_OPTIONS, { staticType: true, resolver: JsonResultResolvers.decamelize }]
  ]
})
class App extends BaseApp {

  start(): void {
    this.logger.debug(`app is running on port ${this.config.port || 3000}`);
  }

}

new App().start();