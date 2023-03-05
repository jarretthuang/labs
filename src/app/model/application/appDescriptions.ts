/**
 * This file contains static description text for apps.
 * I tried (really tried) to put these into .md files and load them dynamically but `import("./md/...")` does not like me. :(
 */

export const homeAppDescription = `
The _Home_ app is the home page of _labs.jhuang.ca_ which provides an entry point to each other app.

This app leverages _CSS Grid_ to create a proportional UI adjusting to the viewer's screen size dynamically, with fairly simple css:
\`\`\`
grid-template-columns: repeat(auto-fit, minmax(25vmin, 1fr));
grid-auto-rows: minmax(20vmin, 1fr);
grid-gap: 1rem;
\`\`\`

To me, this is pure art! :p
`;

export const jsonViewerAppDescription = `
The _JSON Viewer_ app is a handy tool that I use regularly. It parses the text that you provide and if text is valid JSON,
offers functionalities to auto-indent or minimize it, among a few other things.

In the _View_ tab, a nicely configured tree structure will be generated for you to visualize your JSON object.
`;

export const colourPickerAppDescription = `
Ever had trouble finding a "good colour" when you're writing UI code?

This app was created a while ago for me to quickly generate a random colour with a name. I've used it extensively over the years.
Credits go to [Ntc.js](https://chir.ag/projects/ntc/).

I sense a lot of more advanced features coming to this app. Stay tuned!
`;

export const threeAppDescription = `
I recently fell in love with [Three.js](https://threejs.org/). (and you should too!)

This app is our love child.
`;
