import { Application } from "../../model/Application";

export type NavBarParams = {
  goHome: () => void;
  currentApp?: Application;
  isDarkTheme?: boolean;
  backgroundColour?: string;
};
