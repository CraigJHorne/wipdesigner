
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
    `<h5 class="button club-button modal-button" index="${clubs.index}">${clubs.name}</h5>`
).join('');
}

mapClubOptions() // map club on load

/* Map Garment Options to modal */

function mapGarmentOptions() {
	document.getElementById("edit-garment").innerHTML = designs.map(designs => 
    `<h5 class="button garment-button modal-button" ref="${designs.ref}" name="${designs.name}">${designs.name}</h5>`
).join('');
}

mapGarmentOptions() // map colors on load

/* MapDesign Options to modal */

function mapDesignOptions() {
	document.getElementById("edit-design").innerHTML = garmentEditing.map(garmentEditing => 
    `<h5 class="button design-button modal-button" ref="${garmentEditing.design}">Design ${garmentEditing.design + 1}</h5>`
).join('');
}

mapDesignOptions() // map design options on load

/* Map Color Options to modal */

function mapColorOptions() {
	document.getElementById("edit-colorBackground").innerHTML = colors.map(colors => 
    `<h5 class="button color-button modal-button" ref="${colors.ref}" option="colorBackground">${colors.pantone}</h5>`
).join('');
	document.getElementById("edit-color1").innerHTML = colors.map(colors => 
    `<h5 class="button color-button modal-button" ref="${colors.ref}" option="color1">${colors.pantone}</h5>`
).join('');
	document.getElementById("edit-color2").innerHTML = colors.map(colors => 
    `<h5 class="button color-button modal-button" ref="${colors.ref}" option="color2">${colors.pantone}</h5>`
).join('')
}

mapColorOptions() // map colors on load

/* Map Pattern Options to modal */

function mapPatternOptions() {
	document.getElementById("edit-pattern").innerHTML = patterns.map(patterns => 
    `<h5 class="button pattern-button modal-button" ref="${patterns.ref}">${patterns.name}</h5>`
).join('');
}

mapPatternOptions() // map patterns on load


/* Map Customised Garments to "design-pack Html element */


