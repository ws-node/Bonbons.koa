import { Bonbons } from "bonbons.koa";
import { APIController } from "./controller/api";

Bonbons.Create()
  .controller(APIController)
  .start();
