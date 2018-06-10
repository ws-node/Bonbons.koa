import { Controller, Method, Route, JsonResult, BaseController } from "@Bonbons";
import { TestService } from "../service/test";
import { ABC } from "../service/imp";

@Controller("api")
export class TestController extends BaseController {

  constructor(private test: TestService, private imp: ABC) { super(); }

  @Method("GET")
  @Route("/index/:abc/:def?{id}&{name}&{fuck}")
  public index(abc: string, def: string, id: number, name: string, fuck: string): JsonResult {
    return this.toJSON({
      query: this.context.request.querystring,
      moreMessage: " woshinidie " + fuck + " -- " + this.imp.show(),
      checks: {
        test: this.test,
        imp: this.imp,
        msg: { abc, def, id, name },
        typeChecks: {
          abc: typeof abc,
          def: typeof def,
          id: typeof id,
          name: typeof name
        }
      }
    });
  }

}