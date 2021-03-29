
let garmentEditing = designs[0].designs;
let tempSave = 0; //details of original design properties prioor to edit so edit can be cancelled
let output = [];


// Calculate number of each item and put into an array

function createArray() {
	let p = 0;
	let r = 0;
	let t = 0;
	let ps = 0;
	let oh = 0;
	output = [];
	for (let i = 0; i < customisedGarments.length; i++) { //workout which duplicate-button was selected
		if (customisedGarments[i].garmentType === "prorugbyshirt") {
			p++
       		output.push(p);
       	} else if (customisedGarments[i].garmentType === "replicarugbyshirt") {
       		r++
       		output.push(r);
        }  else if (customisedGarments[i].garmentType === "trainingtshirt") {
       		t++
       		output.push(t);
        } else if (customisedGarments[i].garmentType === "poloshirt") {
       		ps++
       		output.push(ps);
        } else if (customisedGarments[i].garmentType === "ohhoodie") {
       		oh++
       		output.push(oh);
        } else {
    	return output;
		}
	}
}

createArray() 


/* Map Club Options to modal */

function mapClubOptions() {
	document.getElementById("edit-club").innerHTML = clubs.map(clubs => 
    `<h5 class="button club-button" index="${clubs.index}">${clubs.name}</h5>`
).join('');
}

mapClubOptions() // map club on load

/* Map Garment Options to modal */

function mapGarmentOptions() {
	document.getElementById("edit-garment").innerHTML = designs.map(designs => 
    `<h5 class="button garment-button" ref="${designs.ref}" name="${designs.name}">${designs.name}</h5>`
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
    `<h5 class="button color-button" ref="${colors.ref}" option="colorBackground">${colors.pantone}</h5>`
).join('');
	document.getElementById("edit-color1").innerHTML = colors.map(colors => 
    `<h5 class="button color-button" ref="${colors.ref}" option="color1">${colors.pantone}</h5>`
).join('');
	document.getElementById("edit-color2").innerHTML = colors.map(colors => 
    `<h5 class="button color-button" ref="${colors.ref}" option="color2">${colors.pantone}</h5>`
).join('')
}

mapColorOptions() // map colors on load

/* Map Pattern Options to modal */

function mapPatternOptions() {
	document.getElementById("edit-pattern").innerHTML = patterns.map(patterns => 
    `<h5 class="button pattern-button" ref="${patterns.ref}">${patterns.name}</h5>`
).join('');
}

mapPatternOptions() // map patterns on load


/* Map Customised Garments to "design-pack Html element */


