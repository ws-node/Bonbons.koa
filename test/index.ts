import {
  Bonbons, JSON_RESULT_OPTIONS, JsonResultResolvers,
  BonbonsApp, BaseApp, ENV_MODE, DEPLOY_MODE
} from "@Bonbons";
import { TestService } from "./src/service/test";
import { ABC, ImplementService } from "./src/service/imp";
import { valueTest, TOKEN_TEST } from "./src/config/test";
import { TestController } from "./src/controller/test";
import { MoreController } from "./src/controller/more";
import { DemoPipe } from "./src/pipes/demo.pipe";
import { middleware01 } from "./src/middlewares/md01";
import { middleware02 } from "./src/middlewares/md02";

Bonbons.New
  .scoped(ImplementService)
  .scoped(ABC, ImplementService)
  .singleton(TestService)
  .controller(TestController)
  .controller(MoreController)
  .pipe(DemoPipe)
  // .use(middleware01)
  // .use(middleware02, 888888)
  .option(TOKEN_TEST, valueTest)
  .option(ENV_MODE, { trace: true })
  .option(JSON_RESULT_OPTIONS, { staticType: true, resolver: JsonResultResolvers.decamelize })
  .start();

// @BonbonsApp({
//   controller: [
//     TestController,
//     MoreController
//   ],
//   scoped: [
//     ImplementService,
//     { token: ABC, implement: ImplementService }
//   ],
//   singleton: [TestService],
//   pipes: [DemoPipe],
//   middlewares: [
//     middleware01,
//     { factory: middleware02, params: [888888] }
//   ],
//   options: [
//     { token: TOKEN_TEST, value: valueTest },
//     { token: ENV_MODE, value: { trace: true } },
//     [JSON_RESULT_OPTIONS, { staticType: true, resolver: JsonResultResolvers.decamelize }]
//   ]
// })
// class App extends BaseApp {

//   start(): void {
//     const { port } = this.config.get(DEPLOY_MODE);
//     this.logger.debug(`app is running on port ${port || 3000}`);
//   }

// }

// new App().start();