import { Param, createPipeFactory, PipeMiddleware, PipeOnInit, Params, Pipe, GlobalLogger } from "@Bonbons";
import { TestService } from "../service/test";

interface PipeDate {
  value: number;
  name: string;
}

@Pipe()
class PIpeClass2 extends PipeMiddleware<PipeDate> implements PipeOnInit {

  @Params()
  private params: PipeDate;

  constructor(private test: TestService, private logger: GlobalLogger) {
    super();
    // console.log(this.test);
  }

  pipeOnInit(): void {
    // console.log(this.params);
  }

  process(next: () => Promise<any>): void | Promise<void> {
    this.logger.debug("process in pipe [ WrappedPipe ]");
    next();
  }

}

export const WrappedPipe = createPipeFactory(PIpeClass2);