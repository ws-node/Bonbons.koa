import { default as path } from "path";
import {
  Bonbons, JSON_RESULT_OPTIONS, JsonResultResolvers,
  BonbonsApp, BaseApp, ENV_MODE, DEPLOY_MODE, TPL_RENDER_OPTIONS, Renders
} from "@Bonbons";
import { TestService } from "./src/service/test";
import { ABC, ImplementService } from "./src/service/imp";
import { valueTest, TOKEN_TEST } from "./src/config/test";
import { TestController } from "./src/controller/test";
import { MoreController } from "./src/controller/more";
import { DemoPipe } from "./src/pipes/demo.pipe";

// Bonbons.New
//   .scoped(ImplementService)
//   .scoped(ABC, ImplementService)
//   .singleton(TestService)
//   .controller(TestController)
//   .controller(MoreController)
//   .pipe(DemoPipe)
//   .option(TOKEN_TEST, valueTest)
//   .option(ENV_MODE, { mode: "development", trace: true })
//   .option(JSON_RESULT_OPTIONS, { staticType: true, resolver: JsonResultResolvers.decamelize })
//   .option(TPL_RENDER_OPTIONS, { root: path.resolve(__dirname, "./src/views"), extensions: "ejs", render: Renders.ejs })
//   .start(((configs) => {
//     console.log(configs.get(TPL_RENDER_OPTIONS));
//   }));

@BonbonsApp({
  controller: [
    TestController,
    MoreController
  ],
  scoped: [
    ImplementService,
    { token: ABC, implement: ImplementService }
  ],
  singleton: [TestService],
  pipes: [DemoPipe],
  options: [
    { token: TOKEN_TEST, value: valueTest },
    { token: ENV_MODE, value: { trace: true } },
    [JSON_RESULT_OPTIONS, { staticType: true, resolver: JsonResultResolvers.decamelize }]
  ]
})
class App extends BaseApp {

  start(): void {
    const { port } = this.config.get(DEPLOY_MODE);
    this.logger.debug(`app is running on port ${port || 3000}`);
  }

}

new App().start();