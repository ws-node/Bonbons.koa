import { app, createToken, BonbonsServer, Controller, Method, Route, BaseController } from "@Bonbons";

const token = createToken<IA>("func-token");

interface IA {
  a: string;
  b: number;
}

const value = { a: "sss", b: 123, c: true };

const server = new BonbonsServer();

@Controller("api")
class TestController extends BaseController {

  constructor() { super(); }

  @Method("GET")
  @Route("/index/:abc/:def?{id}&{name}&{fuck}")
  index(abc: string, def: string, id: number, name: string) {
    console.log(abc);
    console.log(def);
    console.log(typeof abc);
    console.log(typeof def);
    console.log(this.context.request.querystring);
    console.log(id);
    console.log(name);
    console.log(typeof id);
    console.log(typeof name);
  }

}

class BadController {

}

server
  .controller(TestController)
  // .controller(BadController)
  .option(token, value)
  .start();