function mapCustomisedGarments() {
	let i = 0;
	document.getElementById("design-pack").innerHTML = customisedGarments.map(customisedGarments => 
    `<h4>${customisedGarments.garmentName} ${output[i]}</h4>
    <button class="edit-garment" ref="${i}" ${customisedGarments.ref = i} ${i++}>EDIT GARMENT</button><button class="delete" ref="${customisedGarments.ref}">DELETE GARMENT</button><button class="duplicate" ref="${customisedGarments.ref}">DUPLICATE GARMENT</button><button class="rearrange-up" ref="${customisedGarments.ref}">Move Up</button><button class="rearrange-down" ref="${customisedGarments.ref}">Move Down</button><button class="tech-garment" ref="${customisedGarments.ref}">TECH PACK</button>
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
    `<section>
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

/* Save current design so can revert back if cancelled */

function tempSaveAction(selectedDesign) {
	tempSave = 
	{
	ref: customisedGarments[selectedDesign].ref,
    garmentTypeRef: customisedGarments[selectedDesign].garmentTypeRef,
    garmentName: customisedGarments[selectedDesign].garmentName,
    garmentType: customisedGarments[selectedDesign].garmentType,
    clubIndex: customisedGarments[selectedDesign].clubIndex,
    club: customisedGarments[selectedDesign].club,
    sponsorsVersion: customisedGarments[selectedDesign].sponsorsVersion,
    sponsorsType: customisedGarments[selectedDesign].sponsorsType,
    designRef: customisedGarments[selectedDesign].designRef,
    design: customisedGarments[selectedDesign].design,
    path1: customisedGarments[selectedDesign].path1,
    path2: customisedGarments[selectedDesign].path2,
    patternRef: customisedGarments[selectedDesign].patternRef,
    pattern: customisedGarments[selectedDesign].pattern,
    pathBackground: customisedGarments[selectedDesign].pathBackground,
    baseImage: customisedGarments[selectedDesign].baseImage,
    colorBackground: customisedGarments[selectedDesign].colorBackground,
    color1: customisedGarments[selectedDesign].color1,
    color2: customisedGarments[selectedDesign].color2,
    colorBackgroundRef: customisedGarments[selectedDesign].colorBackgroundRef,
    color1Ref: customisedGarments[selectedDesign].color1Ref,
    color2Ref: customisedGarments[selectedDesign].color2Ref,
    toneBackground: customisedGarments[selectedDesign].toneBackground,
    tone1: customisedGarments[selectedDesign].tone1,
}


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

	tempSaveAction(selectedDesign);
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

	let chosenGarmentTypeName = e.target.getAttribute("name"); //identify the name of the garment-button clicked
	let chosenGarmentTypeRef = e.target.getAttribute("ref"); //identify the ref of the garment-button clicked
	let selectedDesign = document.getElementById("edit-ref"); //identify the garment loaded
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the item selected clicked

	let currentSettings = customisedGarments[selectedDesignRef]; // save current settings before editing anything
	let currentSettingsDesignRef = currentSettings.designRef; // save current Design before editing anything
	let currentSettingsPatternRef = currentSettings.patternRef; // save current Pattern before editing anything

	customisedGarments[selectedDesignRef].garmentName = chosenGarmentTypeName; // amend the garment ref to the new one
	customisedGarments[selectedDesignRef].garmentTypeRef = chosenGarmentTypeRef; // amend the garment ref to the new one
	customisedGarments[selectedDesignRef].garmentType = designs[chosenGarmentTypeRef].garment; // amend the garment to the new one

	let newGarmentType = designs[chosenGarmentTypeRef].garment; 

	let sleevesRef = designs[chosenGarmentTypeRef].designs[currentSettingsDesignRef].sleevesRef; //identify the sleeves ref for design
	
	customisedGarments[selectedDesignRef].sponsorsVersion = currentSettings.sponsorsVersion // keep existing sponsor version
	customisedGarments[selectedDesignRef].sponsorsType = designs[chosenGarmentTypeRef].designs[currentSettingsDesignRef].sponsorsType; // Change sponsor Type to the equivalent for this garment but same design
	customisedGarments[selectedDesignRef].design = designs[chosenGarmentTypeRef].designs[currentSettingsDesignRef].design; // Change design to the equivalent for this garment but same design
	customisedGarments[selectedDesignRef].path1 = designs[chosenGarmentTypeRef].designs[currentSettingsDesignRef].path1; // Change path 1 to the equivalent for this garment but same design
	customisedGarments[selectedDesignRef].path2 = designs[chosenGarmentTypeRef].designs[currentSettingsDesignRef].path2; // Change path 2 to the equivalent for this garment but same design
	customisedGarments[selectedDesignRef].pattern = patterns[currentSettingsPatternRef][newGarmentType][sleevesRef] // Change pattern to the equivalent for this garment but same pattern

	customisedGarments[selectedDesignRef].pathBackground = designs[chosenGarmentTypeRef].pathBackground[sleevesRef]; // amend pathBackground to the new one
	customisedGarments[selectedDesignRef].baseImage = designs[chosenGarmentTypeRef].baseImage[sleevesRef]; // amend baseImageto the new one

	let chosenOption = customisedGarments[selectedDesignRef].sponsorsVersion; //make the sponsorVersion used in the sponsorPathUpdate function the current one
	garmentEditing = designs[chosenGarmentTypeRef].designs;

	let itemNumber = 1;


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
	customisedGarments[selectedDesignRef].designRef = [chosenDesign]; //change designRef to the one from the selected design	
	customisedGarments[selectedDesignRef].sponsorsType = designs[garmentTypeRef].designs[chosenDesign].sponsorsType //change sponsorType to the one from the selected design
	currentPattern = customisedGarments[selectedDesignRef].patternRef; // identify current selected pattern for this design
	let currentPatternInfo = patterns[currentPattern]; //identify the full info of the pattern chosen
	let selectedDesignGarmentType = customisedGarments[selectedDesignRef]["garmentType"]; //identify the garment type of the design loaded
	let currentPatternSrc = currentPatternInfo[selectedDesignGarmentType][sleevesRef]; //identify the full info of the pattern chosen
	customisedGarments[selectedDesignRef].pattern = currentPatternSrc; //change src to the one from the selected pattern

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
	let chosenOptionRef = chosenOption + "Ref"
	customisedGarments[selectedDesignRef][chosenOption] = colors[chosenColor].hex; //change hex to the one from the selected color
	customisedGarments[selectedDesignRef][chosenTone] = colors[chosenColor].tone; //change hex to the one from the selected color
	customisedGarments[selectedDesignRef][chosenOptionRef] = chosenColor; //change hex to the one from the selected color

	mapEdit(selectedDesignRef);
}



/* Notice when Club Button is Clicked  */

let htmlClubButton = document.getElementsByClassName("club-button"); //access club-button element
for (let i = 0; i < htmlClubButton.length; i++) { //so that it operates for all club-button elements
	htmlClubButton[i].onclick = changeClub; //operate 'changeClub' function on any color-button element press
}

/* Function to Operate when Club Button is clicked  */

function changeClub(e) {
	let chosenClub= e.target.getAttribute("index"); //identify the ref of the club-button clicked
	let selectedDesign = document.getElementById("edit-ref"); //identify the design loaded
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the design-button clicked
	customisedGarments[selectedDesignRef].club = clubs[chosenClub].ref; //change club to the one from the selected club
	customisedGarments[selectedDesignRef].clubIndex = chosenClub; //change club to the one from the selected club

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
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the design loaded
	let selectedDesignGarmentType = customisedGarments[selectedDesignRef]["garmentType"]; //identify the garment type of the design loaded
	let garmentTypeRef = customisedGarments[selectedDesignRef].garmentTypeRef; //identify the current chosen design
	let chosenDesign = customisedGarments[selectedDesignRef].design; //identify the current chosen design\
	let sleevesRef = designs[garmentTypeRef].designs[chosenDesign].sleevesRef; //identify the sleeves ref for the type of garment we are editing
	let chosenPatternInfo = patterns[chosenPattern]; //identify the full info of the pattern chosen
	let chosenPatternSrc = chosenPatternInfo[selectedDesignGarmentType][sleevesRef]; //identify the full info of the pattern chosen

	customisedGarments[selectedDesignRef].pattern = chosenPatternSrc; //change src to the one from the selected pattern
	customisedGarments[selectedDesignRef].patternRef = chosenPattern; //change pattern ref to the one from the selected pattern

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


	let selectedClub = customisedGarments[selectedDesignRef].club; //set club selected
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
	createArray()
	mapCustomisedGarments();
	techButton();
	deleteEdit();
	editButton();
	deleteButton();
	duplicateButton();
	rearrangeUpButton();
	rearrangeDownButton();
	var modal = document.getElementById("modal"); //access modal element
	modal.style.display = "none"; //make modal invisible
}

/* Notice when Cancel Button is Clicked  */

let cancelButton = document.getElementsByClassName("cancel"); //access cancel-button element button
for (let i = 0; i < cancelButton.length; i++) { //workout which cancel-button was selected
		cancelButton[i].onclick = cancelGarments; //operate 'saveGarments' function on reset-button press
	}

/* Notice when outside the modal is Clicked and cancel  */

var modal = document.getElementById("modal"); // get the modal

// operate cancel function when outside the modal is clicked.
window.onclick = function(event) { 
  if (event.target == modal) {
    cancelGarments();
  }
}

/* Function to Operate when cancel Button is clicked  */

function cancelGarments(e) {
	let selectedDesign = document.getElementById("edit-ref"); //identify the garment loaded
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the item selected design

	customisedGarments[selectedDesignRef] = tempSave; //revert selected design to pre edit properties

	mapCustomisedGarments();
	techButton();
	deleteEdit();
	editButton();
	deleteButton();
	duplicateButton();
	rearrangeUpButton();
	rearrangeDownButton();
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
	    garmentName: designs[0].name,
	    garmentType: designs[0].garment,
	    clubIndex: 0,
	    club: "noclub",
	    sponsorsVersion:"logos",
	    sponsorsType: designs[0].designs[0].sponsorsType,
	    designRef: 0,
	    design: designs[0].designs[0].design,
	    path1: designs[0].designs[0].path1,
	    path2: designs[0].designs[0].path2,
	    patternRef: 0,
	    pattern:"",
	    pathBackground: designs[0].pathBackground[0],
	    baseImage: designs[0].baseImage[0],
	    colorBackground: "#000000",
	    color1: "#FFFFFF",
	    color2: "#004a98",
	    colorBackgroundRef: 0,
    	color1Ref: 1,
    	color2Ref: 2,
	    toneBackground: "dark",
	    tone1: "light",
		});
	createArray()
	mapCustomisedGarments();
	techButton();
	editButton();
	deleteButton();
	duplicateButton();
	rearrangeUpButton();
	rearrangeDownButton();
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

	createArray()
	mapCustomisedGarments();
	techButton();
	deleteButton();
	duplicateButton();
	rearrangeUpButton();
	rearrangeDownButton();
	editButton();
}


