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
  `
    <p>A simple form component that supports native validation and autocomplete.</p>
    <p>On submit, it sends a POST request to a dummy (but real) endpoint at <a href="https://api.jhuang.ca" target="_blank">https://api.jhuang.ca/signup</a>.</p>
  `,
);

export const NESTED_CHECKBOXES = new Component(
  "nested-checkboxes",
  "Nested Checkboxes",
  "On clicking a checkbox, all of its ancestors and descendants will be updated accordingly.",
);

export const AUTH_CODE_INPUT = new Component(
  "auth-code-input",
  "Auth Code Input",
  "",
  true,
);

export const PROGRESS_BARS = new Component(
  "progress-bars",
  "Progress Bars",
  "On clicking the add button, a new progress bar will be added and it will fill automatically.",
);

export const ACCORDION = new Component(
  "accordion",
  "Accordion",
  "A simple accordion component.",
);

export const DATA_TABLE = new Component(
  "data-table",
  "Data Table",
  `
    <p>A data table that supports server-side pagination via infinite scrolling.</p>
    <p>On scrolling to the bottom, a new POST request will be sent to <a href="https://api.jhuang.ca" target="_blank">https://api.jhuang.ca/rows</a> to fetch the next 30 rows, until the 137th, i.e. the final row, is reached.</p>    
  `,
);

export const MODAL_DIALOG = new Component(
  "modal-dialog",
  "Modal Dialog",
  "A generic modal dialog that supports any type of content.",
);

export const TIC_TAC_TOE = new Component(
  "tic-tac-toe",
  "Tic-tac-toe",
  "A game of tic-tac-toe.",
);

export const DROPDOWN = new Component(
  "dropdown",
  "Dropdown",
  "A simple and accessible dropdown component.",
);

export const DEBOUNCE_VS_THROTTLE = new Component(
  "debounce-vs-throttle",
  "Debounce vs. Throttle",
  "A simple demonstration of the difference between debounce and throttle.",
);

export const TABS = new Component(
  "tabs",
  "Tabs",
  "A simple component for rendering different content based on the selected tab.",
);

export const TOOLTIP = new Component(
  "tooltip",
  "Tooltip",
  "A simple tooltip component that supports dynamic content.",
);

export const LAZY_LOADING = new Component(
  "lazy-loading",
  "Lazy loading",
  `
    <p>A simple demo of how React components can be lazily loaded.<p>
    <p>Check the network tab to see code-splitting in action!<p>
  `,
);

const ALL_COMPONENTS = [
  SIGNUP_FORM,
  NESTED_CHECKBOXES,
  AUTH_CODE_INPUT,
  PROGRESS_BARS,
  ACCORDION,
  DATA_TABLE,
  MODAL_DIALOG,
  TIC_TAC_TOE,
  DROPDOWN,
  DEBOUNCE_VS_THROTTLE,
  TABS,
  TOOLTIP,
  LAZY_LOADING,
];

export const VISIBLE_COMPONENTS = ALL_COMPONENTS.filter(
  (component) => !component.hidden,
).sort((a, b) => a.name.localeCompare(b.name));
