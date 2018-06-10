import { BaseController, Controller, Route, Method } from "bonbons.koa";

@Controller("index")
export class IndexController extends BaseController {

  @Method("GET")
  @Route("/")
  public Index() {
    return "Hello world!";
  }

}
