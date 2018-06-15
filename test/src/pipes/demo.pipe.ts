import { Pipe, Param, PipeMiddleware, PipeOnInit, createPipeFactory } from "@Bonbons";
import { TestService } from "../service/test";

@Pipe()
class TestPipe extends PipeMiddleware implements PipeOnInit {

  @Param()
  private value: number;

  @Param("name")
  private differentName: string;

  constructor(private test: TestService) {
    super();
    console.log(this.test);
  }

  pipeOnInit(): void {
    console.log(this.value);
    console.log(this.differentName);
  }

  process() {

  }

}

export const DemoPipe = Pipe({ value: 123456, name: "woshinidie" })(TestPipe);
// export const DemoPipe = createPipeFactory(TestPipe)({ value: 123456, name: "woshinidie" });