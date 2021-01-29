
let selectedClub = "leedsrhinos"; //set club selected
let noClub = "noclub"; //set no club


/* Map Customised Garments to "design-pack Html element */

function mapGarments() {
	document.getElementById("design-pack").innerHTML = customisedGarments.map(customisedGarments => 
    `<h5 class="edit-garment" ref="${customisedGarments.ref}">${customisedGarments.garmentType}</h5>
    <section>
	    <aside id="svg">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + customisedGarments.sponsorsType +  customisedGarments.toneBackground  + customisedGarments.tone1 + ".svg")}">
			<svg class="svg__design" viewBox="0 0 750 400">
				<path id="path-1" d="${customisedGarments.path1}" style="fill:${customisedGarments.color1}"/>
				<path id="path-2" d="${customisedGarments.path2}" style="fill:${customisedGarments.color2}"/>
			</svg>
			<img id="svg__pattern" src="${customisedGarments.pattern}">
			<svg class="svg__background" viewBox="0 0 750 400">
				<path id="path-background" d="${customisedGarments.pathBackground}" style="fill:${customisedGarments.colorBackground}"/>
			</svg>
			<img id="svg__baseimage" src="${customisedGarments.baseImage}">
		</aside>
	</section>`
).join('')
}

mapGarments() // map on load


/* Map Garments to edit to "design-edit" Html element */


