import _, { Dictionary } from "lodash";

export type Application = {
  name: string;
  themeColour?: string;
  isFullScreen?: boolean;
  isDarkTheme?: boolean;
  metadata?: ApplicationMetadata;
};

export type ApplicationMetadata = {
  displayName: string;
  description: string;
};

export const HOME_APP: Application = {
  name: "home",
  themeColour: "#071419",
  isDarkTheme: true,
  metadata: {
    displayName: "Home",
    description: "The Home app is the home page of labs.jhuang.ca",
  },
};

export const JSON_VIEWER_APP: Application = {
  name: "json-viewer",
  themeColour: "#d7eff2",
  isFullScreen: true,
};

export const COLOUR_PICKER_APP: Application = {
  name: "colour-picker",
  isFullScreen: true,
};

export const THREE_APP: Application = {
  name: "three",
  themeColour: "#FEF8E2",
  isFullScreen: true,
};

export const applications = [
  HOME_APP,
  JSON_VIEWER_APP,
  COLOUR_PICKER_APP,
  THREE_APP,
];
export const applicationsMap: Dictionary<Application> = _.keyBy(
  applications,
  "name"
);
export const getAppByName = (appName) => {
  return applicationsMap[appName];
};
