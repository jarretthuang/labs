
export type Project = {
    id: string;
    title: string;
    description: string;
    url: string;
    tags: string[];
}

const jsonViewer: Project = {
    id: "json-viewer",
    title: "JSON Viewer",
    description: "A web app for validating, formatting, and visualizing JSON data.",
    url: "https://jsonviewer.io/",
    tags: ["React", "NextJs"],
};

const widgets: Project = {
    id: "widgets",
    title: "Widgets",
    description: "A collection of web widgets.",
    url: "https://widgets.jhuang.ca/",
    tags: ["React", "NextJs"],
};

const rectangleUi: Project = {
    id: "rectangle-ui",
    title: "Rectangle UI",
    description: "A code-first Angular UI component library.",
    url: "https://rectangle.jhuang.ca/",
    tags: ["Angular"],
};

export const projects: Project[] = [jsonViewer, widgets, rectangleUi];
