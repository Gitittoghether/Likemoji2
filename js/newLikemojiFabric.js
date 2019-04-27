// $( document ).ready(function() {
//     testRender()
// });


	var canvas = new fabric.Canvas('firstCanvas',  {
  preserveObjectStacking: true});



fabric.Image.fromURL("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80", function(img) {
	canvas.add(img);
	img.sendToBack();
	img.scaleToWidth(250);

   }, {
      crossorigin: 'Anonymous'
    });







fabric.Image.fromURL("https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2246&q=80", function(img) {
	canvas2.add(img);
	img.sendToBack();
	img.scaleToWidth(250);
	img.center();

   }, {
      crossorigin: 'Anonymous'
    });


// var name = '';
// var name2 = '';
var fonts = ['Monoton','Bungee Inline','Staatliches','Overlock','Fredericka the Great','Black Ops One','Audiowide','Unica One'];
var font = fonts[0];
// var order = 0;

$("#orgName").keyup(function() {

	name = $("#orgName").val();
	console.log(name);

	canvas._objects[1].text = name

	// lineOne.set('text', name);
	// rect.set('width', lineOne.width +20);
	// rect.set('height', lineOne.height +10);
	// group.set('width', lineOne.width +20);
	// group.set('height', lineOne.height +10);

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
	textColor1: "blue",
	//secondary text color for use in layout objects
	textColor2: "ffffff",
	//third text color for use in layout objects
	textColor3: "000000"
};



// var line0 = new fabric.Text("");

var lineText0 = "";
var lineText2 = "";
var lineText3 = "";


function renderLayout(layoutName,colorWay,font) {



	for (var i = 0; i < layout.headline.length; i++) {

		// need to create ui input field

		var line = new fabric.Text("");

		var keys = Object.keys(layout.headline[i])
		console.log(keys);

		var values = Object.values(layout.headline[i])
		console.log(values);

			for (var j = 0; j < keys.length; j++) {


				line.set(keys[j], values[j]);

			};

			//extends to object method to add name property to object


			line.toObject = (function(toObject) {
			  return function() {
			    return fabric.util.object.extend(toObject.call(this), {
			      name: this.name
			    });
			  };
			})(line.toObject);

		canvas.add(line);
	
		line.centerH()
		line.name = layout.headline[i].name;

		canvas.renderAll();
		
			
		};
	};



//don't forget about canvas to and from json method to save layouts soon.

var layout = {
	name: "Awesome Co",
	//text layout
	headline: [
	{
		name: "line0",
		text: "Awesome",
		top: 20,
		originX: "center",
	    originY: "center",
		fill: colorWay.textColor1,
		fontFamily: font,
		fontSize: 24,
		selectable: false
	},{
		name: "frank",
		text: "Co",
		top: 50,
		originX: "center",
	    originY: "center",
		fill: colorWay.textColor1,
		fontFamily: font,
		fontSize: 24,
		selectable: false
	}],

	shapes: [
	{
		shape: "rect",
		top: 20,
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


	$("#export").click(function() {
		console.log("clicked export");
		

		$("#firstCanvas").get(0).toBlob(function(blob) {
			saveAs(blob, "testexport");
		})

	});




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