function mapEdit(selectedDesign) {
	document.getElementById("design-edit").innerHTML = 
    `<h5>${customisedGarments[selectedDesign].garmentType}</h5>
    <section>
	    <aside id="svg">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments[selectedDesign].sponsorsVersion + "/" + customisedGarments[selectedDesign].garmentType + "/" + customisedGarments[selectedDesign].club + "/" + customisedGarments[selectedDesign].sponsorsType +  customisedGarments[selectedDesign].toneBackground  + customisedGarments[selectedDesign].tone1 + ".svg")}">
			<svg class="svg__design" viewBox="0 0 750 400">
				<path id="path-1" d="${customisedGarments[selectedDesign].path1}" style="fill:${customisedGarments[selectedDesign].color1}"/>
				<path id="path-2" d="${customisedGarments[selectedDesign].path2}" style="fill:${customisedGarments[selectedDesign].color2}"/>
			</svg>
			<img id="svg__pattern" src="${customisedGarments[selectedDesign].pattern}">
			<svg class="svg__background" viewBox="0 0 750 400">
				<defs>
					<style>
					.	cls-2{fill:none}
					</style>
				</defs>
				<path id="path-background" d="${customisedGarments[selectedDesign].pathBackground}" style="fill:${customisedGarments[selectedDesign].colorBackground}"/>
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

function editButton() {
let garmentEdit = document.getElementsByClassName("edit-garment"); //access design-pack element
for (let i = 0; i < garmentEdit.length; i++) { //workout which design-pack element was selected
		garmentEdit[i].onclick = garmentEditLoad; //operate 'designPackInfo' function on design-pack element press

	}
}

editButton() // run on load

/* Function to Operate when design design-pack element is clicked  */

function garmentEditLoad(e) {
	let selectedDesign = e.target.getAttribute("ref"); //identify the ref of the garment clicked

	mapEdit(selectedDesign);

	var modal = document.getElementById("modal"); //access modal element
	modal.style.display = "block"; //make modal visible
}



/* Edit paths based on sponsors Version  */

function sponsorsPathUpdate(chosenOption, selectedDesignRef) {
	let chosenDesign = customisedGarments[selectedDesignRef].design; //identify the current chosen design

	if (chosenOption === "sponsors") {
		if (designs[chosenDesign].path1Break === "") { //do nothing if there isn;t an alternative broken path version
		} else {
			customisedGarments[selectedDesignRef].path1 = designs[chosenDesign].path1Break; // use broken path version
			customisedGarments[selectedDesignRef].path2 = designs[chosenDesign].path2Break; // use broken path version
		}
	} else if (chosenOption === "logos" || 'none') {
		customisedGarments[selectedDesignRef].path1 = designs[chosenDesign].path1; // use unbroken path version
			customisedGarments[selectedDesignRef].path2 = designs[chosenDesign].path2; // use unbroken path version
		}
}




/* Notice when Design Button is Clicked  */

let htmlDesignButton = document.getElementsByClassName("design-button"); //access design-button element
for (let i = 0; i < htmlDesignButton.length; i++) { //so that it operates for all design-button elements
	htmlDesignButton[i].onclick = changeDesign; //operate 'changeDesign' function on any design-button element press
}

/* Function to Operate when design Button is clicked  */

function changeDesign(e) {
	let chosenDesign = e.target.getAttribute("ref"); //identify the ref of the design-button clicked
	let selectedDesign = document.getElementById("edit-ref"); //identify the design loaded
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the design-button clicked
	customisedGarments[selectedDesignRef].baseImage = designs[chosenDesign].baseImage; //change baseimage to the one from the selected design
	customisedGarments[selectedDesignRef].pathBackground = designs[chosenDesign].pathBackground; //change baackground path to the one from the selected design
	customisedGarments[selectedDesignRef].path1 = designs[chosenDesign].path1; //change path 1 to the one from the selected design
	customisedGarments[selectedDesignRef].path2 = designs[chosenDesign].path2; //change path 2 to the one from the selected design
	customisedGarments[selectedDesignRef].design = designs[chosenDesign].design; //change design to the one from the selected design
	customisedGarments[selectedDesignRef].sponsorsType = designs[chosenDesign].sponsorsType //change sponsorType to the one from the selected design
	
	let chosenOption = customisedGarments[selectedDesignRef].sponsorsVersion; //make the sponsorVersion used in the sponsorPathUpdate function the current one

	sponsorsPathUpdate(chosenOption, selectedDesignRef);
	mapEdit(selectedDesignRef);
}

/* Notice when Color Button is Clicked  */

let htmlColorButton = document.getElementsByClassName("color-button"); //access color-button element
for (let i = 0; i < htmlColorButton.length; i++) { //so that it operates for all color-button elements
	htmlColorButton[i].onclick = changeColor; //operate 'changeCOlor' function on any color-button element press
}

/* Function to Operate when Color Button is clicked  */

function changeColor(e) {
	let chosenColor = e.target.getAttribute("ref"); //identify the ref of the color-button clicked
	let chosenOption = e.target.getAttribute("option"); //identify the option of the color-button clicked
	let chosenTone = chosenOption.replace("color","tone"); // turn "colorX" into "toneX"
	let selectedDesign = document.getElementById("edit-ref"); //identify the design loaded
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the design-button clicked
	customisedGarments[selectedDesignRef][chosenOption] = colors[chosenColor].hex; //change hex to the one from the selected color
	customisedGarments[selectedDesignRef][chosenTone] = colors[chosenColor].tone; //change hex to the one from the selected color


	mapEdit(selectedDesignRef);
}

/* Notice when Pattern Button is Clicked  */

let htmlPatternButton = document.getElementsByClassName("pattern-button"); //access pattern-button element
for (let i = 0; i < htmlPatternButton.length; i++) { //so that it operates for all pattern-button elements
	htmlPatternButton[i].onclick = changePattern; //operate 'changePattern' function on any pattern-button element press
}

/* Function to Operate when Pattern Button is clicked  */

function changePattern(e) {
	let chosenPattern = e.target.getAttribute("ref"); //identify the ref of the pattern-button clicked
	let selectedDesign = document.getElementById("edit-ref"); //identify the design loaded
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the design-button clicked
	customisedGarments[selectedDesignRef].pattern = patterns[chosenPattern].src; //change src to the one from the selected pattern

	mapEdit(selectedDesignRef);
}


/* Notice when Sponsors Button is Clicked  */

let htmlSponsorsButton = document.getElementsByClassName("sponsors-button"); //access sponsors-button element
for (let i = 0; i < htmlSponsorsButton.length; i++) { //so that it operates for all sponsors-button elements
	htmlSponsorsButton[i].onclick = changeSponsors; //operate 'changeSponsors' function on any sponors-button element press
}

/* Function to Operate when Sponsors Button is clicked  */

function changeSponsors(e) {
	let chosenOption = e.target.getAttribute("option"); //identify the option of the sponsors-button clicked
	let selectedDesign = document.getElementById("edit-ref"); //identify the design loaded
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the design-button clicked
	customisedGarments[selectedDesignRef].sponsorsVersion = chosenOption; //change sponors version to the one from the selected sponors-button

	if (chosenOption === "none") {
		customisedGarments[selectedDesignRef].club = noClub;
		chosenOption = "logos";
		customisedGarments[selectedDesignRef].sponsorsVersion = chosenOption;
	} else {
		customisedGarments[selectedDesignRef].club = selectedClub;
	}

	sponsorsPathUpdate(chosenOption, selectedDesignRef);
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
	editButton();
	var modal = document.getElementById("modal"); //access modal element
	modal.style.display = "none"; //make modal invisible
}


