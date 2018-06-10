import { Bonbons } from "bonbons.koa";
import { APIController } from "./src/controller/api";
import { IndexController } from "./src/controller";
import { AppService } from "./src/service/app";
import { ScopeContract, ScopeService } from "./src/service/scope";

Bonbons.Create()
  .controller(IndexController)
  .controller(APIController)
  .singleton(AppService)
  .scope(ScopeContract, ScopeService)
  .start();
