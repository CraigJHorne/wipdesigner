garmentEditing = designs[0].designs;


/* Map Garment Options to modal */

function mapGarmentOptions() {
	document.getElementById("edit-garment").innerHTML = designs.map(designs => 
    `<h5 class="button garment-button" ref="${designs.ref}">${designs.name}</h5>`
).join('');
}

mapGarmentOptions() // map colors on load

/* MapDesign Options to modal */

function mapDesignOptions() {
	document.getElementById("edit-design").innerHTML = garmentEditing.map(garmentEditing => 
    `<h5 class="button design-button" ref="${garmentEditing.design}">Design ${garmentEditing.design + 1}</h5>`
).join('');
}

mapDesignOptions() // map design options on load

/* Map Color Options to modal */

function mapColorOptions() {
	document.getElementById("edit-colorBackground").innerHTML = colors.map(colors => 
    `<h5 class="button color-button" ref="${colors.ref}" option="colorBackground">BG Color ${colors.ref + 1}</h5>`
).join('');
	document.getElementById("edit-color1").innerHTML = colors.map(colors => 
    `<h5 class="button color-button" ref="${colors.ref}" option="color1">A Color ${colors.ref + 1}</h5>`
).join('');
	document.getElementById("edit-color2").innerHTML = colors.map(colors => 
    `<h5 class="button color-button" ref="${colors.ref}" option="color2">B Color ${colors.ref + 1}</h5>`
).join('')
}

mapColorOptions() // map colors on load


/* Map Customised Garments to "design-pack Html element */


