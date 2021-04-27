
/* Edit relevant svg if a sponsor logo clashes with the background colour  */

let oldClash = "";

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

let clashChange = "";



if (clashClub === "leedsrhinos" && clashSponsorsVersion === "sponsors") {
	if (clashGarmentType === "prorugbyshirt" || clashGarmentType === "replicarugbyshirt" || clashGarmentType === "trainingtshirt") {
		lbsPosition = "mainfront";
	} else if (clashGarmentType === "poloshirt" || clashGarmentType === "ohhoodie") {
		lbsPosition = "rhchest";
	}
}

if (lbsPosition != "") {

	if (customisedGarments[selectedDesignRef][lbsPosition][1] === "clash") {
		customisedGarments[selectedDesignRef][lbsPosition][1] = oldClash;
	}


	lbsBackgroundColor = customisedGarments[selectedDesignRef][lbsPosition][1].replace("tone","color") + "Ref";
	lbsBackgroundColor = customisedGarments[selectedDesignRef][lbsBackgroundColor];

	clashChange = "leedsrhinos";

}


if (clashChange === "leedsrhinos") {

	if (lbsBackgroundColor === "6" || lbsBackgroundColor === "7" || lbsBackgroundColor === "16" || lbsBackgroundColor === "24" ) {

		if (customisedGarments[selectedDesignRef][lbsPosition][1] != "clash") {
			oldClash = customisedGarments[selectedDesignRef][lbsPosition][1];
			customisedGarments[selectedDesignRef][lbsPosition][1] = "clash";
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
	} 
}

if (hartpuryUniPosition != "") {

	if (customisedGarments[selectedDesignRef][hartpuryUniPosition][1] === "clash") {
		customisedGarments[selectedDesignRef][hartpuryUniPosition][1] = oldClash;
		customisedGarments[selectedDesignRef][hartpuryCollegePosition][1] = oldClash;
	} else if (customisedGarments[selectedDesignRef][olbas1Position][1] === "clash") {
		customisedGarments[selectedDesignRef][olbas1Position][1] = oldClash;
		customisedGarments[selectedDesignRef][olbas2Position][1] = oldClash;
		customisedGarments[selectedDesignRef][olbas3Position][1] = oldClash;
	}


	hartpuryBackgroundColor = customisedGarments[selectedDesignRef][hartpuryUniPosition][1].replace("tone","color") + "Ref";
	hartpuryBackgroundColor = customisedGarments[selectedDesignRef][hartpuryBackgroundColor];

	clashChange = "gloucester";


	olbasBackgroundColor = customisedGarments[selectedDesignRef][olbas1Position][1].replace("tone","color") + "Ref";
	olbasBackgroundColor = customisedGarments[selectedDesignRef][olbasBackgroundColor];

}


if (clashChange === "gloucester") {

	if (hartpuryBackgroundColor === "4" || hartpuryBackgroundColor === "12" || hartpuryBackgroundColor === "13" || hartpuryBackgroundColor === "18") {

		if (customisedGarments[selectedDesignRef][hartpuryUniPosition][1] != "clash") {
			oldClash = customisedGarments[selectedDesignRef][hartpuryUniPosition][1];
			customisedGarments[selectedDesignRef][hartpuryUniPosition][1] = "clash";
			customisedGarments[selectedDesignRef][hartpuryCollegePosition][1] = "clash";
		}

	} 

	if (olbasBackgroundColor === "0" ) {

		if (customisedGarments[selectedDesignRef][olbas1Position][1] != "clash") {
			oldClash = customisedGarments[selectedDesignRef][olbas1Position][1];
			customisedGarments[selectedDesignRef][olbas1Position][1] = "clash";
			customisedGarments[selectedDesignRef][olbas2Position][1] = "clash";
			customisedGarments[selectedDesignRef][olbas3Position][1] = "clash";
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












