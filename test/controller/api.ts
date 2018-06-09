import { BaseController, Controller, Route } from "bonbons.koa";

@Controller("api")
export class APIController extends BaseController {

  @Route("/index")
  public Index() {
    return this.toJSON({ code: 0, msg: "welcome!" });
  }

}
