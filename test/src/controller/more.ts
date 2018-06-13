import { Controller, Method, Route, JsonResult, BaseController, FromBody, FromForm, GET, POST } from "@Bonbons";
import { TestService } from "../service/test";
import { ABC } from "../service/imp";

@Controller("more")
export class MoreController extends BaseController {

  constructor(private test: TestService, private imp: ABC) { super(); }

  // @GET
  @Method("GET")
  @Route("/index/:abc/:def?{id}&{name}&{fuck}")
  public index(abc: string, def: string, id: number, name: string, fuck: string): JsonResult {
    this.logger.debug("TestController", "index");
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

  // @POST
  @Method("POST")
  @Route("/postJSon")
  public SendMessage(@FromBody("application/javascript") params) {
    this.logger.debug("TestController", "SendMessage");
    return this.toJSON(params);
  }

  @Method("POST")
  @Route("/postForm")
  public SendFormMessage(@FromForm({ formLimit: '50kb', }) params) {
    this.logger.debug("TestController", "SendFormMessage");
    return this.toJSON(params);
  }

}