import {
  Bonbons, JSON_RESULT_OPTIONS, JsonResultResolvers,
  BonbonsApp, BaseApp, ENV_MODE, PipeMiddleware,
  createPipeInstance, PipeArg, PipeOnInit, Pipe, createPipe
} from "@Bonbons";
import { TestService } from "./src/service/test";
import { ABC, ImplementService } from "./src/service/imp";
import { valueTest, TOKEN_TEST } from "./src/config/test";
import { TestController } from "./src/controller/test";
import { MoreController } from "./src/controller/more";

@Pipe({ value: 123456, name: "woshinidie" })
class PIpeClass extends PipeMiddleware implements PipeOnInit {

  @PipeArg()
  private value: number;

  @PipeArg("name")
  private differentName: string;

  constructor(a: any) {
    super();
    console.log(a);
  }

  pipeOnInit(): void {
    console.log(this.value);
    console.log(this.differentName);
  }

  process(): void | Promise<void> {
    throw new Error("Method not implemented.");
  }

}

class PIpeClass2 extends PipeMiddleware implements PipeOnInit {

  @PipeArg()
  private value: number;

  @PipeArg()
  private name: string;

  constructor(a: any) {
    super();
    console.log(a);
  }

  pipeOnInit(): void {
    console.log(this.value);
    console.log(this.name);
  }

  process(): void | Promise<void> {
    throw new Error("Method not implemented.");
  }

}

const pipe = createPipe(PIpeClass2)({ value: 654321, name: "nimasile" });

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
    { token: ENV_MODE, value: { trace: true } },
    [JSON_RESULT_OPTIONS, { staticType: true, resolver: JsonResultResolvers.decamelize }]
  ]
})
class App extends BaseApp {

  start(): void {
    this.logger.debug(`app is running on port ${this.config.port || 3000}`);

    const a = createPipeInstance(PIpeClass, [{ aasasa: 2123 }]);

    const b = createPipeInstance(pipe, [{ afafdbka: 231 }]);

  }

}

new App().start();