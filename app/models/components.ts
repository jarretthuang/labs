import type { RouteHandle } from "~/root";

export class Component {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
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
      component: this,
    };
  }
}

export const SIGNUP_FORM = new Component(
  "signup-form",
  "Signup Form",
  `<span>
      An HTML form that supports native validation and autocomplete.
      On submit, it sends a POST request to a dummy (but real) endpoint at <a href="https://api.jhuang.ca">https://api.jhuang.ca</a>/signup.
  </span>`,
);

export const NESTED_CHECKBOXES = new Component(
  "nested-checkboxes",
  "Nested Checkboxes",
  "On clicking a checkbox, all of its ancestors and descendants will be updated accordingly.",
);

export const AUTH_CODE_INPUT = new Component(
  "auth-code-input",
  "Auth Code Input",
  "Auth code input.",
  true,
);

export const PROGRESS_BARS = new Component(
  "progress-bars",
  "Progress Bars",
  "On clicking the add button, a new progress bar will be added and it will fill automatically.",
);

const ALL_COMPONENTS = [
  SIGNUP_FORM,
  NESTED_CHECKBOXES,
  AUTH_CODE_INPUT,
  PROGRESS_BARS,
];

export const VISIBLE_COMPONENTS = ALL_COMPONENTS.filter(
  (component) => !component.hidden,
).sort((a, b) => a.name.localeCompare(b.name));
