
/* Map Garments to edit to "design-edit" Html element */

let factoryGarment = "";

function mapTechPack(selectedDesign) {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = today.getFullYear();

	today = dd + '/' + mm + '/' + yyyy;

	yyyyString = yyyy.toString();

	yyString = yyyyString.substr(2, 3);
	yy = parseInt(yyString, 10);

	let chosenClubIndex = customisedGarments[selectedDesign].clubIndex;
	let chosenClubName = clubs[chosenClubIndex].ref;

	let chosenGarment = customisedGarments[selectedDesign].garmentTypeRef;

	factoryGarment = chosenGarment;

	let chosenItem = customisedGarments[selectedDesign].ref;

	let chosenColorBgRef = customisedGarments[selectedDesign].colorBackgroundRef;
	let chosenColor1Ref = customisedGarments[selectedDesign].color1Ref;
	let chosenColor2Ref = customisedGarments[selectedDesign].color2Ref;

	chosenColorBgRef = colors[chosenColorBgRef].pantone;
	chosenColor1Ref = colors[chosenColor1Ref].pantone;
	chosenColor2Ref = colors[chosenColor2Ref].pantone;

	let chosenColorBgHex = customisedGarments[selectedDesign].colorBackground;
	let chosenColor1Hex = customisedGarments[selectedDesign].color1;
	let chosenColor2Hex = customisedGarments[selectedDesign].color2;

	if (customisedGarments[selectedDesign].designRef <= 1) {
		chosenColor1Ref = "N/A";
		chosenColor2Ref = "N/A";
		chosenColor1Hex = "#FFFFFF";
		chosenColor2Hex = "#FFFFFF";
	}

	let chosenGarmentType = customisedGarments[selectedDesign].garmentTypeRef;
	let chosenDesign = customisedGarments[selectedDesign].designRef;
	let chosenGarmentTypeArray = designs[chosenGarmentType].designs;
	let chosenSleeveTip = chosenGarmentTypeArray[chosenDesign].sleeveTipColor;
	let chosenSleeveType = chosenGarmentTypeArray[chosenDesign].sleeves;

	let item = customisedGarments[selectedDesign];
	let chosenSleeveTipColor = item[chosenSleeveTip];
	let chosenSleeveTipColorRef = colors[chosenSleeveTipColor].pantone;
	let chosenSleeveTipColorHex = colors[chosenSleeveTipColor].hex;

	let chosenPattern = customisedGarments[selectedDesign].patternRef;

	let option3ColorRef = "";
	let option3ColorHex = "";
	let option4ColorRef = "";
	let option4ColorHex = "";


	if (designs[chosenGarment].option3 != "") {
		let option3Color = chosenGarmentTypeArray[chosenDesign].option3;
		let chosenOption3Color = item[option3Color];
		let chosenOption3ColorRef = colors[chosenOption3Color].pantone;
		let chosenOption3ColorHex = colors[chosenOption3Color].hex;
		option3ColorRef = chosenOption3ColorRef;
		option3ColorHex = chosenOption3ColorHex;
	} else {
		option3ColorRef = "";
		option3ColorHex = "";
	}
	
	if (designs[chosenGarment].option4 != "") {
		let option4Color = chosenGarmentTypeArray[chosenDesign].option4;
		let chosenOption4Color = item[option4Color];
		let chosenOption4ColorRef = colors[chosenOption4Color].pantone;
		let chosenOption4ColorHex = colors[chosenOption4Color].hex;
		option4ColorRef = chosenOption4ColorRef;
		option4ColorHex = chosenOption4ColorHex;
	} else {
		option4ColorRef = "";
		option4ColorHex = "";
	}

	let constructionSrc = "";

	if (chosenGarmentTypeArray[chosenDesign][chosenClubName] === 1 && customisedGarments[selectedDesign].sponsorsVersion === "sponsors") {
		constructionSrc = "assets/techpack/construction/" + customisedGarments[selectedDesign].garmentType + "/" + customisedGarments[selectedDesign].designRef + "b.svg";
	} else if (chosenGarmentTypeArray[chosenDesign][chosenClubName] === 2 && customisedGarments[selectedDesign].sponsorsVersion === "sponsors") {
		constructionSrc = "assets/techpack/construction/" + customisedGarments[selectedDesign].garmentType + "/" + customisedGarments[selectedDesign].designRef + "c.svg";
	} else {
		constructionSrc = "assets/techpack/construction/" + customisedGarments[selectedDesign].garmentType + "/" + customisedGarments[selectedDesign].designRef + ".svg";
	}




	let mappedGarment = customisedGarments[selectedDesign];

	let mapPosition = "";


	let chosenColorRhChestHex = "chosenColor" + mappedGarment.rhchest[1].substr(4,1) + mappedGarment.rhchest[1].substr(8,1)  + "Hex";
	let chosenColorLhChestHex = "chosenColor" + mappedGarment.lhchest[1].substr(4,1) + mappedGarment.lhchest[1].substr(8,1)  + "Hex";
	let chosenColorCentreChestHex = "chosenColor" + mappedGarment.centrechest[1].substr(4,1) + mappedGarment.centrechest[1].substr(8,1)  + "Hex";
	let chosenColorMainFrontHex = "chosenColor" + mappedGarment.mainfront[1].substr(4,1) + mappedGarment.mainfront[1].substr(8,1)  + "Hex";
	let chosenColorRhCollarHex = "chosenColor" + mappedGarment.rhcollar[1].substr(4,1) + mappedGarment.rhcollar[1].substr(8,1)  + "Hex";
	let chosenColorLhCollarHex = "chosenColor" + mappedGarment.lhcollar[1].substr(4,1) + mappedGarment.lhcollar[1].substr(8,1)  + "Hex";
	let chosenColorBackTop1Hex = "chosenColor" + mappedGarment.backtop1[1].substr(4,1) + mappedGarment.backtop1[1].substr(8,1)  + "Hex";
	let chosenColorBackTop2Hex = "chosenColor" + mappedGarment.backtop2[1].substr(4,1) + mappedGarment.backtop2[1].substr(8,1)  + "Hex";
	let chosenColorBackBottom1Hex = "chosenColor" + mappedGarment.backbottom1[1].substr(4,1) + mappedGarment.backbottom1[1].substr(8,1)  + "Hex";
	let chosenColorBackBottom2Hex = "chosenColor" + mappedGarment.backbottom2[1].substr(4,1) + mappedGarment.backbottom2[1].substr(8,1)  + "Hex";
	let chosenColorRhSleeveUpperHex = "chosenColor" + mappedGarment.rhsleeveupper[1].substr(4,1) + mappedGarment.rhsleeveupper[1].substr(8,1)  + "Hex";
	let chosenColorRhSleeveLowerHex = "chosenColor" + mappedGarment.rhsleevelower[1].substr(4,1) + mappedGarment.rhsleevelower[1].substr(8,1)  + "Hex";
	let chosenColorLhSleeveUpperHex = "chosenColor" + mappedGarment.lhsleeveupper[1].substr(4,1) + mappedGarment.lhsleeveupper[1].substr(8,1)  + "Hex";
	let chosenColorLhSleeveLowerHex = "chosenColor" + mappedGarment.lhsleevelower[1].substr(4,1) + mappedGarment.lhsleevelower[1].substr(8,1)  + "Hex";
	let chosenColorNumberBoxHex = "chosenColor" + mappedGarment.numberbox[1].substr(4,1) + mappedGarment.numberbox[1].substr(8,1)  + "Hex";

	function removeClash(position, oldClashPosition, chosenColorPositionHex) {

		let tempPosition = position;
		let oldClash = oldClashPosition;

		if (chosenColorPositionHex.charAt(11) === "B" || chosenColorPositionHex.charAt(11) === "1" || chosenColorPositionHex.charAt(11) === "2") {

			return eval(chosenColorPositionHex);

		} else if (mappedGarment[tempPosition][1] === "clash" || mappedGarment[tempPosition][1] === "clash2") {
			
			let tempColor = "chosenColor" + oldClash.substr(4,1) + oldClash.substr(8,1) + "Hex";

			if (tempColor === "chosenColorBgHex") {

				return chosenColorBgHex;

			} else if (tempColor === "chosenColor1Hex") {

				return chosenColor1Hex;

			} else if (tempColor === "chosenColor2Hex") {

				return chosenColor2Hex;
			}
		}
	}


	chosenColorRhChestHex = removeClash("rhchest", oldClashRhChest, chosenColorRhChestHex);
	chosenColorLhChestHex = removeClash("lhchest", oldClashLhChest, chosenColorLhChestHex);
	chosenColorCentreChestHex = removeClash("centrechest", oldClashCentreChest, chosenColorCentreChestHex);
	chosenColorMainFrontHex = removeClash("mainfront", oldClashMainFront, chosenColorMainFrontHex);
	chosenColorRhCollarHex = removeClash("rhcollar", oldClashRhCollar, chosenColorRhCollarHex);
	chosenColorLhCollarHex = removeClash("lhcollar", oldClashLhCollar, chosenColorLhCollarHex);
	chosenColorBackTop1Hex = removeClash("backtop1", oldClashBackTop1, chosenColorBackTop1Hex);
	chosenColorBackTop2Hex = removeClash("backtop2", oldClashBackTop2, chosenColorBackTop2Hex);
	chosenColorBackBottom1Hex = removeClash("backbottom1", oldClashBackBottom1, chosenColorBackBottom1Hex);
	chosenColorBackBottom2Hex = removeClash("backbottom2", oldClashBackBottom2, chosenColorBackBottom2Hex);
	chosenColorRhSleeveUpperHex = removeClash("rhsleeveupper", oldClashRhSleeveUpper, chosenColorRhSleeveUpperHex);
	chosenColorRhSleeveLowerHex = removeClash("rhsleevelower", oldClashRhSleeveLower, chosenColorRhSleeveLowerHex);
	chosenColorLhSleeveUpperHex = removeClash("lhsleeveupper", oldClashLhSleeveUpper, chosenColorLhSleeveUpperHex);
	chosenColorLhSleeveLowerHex = removeClash("lhsleevelower", oldClashLhSleeveLower, chosenColorLhSleeveLowerHex);
	chosenColorNumberBoxHex =  removeClash("numberbox", oldClashNumberBox, chosenColorNumberBoxHex);


	let logoApplication = "EMBROIDERED";

	if (chosenGarment === "3" || chosenGarment === "4") {
		
		logoApplication = "EMBROIDERED";

	} else {
		
		logoApplication = "SUBLIMATED";
	}

	let fabric1 = designs[chosenGarment].fabric1;
	let fabric2 = designs[chosenGarment].fabric2;



	let logoAccessGarment = String(mappedGarment.garmentType);

	if (mappedGarment.sponsorsVersion === "sponsors") {


	document.getElementById("design-pack2").innerHTML = 
    `<div class="page1">
				<div class="tech-logo"><img src="assets/techpack/logos/eps-logo.svg" class="logo" alt="logo"></div>
				<div class="tech-cad"><h2>CAD</h2><h1>SAMPLE</div>
				<div class="tech-order">
					<div class="order-title border1">Order Details</div>
					<div class="order-1title border1">Customer</div><div class="order-1info border1"><h6 class="edit-text" ref="0" contenteditable="true">${clubs[chosenClubIndex].name} ${yyyy + 1}</h6></div>
					<div class="order-2title border1">PO Number</div><div class="order-2info border1"><h6 class="edit-text" ref="1" contenteditable="true">PO</h6></div>
					<div class="order-3title border1">Style Name</div><div class="order-3info border1"><h6 class="edit-text" ref="2" contenteditable="true">${customisedGarments[selectedDesign].garmentName} ${output[selectedDesign]}</h6></div>
					<div class="order-4title border1">Style Code</div><div class="order-4info border1"><h6 class="edit-text" ref="3" contenteditable="true">${clubs[chosenClubIndex].initials}${yy + 1}${designs[chosenGarment].initials}${output[chosenItem]}</h6></div>
					<div class="order-5title border1">Size Spec</div><div class="order-5info border1"><h6 class="edit-text" ref="4" contenteditable="true">See Size Spec on Page 4</h6></div>
					<div class="order-6title border1">Date</div><div class="order-6info border1"><h6 contenteditable="true">${today}</h6></div>
					<div class="order-7title border1">Ex Fty Date</div><div class="order-7info border1"><h6 class="edit-text" ref="5" contenteditable="true">ASAP<h6></div>
				</div>
				<div class="tech-production">
					<div class="production-title border1">Production Details</div>
					<div class="production-1title border1">Fabric 1</div><div class="production-1info border1"><h7 class="edit-text fabric1" ref="6" contenteditable="true">${fabric1}</h7></div><div class="production-1color border1"></div>
					<div class="production-2title border1">Fabric 2</div><div class="production-2info border1"><h7 class="edit-text fabric2" ref="7" contenteditable="true">${fabric2}</h7></div><div class="production-2color border1"></div>
					<div class="production-3title border1">Neck Tape</div><div class="production-3info border1"><h6 class="edit-text" ref="8" contenteditable="true">Oxen</h6></div><div class="production-3color border1"></div>
					<div class="production-4title border1">${designs[chosenGarment].option1}</div><div class="production-4info border1"><h3>${chosenSleeveTipColorRef}</h3></div><div class="production-4color border1" style="background-color:${chosenSleeveTipColorHex};""></div>
					<div class="production-5title border1">${designs[chosenGarment].option2}</div><div class="production-5info border1"><h3>${chosenColorBgRef}</h3></div><div class="production-5color border1" style="background-color:${chosenColorBgHex};"></div>
					<div class="production-6title border1"><h6>${designs[chosenGarment].option3}</h6></div><div class="production-6info border1"><h3>${option3ColorRef}</h3></div><div class="production-6color border1" style="background-color:${option3ColorHex};"></div>
					<div class="production-7title border1">${designs[chosenGarment].option4}</div><div class="production-7info border1"><h3>${option4ColorRef}</h3></div><div class="production-7color border1" style="background-color:${option4ColorHex};"></div>
				</div>
				<div class="tech-comments">
					<div class="comments-title border1">Comments</div>
					<div class="comments-info border1"></div>
				</div>

				<div class="tech-colours">
						<div class="colour-1colour border1" style="background-color:${chosenColorBgHex};"></div><div class="colour-1title border1">${chosenColorBgRef}</div>
						<div class="colour-2colour border1" style="background-color:${chosenColor1Hex};"></div><div class="colour-2title border1">${chosenColor1Ref}</div>
						<div class="colour-3colour border1" style="background-color:${chosenColor2Hex};"></div><div class="colour-3title border1">${chosenColor2Ref}</div>
						<div class="colour-4colour border1" style="background-color:${patterns[chosenPattern].shade1Hex};"></div><div class="colour-4title border1">${patterns[chosenPattern].shade1Ref}</div>
						<div class="colour-5colour border1" style="background-color:${patterns[chosenPattern].shade2Hex};"></div><div class="colour-5title border1">${patterns[chosenPattern].shade2Ref}</div>
						<div class="colour-6colour border1"></div><div class="colour-6title border1">N/A</div>
				</div>


				<div class="tech-main">
					<section>
	    				<aside id="svg2">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhchest" + "/" + mappedGarment.rhchest[0] + "rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + mappedGarment.lhchest[0] + "lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "centrechest" + "/" + mappedGarment.centrechest[0] + "centrechest" + mappedGarment[mappedGarment.centrechest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "mainfront" + "/" + mappedGarment.mainfront[0] + "mainfront" + mappedGarment[mappedGarment.mainfront[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhcollar" + "/" + mappedGarment.rhcollar[0] + "rhcollar" + mappedGarment[mappedGarment.rhcollar[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhcollar" + "/" + mappedGarment.lhcollar[0] + "lhcollar" + mappedGarment[mappedGarment.lhcollar[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backtop1" + "/" + mappedGarment.backtop1[0] + "backtop1" + mappedGarment[mappedGarment.backtop1[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backtop2" + "/" + mappedGarment.backtop2[0] + "backtop2" + mappedGarment[mappedGarment.backtop2[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backbottom1" + "/" + mappedGarment.backbottom1[0] + "backbottom1" + mappedGarment[mappedGarment.backbottom1[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backbottom2" + "/" + mappedGarment.backbottom2[0] + "backbottom2" + mappedGarment[mappedGarment.backbottom2[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhsleeveupper" + "/" + mappedGarment.rhsleeveupper[0] + "rhsleeveupper" + mappedGarment[mappedGarment.rhsleeveupper[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhsleevelower" + "/" + mappedGarment.rhsleevelower[0] + "rhsleevelower" + mappedGarment[mappedGarment.rhsleevelower[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhsleeveupper" + "/" + mappedGarment.lhsleeveupper[0]+ "lhsleeveupper" + mappedGarment[mappedGarment.lhsleeveupper[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhsleevelower" + "/" + mappedGarment.lhsleevelower[0] + "lhsleevelower" + mappedGarment[mappedGarment.lhsleevelower[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "numberbox" + "/" + mappedGarment.numberbox[0] + "numberbox" + mappedGarment[mappedGarment.numberbox[1]] + ".svg")}">	
							<svg class="svg2__design" viewBox="0 0 750 400">
								<path id="path-1" d="${customisedGarments[selectedDesign].path1}" style="fill:${customisedGarments[selectedDesign].color1}"/>
								<path id="path-2" d="${customisedGarments[selectedDesign].path2}" style="fill:${customisedGarments[selectedDesign].color2}"/>
							</svg>
							<img id="svg2__pattern" src="${customisedGarments[selectedDesign].pattern}">
							<svg class="svg2__background" viewBox="0 0 750 400">
								<defs>
									<style>
									.	cls-2{fill:none}
									</style>
								</defs>
								<path id="path-background" d="${customisedGarments[selectedDesign].pathBackground}" style="fill:${customisedGarments[selectedDesign].colorBackground}"/>
							</svg>
							<img id="svg2__baseimage" src="${customisedGarments[selectedDesign].baseImage}">
						</aside>
					</section>
				</div>


				<div class="tech-trims">
				<div class="trims-title border1">Trims</div>
					<div class="trims-info border1"><img src="${("assets/techpack/trims/" + customisedGarments[selectedDesign].club + "/" + customisedGarments[selectedDesign].garmentType + ".svg")}"></div>
				</div>
			</div>

			<div class="page2">
				<div class="tech-logo2"><img src="assets/techpack/logos/eps-logo.svg" class="logo" alt="logo"></div>
				<div class="tech-labels"><img src="${("assets/techpack/labels/" + customisedGarments[selectedDesign].club + "/" + customisedGarments[selectedDesign].garmentType + ".svg")}"></div>
				<img id="construction-info" src="${(constructionSrc)}">
				<div class="tech-construction">
	    			<section>
	    				<aside id="svg2">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhchest" + "/" + mappedGarment.rhchest[0] + "rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + mappedGarment.lhchest[0] + "lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "centrechest" + "/" + mappedGarment.centrechest[0] + "centrechest" + mappedGarment[mappedGarment.centrechest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "mainfront" + "/" + mappedGarment.mainfront[0] + "mainfront" + mappedGarment[mappedGarment.mainfront[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhcollar" + "/" + mappedGarment.rhcollar[0] + "rhcollar" + mappedGarment[mappedGarment.rhcollar[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhcollar" + "/" + mappedGarment.lhcollar[0] + "lhcollar" + mappedGarment[mappedGarment.lhcollar[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors" + "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backtop1" + "/" + mappedGarment.backtop1[0] + "backtop1" + mappedGarment[mappedGarment.backtop1[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backtop2" + "/" + mappedGarment.backtop2[0] + "backtop2" + mappedGarment[mappedGarment.backtop2[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backbottom1" + "/" + mappedGarment.backbottom1[0] + "backbottom1" + mappedGarment[mappedGarment.backbottom1[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backbottom2" + "/" + mappedGarment.backbottom2[0] + "backbottom2" + mappedGarment[mappedGarment.backbottom2[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhsleeveupper" + "/" + mappedGarment.rhsleeveupper[0] + "rhsleeveupper" + mappedGarment[mappedGarment.rhsleeveupper[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhsleevelower" + "/" + mappedGarment.rhsleevelower[0] + "rhsleevelower" + mappedGarment[mappedGarment.rhsleevelower[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhsleeveupper" + "/" + mappedGarment.lhsleeveupper[0]+ "lhsleeveupper" + mappedGarment[mappedGarment.lhsleeveupper[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhsleevelower" + "/" + mappedGarment.lhsleevelower[0] + "lhsleevelower" + mappedGarment[mappedGarment.lhsleevelower[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "numberbox" + "/" + mappedGarment.numberbox[0] + "numberbox" + mappedGarment[mappedGarment.numberbox[1]] + ".svg")}">	
							<svg class="svg2__design" viewBox="0 0 750 400">
								<path id="path-1" d="${customisedGarments[selectedDesign].path1}" style="fill:${customisedGarments[selectedDesign].color1}"/>
								<path id="path-2" d="${customisedGarments[selectedDesign].path2}" style="fill:${customisedGarments[selectedDesign].color2}"/>
							</svg>
							<img id="svg2__pattern" src="${customisedGarments[selectedDesign].pattern}">
							<svg class="svg2__background" viewBox="0 0 750 400">
								<defs>
									<style>
									.	cls-2{fill:none}
									</style>
								</defs>
								<path id="path-background" d="${customisedGarments[selectedDesign].pathBackground}" style="fill:${customisedGarments[selectedDesign].colorBackground}"/>
							</svg>
							<img id="svg2__baseimage" src="${customisedGarments[selectedDesign].baseImage}">
						</aside>
					</section>
				</div>
			</div>

			<div class="page3">
				<div class="tech-logo3"><img src="assets/techpack/logos/eps-logo.svg" class="logo" alt="logo"></div>
				<div class="tech-sponsors">
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type" ref="0">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-lhchest" style="background-color:${chosenColorLhChestHex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhchest" + "/" + "1lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
						<h3 class="tech-logosize-position">LH CHEST</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + "pantones" + "/" + "1lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="9" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-lhchest")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type" ref="1">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-rhchest" style="background-color:${chosenColorRhChestHex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhchest" + "/" + "1rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
						<h3 class="tech-logosize-position">RH CHEST</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhchest" + "/" + "pantones" + "/" + "1rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="10" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-rhchest")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type" ref="2">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-centrechest" style="background-color:${chosenColorCentreChestHex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "centrechest" + "/" + "1centrechest" + mappedGarment[mappedGarment.centrechest[1]] + ".svg")}">
						<h3 class="tech-logosize-position">CENTRE CHEST</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "centrechest" + "/" + "pantones" + "/" + "1centrechest" + mappedGarment[mappedGarment.centrechest[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="11" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-centrechest")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type" ref="3">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-mainfront" style="background-color:${chosenColorMainFrontHex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "mainfront" + "/" + "1mainfront" + mappedGarment[mappedGarment.mainfront[1]] + ".svg")}">
						<h3 class="tech-logosize-position">MAIN FRONT</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "mainfront" + "/" + "pantones" + "/" + "1mainfront" + mappedGarment[mappedGarment.mainfront[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="12" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-mainfront")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type"  ref="4">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-lhcollar" style="background-color:${chosenColorLhCollarHex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhcollar" + "/" + "1lhcollar" + mappedGarment[mappedGarment.lhcollar[1]] + ".svg")}">
						<h3 class="tech-logosize-position">LH COLLAR</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhcollar" + "/" + "pantones" + "/" + "1lhcollar" + mappedGarment[mappedGarment.lhcollar[1]] + ".svg")}">						
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="13" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-lhcollar")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type"  ref="5">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-rhcollar" style="background-color:${chosenColorRhCollarHex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhcollar" + "/" + "1rhcollar" + mappedGarment[mappedGarment.rhcollar[1]] + ".svg")}">
						<h3 class="tech-logosize-position">RH COLLAR</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhcollar" + "/" + "pantones" + "/" + "1rhcollar" + mappedGarment[mappedGarment.rhcollar[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="14" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-rhcollar")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type"  ref="6">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-backtop1" style="background-color:${chosenColorBackTop1Hex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backtop1" + "/" + "1backtop1" + mappedGarment[mappedGarment.backtop1[1]] + ".svg")}">
						<h3 class="tech-logosize-position">BACK TOP 1</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backtop1" + "/" + "pantones" + "/" + "1backtop1" + mappedGarment[mappedGarment.backtop1[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="15" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-backtop1")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type"  ref="7">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-backtop2" style="background-color:${chosenColorBackTop2Hex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backtop2" + "/" + "1backtop2" + mappedGarment[mappedGarment.backtop2[1]] + ".svg")}">
						<h3 class="tech-logosize-position">BACK TOP 2</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backtop2" + "/" + "pantones" + "/" + "1backtop2" + mappedGarment[mappedGarment.backtop2[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="16" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-backtop2")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type"  ref="8">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-backbottom1" style="background-color:${chosenColorBackBottom1Hex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backbottom1" + "/" + "1backbottom1" + mappedGarment[mappedGarment.backbottom1[1]] + ".svg")}">
						<h3 class="tech-logosize-position">BACK BOTTOM 1</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backbottom1" + "/" + "pantones" + "/" + "1backbottom1" + mappedGarment[mappedGarment.backbottom1[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="17" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-backbottom1")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type"  ref="9">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-backbottom2" style="background-color:${chosenColorBackBottom2Hex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backbottom2" + "/" + "1backbottom2" + mappedGarment[mappedGarment.backbottom2[1]] + ".svg")}">
						<h3 class="tech-logosize-position">BACK BOTTOM 2</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backbottom2" + "/" + "pantones" + "/" + "1backbottom2" + mappedGarment[mappedGarment.backbottom2[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="18" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-backbottom2")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type"  ref="10">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-lhsleeveupper" style="background-color:${chosenColorLhSleeveUpperHex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhsleeveupper" + "/" + "1lhsleeveupper" + mappedGarment[mappedGarment.lhsleeveupper[1]] + ".svg")}">
						<h3 class="tech-logosize-position">LH SLEEVE UPPER</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhsleeveupper" + "/" + "pantones" + "/" + "1lhsleeveupper" + mappedGarment[mappedGarment.lhsleeveupper[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="19" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-lhsleeveupper")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type"  ref="11">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-lhsleevelower" style="background-color:${chosenColorLhSleeveLowerHex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhsleevelower" + "/" + "1lhsleevelower" + mappedGarment[mappedGarment.lhsleevelower[1]] + ".svg")}">
						<h3 class="tech-logosize-position">LH SLEEVE LOWER</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhsleevelower" + "/" + "pantones" + "/" + "1lhsleevelower" + mappedGarment[mappedGarment.lhsleevelower[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="20" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-lhsleevelower")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type"  ref="12">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-rhsleeveupper" style="background-color:${chosenColorRhSleeveUpperHex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhsleeveupper" + "/" + "1rhsleeveupper" + mappedGarment[mappedGarment.rhsleeveupper[1]] + ".svg")}">
						<h3 class="tech-logosize-position">RH SLEEVE UPPER</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhsleeveupper" + "/" + "pantones" + "/" + "1rhsleeveupper" + mappedGarment[mappedGarment.rhsleeveupper[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="21" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-rhsleeveupper")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type"  ref="13">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-rhsleevelower" style="background-color:${chosenColorRhSleeveLowerHex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhsleevelower" + "/" + "1rhsleevelower" + mappedGarment[mappedGarment.rhsleevelower[1]] + ".svg")}">
						<h3 class="tech-logosize-position">RH SLEEVE LOWER</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhsleevelower" + "/" + "pantones" + "/" + "1rhsleevelower" + mappedGarment[mappedGarment.rhsleevelower[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="22" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-rhsleevelower")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type"  ref="14">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-numberbox" style="background-color:${chosenColorNumberBoxHex};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "numberbox" + "/" + "1numberbox" + mappedGarment[mappedGarment.numberbox[1]] + ".svg")}">
						<h3 class="tech-logosize-position">NUMBER BOX</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "numberbox" + "/" + "pantones" + "/" + "1numberbox" + mappedGarment[mappedGarment.numberbox[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="23" contenteditable="true">${clubs[chosenClubIndex][String(logoAccessGarment + "-numberbox")]}</h5>
					</aside>
				</div>
			</div>

			<div class="page4">
				<div class="tech-logo4"><img src="assets/techpack/logos/eps-logo.svg" class="logo" alt="logo"></div>
				<div class="tech-sizes">
					<div class="tech-garmentsizes"><img src="${("assets/techpack/sizeguide/" + customisedGarments[selectedDesign].garmentType + "/" + chosenSleeveType + ".jpg")}"></div>
				</div>
			</div>

			`
} else {

	document.getElementById("design-pack2").innerHTML = 
    `<div class="page1">
				<div class="tech-logo"><img src="assets/techpack/logos/eps-logo.svg" class="logo" alt="logo"></div>
				<div class="tech-cad"><h2>CAD</h2><h1>SAMPLE</div>
				<div class="tech-order">
					<div class="order-title border1">Order Details</div>
					<div class="order-1title border1">Customer</div><div class="order-1info border1"><h6 class="edit-text" ref="0" contenteditable="true">${clubs[chosenClubIndex].name} ${yyyy + 1}</h6></div>
					<div class="order-2title border1">PO Number</div><div class="order-2info border1"><h6 class="edit-text" ref="1" contenteditable="true">PO</h6></div>
					<div class="order-3title border1">Style Name</div><div class="order-3info border1"><h6 class="edit-text" ref="2" contenteditable="true" >${customisedGarments[selectedDesign].garmentName} ${output[selectedDesign]}</h6></div>
					<div class="order-4title border1">Style Code</div><div class="order-4info border1"><h6 class="edit-text" ref="3" contenteditable="true">${clubs[chosenClubIndex].initials}${yy + 1}${designs[chosenGarment].initials}${output[chosenItem]}</h6></div>
					<div class="order-5title border1">Size Spec</div><div class="order-5info border1"><h6 class="edit-text" ref="4" contenteditable="true">See Size Spec on Page 4</h6></div>
					<div class="order-6title border1">Date</div><div class="order-6info border1"><h6 contenteditable="true">${today}</h6></div>
					<div class="order-7title border1">Ex Fty Date</div><div class="order-7info border1"><h6 class="edit-text" ref="5" contenteditable="true">ASAP<h6></div>
				</div>
				<div class="tech-production">
					<div class="production-title border1">Production Details</div>
					<div class="production-1title border1">Fabric 1</div><div class="production-1info border1"><h7 class="edit-text fabric1" ref="6" contenteditable="true">${fabric1}</h7></div><div class="production-1color border1"></div>
					<div class="production-2title border1">Fabric 2</div><div class="production-2info border1"><h7 class="edit-text fabric2" ref="6" contenteditable="true">${fabric2}</h7></div><div class="production-2color border1"></div>
					<div class="production-3title border1">Neck Tape</div><div class="production-3info border1"><h6 class="edit-text" ref="8" contenteditable="true">Oxen</h6></div><div class="production-3color border1"></div>
					<div class="production-4title border1">${designs[chosenGarment].option1}</div><div class="production-4info border1"><h3>${chosenSleeveTipColorRef}</h3></div><div class="production-4color border1" style="background-color:${chosenSleeveTipColorHex};""></div>
					<div class="production-5title border1">${designs[chosenGarment].option2}</div><div class="production-5info border1"><h3>${chosenColorBgRef}</h3></div><div class="production-5color border1" style="background-color:${chosenColorBgHex};"></div>
					<div class="production-6title border1"><h6>${designs[chosenGarment].option3}</h6></div><div class="production-6info border1"><h3>${option3ColorRef}</h3></div><div class="production-6color border1" style="background-color:${option3ColorHex};"></div>
					<div class="production-7title border1">${designs[chosenGarment].option4}</div><div class="production-7info border1"><h3>${option4ColorRef}</h3></div><div class="production-7color border1" style="background-color:${option4ColorHex};"></div>
				</div>
				<div class="tech-comments">
					<div class="comments-title border1">Comments</div>
					<div class="comments-info border1"></div>
				</div>

				<div class="tech-colours">
						<div class="colour-1colour border1" style="background-color:${chosenColorBgHex};"></div><div class="colour-1title border1">${chosenColorBgRef}</div>
						<div class="colour-2colour border1" style="background-color:${chosenColor1Hex};"></div><div class="colour-2title border1">${chosenColor1Ref}</div>
						<div class="colour-3colour border1" style="background-color:${chosenColor2Hex};"></div><div class="colour-3title border1">${chosenColor2Ref}</div>
						<div class="colour-4colour border1" style="background-color:${patterns[chosenPattern].shade1Hex};"></div><div class="colour-4title border1">${patterns[chosenPattern].shade1Ref}</div>
						<div class="colour-5colour border1" style="background-color:${patterns[chosenPattern].shade2Hex};"></div><div class="colour-5title border1">${patterns[chosenPattern].shade2Ref}</div>
						<div class="colour-6colour border1"></div><div class="colour-6title border1">N/A</div>
				</div>


				<div class="tech-main">
					<section>
	    				<aside id="svg2">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhchest" + "/" + mappedGarment.rhchest[0] + "rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + mappedGarment.lhchest[0] + "lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
							<svg class="svg2__design" viewBox="0 0 750 400">
								<path id="path-1" d="${customisedGarments[selectedDesign].path1}" style="fill:${customisedGarments[selectedDesign].color1}"/>
								<path id="path-2" d="${customisedGarments[selectedDesign].path2}" style="fill:${customisedGarments[selectedDesign].color2}"/>
							</svg>
							<img id="svg2__pattern" src="${customisedGarments[selectedDesign].pattern}">
							<svg class="svg2__background" viewBox="0 0 750 400">
								<defs>
									<style>
									.	cls-2{fill:none}
									</style>
								</defs>
								<path id="path-background" d="${customisedGarments[selectedDesign].pathBackground}" style="fill:${customisedGarments[selectedDesign].colorBackground}"/>
							</svg>
							<img id="svg2__baseimage" src="${customisedGarments[selectedDesign].baseImage}">
						</aside>
					</section>
				</div>


				<div class="tech-trims">
				<div class="trims-title border1">Trims</div>
					<div class="trims-info border1"><img src="${("assets/techpack/trims/" + customisedGarments[selectedDesign].club + "/" + customisedGarments[selectedDesign].garmentType + ".svg")}"></div>
				</div>
			</div>

			<div class="page2">
				<div class="tech-logo2"><img src="assets/techpack/logos/eps-logo.svg" class="logo" alt="logo"></div>
				<div class="tech-labels"><img src="${("assets/techpack/labels/" + customisedGarments[selectedDesign].club + "/" + customisedGarments[selectedDesign].garmentType + ".svg")}"></div>
				<img id="construction-info" src="${(constructionSrc)}">
				<div class="tech-construction">
	    			<section>
	    				<aside id="svg2">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhchest" + "/" + mappedGarment.rhchest[0] + "rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + mappedGarment.lhchest[0] + "lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "centrechest" + "/" + mappedGarment.centrechest[0] + "centrechest" + mappedGarment[mappedGarment.centrechest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "mainfront" + "/" + mappedGarment.mainfront[0] + "mainfront" + mappedGarment[mappedGarment.mainfront[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhcollar" + "/" + mappedGarment.rhcollar[0] + "rhcollar" + mappedGarment[mappedGarment.rhcollar[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhcollar" + "/" + mappedGarment.lhcollar[0] + "lhcollar" + mappedGarment[mappedGarment.lhcollar[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backtop1" + "/" + mappedGarment.backtop1[0] + "backtop1" + mappedGarment[mappedGarment.backtop1[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backtop2" + "/" + mappedGarment.backtop2[0] + "backtop2" + mappedGarment[mappedGarment.backtop2[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backbottom1" + "/" + mappedGarment.backbottom1[0] + "backbottom1" + mappedGarment[mappedGarment.backbottom1[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "backbottom2" + "/" + mappedGarment.backbottom2[0] + "backbottom2" + mappedGarment[mappedGarment.backbottom2[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhsleeveupper" + "/" + mappedGarment.rhsleeveupper[0] + "rhsleeveupper" + mappedGarment[mappedGarment.rhsleeveupper[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhsleevelower" + "/" + mappedGarment.rhsleevelower[0] + "rhsleevelower" + mappedGarment[mappedGarment.rhsleevelower[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhsleeveupper" + "/" + mappedGarment.lhsleeveupper[0]+ "lhsleeveupper" + mappedGarment[mappedGarment.lhsleeveupper[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "lhsleevelower" + "/" + mappedGarment.lhsleevelower[0] + "lhsleevelower" + mappedGarment[mappedGarment.lhsleevelower[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "numberbox" + "/" + mappedGarment.numberbox[0] + "numberbox" + mappedGarment[mappedGarment.numberbox[1]] + ".svg")}">	
							<svg class="svg2__design" viewBox="0 0 750 400">
								<path id="path-1" d="${customisedGarments[selectedDesign].path1}" style="fill:${customisedGarments[selectedDesign].color1}"/>
								<path id="path-2" d="${customisedGarments[selectedDesign].path2}" style="fill:${customisedGarments[selectedDesign].color2}"/>
							</svg>
							<img id="svg2__pattern" src="${customisedGarments[selectedDesign].pattern}">
							<svg class="svg2__background" viewBox="0 0 750 400">
								<defs>
									<style>
									.	cls-2{fill:none}
									</style>
								</defs>
								<path id="path-background" d="${customisedGarments[selectedDesign].pathBackground}" style="fill:${customisedGarments[selectedDesign].colorBackground}"/>
							</svg>
							<img id="svg2__baseimage" src="${customisedGarments[selectedDesign].baseImage}">
						</aside>
					</section>
				</div>
			</div>

			<div class="page3">
				<div class="tech-logo3"><img src="assets/techpack/logos/eps-logo.svg" class="logo" alt="logo"></div>
				<div class="tech-sponsors">
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type" ref="0">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-lhchest" style="background-color:${eval("chosenColor" + mappedGarment.lhchest[1].substr(4,1) + mappedGarment.lhchest[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + "1lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
						<h3 class="tech-logosize-position">LH CHEST</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + "pantones" + "/" + "1lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="9" contenteditable="true">${clubs[chosenClubIndex][String("logos-lhchest")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type" ref="1">${logoApplication}</h3>
						<img class="tech-logosize-logo tech-logo-rhchest" style="background-color:${eval("chosenColor" + mappedGarment.rhchest[1].substr(4,1) + mappedGarment.rhchest[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhchest" + "/" + "1rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
						<h3 class="tech-logosize-position">RH CHEST</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + "sponsors"+ "/" + mappedGarment.garmentType + "/" + mappedGarment.sponsorsClub + "/" + "rhchest" + "/" + "pantones" + "/" + "1rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size edit-text" ref="10" contenteditable="true">${clubs[chosenClubIndex][String("logos-rhchest")]}</h5>
					</aside>
				</div>
			</div>

			<div class="page4">
				<div class="tech-logo4"><img src="assets/techpack/logos/eps-logo.svg" class="logo" alt="logo"></div>
				<div class="tech-sizes">
					<div class="tech-garmentsizes"><img src="${("assets/techpack/sizeguide/" + customisedGarments[selectedDesign].garmentType + "/" + chosenSleeveType + ".jpg")}"></div>
				</div>
			</div>

			`
}
}

