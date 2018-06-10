import { Injectable } from "bonbons.koa";

@Injectable()
export class AppService {

  private id = Math.random() * 1000;

  public show() {
    return `this is app service with [ id : ${this.id} ].`
  }

}
