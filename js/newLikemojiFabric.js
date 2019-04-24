

var headerCanvas = new fabric.Canvas('headerCanvas',  {
  preserveObjectStacking: true});

var headerCanvasBig = new fabric.Canvas('headerCanvasBig',  {
  preserveObjectStacking: true});

var cat1Canvas = new fabric.Canvas('cat1Canvas',  {
  preserveObjectStacking: true});

var cat1CanvasBig; = new fabric.Canvas('cat1CanvasBig',  {
  preserveObjectStacking: true});

var cat2Canvas = new fabric.Canvas('cat2Canvas',  {
  preserveObjectStacking: true});

var cat2CanvasBig; = new fabric.Canvas('cat2CanvasBig',  {
  preserveObjectStacking: true});

var cat3Canvas = new fabric.Canvas('cat3Canvas',  {
  preserveObjectStacking: true});

var cat3CanvasBig; = new fabric.Canvas('cat3CanvasBig',  {
  preserveObjectStacking: true});

var cat4Canvas = new fabric.Canvas('cat4Canvas',  {
  preserveObjectStacking: true});

var cat4CanvasBig; = new fabric.Canvas('cat4CanvasBig',  {
  preserveObjectStacking: true});

const Theme = Parse.Object.extend("Theme");

var fabricLayout = theme.attributes.fabricLayout;
var colorWay = theme.attributes.colorWay;
var fabricFont = theme.attributes.font;

colorWay = {
	name: "ffffff"
	//background color for channel
	backgroundColor: "000000",
	//navbar color, upper buttons, and stars
	navbarColor: "ffffff",
	//accent color 1 for use in fabric layout objects
	accentColor1: "000000",
	//accent color 2 for use in fabric layout objects
	accentColor2: "ffffff",
	//accent color 3 for use in fabric layout objects
	accentColor3: "ffffff",
	//general text color in app channel and for use in layout objects
	textColor1: "000000",
	//secondary text color for use in layout objects
	textColor2: "ffffff",
	//third text color for use in layout objects
	textColor3: "000000"
};

function ColorWay(backgroundColor, navbarColor, accentColor1, accentColor2, textColor1, textColor2, textColor3) {
  this.backgroundColor = backgroundColor;
  this.navbarColor = navbarColor;
  this.accentColor1 = accentColor1;
  this.textColor1 = textColor1;
  this.textColor2 = textColor2;
  this.textColor3 = textColor3;
}

colorWay = {
	
	name: "ffffff"
	
	backgroundColor: "000000",
	
	navbarColor: "ffffff",
	
	accentColor1: "000000",
	//accent color 2 for use in fabric layout objects
	accentColor2: "ffffff",
	//general text color in app channel and for use in layout objects
	textColor1: "000000",
	//secondary text color for use in layout objects
	textColor2: "ffffff",
	//third text color for use in layout objects
	textColor3: "000000"
};