function mapCustomisedGarments() {
	let i = 0;
	document.getElementById("design-pack").innerHTML = customisedGarments.map(customisedGarments => 
    `<h4 class="design-title">${customisedGarments.garmentName} ${output[i]}</h4>
    <button class="edit-garment select-button" ref="${i}" ${customisedGarments.ref = i} ${i++}>EDIT GARMENT</button><button class="delete select-button" ref="${customisedGarments.ref}">DELETE GARMENT</button><button class="duplicate select-button" ref="${customisedGarments.ref}">DUPLICATE GARMENT</button><button class="rearrange-up select-button" ref="${customisedGarments.ref}">MOVE UP</button><button class="rearrange-down select-button" ref="${customisedGarments.ref}">MOVE DOWN</button><button class="tech-garment select-button" ref="${customisedGarments.ref}">TECH PACK</button>
    <section>
	    <aside id="svg">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "rhchest" + "/" + customisedGarments.rhchest[0] + "rhchest" + customisedGarments[customisedGarments.rhchest[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "lhchest" + "/" + customisedGarments.lhchest[0] + "lhchest" + customisedGarments[customisedGarments.lhchest[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "centrechest" + "/" + customisedGarments.centrechest[0] + "centrechest" + customisedGarments[customisedGarments.centrechest[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "mainfront" + "/" + customisedGarments.mainfront[0] + "mainfront" + customisedGarments[customisedGarments.mainfront[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "rhcollar" + "/" + customisedGarments.rhcollar[0] + "rhcollar" + customisedGarments[customisedGarments.rhcollar[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "lhcollar" + "/" + customisedGarments.lhcollar[0] + "lhcollar" + customisedGarments[customisedGarments.lhcollar[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "backtop1" + "/" + customisedGarments.backtop1[0] + "backtop1" + customisedGarments[customisedGarments.backtop1[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "backtop2" + "/" + customisedGarments.backtop2[0] + "backtop2" + customisedGarments[customisedGarments.backtop2[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "backbottom1" + "/" + customisedGarments.backbottom1[0] + "backbottom1" + customisedGarments[customisedGarments.backbottom1[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "backbottom2" + "/" + customisedGarments.backbottom2[0] + "backbottom2" + customisedGarments[customisedGarments.backbottom2[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "rhsleeveupper" + "/" + customisedGarments.rhsleeveupper[0] + "rhsleeveupper" + customisedGarments[customisedGarments.rhsleeveupper[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "rhsleevelower" + "/" + customisedGarments.rhsleevelower[0] + "rhsleevelower" + customisedGarments[customisedGarments.rhsleevelower[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "lhsleeveupper" + "/" + customisedGarments.lhsleeveupper[0] + "lhsleeveupper" + customisedGarments[customisedGarments.lhsleeveupper[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "lhsleevelower" + "/" + customisedGarments.lhsleevelower[0] + "lhsleevelower" + customisedGarments[customisedGarments.lhsleevelower[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + customisedGarments.sponsorsVersion + "/" + customisedGarments.garmentType + "/" + customisedGarments.club + "/" + "numberbox" + "/" + customisedGarments.numberbox[0] + "numberbox" + customisedGarments[customisedGarments.numberbox[1]] + ".svg")}">
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


	let mappedGarment = customisedGarments[selectedDesign];


	document.getElementById("design-edit").innerHTML = 
    `<section>
	    <aside id="svg">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhchest" + "/" + mappedGarment.rhchest[0] + "rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + mappedGarment.lhchest[0] + "lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "centrechest" + "/" + mappedGarment.centrechest[0] + "centrechest" + mappedGarment[mappedGarment.centrechest[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "mainfront" + "/" + mappedGarment.mainfront[0] + "mainfront" + mappedGarment[mappedGarment.mainfront[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhcollar" + "/" + mappedGarment.rhcollar[0] + "rhcollar" + mappedGarment[mappedGarment.rhcollar[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhcollar" + "/" + mappedGarment.lhcollar[0] + "lhcollar" + mappedGarment[mappedGarment.lhcollar[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backtop1" + "/" + mappedGarment.backtop1[0] + "backtop1" + mappedGarment[mappedGarment.backtop1[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backtop2" + "/" + mappedGarment.backtop2[0] + "backtop2" + mappedGarment[mappedGarment.backtop2[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backbottom1" + "/" + mappedGarment.backbottom1[0] + "backbottom1" + mappedGarment[mappedGarment.backbottom1[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backbottom2" + "/" + mappedGarment.backbottom2[0] + "backbottom2" + mappedGarment[mappedGarment.backbottom2[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhsleeveupper" + "/" + mappedGarment.rhsleeveupper[0] + "rhsleeveupper" + mappedGarment[mappedGarment.rhsleeveupper[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhsleevelower" + "/" + mappedGarment.rhsleevelower[0] + "rhsleevelower" + mappedGarment[mappedGarment.rhsleevelower[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhsleeveupper" + "/" + mappedGarment.lhsleeveupper[0]+ "lhsleeveupper" + mappedGarment[mappedGarment.lhsleeveupper[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhsleevelower" + "/" + mappedGarment.lhsleevelower[0] + "lhsleevelower" + mappedGarment[mappedGarment.lhsleevelower[1]] + ".svg")}">
			<img id="svg__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "numberbox" + "/" + mappedGarment.numberbox[0] + "numberbox" + mappedGarment[mappedGarment.numberbox[1]] + ".svg")}">
			<svg class="svg__design" viewBox="0 0 750 400">
				<path id="path-1" d="${mappedGarment.path1}" style="fill:${mappedGarment.color1}"/>
				<path id="path-2" d="${mappedGarment.path2}" style="fill:${mappedGarment.color2}"/>
			</svg>
			<img id="svg__pattern" src="${mappedGarment.pattern}">
			<svg class="svg__background" viewBox="0 0 750 400">
				<path id="path-background" d="${mappedGarment.pathBackground}" style="fill:${mappedGarment.colorBackground}"/>
			</svg>
			<img id="svg__baseimage" src="${mappedGarment.baseImage}">
		</aside>
	</section>
	<h5 id="edit-ref" ref="${mappedGarment.ref}"></h5>`
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

    rhchest: customisedGarments[selectedDesign].rhchest,
    lhchest: customisedGarments[selectedDesign].lhchest,
    centrechest: customisedGarments[selectedDesign].centrechest,
    mainfront: customisedGarments[selectedDesign].mainfront,
    rhcollar: customisedGarments[selectedDesign].rhcollar,
    lhcollar: customisedGarments[selectedDesign].lhcollar,
    backtop1: customisedGarments[selectedDesign].backtop1,
    backtop2: customisedGarments[selectedDesign].backtop2,
    backbottom1: customisedGarments[selectedDesign].backbottom1,
    backbottom2: customisedGarments[selectedDesign].backbottom2,
    rhsleeveupper: customisedGarments[selectedDesign].rhsleeveupper,
    rhsleevelower: customisedGarments[selectedDesign].rhsleevelower,
    lhsleeveupper: customisedGarments[selectedDesign].lhsleeveupper,
    lhsleevelower: customisedGarments[selectedDesign].lhsleevelower,
    numberbox: customisedGarments[selectedDesign].numberbox,

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
    tone2: customisedGarments[selectedDesign].tone1,
    clash: "clash",
    clash2: "clash2",
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

	chosenGarmentTypeRef = customisedGarments[selectedDesign].garmentTypeRef;

	garmentEditing = designs[chosenGarmentTypeRef].designs;

	mapDesignOptions();
	editDesignOptions();

	mapEdit(selectedDesign);

	var modal = document.getElementById("modal"); //access modal element
	modal.style.display = "block"; //make modal visible

	activeClass();
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
	let chosenClub = customisedGarments[selectedDesignRef].club; //identify the current chosen club
	let breakRef = designs[garmentTypeRef].designs[chosenDesign][chosenClub]; //identify which break this design uses for that club


	if (chosenOption === "sponsors") {
		if (breakRef === 0) { 
			customisedGarments[selectedDesignRef].path1 = designs[garmentTypeRef].designs[chosenDesign].path1; // use unbroken path
			customisedGarments[selectedDesignRef].path2 = designs[garmentTypeRef].designs[chosenDesign].path2; // use unbroken path
		} else if (breakRef === 1) {
			customisedGarments[selectedDesignRef].path1 = designs[garmentTypeRef].designs[chosenDesign].path1Break1; // use broken path version 1
			customisedGarments[selectedDesignRef].path2 = designs[garmentTypeRef].designs[chosenDesign].path2Break1; // use broken path version 1
		} else if (breakRef === 2) {
			customisedGarments[selectedDesignRef].path1 = designs[garmentTypeRef].designs[chosenDesign].path1Break2; // use broken path version 2
			customisedGarments[selectedDesignRef].path2 = designs[garmentTypeRef].designs[chosenDesign].path2Break2; // use broken path version 2
		}
	} else if (chosenOption === "logos" || 'none') {
		customisedGarments[selectedDesignRef].path1 = designs[garmentTypeRef].designs[chosenDesign].path1; // use unbroken path version
			customisedGarments[selectedDesignRef].path2 = designs[garmentTypeRef].designs[chosenDesign].path2; // use unbroken path version
		}


	if (chosenClub === "noclub") {
		customisedGarments[selectedDesignRef].path1 = designs[garmentTypeRef].designs[chosenDesign].path1; // use unbroken path
		customisedGarments[selectedDesignRef].path2 = designs[garmentTypeRef].designs[chosenDesign].path2; // use unbroken path
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

	let currentSettingsDesignRefAmended = currentSettingsDesignRef;

	let newGarmentDesignsArray = designs[chosenGarmentTypeRef].designs;
	let newGarmentDesignsLength = newGarmentDesignsArray.length;

	if (newGarmentDesignsLength <= currentSettingsDesignRefAmended) {
		currentSettingsDesignRefAmended = (newGarmentDesignsLength - 1);
	}

	customisedGarments[selectedDesignRef].garmentName = chosenGarmentTypeName; // amend the garment name to the new one
	customisedGarments[selectedDesignRef].garmentTypeRef = chosenGarmentTypeRef; // amend the garment ref to the new one
	customisedGarments[selectedDesignRef].garmentType = designs[chosenGarmentTypeRef].garment; // amend the garment type to the new one
	customisedGarments[selectedDesignRef].designRef = currentSettingsDesignRefAmended ; // amend the garment type to the new one


	let newGarmentType = designs[chosenGarmentTypeRef].garment; 

	let sleevesRef = designs[chosenGarmentTypeRef].designs[currentSettingsDesignRefAmended].sleevesRef; //identify the sleeves ref for design
	
	customisedGarments[selectedDesignRef].sponsorsVersion = currentSettings.sponsorsVersion // keep existing sponsor version

	let mappedGarment = customisedGarments[selectedDesignRef];
	let clubSelector = String(mappedGarment.club) + "logos";
	let designSelector = designs[chosenGarmentTypeRef].designs[currentSettingsDesignRefAmended];
	
	customisedGarments[selectedDesignRef].rhchest = designSelector[clubSelector].rhchest //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhchest = designSelector[clubSelector].lhchest //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].centrechest = designSelector[clubSelector].centrechest //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].mainfront = designSelector[clubSelector].mainfront //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].rhcollar = designSelector[clubSelector].rhcollar //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhcollar = designSelector[clubSelector].lhcollar //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backtop1 = designSelector[clubSelector].backtop1 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backtop2 = designSelector[clubSelector].backtop2 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backbottom1 = designSelector[clubSelector].backbottom1 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backbottom2 = designSelector[clubSelector].backbottom2 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].rhsleeveupper = designSelector[clubSelector].rhsleeveupper //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].rhsleevelower = designSelector[clubSelector].rhsleevelower //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhsleeveupper = designSelector[clubSelector].lhsleeveupper //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhsleevelower = designSelector[clubSelector].lhsleevelower //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].numberbox = designSelector[clubSelector].numberbox //change logo info to the one from the new design


	customisedGarments[selectedDesignRef].design = designs[chosenGarmentTypeRef].designs[currentSettingsDesignRefAmended].design; // Change design to the equivalent for this garment but same design
	customisedGarments[selectedDesignRef].path1 = designs[chosenGarmentTypeRef].designs[currentSettingsDesignRefAmended].path1; // Change path 1 to the equivalent for this garment but same design
	customisedGarments[selectedDesignRef].path2 = designs[chosenGarmentTypeRef].designs[currentSettingsDesignRefAmended].path2; // Change path 2 to the equivalent for this garment but same design
	customisedGarments[selectedDesignRef].pattern = patterns[currentSettingsPatternRef][newGarmentType][sleevesRef] // Change pattern to the equivalent for this garment but same pattern
	customisedGarments[selectedDesignRef].sublimatedPattern = designs[chosenGarmentTypeRef].designs[currentSettingsDesignRefAmended].sublimatedPattern; //change sublimatedPattern to the one from the selected design	


	customisedGarments[selectedDesignRef].pathBackground = designs[chosenGarmentTypeRef].pathBackground[sleevesRef]; // amend pathBackground to the new one
	customisedGarments[selectedDesignRef].baseImage = designs[chosenGarmentTypeRef].baseImage[sleevesRef]; // amend baseImageto the new one

	let chosenOption = customisedGarments[selectedDesignRef].sponsorsVersion; //make the sponsorVersion used in the sponsorPathUpdate function the current one
	garmentEditing = designs[chosenGarmentTypeRef].designs;

	let itemNumber = 1;

	removeOrAddPatternOptions(selectedDesignRef);
	subimatedPatternFunction (selectedDesignRef);
	sponsorsPathUpdate(chosenOption, selectedDesignRef);
	mapDesignOptions();
	editDesignOptions();
	colorClash(selectedDesignRef);
	activeClass();
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
	customisedGarments[selectedDesignRef].sublimatedPattern = designs[garmentTypeRef].designs[chosenDesign].sublimatedPattern; //change sublimatedPattern to the one from the selected design	

	let mappedGarment = customisedGarments[selectedDesignRef];
	let clubSelector = String(mappedGarment.club) + "logos";
	let designSelector = designs[garmentTypeRef].designs[chosenDesign];
	
	customisedGarments[selectedDesignRef].rhchest = designSelector[clubSelector].rhchest //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhchest = designSelector[clubSelector].lhchest //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].centrechest = designSelector[clubSelector].centrechest //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].mainfront = designSelector[clubSelector].mainfront //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].rhcollar = designSelector[clubSelector].rhcollar //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhcollar = designSelector[clubSelector].lhcollar //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backtop1 = designSelector[clubSelector].backtop1 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backtop2 = designSelector[clubSelector].backtop2 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backbottom1 = designSelector[clubSelector].backbottom1 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backbottom2 = designSelector[clubSelector].backbottom2 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].rhsleeveupper = designSelector[clubSelector].rhsleeveupper //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].rhsleevelower = designSelector[clubSelector].rhsleevelower //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhsleeveupper = designSelector[clubSelector].lhsleeveupper //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhsleevelower = designSelector[clubSelector].lhsleevelower //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].numberbox = designSelector[clubSelector].numberbox //change logo info to the one from the new design


	currentPattern = customisedGarments[selectedDesignRef].patternRef; // identify current selected pattern for this design
	let currentPatternInfo = patterns[currentPattern]; //identify the full info of the pattern chosen
	let selectedDesignGarmentType = customisedGarments[selectedDesignRef]["garmentType"]; //identify the garment type of the design loaded
	let currentPatternSrc = currentPatternInfo[selectedDesignGarmentType][sleevesRef]; //identify the full info of the pattern chosen
	customisedGarments[selectedDesignRef].pattern = currentPatternSrc; //change src to the one from the selected pattern

	let chosenOption = customisedGarments[selectedDesignRef].sponsorsVersion; //make the sponsorVersion used in the sponsorPathUpdate function the current one

	subimatedPatternFunction (selectedDesignRef);
	sponsorsPathUpdate(chosenOption, selectedDesignRef);
	colorClash(selectedDesignRef);
	activeClass();
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

	subimatedPatternFunction (selectedDesignRef);
	colorClash(selectedDesignRef);
	activeClass();
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

	let garmentTypeRef = customisedGarments[selectedDesignRef].garmentTypeRef; //identify the garment ref for the type of garment we are editing
	let mappedGarment = customisedGarments[selectedDesignRef];
	let clubSelector = String(mappedGarment.club) + "logos";
	let chosenDesignRef = customisedGarments[selectedDesignRef].designRef;
	let designSelector = designs[garmentTypeRef].designs[chosenDesignRef];

	
	customisedGarments[selectedDesignRef].rhchest = designSelector[clubSelector].rhchest //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhchest = designSelector[clubSelector].lhchest //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].centrechest = designSelector[clubSelector].centrechest //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].mainfront = designSelector[clubSelector].mainfront //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].rhcollar = designSelector[clubSelector].rhcollar //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhcollar = designSelector[clubSelector].lhcollar //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backtop1 = designSelector[clubSelector].backtop1 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backtop2 = designSelector[clubSelector].backtop2 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backbottom1 = designSelector[clubSelector].backbottom1 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backbottom2 = designSelector[clubSelector].backbottom2 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].rhsleeveupper = designSelector[clubSelector].rhsleeveupper //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].rhsleevelower = designSelector[clubSelector].rhsleevelower //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhsleeveupper = designSelector[clubSelector].lhsleeveupper //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhsleevelower = designSelector[clubSelector].lhsleevelower //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].numberbox = designSelector[clubSelector].numberbox //change logo info to the one from the new design

	let chosenOption = customisedGarments[selectedDesignRef].sponsorsVersion; //make the sponsorVersion used in the sponsorPathUpdate function the current one

	determineClubLogo();
	sponsorsPathUpdate(chosenOption, selectedDesignRef);
	colorClash(selectedDesignRef);
	activeClass();
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

	activeClass();
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
	let selectedClubIndex = customisedGarments[selectedDesignRef].clubIndex; //set club selected
	let noClub = "noclub"; //set no club

	if (chosenOption === "none") {
		customisedGarments[selectedDesignRef].club = noClub;
		customisedGarments[selectedDesignRef].clubIndex = 0;
		chosenOption = "logos";
		customisedGarments[selectedDesignRef].sponsorsVersion = chosenOption;

		let noneDesign = customisedGarments[selectedDesignRef].designRef;
		let noneGarment = customisedGarments[selectedDesignRef].garmentTypeRef;

		let designsCopy = [...designs];

		customisedGarments[selectedDesignRef].rhchest = designsCopy[noneGarment].designs[noneDesign].noclublogos.rhchest;
		customisedGarments[selectedDesignRef].lhchest = designsCopy[noneGarment].designs[noneDesign].noclublogos.lhchest;
		customisedGarments[selectedDesignRef].centrechest = designsCopy[noneGarment].designs[noneDesign].noclublogos.centrechest;
		customisedGarments[selectedDesignRef].mainfront = designsCopy[noneGarment].designs[noneDesign].noclublogos.mainfront;
		customisedGarments[selectedDesignRef].rhcollar = designsCopy[noneGarment].designs[noneDesign].noclublogos.rhcollar;
		customisedGarments[selectedDesignRef].lhcollar = designsCopy[noneGarment].designs[noneDesign].noclublogos.lhcollar;
		customisedGarments[selectedDesignRef].backtop1 = designsCopy[noneGarment].designs[noneDesign].noclublogos.backtop1;
		customisedGarments[selectedDesignRef].backtop2 = designsCopy[noneGarment].designs[noneDesign].noclublogos.backtop2;
		customisedGarments[selectedDesignRef].backbottom1 = designsCopy[noneGarment].designs[noneDesign].noclublogos.backbottom1;
		customisedGarments[selectedDesignRef].backbottom2 = designsCopy[noneGarment].designs[noneDesign].noclublogos.backbottom2;
		customisedGarments[selectedDesignRef].rhsleeveupper = designsCopy[noneGarment].designs[noneDesign].noclublogos.rhsleeveupper;
		customisedGarments[selectedDesignRef].rhsleevelower = designsCopy[noneGarment].designs[noneDesign].noclublogos.rhsleevelower;
		customisedGarments[selectedDesignRef].lhsleeveupper = designsCopy[noneGarment].designs[noneDesign].noclublogos.lhsleeveupper;
		customisedGarments[selectedDesignRef].lhsleevelower = designsCopy[noneGarment].designs[noneDesign].noclublogos.lhsleevelower;
		customisedGarments[selectedDesignRef].numberbox = designsCopy[noneGarment].designs[noneDesign].noclublogos.numberbox;

		designsCopy = [...designs];

	} else {
		customisedGarments[selectedDesignRef].club = selectedClub;
		customisedGarments[selectedDesignRef].clubIndex = selectedClubIndex;
	}

	if (chosenOption === "logos") {
		customisedGarments[selectedDesignRef].sponsorsClub = "noclub";
	} else {
		customisedGarments[selectedDesignRef].sponsorsClub = customisedGarments[selectedDesignRef].club;
	}


	sponsorsPathUpdate(chosenOption, selectedDesignRef);
	colorClash(selectedDesignRef);
	activeClass()
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
	let newDesign = designs[0].designs[0];
	let club = "noclublogos";

	customisedGarments.push(
		{
	    ref: refNumber,
	    garmentTypeRef: 0,
	    garmentName: designs[0].name,
	    garmentType: designs[0].garment,
	    clubIndex: 0,
	    club: "noclub",
	    sponsorsVersion:"logos",
	    designRef: 0,
	    design: designs[0].designs[0].design,
	    path1: designs[0].designs[0].path1,
	    path2: designs[0].designs[0].path2,
	    sublimatedPattern: "no",
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
	    tone2: "light",
	    clash: "clash",
	    clash2: "clash2",
	    rhchest: newDesign[club].rhchest,
   		lhchest: newDesign[club].lhchest,
    	centrechest: newDesign[club].centrechest,
    	mainfront: newDesign[club].mainfront,
    	rhcollar: newDesign[club].rhcollar,
    	lhcollar: newDesign[club].lhcollar,
    	backtop1: newDesign[club].backtop1,
    	backtop2: newDesign[club].backtop2,
    	backbottom1: newDesign[club].backbottom1,
    	backbottom2: newDesign[club].backbottom2,
    	rhsleeveupper: newDesign[club].rhsleeveupper,
    	rhsleevelower: newDesign[club].rhsleevelower,
    	lhsleeveupper: newDesign[club].lhsleeveupper,
    	lhsleevelower: newDesign[club].lhsleevelower,
    	numberbox: newDesign[club].numberbox,
		});
	determineClubLogo();
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

	determineClubLogo();
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
	    designRef: customisedGarments[selectedDesign].designRef,
	    design: customisedGarments[selectedDesign].design,
	    path1: customisedGarments[selectedDesign].path1,
	    path2: customisedGarments[selectedDesign].path2,
	    sublimatedPattern: customisedGarments[selectedDesign].sublimatedPattern,
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
	    tone2: customisedGarments[selectedDesign].tone2,
	    clash: "clash",
	    clash2: "clash2",

	    rhchest: customisedGarments[selectedDesign].rhchest,
	    lhchest: customisedGarments[selectedDesign].lhchest,
	    centrechest: customisedGarments[selectedDesign].centrechest,
	    mainfront: customisedGarments[selectedDesign].mainfront,
	    rhcollar: customisedGarments[selectedDesign].rhcollar,
	    lhcollar: customisedGarments[selectedDesign].lhcollar,
	    backtop1: customisedGarments[selectedDesign].backtop1,
	    backtop2: customisedGarments[selectedDesign].backtop2,
	    backbottom1: customisedGarments[selectedDesign].backbottom1,
	    backbottom2: customisedGarments[selectedDesign].backbottom2,
	    rhsleeveupper: customisedGarments[selectedDesign].rhsleeveupper,
	    rhsleevelower: customisedGarments[selectedDesign].rhsleevelower,
	    lhsleeveupper: customisedGarments[selectedDesign].lhsleeveupper,
	    lhsleevelower: customisedGarments[selectedDesign].lhsleevelower,
	    numberbox: customisedGarments[selectedDesign].numberbox,
		});

	determineClubLogo();
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



/* Notice when Random Color Button is Clicked  */

function randomColorsButton() {
let randomColor = document.getElementsByClassName("random-colors-button"); //access rearrangedown-button element button
for (let i = 0; i < randomColor.length; i++) { //workout which rearrangedown-button was selected

		randomColor[i].onclick = randomColors; //operate 'rearrangeDown' function on reset-button press
	}
}

/* Function to Operate when Random Color Button is clicked  */

function randomColors(e) {
	let colorsLength = colors.length;

	let chosenColorBg = (Math.random() * (colorsLength - 1) + 0).toFixed(0); //generate random Bg color
	let chosenColor1 = (Math.random() * (colorsLength - 1) + 0).toFixed(0); //generate random color 1 
	let chosenColor2 = (Math.random() * (colorsLength - 1) + 0).toFixed(0); //generate random color 2
	
	let selectedDesign = document.getElementById("edit-ref"); //identify the design loaded
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the design-button clicked

	customisedGarments[selectedDesignRef].colorBackground = colors[chosenColorBg].hex; //change hex to the one from the selected color
	customisedGarments[selectedDesignRef].toneBackground = colors[chosenColorBg].tone; //change hex to the one from the selected color
	customisedGarments[selectedDesignRef].colorBackgroundRef = chosenColorBg; //change hex to the one from the selected color

	customisedGarments[selectedDesignRef].color1 = colors[chosenColor1].hex; //change hex to the one from the selected color
	customisedGarments[selectedDesignRef].tone1= colors[chosenColor1].tone; //change hex to the one from the selected color
	customisedGarments[selectedDesignRef].color1Ref = chosenColor1; //change hex to the one from the selected color

	customisedGarments[selectedDesignRef].color2 = colors[chosenColor2].hex; //change hex to the one from the selected color
	customisedGarments[selectedDesignRef].tone2= colors[chosenColor2].tone; //change hex to the one from the selected color
	customisedGarments[selectedDesignRef].color2Ref = chosenColor2; //change hex to the one from the selected color

	subimatedPatternFunction (selectedDesignRef);
	colorClash(selectedDesignRef);
	activeClass();
	mapEdit(selectedDesignRef);
}

randomColorsButton() //run randomColorsButton function on page load


/* Notice when Random Color Button is Clicked  */

function randomDesignButton() {
let randomDesign = document.getElementsByClassName("random-design-button"); //access rearrangedown-button element button
for (let i = 0; i < randomDesign.length; i++) { //workout which rearrangedown-button was selected
		randomDesign[i].onclick = randomDesignChosen; //operate 'rearrangeDown' function on reset-button press
	}
}

/* Function to Operate when Random Color Button is clicked  */

function randomDesignChosen(e) {

	let selectedDesign = document.getElementById("edit-ref"); //identify the design loaded
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the design clicked
	let garmentTypeRef = customisedGarments[selectedDesignRef].garmentTypeRef; //identify the garment ref for the type of garment we are editing



	let garmentDesigns = designs[garmentTypeRef].designs;
	let garmentDesignsLength = garmentDesigns.length;
	let chosenDesign =(Math.random() * (garmentDesignsLength - 1) + 0).toFixed(0); //chose random design	


	let sleevesRef = designs[garmentTypeRef].designs[chosenDesign].sleevesRef; //identify the sleeves ref for the type of garment we are editing
	customisedGarments[selectedDesignRef].baseImage = designs[garmentTypeRef].baseImage[sleevesRef]; //change baseimage to the one from the selected design
	customisedGarments[selectedDesignRef].pathBackground = designs[garmentTypeRef].pathBackground[sleevesRef]; //change baackground path to the one from the selected design
	customisedGarments[selectedDesignRef].path1 = designs[garmentTypeRef].designs[chosenDesign].path1; //change path 1 to the one from the selected design
	customisedGarments[selectedDesignRef].path2 = designs[garmentTypeRef].designs[chosenDesign].path2; //change path 2 to the one from the selected design
	customisedGarments[selectedDesignRef].design = designs[garmentTypeRef].designs[chosenDesign].design; //change design to the one from the selected design
	customisedGarments[selectedDesignRef].designRef = [chosenDesign]; //change designRef to the one from the selected design	
	customisedGarments[selectedDesignRef].sublimatedPattern = designs[garmentTypeRef].designs[chosenDesign].sublimatedPattern; //change sublimatedPattern to the one from the selected design	


	let mappedGarment = customisedGarments[selectedDesignRef];
	let clubSelector = String(mappedGarment.club) + "logos";
	let designSelector = designs[garmentTypeRef].designs[chosenDesign];
	
	customisedGarments[selectedDesignRef].rhchest = designSelector[clubSelector].rhchest //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhchest = designSelector[clubSelector].lhchest //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].centrechest = designSelector[clubSelector].centrechest //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].mainfront = designSelector[clubSelector].mainfront //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].rhcollar = designSelector[clubSelector].rhcollar //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhcollar = designSelector[clubSelector].lhcollar //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backtop1 = designSelector[clubSelector].backtop1 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backtop2 = designSelector[clubSelector].backtop2 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backbottom1 = designSelector[clubSelector].backbottom1 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].backbottom2 = designSelector[clubSelector].backbottom2 //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].rhsleeveupper = designSelector[clubSelector].rhsleeveupper //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].rhsleevelower = designSelector[clubSelector].rhsleevelower //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhsleeveupper = designSelector[clubSelector].lhsleeveupper //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].lhsleevelower = designSelector[clubSelector].lhsleevelower //change logo info to the one from the new design
	customisedGarments[selectedDesignRef].numberbox = designSelector[clubSelector].numberbox //change logo info to the one from the new design


	currentPattern = customisedGarments[selectedDesignRef].patternRef; // identify current selected pattern for this design
	let currentPatternInfo = patterns[currentPattern]; //identify the full info of the pattern chosen
	let selectedDesignGarmentType = customisedGarments[selectedDesignRef]["garmentType"]; //identify the garment type of the design loaded
	let currentPatternSrc = currentPatternInfo[selectedDesignGarmentType][sleevesRef]; //identify the full info of the pattern chosen
	customisedGarments[selectedDesignRef].pattern = currentPatternSrc; //change src to the one from the selected pattern

	let chosenOption = customisedGarments[selectedDesignRef].sponsorsVersion; //make the sponsorVersion used in the sponsorPathUpdate function the current one

	sponsorsPathUpdate(chosenOption, selectedDesignRef);
	subimatedPatternFunction (selectedDesignRef);
	colorClash(selectedDesignRef);
	activeClass();
	mapEdit(selectedDesignRef);
};

randomDesignButton(); //run randomColorsButton function on page load

function subimatedPatternFunction(selectedDesignRef) {

	let selectedDesign = customisedGarments[selectedDesignRef];

	if (selectedDesign.sublimatedPattern === "yes") {

		var editColor1 = document.getElementById("edit-color1"); //access edit-color1 element
		editColor1.style.display = "none"; //make color 1 buttons invisible


		if (selectedDesign.colorBackgroundRef === "0") {


			customisedGarments[selectedDesignRef].color1Ref = "10";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		} else if (selectedDesign.colorBackgroundRef === "1") {


			customisedGarments[selectedDesignRef].color1Ref = "17";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		} else if (selectedDesign.colorBackgroundRef === "2") {


			customisedGarments[selectedDesignRef].color1Ref = "3";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "3") {


			customisedGarments[selectedDesignRef].color1Ref = "2";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "4") {


			customisedGarments[selectedDesignRef].color1Ref = "18";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "5") {


			customisedGarments[selectedDesignRef].color1Ref = "19";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "6") {


			customisedGarments[selectedDesignRef].color1Ref = "7";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "7") {


			customisedGarments[selectedDesignRef].color1Ref = "6";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "8") {


			customisedGarments[selectedDesignRef].color1Ref = "20";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "9") {


			customisedGarments[selectedDesignRef].color1Ref = "21";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "10") {


			customisedGarments[selectedDesignRef].color1Ref = "0";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "11") {


			customisedGarments[selectedDesignRef].color1Ref = "10";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "12") {


			customisedGarments[selectedDesignRef].color1Ref = "13";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "13") {


			customisedGarments[selectedDesignRef].color1Ref = "12";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "14") {


			customisedGarments[selectedDesignRef].color1Ref = "22";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "15") {


			customisedGarments[selectedDesignRef].color1Ref = "23";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "16") {


			customisedGarments[selectedDesignRef].color1Ref = "24";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		}  else if (selectedDesign.colorBackgroundRef === "17") {


			customisedGarments[selectedDesignRef].color1Ref = "1";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		} else if (selectedDesign.colorBackgroundRef === "18") {


			customisedGarments[selectedDesignRef].color1Ref = "4";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		} else if (selectedDesign.colorBackgroundRef === "19") {


			customisedGarments[selectedDesignRef].color1Ref = "5";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		} else if (selectedDesign.colorBackgroundRef === "20") {


			customisedGarments[selectedDesignRef].color1Ref = "8";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		} else if (selectedDesign.colorBackgroundRef === "21") {


			customisedGarments[selectedDesignRef].color1Ref = "9";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		} else if (selectedDesign.colorBackgroundRef === "22") {


			customisedGarments[selectedDesignRef].color1Ref = "14";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		} else if (selectedDesign.colorBackgroundRef === "23") {


			customisedGarments[selectedDesignRef].color1Ref = "15";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		} else if (selectedDesign.colorBackgroundRef === "24") {


			customisedGarments[selectedDesignRef].color1Ref = "16";
			sublimatedColorRef = customisedGarments[selectedDesignRef].color1Ref;
			customisedGarments[selectedDesignRef].color1 = colors[sublimatedColorRef].hex;
			customisedGarments[selectedDesignRef].tone1 = colors[sublimatedColorRef].tone;

		} 
	} else {

		var editColor1 = document.getElementById("edit-color1"); //access edit-color1 element
		editColor1.style.display = "block"; //make color 1 buttons invisible
	}
} 
	

function removeOrAddPatternOptions(selectedDesignRef) {

	let selectedDesignGarmentTypeRef = customisedGarments[selectedDesignRef].garmentTypeRef;


	if (selectedDesignGarmentTypeRef === "3" || selectedDesignGarmentTypeRef === "4") {
		document.getElementById("edit-pattern").style.display = "none";

		customisedGarments[selectedDesignRef].pattern = ""; //change src to none
		customisedGarments[selectedDesignRef].patternRef = 0; //change pattern ref to none
	} else {
		document.getElementById("edit-pattern").style.display = "inline-block";
	}

} 
	

function activeClass() {

	let selectedDesign = document.getElementById("edit-ref"); //identify the design loaded
	let selectedDesignRef = selectedDesign.getAttribute("ref"); //identify the ref of the design-button clicked

	let activeClub = customisedGarments[selectedDesignRef].clubIndex;
	let activeSponsors = customisedGarments[selectedDesignRef].sponsorsVersion;
	let activeGarment = customisedGarments[selectedDesignRef].garmentTypeRef;
	let activeDesign = customisedGarments[selectedDesignRef].designRef;
	let activePattern = customisedGarments[selectedDesignRef].patternRef;
	let activeColorBg = customisedGarments[selectedDesignRef].colorBackgroundRef;
	let activeColor1 = customisedGarments[selectedDesignRef].color1Ref;
	let activeColor2 = customisedGarments[selectedDesignRef].color2Ref;

	let clubOptions = document.getElementsByClassName("club-button");
	let sponsorOptions = document.getElementsByClassName("sponsors-button");
	let garmentOptions = document.getElementsByClassName("garment-button");
	let designOptions = document.getElementsByClassName("design-button");
	let patternOptions = document.getElementsByClassName("pattern-button");
	let colorOptions = document.getElementsByClassName("color-button");

	for (let i = 0; i < clubOptions.length; i++) {
	clubOptions[i].classList.remove("active"); //remove active class from all logo elements
	}
	let clubElement = clubOptions[activeClub];
	clubElement.classList.add("active"); // add active to current class

	for (let i = 0; i < sponsorOptions.length; i++) {
	sponsorOptions[i].classList.remove("active"); //remove active class from all logo elements
	}
	if (activeSponsors === "logos"){
		activeSponsors = 0;
	} else if (activeSponsors === "sponsors"){
		activeSponsors = 1;
	} else if (activeSponsors === "none"){
		activeSponsors = 2;
	}
	let sponsorElement = sponsorOptions[activeSponsors];
	sponsorElement.classList.add("active"); // add active to current class

	for (let i = 0; i < garmentOptions.length; i++) {
	garmentOptions[i].classList.remove("active"); //remove active class from all logo elements
	}
	let garmentElement = garmentOptions[activeGarment];
	garmentElement.classList.add("active"); // add active to current class

	for (let i = 0; i < designOptions.length; i++) {
	designOptions[i].classList.remove("active"); //remove active class from all logo elements
	}
	let designElement = designOptions[activeDesign];
	designElement.classList.add("active"); // add active to current class

	for (let i = 0; i < patternOptions.length; i++) {
	patternOptions[i].classList.remove("active"); //remove active class from all logo elements
	}
	let patternElement = patternOptions[activePattern];
	patternElement.classList.add("active"); // add active to current class

	for (let i = 0; i < colorOptions.length; i++) {
	colorOptions[i].classList.remove("active"); //remove active class from all logo elements
	}
	let colorLength = colorOptions.length;
	colorLength = colorLength/3;
	activeColor1 = parseInt(activeColor1, 10)
	activeColor2 = parseInt(activeColor2, 10)
	let colorBgElement = colorOptions[activeColorBg];
	let color1Element = colorOptions[activeColor1 + colorLength];
	let color2Element = colorOptions[activeColor2 + (2 * colorLength)];
	colorBgElement.classList.add("active"); // add active to current class
	color1Element.classList.add("active"); // add active to current class
	color2Element.classList.add("active"); // add active to current class

}