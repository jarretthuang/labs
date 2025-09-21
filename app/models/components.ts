import type { RouteHandle } from "~/root";

export class Component {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly hidden?: boolean,
  ) {}

  public get url(): string {
    return `/${this.id}`;
  }

  public get meta(): any[] {
    return [{ title: `${this.name} - JH Labs` }];
  }

  public get routeHandle(): RouteHandle {
    return {
      title: this.name,
      path: this.id,
    };
  }
}

export const SIGNUP_FORM = new Component("signup-form", "Signup Form");

export const NESTED_CHECKBOXES = new Component(
  "nested-checkboxes",
  "Nested Checkboxes",
);

export const AUTH_CODE_INPUT = new Component(
  "auth-code-input",
  "Auth Code Input",
  true,
);

const ALL_COMPONENTS = [SIGNUP_FORM, NESTED_CHECKBOXES, AUTH_CODE_INPUT];

export const VISIBLE_COMPONENTS = ALL_COMPONENTS.filter(
  (component) => !component.hidden,
).sort((a, b) => a.name.localeCompare(b.name));