/* Notice when Back Button is Clicked  */

let backButton = document.getElementsByClassName("back"); //access back-button element button
for (let i = 0; i < backButton.length; i++) { //workout which back-button was selected
		backButton[i].onclick = backGarments; //operate 'backGarments' function on reset-button press
	}



/* Function to Operate when cancel Button is clicked  */

function backGarments(e) {

	for (let i = 0; i < backButton.length; i++) { //workout which back-button was selected
		back[i].style.display = "none"; //operate 'backGarments' function on reset-button press
	}

	for (let i = 0; i < factoryButton.length; i++) { //workout which back-button was selected
		factory[i].style.display = "none"; //operate 'backGarments' function on reset-button press
	}

	var add = document.getElementById("add"); //access back element
	add.style.display = "block"; //make back buttons visible

	var addDesignPack = document.getElementById("design-pack"); //access design-pack element
	addDesignPack.style.display = "block"; //design-pack visible

	var removeDesignPack2 = document.getElementById("design-pack2"); //access design-pack element
	removeDesignPack2.style.display = "none"; //design-pack invisible

	var addPackLayout = document.getElementById("pack-layout"); //access design-pack element
	addPackLayout.style.display = "grid"; //make design-pack invisible


	document.body.scrollTop = 0; // For Safari
  	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


	mapCustomisedGarments()
	techButton();
	deleteEdit();
	editButton();
	deleteButton();
	duplicateButton();
	rearrangeUpButton();
	rearrangeDownButton();
}


