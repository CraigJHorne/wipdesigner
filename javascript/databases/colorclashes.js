
/* Edit relevant svg if a sponsor logo clashes with the background colour  */

let oldClashLhChest = "";
let oldClashRhChest = "";
let oldClashCentreChest = "";
let oldClashLhCollar = "";
let oldClashRhCollar = "";
let oldClashMainFront = "";
let oldClashBackTop1 = "";
let oldClashBackTop2 = "";
let oldClashBackBottom1 = "";
let oldClashBackBottom2 = "";
let oldClashLhSleeveUpper = "";
let oldClashLhSleeveLower = "";
let oldClashRhSleeveUpper = "";
let oldClashRhSleeveLower = "";
let oldClashNumberBox = "";

function colorClash(selectedDesignRef) {


let clashClub = customisedGarments[selectedDesignRef].club;
let clashSponsorsVersion = customisedGarments[selectedDesignRef].sponsorsVersion;
let clashGarmentTypeRef = customisedGarments[selectedDesignRef].garmentTypeRef;
let clashGarmentType = customisedGarments[selectedDesignRef].garmentType;
let clashDesignRef = customisedGarments[selectedDesignRef].designRef;

let lbsPosition = "";
let lbsBackgroundColor = "";

let hartpuryUniPosition = "";
let hartpuryCollegePosition = "";
let hartpuryBackgroundColor = "";

let olbas1Position = "";
let olbas2Position = "";
let olbas3Position = "";
let olbasBackgroundColor = "";

let karcherPosition = "";
let karcherBackgroundColor = "";

let clashChange = "";



if (clashClub === "leedsrhinos" && clashSponsorsVersion === "sponsors") {
	if (clashGarmentType === "prorugbyshirt" || clashGarmentType === "replicarugbyshirt" || clashGarmentType === "trainingtshirt") {
		lbsPosition = "mainfront";
	} else if (clashGarmentType === "poloshirt" || clashGarmentType === "ohhoodie") {
		lbsPosition = "rhchest";
	}
}

if (lbsPosition != "") {

	if (customisedGarments[selectedDesignRef][lbsPosition][1] === "clash" || customisedGarments[selectedDesignRef][lbsPosition][1] === "clash2") {
		customisedGarments[selectedDesignRef][lbsPosition][1] = oldClashMainFront;
	}


	lbsBackgroundColor = customisedGarments[selectedDesignRef][lbsPosition][1].replace("tone","color") + "Ref";
	lbsBackgroundColor = customisedGarments[selectedDesignRef][lbsBackgroundColor];

	clashChange = "leedsrhinos";

}


if (clashChange === "leedsrhinos") {

	if (lbsBackgroundColor === "6" || lbsBackgroundColor === "7" || lbsBackgroundColor === "16" || lbsBackgroundColor === "24" ) {

		if (customisedGarments[selectedDesignRef][lbsPosition][1] != "clash") {
			oldClashMainFront = customisedGarments[selectedDesignRef][lbsPosition][1];
			customisedGarments[selectedDesignRef][lbsPosition][1] = "clash";
		}

	} else if (lbsBackgroundColor === "4" || lbsBackgroundColor === "18") {

		if (customisedGarments[selectedDesignRef][lbsPosition][1] != "clash2") {
			oldClashMainFront = customisedGarments[selectedDesignRef][lbsPosition][1];
			customisedGarments[selectedDesignRef][lbsPosition][1] = "clash2";
		} 

	} 
	
}


if (clashClub === "gloucester" && clashSponsorsVersion === "sponsors") {
	if (clashGarmentType === "prorugbyshirt" || clashGarmentType === "replicarugbyshirt") {
		hartpuryUniPosition = "rhcollar";
		hartpuryCollegePosition = "lhcollar";
		olbas1Position = "backtop1";
		olbas2Position = "backtop2";
		olbas3Position = "backbottom1";
		karcherPosition = "backbottom2";
	} 
}

if (hartpuryUniPosition != "") {

	if (customisedGarments[selectedDesignRef][hartpuryUniPosition][1] === "clash") {
		customisedGarments[selectedDesignRef][hartpuryUniPosition][1] = oldClashRhCollar;
		customisedGarments[selectedDesignRef][hartpuryCollegePosition][1] = oldClashLhCollar;
	} else if (customisedGarments[selectedDesignRef][olbas1Position][1] === "clash") {
		customisedGarments[selectedDesignRef][olbas1Position][1] = oldClashBackTop1;
		customisedGarments[selectedDesignRef][olbas2Position][1] = oldClashBackTop2;
		customisedGarments[selectedDesignRef][olbas3Position][1] = oldClashBackBottom1;
	} else if (customisedGarments[selectedDesignRef][karcherPosition][1] === "clash") {
		customisedGarments[selectedDesignRef][karcherPosition][1] = oldClashBackBottom2;
	}


	hartpuryBackgroundColor = customisedGarments[selectedDesignRef][hartpuryUniPosition][1].replace("tone","color") + "Ref";
	hartpuryBackgroundColor = customisedGarments[selectedDesignRef][hartpuryBackgroundColor];

	olbasBackgroundColor = customisedGarments[selectedDesignRef][olbas1Position][1].replace("tone","color") + "Ref";
	olbasBackgroundColor = customisedGarments[selectedDesignRef][olbasBackgroundColor];

	karcherBackgroundColor = customisedGarments[selectedDesignRef][karcherPosition][1].replace("tone","color") + "Ref";
	karcherBackgroundColor = customisedGarments[selectedDesignRef][karcherBackgroundColor];

	clashChange = "gloucester";

}


if (clashChange === "gloucester") {

	if (hartpuryBackgroundColor === "4" || hartpuryBackgroundColor === "12" || hartpuryBackgroundColor === "13" || hartpuryBackgroundColor === "18") {

		if (customisedGarments[selectedDesignRef][hartpuryUniPosition][1] != "clash") {
			oldClashRhCollar = customisedGarments[selectedDesignRef][hartpuryUniPosition][1];
			oldClashLhCollar = customisedGarments[selectedDesignRef][hartpuryCollegePosition][1];
			customisedGarments[selectedDesignRef][hartpuryUniPosition][1] = "clash";
			customisedGarments[selectedDesignRef][hartpuryCollegePosition][1] = "clash";
		}

	} 

	if (olbasBackgroundColor === "0" ) {

		if (customisedGarments[selectedDesignRef][olbas1Position][1] != "clash") {
			oldClashBackTop1 = customisedGarments[selectedDesignRef][olbas1Position][1];
			oldClashBackTop2 = customisedGarments[selectedDesignRef][olbas2Position][1];
			oldClashBackBottom1 = customisedGarments[selectedDesignRef][olbas3Position][1];
			customisedGarments[selectedDesignRef][olbas1Position][1] = "clash";
			customisedGarments[selectedDesignRef][olbas2Position][1] = "clash";
			customisedGarments[selectedDesignRef][olbas3Position][1] = "clash";
		}

	} 


	if (karcherBackgroundColor === "6" || karcherBackgroundColor === "7" || karcherBackgroundColor === "16" || karcherBackgroundColor === "24" ) {

		if (customisedGarments[selectedDesignRef][karcherPosition][1] != "clash") {
			oldClashBackBottom2 = customisedGarments[selectedDesignRef][karcherPosition][1];
			customisedGarments[selectedDesignRef][karcherPosition][1] = "clash";
		}
	
}
	
}


}









