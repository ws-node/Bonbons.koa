import { app, createToken, BonbonsServer, Controller, Method, Route, BaseController, Injectable, JsonResult, JSON_RESULT_OPTIONS, JsonResultResolvers } from "@Bonbons";

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

class BadController {

}

server
  .scope(TestService)
  .scope(ABC, ImplementService)
  .controller(TestController)
  // .controller(BadController)
  .option(token, value)
  .option(JSON_RESULT_OPTIONS, { staticType: true, resolver: JsonResultResolvers.decamelize })
  .start();
