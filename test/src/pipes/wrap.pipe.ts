import { Param, createPipeFactory, PipeMiddleware, PipeOnInit, Params, Pipe } from "@Bonbons";
import { TestService } from "../service/test";

interface PipeDate {
  value: number;
  name: string;
}

@Pipe()
class PIpeClass2 extends PipeMiddleware<PipeDate> implements PipeOnInit {

  @Params()
  private params: PipeDate;

  constructor(private test: TestService) {
    super();
    console.log(this.test);
  }

  pipeOnInit(): void {
    console.log(this.params);
  }

  process(): void | Promise<void> {

  }

}

export const WrappedPipe = createPipeFactory(PIpeClass2);