/* Notice when Duplicate Button is Clicked  */

function duplicateButton() {
let garmentDuplicate = document.getElementsByClassName("duplicate"); //access duplicate-button element button
for (let i = 0; i < garmentDuplicate.length; i++) { //workout which duplicate-button was selected
		garmentDuplicate[i].onclick = duplicateGarment; //operate 'duplicateGarment' function on reset-button press
	}
}

duplicateButton() //run deleteButton function on page load

/* Function to Operate when duplicate Button is clicked  */

function duplicateGarment(e) {
	let selectedDesign = e.target.getAttribute("ref"); //identify the ref of the garment clicked
	let refNumber = customisedGarments.length;
	customisedGarments.push(
		{
	    ref: refNumber,
	    garmentTypeRef: customisedGarments[selectedDesign].garmentTypeRef,
	    garmentName: customisedGarments[selectedDesign].garmentName,
	    garmentType: customisedGarments[selectedDesign].garmentType,
	    clubIndex: customisedGarments[selectedDesign].clubIndex,
	    club: customisedGarments[selectedDesign].club,
	    sponsorsVersion: customisedGarments[selectedDesign].sponsorsVersion,
	    sponsorsType: customisedGarments[selectedDesign].sponsorsType,
	    designRef: customisedGarments[selectedDesign].designRef,
	    design: customisedGarments[selectedDesign].design,
	    path1: customisedGarments[selectedDesign].path1,
	    path2: customisedGarments[selectedDesign].path2,
	    patternRef: customisedGarments[selectedDesign].patternRef,
	    pattern: customisedGarments[selectedDesign].pattern,
	    pathBackground: customisedGarments[selectedDesign].pathBackground,
	    baseImage: customisedGarments[selectedDesign].baseImage,
	    colorBackground: customisedGarments[selectedDesign].colorBackground,
	    color1: customisedGarments[selectedDesign].color1,
	    color2: customisedGarments[selectedDesign].color2,
	    colorBackgroundRef: customisedGarments[selectedDesign].colorBackgroundRef,
   		color1Ref: customisedGarments[selectedDesign].color1Ref,
    	color2Ref: customisedGarments[selectedDesign].color2Ref,
	    toneBackground: customisedGarments[selectedDesign].toneBackground,
	    tone1: customisedGarments[selectedDesign].tone1,
		});

	createArray()
	mapCustomisedGarments();
	techButton();
	editButton();
	deleteButton();
	duplicateButton();
	rearrangeUpButton();
	rearrangeDownButton();
	rearrangeDownButton();
}