/* Notice when Logo Application Text is Clicked  */
let logoApplicationText = "";

function editLogoApplication() {
	logoApplicationText = document.getElementsByClassName("tech-logosize-type");
	for (let i = 0; i < logoApplicationText.length; i++) {
		logoApplicationText[i].onclick = logoApplicationTextChange;
	}
}


function logoApplicationTextChange(e) {
	
 let ref = e.target.getAttribute("ref"); //identify the ref

 if (logoApplicationText[ref].innerHTML === "SUBLIMATED") {
 	logoApplicationText[ref].innerHTML = "EMBROIDERED";
 } else if (logoApplicationText[ref].innerHTML === "EMBROIDERED") {
 	logoApplicationText[ref].innerHTML = "HEAT SEALED";
 } else if (logoApplicationText[ref].innerHTML === "HEAT SEALED") {
 	logoApplicationText[ref].innerHTML = "SUBLIMATED";
 }

}


/* Notice when factory Button is Clicked  */

let factoryButton = document.getElementsByClassName("factory"); 
for (let i = 0; i < factoryButton.length; i++) { 
		factoryButton[i].onclick = factoryFunction; 
	}


/* Function to Operate when factory Button is clicked  */

function factoryFunction(e) {


let fabric1Text = document.getElementsByClassName("fabric1");

console.log(fabric1Text[0]);

let fabric2Text = document.getElementsByClassName("fabric2");
 
 let ref = e.target.getAttribute("ref"); //identify the ref

 console.log(factoryGarment);

 if (ref === "hangzhou") {

 	if (factoryGarment === 0 || factoryGarment === "0") {
 		fabric1Text[0].innerHTML = "Pinhole Pro 0171";
 		fabric2Text[0].innerHTML = "0129 Exotek";
 		console.log("H");
 	} else if (factoryGarment === 1  || factoryGarment === "1") {
 		fabric1Text[0].innerHTML = "Replica Fabric";
 		fabric2Text[0].innerHTML ="N/A";
 		console.log("H");
 	} else if (factoryGarment === 2  || factoryGarment === "2") {
 		fabric1Text[0].innerHTML = "Silk Poly";
 		fabric2Text[0].innerHTML ="N/A";
 		console.log("H");
 	} else if (factoryGarment === 3  || factoryGarment === "3") {
 		fabric1Text[0].innerHTML = "Birdseye";
 		fabric2 = "N/A";
 		console.log("H");
 	} else if (factoryGarment === 4  || factoryGarment === "4") {
 		fabric1Text[0].innerHTML = "Bonded Fleece No. 12";
 		fabric2Text[0].innerHTML = "N/A";
 		console.log("H");
 	}
 } else if (ref === "blackthorn") {
 	if (factoryGarment === 0  || factoryGarment === "0") {
 		fabric1Text[0].innerHTML = "TBC";
 		fabric2Text[0].innerHTML = "TBC";
 		console.log("B");
 	} else if (factoryGarment === 1  || factoryGarment === "1") {
 		fabric1Text[0].innerHTML = "Smooth Replica";
 		fabric2Text[0].innerHTML ="N/A";
 		console.log("B");
 	} else if (factoryGarment === 2  || factoryGarment === "2") {
 		fabric1Text[0].innerHTML = "Interlock 140";
 		fabric2Text[0].innerHTML ="N/A";
 		console.log("B");
 	} else if (factoryGarment === 3  || factoryGarment === "3") {
 		fabric1Text[0].innerHTML = "Micro Mesh";
 		console.log("B");
 		fabric2 = "N/A";
 	} else if (factoryGarment === 4  || factoryGarment === "4") {
 		fabric1Text[0].innerHTML = "Poly Softshell";
 		fabric2Text[0].innerHTML = "N/A";
 		console.log("B");
 	}
 } else if (ref === "calaro") {
 	if (factoryGarment === 0  || factoryGarment === "0") {
 		fabric1Text[0].innerHTML = "TBC";
 		fabric2Text[0].innerHTML = "TBC";
 		console.log("C");
 	} else if (factoryGarment === 1  || factoryGarment === "1") {
 		fabric1Text[0].innerHTML = "TBC";
 		fabric2Text[0].innerHTML ="N/A";
 		console.log("C");
 	} else if (factoryGarment === 2  || factoryGarment === "2") {
 		fabric1Text[0].innerHTML = "TBC";
 		fabric2Text[0].innerHTML ="N/A";
 		console.log("C");
 	} else if (factoryGarment === 3  || factoryGarment === "3") {
 		fabric1Text[0].innerHTML = "TBC";
 		fabric2 = "N/A";
 		console.log("C");
 	} else if (factoryGarment === 4  || factoryGarment === "4") {
 		fabric1Text[0].innerHTML = "TBC";
 		fabric2Text[0].innerHTML = "N/A";
 		console.log("C");
 	}
 } else if (ref === "mahr") {
 	if (factoryGarment === 0  || factoryGarment === "0") {
 		fabric1Text[0].innerHTML = "TBC";
 		fabric2Text[0].innerHTML = "TBC";
 		console.log("M");
 	} else if (factoryGarment === 1  || factoryGarment === "1") {
 		fabric1Text[0].innerHTML = "TBC";
 		fabric2Text[0].innerHTML ="N/A";
 		console.log("M");
 	} else if (factoryGarment === 2  || factoryGarment === "2") {
 		fabric1Text[0].innerHTML = "Microdot";
 		fabric2Text[0].innerHTML ="N/A";
 		console.log("M");
 	} else if (factoryGarment === 3  || factoryGarment === "3") {
 		fabric1Text[0].innerHTML = "Dazzle Mesh";
 		fabric2 = "N/A";
 		console.log("M");
 	} else if (factoryGarment === 4  || factoryGarment === "4") {
 		fabric1Text[0].innerHTML = "Heavy French Rib";
 		fabric2Text[0].innerHTML = "N/A";
 		console.log("M");
 	}
 }

}



