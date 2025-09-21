export type Component = {
  id: string;
  name: string;
  url: string;
};

const SIGNUP_FORM: Component = {
  id: "signup-form",
  name: "Signup form",
  url: "/signup",
};

const NESTED_CHECKBOXES: Component = {
  id: "nested-checkboxes",
  name: "Nested checkboxes",
  url: "/checkboxes",
};

export const COMPONENTS = [SIGNUP_FORM, NESTED_CHECKBOXES].sort((a, b) =>
  a.name.localeCompare(b.name),
);
