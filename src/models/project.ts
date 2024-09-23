
export type Project = {
    id: string;
    title: string;
    description: string;
    url: string;
    tags: string[];
    date: Date;
}

const jsonViewer: Project = {
    id: "json-viewer",
    title: "JSON Viewer",
    description: "A web app for validating, formatting, and visualizing JSON data.",
    url: "https://jsonviewer.io/",
    tags: ["React"],
    date: new Date("2023-07-07"),
};

const widgets: Project = {
    id: "widgets",
    title: "Widgets",
    description: "A collection of web widgets.",
    url: "https://widgets.jhuang.ca/",
    tags: ["React", "NextJs"],
    date: new Date("2023-12-28"),
};

const rectangleUi: Project = {
    id: "rectangle-ui",
    title: "Rectangle UI",
    description: "A code-first Angular UI component library.",
    url: "https://rectangle.jhuang.ca/",
    tags: ["Angular"],
    date: new Date("2024-09-07"),
};

export const projects: Project[] = [jsonViewer, widgets, rectangleUi].sort((a, b) => b.date.getTime() - a.date.getTime());
