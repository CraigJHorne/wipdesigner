// svgGarment = "prorugbyshirt"; // Determined by garment option selected
//svgSleeve = "raglan"; // Determined by the design option selected
//svgBaseImage = ("assets/baseimages/" + svgGarment + "/" + svgSleeve + ".png"); // Determined by garment option selected and sleeve type of the design option selected
//svgBackground = "path d"; // Determined by garment option selected and sleeve type of the design option selected
//patternSelected = "pattern3"; // Determined by pattern option selected
//svgPattern = ("assets/patterns/" + svgGarment + "/" + svgSleeve + "/" patternSelected + ".png")// Determined by garment option selected and sleeve type of the design option selected and the pattern selected
//svgDesignPath1 = "path d"; // Determined by garment option and the design option selected
//svgDesignPath2 = "path d"; // Determined by garment option and the design option selected
//path1Tone = "d"; // Determined by whether color selected for path 1 is dark or light
//path2Tone = "d"; // Determined by whether color selected for path 2 is dark or light
//svgClub = "leedsrhinos"; // Determined by club option selected


/* Map Customised Garments to "design-pack Html element */


function mapGarments() {
	document.getElementById("design-pack").innerHTML = customisedGarments.map(customisedGarments => 
    `<h5 class="clicked" ref="${customisedGarments.ref}">${customisedGarments.type}</h5>
    <section>
	    <aside id="svg">
			<img id="svg__sponsors" src="${customisedGarments.sponsors}">
			<img id="svg__logos" src="${customisedGarments.logos}">
			<svg class="svg__design" viewBox="0 0 750 400">
				<path id="path-1" d="${customisedGarments.path1}" style="fill:#ffc629"/>
				<path id="path-2" d="${customisedGarments.path2}" style="fill:#ffffff"/>
			</svg>
			<img id="svg__pattern" src="${customisedGarments.pattern}">
			<svg class="svg__background" viewBox="0 0 750 400">
				<path id="path-background" d="${customisedGarments.pathBackground}" style="fill:#004a98"/>
			</svg>
			<img id="svg__baseimage" src="${customisedGarments.baseImage}">
		</aside>
	</section>`
).join('')
}

mapGarments() // map on load


/* Map Garments to edit to "design-edit" Html element */


function mapEdit(selectedDesign) {
	console.log(selectedDesign);
	document.getElementById("design-edit").innerHTML = 
    `<h5>${customisedGarments[selectedDesign].type}</h5>
    <section>
	    <aside id="svg">
			<img id="svg__sponsors" src="${customisedGarments[selectedDesign].sponsors}">
			<img id="svg__logos" src="${customisedGarments[selectedDesign].logos}">
			<svg class="svg__design" viewBox="0 0 750 400">
				<path id="path-1" d="${customisedGarments[selectedDesign].path1}" style="fill:#ffc629"/>
				<path id="path-2" d="${customisedGarments[selectedDesign].path2}" style="fill:#ffffff"/>
			</svg>
			<img id="svg__pattern" src="${customisedGarments[selectedDesign].pattern}">
			<svg class="svg__background" viewBox="0 0 750 400">
				<defs>
					<style>
					.	cls-2{fill:none}
					</style>
				</defs>
				<path id="path-background" d="${customisedGarments[selectedDesign].pathBackground}" style="fill:#004a98"/>
			</svg>
			<img id="svg__baseimage" src="${customisedGarments[selectedDesign].baseImage}">
		</aside>
	</section>
	<h5 id="edit-ref" ref="${customisedGarments[selectedDesign].ref}"></h5>`
}

/* Remove content from "design-edit" Html element */


function deleteEdit() {
	document.getElementById("design-edit").innerHTML = 
    ``
}

/* Notice when a mapped design is being clicked  */

function clickButton() {
let garmentClicked = document.getElementsByClassName("clicked"); //access design-pack element
for (let i = 0; i < garmentClicked.length; i++) { //workout which design-pack element was selected
		garmentClicked[i].onclick = designPackInfo; //operate 'designPackInfo' function on design-pack element press
		console.log("function")
	}
}

clickButton() // run on load

/* Function to Operate when design design-pack element is clicked  */

function designPackInfo(e) {
	let selectedDesign = e.target.getAttribute("ref"); //identify the ref of the garment clicked

	console.log("h")

	mapEdit(selectedDesign);
}










/* Notice when Design Button is Clicked  */

let htmlDesignButton = document.getElementsByClassName("design-button"); //access design-button element
for (let i = 0; i < htmlDesignButton.length; i++) { //so that it operates for all design-button elements
	htmlDesignButton[i].onclick = changeSvg; //operate 'changeSvg' function on any design-button element press
}

