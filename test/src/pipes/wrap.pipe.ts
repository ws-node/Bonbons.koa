import { PipeMiddleware, PipeOnInit, Pipe, GlobalLogger, PipeFactory } from "@Bonbons";
import { TestService } from "../service/test";

interface PipeDate {
  value: number;
  name: string;
}

@Pipe()
class PIpeClass2 extends PipeMiddleware<PipeDate> implements PipeOnInit {

  constructor(private test: TestService, private logger: GlobalLogger) {
    super();
    // console.log(this.test);
  }

  pipeOnInit(): void {
    // console.log(this.params);
  }

  async process(next: () => Promise<any>) {
    this.logger.debug("process in pipe [ WrappedPipe ]");
    console.log(this.params);
    await next();
  }

}

export const WrappedPipe = PipeFactory.generic(PIpeClass2);
