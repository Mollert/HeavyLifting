
const pythag = (a, c) => {
	return Math.sqrt((c * c)-(a * a));
}

const quadrad = (a, b, c) => {
	let sqroot = Math.sqrt((b * b)-(4 * a * c));
	return (((-1) * b) + sqroot) / (2 * a);
}

const width = window.innerWidth;
const workingWidth = ((Math.round(width / 10)+2) * 10);

const shortWidth = workingWidth * 0.3;
const longWidth = workingWidth * 0.7;


// ** Figures to find the shortHeight **

let aS = 1;
/* 
 shortHeight = 200 (which is the constant Height) - (32 (border thickness) * shortHypotenuse / shortWidth)
 Use pythagorean theorem
*/
let aSdenominator = (1024 / Math.pow(shortWidth, 2)) - 1;
/* 1024 = 32 (border thickness squared)
 the 1 is from subtracting one shortHypotenuse from both sides of the equation in order to create a zero on the left side which allows the use of the quadratic equation.
*/
let bSnumerator = -12800 / shortWidth;
// -12800 = -2(200 * 32/shortWidth)
let bS = bSnumerator / aSdenominator;
let cSnumerator = Math.pow(shortWidth, 2) + 40000;
// 40000 equals 200 squared
let cS = cSnumerator / aSdenominator;
const shortHypot = quadrad(aS, bS, cS);
// Once the hypotenuse is found, use the pythagorean theorem again
const shortHeight = Math.ceil(pythag(shortWidth, shortHypot));


// ** Figures to find the longHeight **

let aL = 1;
let aLdenominator = (1024 / Math.pow(longWidth, 2)) - 1;
let bLnumerator = -12800 / longWidth;
let bL = bLnumerator / aLdenominator;
let cLnumerator = Math.pow(longWidth, 2) + 40000;
let cL = cLnumerator / aLdenominator;
const longHypot = quadrad(aL, bL, cL);

const longHeight = Math.ceil(pythag(longWidth, longHypot));


/* ** Figuring the V offset **
 Using solutions of Oblique and right angled triangles
*/

const shortAngle = Math.atan(shortHeight / shortWidth);
const longAngle = Math.atan(longHeight / longWidth);
const vAngle = Math.PI - (shortAngle + longAngle);

let longSide = workingWidth * Math.sin(shortAngle) / Math.sin(vAngle);

const vOffsetX = Math.ceil(longSide * Math.cos(longAngle));
const vOffsetY = Math.ceil(longSide * Math.sin(longAngle));


// Obtains the height difference between the blue and the white . . . from the left side to the right . . . and the height at the V

const bWdif = 200 - longHeight;
const heightDif = longHeight - shortHeight;
const vHeight = 200 - vOffsetY;


// ** Loading up SVG view boxes and polygons **

// Top SVG
let blueViewBox = "0 0 " + workingWidth + " 200";
let bTopPoints = "0,0 " + vOffsetX + "," + vOffsetY + " " + workingWidth + ",0 " + workingWidth + ",200 0,200";

document.getElementById("bTopV").setAttribute("viewBox", blueViewBox);
document.getElementById("bTopP").setAttribute("points", bTopPoints);

let whiteViewBox = "0 0 " + workingWidth + " " + longHeight;
let wTopPoints = "0,0 " + longWidth + "," + longHeight + " " + workingWidth + "," + heightDif + " " + workingWidth + "," + longHeight + " 0," + longHeight;

document.getElementById("wTopV").setAttribute("viewBox", whiteViewBox);
document.getElementById("wTopP").setAttribute("points", wTopPoints);

// Bottom SVG
let bBottomPoints = "0,0 " + workingWidth + ",0 " + workingWidth + ",200 " + vOffsetX + "," + vHeight + " 0,200";

document.getElementById("bBottomV").setAttribute("viewBox", blueViewBox);
document.getElementById("bBottomP").setAttribute("points", bBottomPoints);

let wBottomPoints = "0,0 " + workingWidth + ",0 " + workingWidth + "," + shortHeight + " " + longWidth + ",0 0," + longHeight;

document.getElementById("wBottomV").setAttribute("viewBox", whiteViewBox);
document.getElementById("wBottomP").setAttribute("points", wBottomPoints);