/* Notice when a tech pack button is being clicked  */

function techButton() {
let garmentTech = document.getElementsByClassName("tech-garment"); //access design-pack2 element
for (let i = 0; i < garmentTech.length; i++) { //workout which design-pack element was selected
		garmentTech[i].onclick = garmentTechLoad; //operate 'designPackInfo' function on design-pack element press
	}
}

techButton() // run on load

/* Function to Operate when design design-pack2 element is clicked  */

function garmentTechLoad(e) {
	let selectedDesign = e.target.getAttribute("ref"); //identify the ref of the garment clicked

	for (let i = 0; i < backButton.length; i++) { //workout which back-button was selected
		back[i].style.display = "block"; //operate 'backGarments' function on reset-button press
	}

	for (let i = 0; i < factoryButton.length; i++) { //workout which back-button was selected
		factory[i].style.display = "inline-block"; //operate 'backGarments' function on reset-button press
	}

	var add = document.getElementById("add"); //access back element
	add.style.display = "none"; //make back buttons invisible

	var removeDesignPack = document.getElementById("design-pack"); //access design-pack element
	removeDesignPack.style.display = "none"; //make design-pack invisible

	var addDesignPack2 = document.getElementById("design-pack2"); //access design-pack element
	addDesignPack2.style.display = "block"; //design-pack visible

	var removePackLayout = document.getElementById("pack-layout"); //access design-pack element
	removePackLayout.style.display = "none"; //make design-pack invisible

	document.body.scrollTop = 0; // For Safari
  	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

	mapTechPack(selectedDesign);
	tempSaveAction(selectedDesign);
	editLogoApplication();
}

