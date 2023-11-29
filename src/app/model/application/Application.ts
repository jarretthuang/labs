import _, { Dictionary } from "lodash";
import {
  colourPickerAppDescription,
  homeAppDescription,
  threeAppDescription,
} from "./appDescriptions";

export type Application = {
  name: string;
  themeColour?: string;
  isFullScreen?: boolean;
  isDarkTheme?: boolean;
  metadata?: ApplicationMetadata;
};

export type ApplicationMetadata = {
  displayName: string;
  description?: string;
};

export const HOME_APP: Application = {
  name: "home",
  themeColour: "#071419",
  isDarkTheme: true,
  metadata: {
    displayName: "Home",
    description: homeAppDescription,
  },
};

export const COLOUR_PICKER_APP: Application = {
  name: "colour-picker",
  isFullScreen: true,
  metadata: {
    displayName: "Colour Picker",
    description: colourPickerAppDescription,
  },
};

export const THREE_APP: Application = {
  name: "three",
  themeColour: "#FEF8E2",
  isFullScreen: true,
  metadata: {
    displayName: "Three",
    description: threeAppDescription,
  },
};

export const applications = [HOME_APP, COLOUR_PICKER_APP, THREE_APP];

export const applicationsMap: Dictionary<Application> = _.keyBy(
  applications,
  "name"
);

export const getAppByName = (appName) => {
  return applicationsMap[appName];
};
