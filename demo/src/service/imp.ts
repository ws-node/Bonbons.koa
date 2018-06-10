import { Injectable } from "@Bonbons";
import { TestService } from "./test";

export abstract class ABC {
  abstract show(): string;
}

@Injectable()
export class ImplementService implements ABC {
  constructor(private test: TestService) { }
  show(): string {
    return "func you!";
  }
}