/* Function to Operate when design Button is clicked  */

function changeSvg(e) {
	let chosenDesign = e.target.getAttribute("ref"); //identify the ref of the design-button clicked
	let selectedDesign = document.getElementById("edit-ref");
	let selectedDesignRef = selectedDesign.getAttribute("ref");
	customisedGarments[selectedDesignRef].baseImage = designs[chosenDesign].baseImage; //change baseimage to the one from the selected design
	customisedGarments[selectedDesignRef].pathBackground = designs[chosenDesign].pathBackground; //change baackground path to the one from the selected design
	customisedGarments[selectedDesignRef].path1 = designs[chosenDesign].path1; //change path 1 to the one from the selected design
	customisedGarments[selectedDesignRef].path2 = designs[chosenDesign].path2; //change path 1 to the one from the selected design

	mapEdit(selectedDesignRef);
}

/* Notice when Reset Button is Clicked  */

let htmlResetButton = document.getElementsByClassName("reset-button"); //access reset-button element button
for (let i = 0; i < htmlResetButton.length; i++) { //workout which reset-button was selected
		htmlResetButton[i].onclick = resetSvg; //operate 'resetSvg' function on reset-button press
	}

/* Function to Operate when design Button is clicked  */

function resetSvg(e) {
	let selectedDesign = document.getElementById("edit-ref");
	let selectedDesignRef = selectedDesign.getAttribute("ref");
	customisedGarments[selectedDesignRef].baseImage = "assets/baseimages/empty.png"; //change baseimage to the one from the selected design
	customisedGarments[selectedDesignRef].pathBackground = ""; //change baackground path to the one from the selected design
	customisedGarments[selectedDesignRef].path1 = ""; //change path 1 to the one from the selected design
	customisedGarments[selectedDesignRef].path2 = ""; //change path 1 to the one from the selected design

	mapEdit(selectedDesignRef);
}

/* Notice when Save Button is Clicked  */

let saveButton = document.getElementsByClassName("save"); //access reset-button element button
for (let i = 0; i < saveButton.length; i++) { //workout which reset-button was selected
		saveButton[i].onclick = saveGarments; //operate 'resetSvg' function on reset-button press
	}

/* Function to Operate when design Button is clicked  */

function saveGarments(e) {
	mapGarments();
	deleteEdit();
	clickButton()
}





///* Access HTML Elements */

//let htmlBaseImage = document.getElementById("svg__baseimage"); //access svg_baseimage element in html file
//let htmlPathBackground = document.getElementById("path-background"); //access path_background element in html file
//let htmlPath1 = document.getElementById("path-1"); //access path-1 element in html file
//let htmlPath2 = document.getElementById("path-2"); //access path-2 element in html file

/* Notice when Design Button is Clicked  */

//let htmlDesignButton = document.getElementsByClassName("design-button"); //access design-button element
//for (let i = 0; i < htmlDesignButton.length; i++) { //so that it operates for all design-button elements
	//htmlDesignButton[i].onclick = changeSvg; //operate 'changeSvg' function on any design-button element press
//}

/* Function to Operate when design Button is clicked  */

//unction changeSvg(e) {
	//let chosenDesign = e.target.getAttribute("ref"); //identify the ref of the design-button clicked
	//let selectedDesign = document.getElementById("edit-ref");
	//selectedDesign = document.getElementById("edit-ref");
	//customisedGarments[selectedDesign].sponsors = designs[chosenDesign].baseImage; //change baseimage to the one from the selected design
	//htmlPathBackground.setAttribute("d", designs[chosenDesign].pathBackground); //change baackground path to the one from the selected design
	//htmlPath1.setAttribute("d", designs[chosenDesign].path1); //change path 1 to the one from the selected design
	//htmlPath2.setAttribute("d", designs[chosenDesign].path2); //change path 2 to the one from the selected design
//}

/* Notice when Reset Button is Clicked  */

//let htmlResetButton = document.getElementsByClassName("reset-button"); //access reset-button element button
//for (let i = 0; i < htmlResetButton.length; i++) { //workout which reset-button was selected
		//htmlResetButton[i].onclick = resetSvg; //operate 'resetSvg' function on reset-button press
	//}

/* Function to Operate when design Button is clicked  */

//function resetSvg(e) {
	//htmlBaseImage.setAttribute("src", "assets/baseimages/empty.png"); //change baseimage to default one
	//htmlPathBackground.setAttribute("d", ""); //change background path to default one
	//htmlPath1.setAttribute("d", ""); //change path 1 to default one
	//htmlPath2.setAttribute("d", ""); //change path 2 to default one
//}
