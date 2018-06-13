import { Injectable, GlobalLogger } from "@Bonbons";

@Injectable()
export class TestService {

  constructor(private logger: GlobalLogger) {
    this.logger.info("test-sevice", "create test service.");
  }

}
