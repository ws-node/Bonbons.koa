import { BaseController, Controller, Route, Method } from "bonbons.koa";
import { ScopeContract } from "../service/scope";
import { AppService } from "../service/app";

@Controller("api")
export class APIController extends BaseController {

  constructor(private scope: ScopeContract, private app: AppService) {
    super();
  }

  @Method("GET")
  @Route("/message")
  public Index() {
    return this.toJSON({ code: 0, msg: "success" });
  }

  @Method("GET")
  @Route("/check")
  public Check() {
    return this.toJSON({
      scope: this.scope.show(),
      singleton: this.app.show()
    });
  }

}
