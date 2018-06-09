import { app, createToken, BonbonsServer, Controller } from "@Bonbons";

const token = createToken<IA>("func-token");

interface IA {
  a: string;
  b: number;
}

const value = { a: "sss", b: 123, c: true };

const server = new BonbonsServer();

@Controller()
class TestController {

}

class BadController {

}

server
  .controller(TestController)
  // .controller(BadController)
  .option(token, value);

app.use(async (ctx) => {
  ctx.body = "hello koa2";
});

app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");
