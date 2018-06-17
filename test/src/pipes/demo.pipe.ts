import { Pipe, Param, PipeMiddleware, PipeOnInit, createPipeFactory, GlobalLogger } from "@Bonbons";
import { TestService } from "../service/test";

@Pipe()
class TestPipe extends PipeMiddleware implements PipeOnInit {

  @Param()
  private value: number;

  @Param("name")
  private differentName: string;

  constructor(private test: TestService, private logger: GlobalLogger) {
    super();
    // console.log(this.test);
  }

  pipeOnInit(): void {
    // console.log(this.value);
    // console.log(this.differentName);
    // console.log(this.context);
  }

  async process(next: () => Promise<any>) {
    this.logger.debug("process in pipe [ DemoPipe ]");
    // console.log(next);
    await next();
    console.log(this.context.response.body);
  }

}

export const DemoPipe = Pipe({ value: 123456, name: "woshinidie" })(TestPipe);
// export const DemoPipe = createPipeFactory(TestPipe)({ value: 123456, name: "woshinidie" });