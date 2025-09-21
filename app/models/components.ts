export type Component = {
  id: string;
  name: string;
  url: string;
  hidden?: boolean;
};

const SIGNUP_FORM: Component = {
  id: "signup-form",
  name: "Signup form",
  url: "/signup-form",
};

const NESTED_CHECKBOXES: Component = {
  id: "nested-checkboxes",
  name: "Nested checkboxes",
  url: "/nested-checkboxes",
};

const AUTH_CODE_INPUT: Component = {
  id: "auth-code-input",
  name: "Auth code input",
  url: "/auth-code-input",
  hidden: true,
};

const ALL_COMPONENTS = [SIGNUP_FORM, NESTED_CHECKBOXES, AUTH_CODE_INPUT];

export const VISIBLE_COMPONENTS = ALL_COMPONENTS.filter(
  (component) => !component.hidden,
).sort((a, b) => a.name.localeCompare(b.name));
