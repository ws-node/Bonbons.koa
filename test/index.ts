import { Bonbons } from "bonbons.koa";
import { APIController } from "./controller/api";
import { IndexController } from "./controller";
import { AppService } from "./service/app";
import { ScopeContract, ScopeService } from "./service/scope";

Bonbons.Create()
  .controller(IndexController)
  .controller(APIController)
  .singleton(AppService)
  .scope(ScopeContract, ScopeService)
  .start();
