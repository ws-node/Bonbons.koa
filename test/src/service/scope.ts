import { Injectable } from "bonbons.koa";

export abstract class ScopeContract {
  abstract show(): string;
}

@Injectable()
export class ScopeService implements ScopeContract {

  private id = Math.random() * 1000;

  public show() {
    return `this is scope service with [ id : ${this.id} ].`
  }

}
