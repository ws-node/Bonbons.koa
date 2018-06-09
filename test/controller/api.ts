import { BaseController, Controller, Route, Method } from "bonbons.koa";

@Controller("api")
export class APIController extends BaseController {

  @Method("GET")
  @Route("/index")
  public Index() {
    return this.toJSON({ code: 0, msg: "welcome!" });
  }

}
