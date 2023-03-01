import { useEffect, useState } from "react";
import "./assets/css/colour-picker.css";
import ColorDictionary from "./assets/js/colour-dictionary";
import { Helmet } from "react-helmet-async";

function ColourPicker(props: any) {
  type textColour = "black" | "white";
  type colour = {
    name: string;
    hex: string;
    textColour: textColour;
  };

  const generateRandomColourHex = () => {
    const letters = "0123456789ABCDEF";
    var color = "";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getTextColour: (c: any) => textColour = (colourHexValue: any) => {
    const rgb = parseInt(colourHexValue, 16); // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff; // extract red
    const g = (rgb >> 8) & 0xff; // extract green
    const b = (rgb >> 0) & 0xff; // extract blue
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
    if (hsp > 127.5) {
      return "black";
    } else {
      return "white";
    }
  };

  const generateAndApplyNewColour: () => colour = () => {
    let colourName;
    let colourHex;
    while (!colourName) {
      colourHex = generateRandomColourHex();
      colourName = ColorDictionary.get(colourHex);
    }

    return {
      name: colourName,
      hex: "#" + colourHex,
      textColour: getTextColour(colourHex),
    } as colour;
  };

  const [currentColour, updateColour] = useState(generateAndApplyNewColour());
  useEffect(() => {
    props.setIsDarkTheme(currentColour.textColour === "white");
    props.setThemeColour(currentColour.hex);
  });

  return (
    <div
      className="ColourPicker"
      style={{
        backgroundColor: currentColour.hex,
        color: currentColour.textColour,
      }}
    >
      <Helmet>
        <title>Colour Picker - JH Labs</title>
        <meta name="theme-color" content={currentColour.hex} />
      </Helmet>
      <div className="colourful-container">
        <div className="colour-text">
          <span className="colour-name">{currentColour.name}</span>
          <span className="colour-hex">{currentColour.hex}</span>
        </div>
        <div
          className="next-button"
          style={{
            backgroundColor: currentColour.hex,
          }}
          onClick={() => updateColour(generateAndApplyNewColour())}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default ColourPicker;
