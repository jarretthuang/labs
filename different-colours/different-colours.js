
$(document).ready(function(){
 popAColour();
$("#next-button").click(popAColour);
});
    
function popAColour() {
    var colour = getRandomColor();
    var n_match  = ntc.name(colour);
    var n_rgb        = n_match[0]; // RGB value of closest match
    var n_name       = n_match[1]; // Text string: Color name
    var n_exactmatch = n_match[2]; // True if exact color match
    
    var theme = lightOrDark(n_rgb);
    if (theme == "light") {
        $("#colourful-container").css("color", "black");
    } else {
        $("#colourful-container").css("color", "white");
    }
    $("#next-button").css("background-color", colour);
    $("#colourful-container").css("background-color", colour);
    $("#colour-name").text(n_name);
    $("#colour-hex").text(n_rgb);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function lightOrDark(hex) {
    var c = hex.substring(1);      // strip #
    var rgb = parseInt(c, 16);   // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff;  // extract red
    var g = (rgb >>  8) & 0xff;  // extract green
    var b = (rgb >>  0) & 0xff;  // extract blue
    var hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
    );
    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {

        return 'light';
    } 
    else {

        return 'dark';
    }
    
}

