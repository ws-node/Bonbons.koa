import { app, createToken, BonbonsServer, Controller, Method, Route, BaseController, Injectable, JsonResult, JSON_RESULT_OPTIONS } from "@Bonbons";

const token = createToken<IA>("func-token");

interface IA {
  a: string;
  b: number;
}

const value = { a: "sss", b: 123, c: true };

const server = new BonbonsServer();

@Injectable()
class TestService {

}

abstract class ABC {
  abstract show(): string;
}

@Injectable()
class ImplementService implements ABC {
  constructor(private test: TestService) { }
  show(): string {
    return "func you!";
  }
}

@Controller("api")
class TestController extends BaseController {

  constructor(private test: TestService, private imp: ABC) { super(); }

  @Method("GET")
  @Route("/index/:abc/:def?{id}&{name}&{fuck}")
  index(abc: string, def: string, id: number, name: string, fuck: string): JsonResult {
    console.log(this.test);
    console.log(this.imp);
    console.log(abc);
    console.log(def);
    console.log(typeof abc);
    console.log(typeof def);
    console.log(this.context.request.querystring);
    console.log(id);
    console.log(name);
    console.log(typeof id);
    console.log(typeof name);
    return new JsonResult({
      query: this.context.request.querystring,
      adition: " woshinidie " + fuck + " -- " + this.imp.show()
    });
  }

}

class BadController {

}

server
  .scope(TestService)
  .scope(ABC, ImplementService)
  .controller(TestController)
  // .controller(BadController)
  .option(token, value)
  .option(JSON_RESULT_OPTIONS, { staticType: true })
  .start();