/* Edit sponsor colour if theres a colour clash */


/* function colorClash(selectedDesignRef) {


  let lbsPosition = "mainfront";	

clashDesignRef = customisedGarments[selectedDesignRef].designRef;
clashGarmentTypeRef = customisedGarments[selectedDesignRef].garmentTypeRef;
clashClub = customisedGarments[selectedDesignRef].club;
clashDesign = designs[clashGarmentTypeRef].designs[clashDesignRef][clashClub + "logos"];

customisedGarments[selectedDesignRef][lbsPosition][1] = clashDesign[lbsPosition][1];	


	if (customisedGarments[selectedDesignRef].club === "leedsrhinos" && customisedGarments[selectedDesignRef].sponsorsVersion  === "sponsors") {

			if (customisedGarments[selectedDesignRef].garmentType === "prorugbyshirt" || customisedGarments[selectedDesignRef].garmentType === "replicarugbyshirt" || customisedGarments[selectedDesignRef].garmentType === "trainingtshirt") {
				

				lbsPosition = "mainfront";

			} else if (customisedGarments[selectedDesignRef].garmentType === "poloshirt" || customisedGarments[selectedDesignRef].garmentType === "ohhoodie") {


				lbsPosition = "rhchest";

			} else {

				lbsPosition = "";

			}


	} else {


		lbsPosition = "";

	}


	let clashColor = customisedGarments[selectedDesignRef][lbsPosition][1].replace("tone","color") + "Ref";
	clashColor = customisedGarments[selectedDesignRef][clashColor];
			

	if (clashColor === "6" || clashColor === "7" || clashColor === "16" || clashColor === "4") {

		customisedGarments[selectedDesignRef][lbsPosition][1] = "clash";
		console.log(customisedGarments)

	} else {


		customisedGarments[selectedDesignRef][lbsPosition][1] = clashDesign[lbsPosition][1];	

	console.log(customisedGarments)

	}




} */












