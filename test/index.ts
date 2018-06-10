import { Bonbons, JSON_RESULT_OPTIONS, JsonResultResolvers } from "@Bonbons";
import { TestService } from "./src/service/test";
import { ABC, ImplementService } from "./src/service/imp";
import { valueTest, TOKEN_TEST } from "./src/config/test";
import { TestController } from "./src/controller/test";

Bonbons.Create()
  .scoped(ImplementService)
  .scoped(ABC, () => new ImplementService(new TestService()))
  .scoped(ABC, ImplementService)
  .scoped(ABC, new ImplementService(new TestService()))
  .scoped(TestService)
  .controller(TestController)
  .option(TOKEN_TEST, valueTest)
  .option(JSON_RESULT_OPTIONS, { staticType: true, resolver: JsonResultResolvers.decamelize })
  .start();