function mapCustomisedGarments() {
	let i = 0;
	document.getElementById("design-pack").innerHTML = customisedGarments.map(customisedGarments => 
    `<h4 class="edit-garment" ref="${i}" ${customisedGarments.ref = i} ${i++}>${customisedGarments.garmentType}</h4><button class="delete" ref="${customisedGarments.ref}">DELETE GARMENT</button>
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

mapCustomisedGarments() // map on load


/* Map Garments to edit to "design-edit" Html element */


function mapEdit(selectedDesign) {
	document.getElementById("design-edit").innerHTML = 
    `<h4>${customisedGarments[selectedDesign].garmentType}</h4>
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



/* Notice when Design Button is Clicked  */

function editDesignOptions() {
let htmlDesignButton = document.getElementsByClassName("design-button"); //access design-button element
for (let i = 0; i < htmlDesignButton.length; i++) { //so that it operates for all design-button elements
	htmlDesignButton[i].onclick = changeDesign; //operate 'changeDesign' function on any design-button element press
	}
}

editDesignOptions() // run on load



/* Edit paths based on sponsors Version  */

function sponsorsPathUpdate(chosenOption, selectedDesignRef) {
	let garmentTypeRef = customisedGarments[selectedDesignRef].garmentTypeRef; //identify the current chosen design
	let chosenDesign = customisedGarments[selectedDesignRef].design; //identify the current chosen design\

	if (chosenOption === "sponsors") {
		if (designs[garmentTypeRef].designs[chosenDesign].path1Break === "") { //do nothing if there isn;t an alternative broken path version
		} else {
			customisedGarments[selectedDesignRef].path1 = designs[garmentTypeRef].designs[chosenDesign].path1Break; // use broken path version
			customisedGarments[selectedDesignRef].path2 = designs[garmentTypeRef].designs[chosenDesign].path2Break; // use broken path version
		}
	} else if (chosenOption === "logos" || 'none') {
		customisedGarments[selectedDesignRef].path1 = designs[garmentTypeRef].designs[chosenDesign].path1; // use unbroken path version
			customisedGarments[selectedDesignRef].path2 = designs[garmentTypeRef].designs[chosenDesign].path2; // use unbroken path version
		}
}

/* Notice when Garment Button is Clicked  */

let htmlGarmentButton = document.getElementsByClassName("garment-button"); //access garment-button element
for (let i = 0; i < htmlGarmentButton.length; i++) { //so that it operates for all garment-button elements
	htmlGarmentButton[i].onclick = changeGarment; //operate 'changeGarment' function on any garment-button element press
}

/* Function to Operate when garment Button is clicked  */

function changeGarment(e) {
	let chosenGarmentTypeRef = e.target.getAttribute("ref"); //identify the ref of the garment-button clicked
	let selectedDesign = document.getElementById("edit-ref"); //identify the garment loaded
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the item selected clicked
	let sleevesRef = designs[chosenGarmentTypeRef].designs[0].sleevesRef; //identify the sleeves ref for the type of garment we are editing
	customisedGarments[selectedDesignRef].garmentTypeRef = chosenGarmentTypeRef; // amend the garment ref to the new one
	customisedGarments[selectedDesignRef].garmentType = designs[chosenGarmentTypeRef].garment; // amend the garment to the new one
	customisedGarments[selectedDesignRef].sponsorsVersion = "logos" // make sponsor version "logos"
	customisedGarments[selectedDesignRef].sponsorsType = designs[chosenGarmentTypeRef].designs[0].sponsorsType; // amend the sponsor type to the new one
	customisedGarments[selectedDesignRef].design = designs[chosenGarmentTypeRef].designs[0].design; // amend the design to the new one
	customisedGarments[selectedDesignRef].path1 = designs[chosenGarmentTypeRef].designs[0].path1; // amend path1 to the new one
	customisedGarments[selectedDesignRef].path2 = designs[chosenGarmentTypeRef].designs[0].path2; // amend path1 to the new one
	customisedGarments[selectedDesignRef].pattern = "" // remove any patterns
	customisedGarments[selectedDesignRef].pathBackground = designs[chosenGarmentTypeRef].pathBackground[sleevesRef]; // amend pathBackground to the new one
	customisedGarments[selectedDesignRef].baseImage = designs[chosenGarmentTypeRef].baseImage[sleevesRef]; // amend pathBackground to the new one


	let chosenOption = customisedGarments[selectedDesignRef].sponsorsVersion; //make the sponsorVersion used in the sponsorPathUpdate function the current one
	garmentEditing = designs[chosenGarmentTypeRef].designs;


	sponsorsPathUpdate(chosenOption, selectedDesignRef);
	mapDesignOptions();
	editDesignOptions()
	mapEdit(selectedDesignRef);
}

/* Function to Operate when design Button is clicked  */

function changeDesign(e) {
	let chosenDesign = e.target.getAttribute("ref"); //identify the ref of the design-button clicked
	let selectedDesign = document.getElementById("edit-ref"); //identify the design loaded
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the design clicked
	let garmentTypeRef = customisedGarments[selectedDesignRef].garmentTypeRef; //identify the garment ref for the type of garment we are editing
	let sleevesRef = designs[garmentTypeRef].designs[chosenDesign].sleevesRef; //identify the sleeves ref for the type of garment we are editing
	customisedGarments[selectedDesignRef].baseImage = designs[garmentTypeRef].baseImage[sleevesRef]; //change baseimage to the one from the selected design
	customisedGarments[selectedDesignRef].pathBackground = designs[garmentTypeRef].pathBackground[sleevesRef]; //change baackground path to the one from the selected design
	customisedGarments[selectedDesignRef].path1 = designs[garmentTypeRef].designs[chosenDesign].path1; //change path 1 to the one from the selected design
	customisedGarments[selectedDesignRef].path2 = designs[garmentTypeRef].designs[chosenDesign].path2; //change path 2 to the one from the selected design
	customisedGarments[selectedDesignRef].design = designs[garmentTypeRef].designs[chosenDesign].design; //change design to the one from the selected design
	customisedGarments[selectedDesignRef].sponsorsType = designs[garmentTypeRef].designs[chosenDesign].sponsorsType //change sponsorType to the one from the selected design

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


	let selectedClub = "leedsrhinos"; //set club selected
	let noClub = "noclub"; //set no club

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

let saveButton = document.getElementsByClassName("save"); //access save-button element button
for (let i = 0; i < saveButton.length; i++) { //workout which save-button was selected
		saveButton[i].onclick = saveGarments; //operate 'saveGarments' function on reset-button press
	}

/* Function to Operate when save Button is clicked  */

function saveGarments(e) {
	mapCustomisedGarments();
	deleteEdit();
	editButton();
	deleteButton();
	var modal = document.getElementById("modal"); //access modal element
	modal.style.display = "none"; //make modal invisible
}


/* Notice when Add Button is Clicked  */

let addButton = document.getElementsByClassName("add"); //access add-button element button
for (let i = 0; i < addButton.length; i++) { //workout which add-button was selected
		addButton[i].onclick = addGarment; //operate 'addGarment' function on reset-button press
	}

/* Function to Operate when add Button is clicked  */

function addGarment(e) {
	let refNumber = customisedGarments.length;
	customisedGarments.push(
		{
	    ref: refNumber,
	    garmentTypeRef: 0,
	    garmentType: designs[0].garment,
	    club: "leedsrhinos",
	    sponsorsVersion:"sponsors",
	    sponsorsType: designs[0].designs[0].sponsorsType,
	    design: designs[0].designs[0].design,
	    path1: designs[0].designs[0].path1,
	    path2: designs[0].designs[0].path2,
	    pattern:"",
	    pathBackground: designs[0].pathBackground[0],
	    baseImage: designs[0].baseImage[0],
	    colorBackground: "#08253d",
	    color1: "#ffc629",
	    color2: "#505e28",
	    toneBackground: "dark",
	    tone1: "light",
		});
	mapCustomisedGarments();
	editButton();
	deleteButton();
}

/* Notice when Delete Button is Clicked  */

function deleteButton() {
let garmentDelete = document.getElementsByClassName("delete"); //access delete-button element button
for (let i = 0; i < garmentDelete.length; i++) { //workout which delete-button was selected
		garmentDelete[i].onclick = deleteGarment; //operate 'deleteGarment' function on reset-button press
	}
}

deleteButton() //run deleteButton function on page load

/* Function to Operate when delete Button is clicked  */

function deleteGarment(e) {
	let selectedDesign = e.target.getAttribute("ref"); //identify the ref of the garment clicked

	selectedDesign > -1 ? customisedGarments.splice(selectedDesign, 1) : false;

	console.log(customisedGarments);

	mapCustomisedGarments();
	deleteButton();
	editButton();
}