/* Notice when Rearrange Up Button is Clicked  */

function rearrangeUpButton() {
let moveUp = document.getElementsByClassName("rearrange-up"); //access rearrangeup-button element button
for (let i = 0; i < moveUp.length; i++) { //workout which rearrangeup-button was selected
		moveUp[i].onclick = rearrangeUp; //operate 'rearrangeUp' function on reset-button press
	}
}

rearrangeUpButton() //run rearrangeUpButton function on page load

/* Function to Operate when rearrange up Button is clicked  */

function rearrangeUp(e) {
	let selectedDesign = e.target.getAttribute("ref"); //identify the ref of the garment clicked
	let currentPosition = parseInt(selectedDesign, 10); //make design ref a number
	let newPosition = currentPosition - 1; // identify the ref for one position up

	if (newPosition < 0) { //find out if the new position is lower than 0
		newPosition = 0; // if it is make the new positon 0 which is the current position
	}

	customisedGarments.splice(newPosition, 0, customisedGarments.splice(currentPosition, 1)[0]); // change the position

	createArray()
	mapCustomisedGarments();
	techButton();
	editButton();
	deleteButton();
	duplicateButton();
	rearrangeUpButton();
	rearrangeDownButton();
}


/* Notice when Rearrange Down Button is Clicked  */

function rearrangeDownButton() {
let moveDown = document.getElementsByClassName("rearrange-down"); //access rearrangedown-button element button
for (let i = 0; i < moveDown.length; i++) { //workout which rearrangedown-button was selected
		moveDown[i].onclick = rearrangeDown; //operate 'rearrangeDown' function on reset-button press
	}
}

rearrangeDownButton() //run rearrangeDownButton function on page load

/* Function to Operate when rearrange down Button is clicked  */

function rearrangeDown(e) {
	let selectedDesign = e.target.getAttribute("ref"); //identify the ref of the garment clicked
	let currentPosition = parseInt(selectedDesign, 10); //make design ref a number
	let newPosition = currentPosition + 1; // identify the ref for one position down
	let maxPosition = customisedGarments.length; //identify how many items in the array

	if (newPosition > maxPosition) { //find out if the new position is higher than the max position
		newPosition = maxPosition; // if it is make the new positon the bighest position which is its current position
	}

	customisedGarments.splice(newPosition, 0, customisedGarments.splice(currentPosition, 1)[0]);

	createArray()
	mapCustomisedGarments();
	techButton();
	editButton();
	deleteButton();
	duplicateButton();
	rearrangeUpButton();
	rearrangeDownButton();
}