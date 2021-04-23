
/* Map Garments to edit to "design-edit" Html element */


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

	function removeClash(position) {

		tempPosition = position;

		if (mappedGarment[tempPosition][1] === "clash") {
			
			tempColor = "chosenColor" + oldClash.substr(4,1) + oldClash.substr(8,1) + "Hex";

			if (tempColor === "chosenColorBgHex") {

				chosenColorhHex = chosenColorBgHex;

			} else if (tempColor === "chosenColor1Hex") {

				chosenColorhHex = chosenColor1Hex;

			} if (tempColor === "chosenColor2Hex") {

				chosenColorhHex = chosenColor2Hex;
			}
		}
	}

	removeClash("rhchest");
	removeClash("lhchest");
	removeClash("centrechest");
	removeClash("mainfront");
	removeClash("rhcollar");
	removeClash("lhcollar");
	removeClash("backtop1");
	removeClash("backtop2");
	removeClash("backbottom1");
	removeClash("backbottom2");
	removeClash("rhsleeveupper");
	removeClash("rhsleevelower");
	removeClash("lhsleeveupper");
	removeClash("lhsleevelower");
	removeClash("numberbox");





	let logoAccessGarment = String(mappedGarment.garmentType);

	if (mappedGarment.sponsorsVersion === "sponsors") {

	document.getElementById("design-pack2").innerHTML = 
    `<div class="page1">
				<div class="tech-logo"><img src="assets/techpack/logos/eps-logo.svg" class="logo" alt="logo"></div>
				<div class="tech-cad"><h2>CAD</h2><h1>SAMPLE</div>
				<div class="tech-order">
					<div class="order-title border1">Order Details</div>
					<div class="order-1title border1">Customer</div><div class="order-1info border1"><h6>${clubs[chosenClubIndex].name} ${yyyy + 1}</h6></div>
					<div class="order-2title border1">PO Number</div><div class="order-2info border1"></div>
					<div class="order-3title border1">Style Name</div><div class="order-3info border1"><h6>${customisedGarments[selectedDesign].garmentName} ${output[selectedDesign]}</h6></div>
					<div class="order-4title border1">Style Code</div><div class="order-4info border1"><h6>${clubs[chosenClubIndex].initials}${yy + 1}${designs[chosenGarment].initials}${output[chosenItem]}</h6></div>
					<div class="order-5title border1">Size Spec</div><div class="order-5info border1"><h6>See Size Spec on Page 4</h6></div>
					<div class="order-6title border1">Date</div><div class="order-6info border1"><h6>${today}</h6></div>
					<div class="order-7title border1">Ex Fty Date</div><div class="order-7info border1"></div>
				</div>
				<div class="tech-production">
					<div class="production-title border1">Production Details</div>
					<div class="production-1title border1">Fabric 1</div><div class="production-1info border1"><h3>${designs[chosenGarment].fabric1}</h3></div><div class="production-1color border1"></div>
					<div class="production-2title border1">Fabric 2</div><div class="production-2info border1"><h3>${designs[chosenGarment].fabric2}</h3></div><div class="production-2color border1"></div>
					<div class="production-3title border1">Neck Tape</div><div class="production-3info border1"><h3>Oxen</h3></div><div class="production-3color border1"></div>
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
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhchest" + "/" + mappedGarment.rhchest[0] + "rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + mappedGarment.lhchest[0] + "lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "centrechest" + "/" + mappedGarment.centrechest[0] + "centrechest" + mappedGarment[mappedGarment.centrechest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "mainfront" + "/" + mappedGarment.mainfront[0] + "mainfront" + mappedGarment[mappedGarment.mainfront[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhcollar" + "/" + mappedGarment.rhcollar[0] + "rhcollar" + mappedGarment[mappedGarment.rhcollar[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhcollar" + "/" + mappedGarment.lhcollar[0] + "lhcollar" + mappedGarment[mappedGarment.lhcollar[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backtop1" + "/" + mappedGarment.backtop1[0] + "backtop1" + mappedGarment[mappedGarment.backtop1[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backtop2" + "/" + mappedGarment.backtop2[0] + "backtop2" + mappedGarment[mappedGarment.backtop2[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backbottom1" + "/" + mappedGarment.backbottom1[0] + "backbottom1" + mappedGarment[mappedGarment.backbottom1[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backbottom2" + "/" + mappedGarment.backbottom2[0] + "backbottom2" + mappedGarment[mappedGarment.backbottom2[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhsleeveupper" + "/" + mappedGarment.rhsleeveupper[0] + "rhsleeveupper" + mappedGarment[mappedGarment.rhsleeveupper[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhsleevelower" + "/" + mappedGarment.rhsleevelower[0] + "rhsleevelower" + mappedGarment[mappedGarment.rhsleevelower[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhsleeveupper" + "/" + mappedGarment.lhsleeveupper[0]+ "lhsleeveupper" + mappedGarment[mappedGarment.lhsleeveupper[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhsleevelower" + "/" + mappedGarment.lhsleevelower[0] + "lhsleevelower" + mappedGarment[mappedGarment.lhsleevelower[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "numberbox" + "/" + mappedGarment.numberbox[0] + "numberbox" + mappedGarment[mappedGarment.numberbox[1]] + ".svg")}">	
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
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhchest" + "/" + mappedGarment.rhchest[0] + "rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + mappedGarment.lhchest[0] + "lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "centrechest" + "/" + mappedGarment.centrechest[0] + "centrechest" + mappedGarment[mappedGarment.centrechest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "mainfront" + "/" + mappedGarment.mainfront[0] + "mainfront" + mappedGarment[mappedGarment.mainfront[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhcollar" + "/" + mappedGarment.rhcollar[0] + "rhcollar" + mappedGarment[mappedGarment.rhcollar[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhcollar" + "/" + mappedGarment.lhcollar[0] + "lhcollar" + mappedGarment[mappedGarment.lhcollar[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backtop1" + "/" + mappedGarment.backtop1[0] + "backtop1" + mappedGarment[mappedGarment.backtop1[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backtop2" + "/" + mappedGarment.backtop2[0] + "backtop2" + mappedGarment[mappedGarment.backtop2[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backbottom1" + "/" + mappedGarment.backbottom1[0] + "backbottom1" + mappedGarment[mappedGarment.backbottom1[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backbottom2" + "/" + mappedGarment.backbottom2[0] + "backbottom2" + mappedGarment[mappedGarment.backbottom2[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhsleeveupper" + "/" + mappedGarment.rhsleeveupper[0] + "rhsleeveupper" + mappedGarment[mappedGarment.rhsleeveupper[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhsleevelower" + "/" + mappedGarment.rhsleevelower[0] + "rhsleevelower" + mappedGarment[mappedGarment.rhsleevelower[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhsleeveupper" + "/" + mappedGarment.lhsleeveupper[0]+ "lhsleeveupper" + mappedGarment[mappedGarment.lhsleeveupper[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhsleevelower" + "/" + mappedGarment.lhsleevelower[0] + "lhsleevelower" + mappedGarment[mappedGarment.lhsleevelower[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "numberbox" + "/" + mappedGarment.numberbox[0] + "numberbox" + mappedGarment[mappedGarment.numberbox[1]] + ".svg")}">	
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
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-lhchest" style="background-color:${eval("chosenColor" + mappedGarment.lhchest[1].substr(4,1) + mappedGarment.lhchest[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + "1lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
						<h3 class="tech-logosize-position">LH CHEST</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + "pantones" + "/" + "1lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-lhchest")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-rhchest" style="background-color:${eval("chosenColor" + mappedGarment.rhchest[1].substr(4,1) + mappedGarment.rhchest[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhchest" + "/" + "1rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
						<h3 class="tech-logosize-position">RH CHEST</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhchest" + "/" + "pantones" + "/" + "1rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-rhchest")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-centrechest" style="background-color:${eval("chosenColor" + mappedGarment.centrechest[1].substr(4,1) + mappedGarment.centrechest[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "centrechest" + "/" + "1centrechest" + mappedGarment[mappedGarment.centrechest[1]] + ".svg")}">
						<h3 class="tech-logosize-position">CENTRE CHEST</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "centrechest" + "/" + "pantones" + "/" + "1centrechest" + mappedGarment[mappedGarment.centrechest[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-centrechest")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-mainfront" style="background-color:${eval("chosenColor" + mappedGarment.mainfront[1].substr(4,1) + mappedGarment.mainfront[1].substr(8,1) + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "mainfront" + "/" + "1mainfront" + mappedGarment[mappedGarment.mainfront[1]] + ".svg")}">
						<h3 class="tech-logosize-position">MAIN FRONT</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "mainfront" + "/" + "pantones" + "/" + "1mainfront" + mappedGarment[mappedGarment.mainfront[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-mainfront")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-lhcollar" style="background-color:${eval("chosenColor" + mappedGarment.lhcollar[1].substr(4,1) + mappedGarment.lhcollar[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhcollar" + "/" + "1lhcollar" + mappedGarment[mappedGarment.lhcollar[1]] + ".svg")}">
						<h3 class="tech-logosize-position">LH COLLAR</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhcollar" + "/" + "pantones" + "/" + "1lhcollar" + mappedGarment[mappedGarment.lhcollar[1]] + ".svg")}">						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-lhcollar")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-rhcollar" style="background-color:${eval("chosenColor" + mappedGarment.rhcollar[1].substr(4,1) + mappedGarment.rhcollar[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhcollar" + "/" + "1rhcollar" + mappedGarment[mappedGarment.rhcollar[1]] + ".svg")}">
						<h3 class="tech-logosize-position">RH COLLAR</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhcollar" + "/" + "pantones" + "/" + "1rhcollar" + mappedGarment[mappedGarment.rhcollar[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-rhcollar")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-backtop1" style="background-color:${eval("chosenColor" + mappedGarment.backtop1[1].substr(4,1) + mappedGarment.backtop1[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backtop1" + "/" + "1backtop1" + mappedGarment[mappedGarment.backtop1[1]] + ".svg")}">
						<h3 class="tech-logosize-position">BACK TOP 1</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backtop1" + "/" + "pantones" + "/" + "1backtop1" + mappedGarment[mappedGarment.backtop1[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-backtop1")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-backtop2" style="background-color:${eval("chosenColor" + mappedGarment.backtop2[1].substr(4,1) + mappedGarment.backtop2[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backtop2" + "/" + "1backtop2" + mappedGarment[mappedGarment.backtop2[1]] + ".svg")}">
						<h3 class="tech-logosize-position">BACK TOP 2</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backtop2" + "/" + "pantones" + "/" + "1backtop2" + mappedGarment[mappedGarment.backtop2[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-backtop2")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-backbottom1" style="background-color:${eval("chosenColor" + mappedGarment.backbottom1[1].substr(4,1) + mappedGarment.backbottom1[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backbottom1" + "/" + "1backbottom1" + mappedGarment[mappedGarment.backbottom1[1]] + ".svg")}">
						<h3 class="tech-logosize-position">BACK BOTTOM 1</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backbottom1" + "/" + "pantones" + "/" + "1backbottom1" + mappedGarment[mappedGarment.backbottom1[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-backbottom1")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-backbottom2" style="background-color:${eval("chosenColor" + mappedGarment.backbottom2[1].substr(4,1) + mappedGarment.backbottom2[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backbottom2" + "/" + "1backbottom2" + mappedGarment[mappedGarment.backbottom2[1]] + ".svg")}">
						<h3 class="tech-logosize-position">BACK BOTTOM 2</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backbottom2" + "/" + "pantones" + "/" + "1backbottom2" + mappedGarment[mappedGarment.backbottom2[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-backbottom2")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-lhsleeveupper" style="background-color:${eval("chosenColor" + mappedGarment.lhsleeveupper[1].substr(4,1) + mappedGarment.lhsleeveupper[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhsleeveupper" + "/" + "1lhsleeveupper" + mappedGarment[mappedGarment.lhsleeveupper[1]] + ".svg")}">
						<h3 class="tech-logosize-position">LH SLEEVE UPPER</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhsleeveupper" + "/" + "pantones" + "/" + "1lhsleeveupper" + mappedGarment[mappedGarment.lhsleeveupper[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-lhsleeveupper")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-lhsleevelower" style="background-color:${eval("chosenColor" + mappedGarment.lhsleevelower[1].substr(4,1) + mappedGarment.lhsleevelower[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhsleevelower" + "/" + "1lhsleevelower" + mappedGarment[mappedGarment.lhsleevelower[1]] + ".svg")}">
						<h3 class="tech-logosize-position">LH SLEEVE LOWER</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhsleevelower" + "/" + "pantones" + "/" + "1lhsleevelower" + mappedGarment[mappedGarment.lhsleevelower[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-lhsleevelower")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-rhsleeveupper" style="background-color:${eval("chosenColor" + mappedGarment.rhsleeveupper[1].substr(4,1) + mappedGarment.rhsleeveupper[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhsleeveupper" + "/" + "1rhsleeveupper" + mappedGarment[mappedGarment.rhsleeveupper[1]] + ".svg")}">
						<h3 class="tech-logosize-position">RH SLEEVE UPPER</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhsleeveupper" + "/" + "pantones" + "/" + "1rhsleeveupper" + mappedGarment[mappedGarment.rhsleeveupper[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-rhsleeveupper")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-rhsleevelower" style="background-color:${eval("chosenColor" + mappedGarment.rhsleevelower[1].substr(4,1) + mappedGarment.rhsleevelower[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhsleevelower" + "/" + "1rhsleevelower" + mappedGarment[mappedGarment.rhsleevelower[1]] + ".svg")}">
						<h3 class="tech-logosize-position">RH SLEEVE LOWER</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhsleevelower" + "/" + "pantones" + "/" + "1rhsleevelower" + mappedGarment[mappedGarment.rhsleevelower[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-rhsleevelower")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-numberbox" style="background-color:${eval("chosenColor" + mappedGarment.numberbox[1].substr(4,1) + mappedGarment.numberbox[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "numberbox" + "/" + "1numberbox" + mappedGarment[mappedGarment.numberbox[1]] + ".svg")}">
						<h3 class="tech-logosize-position">NUMBER BOX</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "numberbox" + "/" + "pantones" + "/" + "1numberbox" + mappedGarment[mappedGarment.numberbox[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String(logoAccessGarment + "-numberbox")]}</h5>
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
					<div class="order-1title border1">Customer</div><div class="order-1info border1"><h6>${clubs[chosenClubIndex].name} ${yyyy + 1}</h6></div>
					<div class="order-2title border1">PO Number</div><div class="order-2info border1"></div>
					<div class="order-3title border1">Style Name</div><div class="order-3info border1"><h6>${customisedGarments[selectedDesign].garmentName} ${output[selectedDesign]}</h6></div>
					<div class="order-4title border1">Style Code</div><div class="order-4info border1"><h6>${clubs[chosenClubIndex].initials}${yy + 1}${designs[chosenGarment].initials}${output[chosenItem]}</h6></div>
					<div class="order-5title border1">Size Spec</div><div class="order-5info border1"><h6>See Size Spec on Page 4</h6></div>
					<div class="order-6title border1">Date</div><div class="order-6info border1"><h6>${today}</h6></div>
					<div class="order-7title border1">Ex Fty Date</div><div class="order-7info border1"></div>
				</div>
				<div class="tech-production">
					<div class="production-title border1">Production Details</div>
					<div class="production-1title border1">Fabric 1</div><div class="production-1info border1"><h3>${designs[chosenGarment].fabric1}</h3></div><div class="production-1color border1"></div>
					<div class="production-2title border1">Fabric 2</div><div class="production-2info border1"><h3>${designs[chosenGarment].fabric2}</h3></div><div class="production-2color border1"></div>
					<div class="production-3title border1">Neck Tape</div><div class="production-3info border1"><h3>Oxen</h3></div><div class="production-3color border1"></div>
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
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhchest" + "/" + mappedGarment.rhchest[0] + "rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + mappedGarment.lhchest[0] + "lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
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
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhchest" + "/" + mappedGarment.rhchest[0] + "rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + mappedGarment.lhchest[0] + "lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "centrechest" + "/" + mappedGarment.centrechest[0] + "centrechest" + mappedGarment[mappedGarment.centrechest[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "mainfront" + "/" + mappedGarment.mainfront[0] + "mainfront" + mappedGarment[mappedGarment.mainfront[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhcollar" + "/" + mappedGarment.rhcollar[0] + "rhcollar" + mappedGarment[mappedGarment.rhcollar[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhcollar" + "/" + mappedGarment.lhcollar[0] + "lhcollar" + mappedGarment[mappedGarment.lhcollar[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backtop1" + "/" + mappedGarment.backtop1[0] + "backtop1" + mappedGarment[mappedGarment.backtop1[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backtop2" + "/" + mappedGarment.backtop2[0] + "backtop2" + mappedGarment[mappedGarment.backtop2[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backbottom1" + "/" + mappedGarment.backbottom1[0] + "backbottom1" + mappedGarment[mappedGarment.backbottom1[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "backbottom2" + "/" + mappedGarment.backbottom2[0] + "backbottom2" + mappedGarment[mappedGarment.backbottom2[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhsleeveupper" + "/" + mappedGarment.rhsleeveupper[0] + "rhsleeveupper" + mappedGarment[mappedGarment.rhsleeveupper[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhsleevelower" + "/" + mappedGarment.rhsleevelower[0] + "rhsleevelower" + mappedGarment[mappedGarment.rhsleevelower[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhsleeveupper" + "/" + mappedGarment.lhsleeveupper[0]+ "lhsleeveupper" + mappedGarment[mappedGarment.lhsleeveupper[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhsleevelower" + "/" + mappedGarment.lhsleevelower[0] + "lhsleevelower" + mappedGarment[mappedGarment.lhsleevelower[1]] + ".svg")}">
							<img id="svg2__sponsors" src="${("assets/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "numberbox" + "/" + mappedGarment.numberbox[0] + "numberbox" + mappedGarment[mappedGarment.numberbox[1]] + ".svg")}">	
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
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-lhchest" style="background-color:${eval("chosenColor" + mappedGarment.lhchest[1].substr(4,1) + mappedGarment.lhchest[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + "1lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
						<h3 class="tech-logosize-position">LH CHEST</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "lhchest" + "/" + "pantones" + "/" + "1lhchest" + mappedGarment[mappedGarment.lhchest[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String("logos-lhchest")]}</h5>
					</aside>
					<aside class="tech-logosize">
						<h3 class="tech-logosize-type">SUBLIMATED</h3>
						<img class="tech-logosize-logo tech-logo-rhchest" style="background-color:${eval("chosenColor" + mappedGarment.rhchest[1].substr(4,1) + mappedGarment.rhchest[1].substr(8,1)  + "Hex")};" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhchest" + "/" + "1rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
						<h3 class="tech-logosize-position">RH CHEST</h3>
						<img class="tech-logosize-colours" src="${("assets/" + "techpack" + "/" + "logosizes" + "/" + mappedGarment.sponsorsVersion + "/" + mappedGarment.garmentType + "/" + mappedGarment.club + "/" + "rhchest" + "/" + "pantones" + "/" + "1rhchest" + mappedGarment[mappedGarment.rhchest[1]] + ".svg")}">
						<h5 id="size-text" class="tech-logosize-size">${clubs[chosenClubIndex][String("logos-rhchest")]}</h5>
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

	var back = document.getElementById("back"); //access back element
	back.style.display = "block"; //make back buttons visible

	var add = document.getElementById("add"); //access back element
	add.style.display = "none"; //make back buttons invisible

	var removeDesignPack = document.getElementById("design-pack"); //access design-pack element
	removeDesignPack.style.display = "none"; //make design-pack invisible

	var addDesignPack2 = document.getElementById("design-pack2"); //access design-pack element
	addDesignPack2.style.display = "block"; //design-pack visible

	mapTechPack(selectedDesign);
	tempSaveAction(selectedDesign);
}

/* Notice when Back Button is Clicked  */

let backButton = document.getElementsByClassName("back"); //access back-button element button
for (let i = 0; i < backButton.length; i++) { //workout which back-button was selected
		backButton[i].onclick = backGarments; //operate 'backGarments' function on reset-button press
	}


/* Function to Operate when cancel Button is clicked  */

function backGarments(e) {

	var back = document.getElementById("back"); //access back element
	back.style.display = "none"; //make back buttons invisible

	var add = document.getElementById("add"); //access back element
	add.style.display = "block"; //make back buttons visible

	var addDesignPack = document.getElementById("design-pack"); //access design-pack element
	addDesignPack.style.display = "block"; //design-pack visible

	var removeDesignPack2 = document.getElementById("design-pack2"); //access design-pack element
	removeDesignPack2.style.display = "none"; //design-pack invisible


	mapCustomisedGarments()
	techButton();
	deleteEdit();
	editButton();
	deleteButton();
	duplicateButton();
	rearrangeUpButton();
	rearrangeDownButton();
}

