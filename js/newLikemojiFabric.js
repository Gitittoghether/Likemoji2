var canvas = new fabric.Canvas('firstCanvas',  {
  preserveObjectStacking: true});


var canvas2 = new fabric.Canvas('secondCanvas',  {
  preserveObjectStacking: true});


var myimg = fabric.Image.fromURL("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80", function(img) {
	canvas.add(img);
	img.sendToBack();
	img.scaleToWidth(250);

   }, {
      crossorigin: 'Anonymous'
    });


var myimg2 = fabric.Image.fromURL("https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2246&q=80", function(img) {
	canvas2.add(img);
	img.sendToBack();
	img.scaleToWidth(250);
	img.center();

   }, {
      crossorigin: 'Anonymous'
    });


var name = '';
var name2 = '';
var fonts = ['Monoton','Bungee Inline','Staatliches','Overlock','Fredericka the Great','Black Ops One','Audiowide','Unica One'];
var font = fonts[0];
var order = 0;

$("#orgName").keyup(function() {

	name = $("#orgName").val();
	console.log(name);

	lineOne.set('text', name);
	rect.set('width', lineOne.width +20);
	rect.set('height', lineOne.height +10);
	group.set('width', lineOne.width +20);
	group.set('height', lineOne.height +10);

	canvas.renderAll();

});


$("#orgName2").keyup(function() {
name2 = $("#orgName2").val();
console.log(name);

lineTwo.set('text', name2);
rect2.set('width', lineTwo.width +20);
rect2.set('height', lineTwo.height +10);
group.set('width', lineTwo.width +20);
group.set('height', lineTwo.height +10);

canvas.renderAll();

});


$("#orgName2").change(function() {
name2 = $("#orgName2").val();

canvas.renderAll();

});


// ******************

function printy() {
	console.log ("printy")
};


var object1 = {

	name: [{
		first: "alex",
		last: "barrett"
	},{
		first: "amber",
		last: "barrett"
	}],
	age: 39
}

var name3 = 'test';
var name4 = 1;

// var headerCanvas = new fabric.Canvas('headerCanvas',  {
//   preserveObjectStacking: true});

// var headerCanvasBig = new fabric.Canvas('headerCanvasBig',  {
//   preserveObjectStacking: true});

// var cat1Canvas = new fabric.Canvas('cat1Canvas',  {
//   preserveObjectStacking: true});

// var cat1CanvasBig; = new fabric.Canvas('cat1CanvasBig',  {
//   preserveObjectStacking: true});

// var cat2Canvas = new fabric.Canvas('cat2Canvas',  {
//   preserveObjectStacking: true});

// var cat2CanvasBig; = new fabric.Canvas('cat2CanvasBig',  {
//   preserveObjectStacking: true});

// var cat3Canvas = new fabric.Canvas('cat3Canvas',  {
//   preserveObjectStacking: true});

// var cat3CanvasBig; = new fabric.Canvas('cat3CanvasBig',  {
//   preserveObjectStacking: true});

// var cat4Canvas = new fabric.Canvas('cat4Canvas',  {
//   preserveObjectStacking: true});

// var cat4CanvasBig; = new fabric.Canvas('cat4CanvasBig',  {
//   preserveObjectStacking: true});

// const Theme = Parse.Object.extend("Theme");

// var fabricLayout = theme.attributes.fabricLayout;
// var colorWay = theme.attributes.colorWay;
// var fabricFont = theme.attributes.font;
// var dog = "woof"
var colorWay = {
	name: "mohave",
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
	textColor1: "red",
	//secondary text color for use in layout objects
	textColor2: "ffffff",
	//third text color for use in layout objects
	textColor3: "000000"
};



var line0 = new fabric.Text("fabline",{


			
			
			top: -2,
			originX: 'center',
		    originY: 'center',
			fill: 'whitesmoke',
			fontFamily: font,
			fontSize: 24,


			});





		// canvas.add(line1);
		// line1.center()



function renderLayout(layoutName,colorWay,font) {

	for (var i = 0; i < layout.headline.length; i++) {

		console.log(layout.headline[i].line)

		// create ui input field

		// var line1 = new fabric.Text("hello",{

			

			line0.set('text', layout.headline[i].line);
			line0.set('top', layout.headline[i].top);
			line0.set('originX', layout.headline[i].originX);
			line0.set('originY', layout.headline[i].originY);
			line0.set('fill', layout.headline[i].fill);
			line0.set('fontFamily', layout.headline[i].fontFamily);
			line0.set('ffontSize', layout.headline[i].fontSize);



		
		// 	top: -2,
		// 	originX: 'center',
		//     originY: 'center',
		// 	fill: 'whitesmoke',
		// 	fontFamily: font,
		// 	fontSize: 24,


		// 	});



		canvas.add(line0);
		line0.center()

		console.log ("here")




		// var line + [i] = new fabric.Text(layout.headline[i].line) {
			
		};
	};





var layout = {
	name: "Awesome Co",
	//text layout
	headline: [
	{
		line: "Awesome",
		top: -2,
		originX: "center",
	    originY: "center",
		fill: colorWay.textColor1,
		fontFamily: font,
		fontSize: 24
	},{
		line: "Co",
		top: 32,
		originX: "center",
	    originY: "center",
		fill: colorWay.textColor1,
		fontFamily: font,
		fontSize: 24
	}],

	shapes: [
	{
		shape: "rect",
		top: -5,
		originX: "center",
	    originY: "center",
		fill: "accentColor2",
	},{
		shape: "rect",
		top: 30,
		originX: "center",
	    originY: "center",
		fill: "accentColor1",
		angle: -5
	}]


};



// function ColorWay(backgroundColor, navbarColor, accentColor1, accentColor2, textColor1, textColor2, textColor3) {
//   this.backgroundColor = backgroundColor;
//   this.navbarColor = navbarColor;
//   this.accentColor1 = accentColor1;
//   this.textColor1 = textColor1;
//   this.textColor2 = textColor2;
//   this.textColor3 = textColor3;
// }

// colorWay = {

// 	name: "ffffff"
	
// 	backgroundColor: "000000",
	
// 	navbarColor: "ffffff",
	
// 	accentColor1: "000000",
// 	//accent color 2 for use in fabric layout objects
// 	accentColor2: "ffffff",
// 	//general text color in app channel and for use in layout objects
// 	textColor1: "000000",
// 	//secondary text color for use in layout objects
// 	textColor2: "ffffff",
// 	//third text color for use in layout objects
// 	textColor3: "000000"
// };


