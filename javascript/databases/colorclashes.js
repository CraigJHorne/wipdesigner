
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

let designsCopy = [...designs];


let clashClub = customisedGarments[selectedDesignRef].club;
let clashSponsorsVersion = customisedGarments[selectedDesignRef].sponsorsVersion;
let clashGarmentTypeRef = customisedGarments[selectedDesignRef].garmentTypeRef;
let clashGarmentType = customisedGarments[selectedDesignRef].garmentType;
let clashDesignRef = customisedGarments[selectedDesignRef].designRef;
let clashSponsor = designs[clashGarmentTypeRef].designs[clashDesignRef][clashClub];

let lbsPosition = "";
let lbsBackgroundColor = "";

let gloucesterPosition = "";
let gloucesterBackgroundColor = "";

let hartpuryUniPosition = "";
let hartpuryCollegePosition = "";
let hartpuryBackgroundColor = "";

let olbas1Position = "";
let olbas2Position = "";
let olbas3Position = "";
let olbas1BackgroundColor = "";
let olbas3BackgroundColor = "";

let karcherPosition = "";
let karcherBackgroundColor = "";

let clashChange = "";


if (oldClashLhChest != "") {
	customisedGarments[selectedDesignRef].lhchest[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].lhchest[1];
	oldClashLhChest = "";
}

if (oldClashRhChest != "") {
	customisedGarments[selectedDesignRef].rhchest[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].rhchest[1];
	oldClashRhChest = "";
}
if (oldClashCentreChest != "") {
	customisedGarments[selectedDesignRef].centrechest[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].centrechest[1];
	oldClashRhCollar = "";
}

if (oldClashRhCollar != "") {
	customisedGarments[selectedDesignRef].rhcollar[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].rhcollar[1];
	oldClashRhCollar = "";
}
if (oldClashLhCollar != "") {
	customisedGarments[selectedDesignRef].lhcollar[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].lhcollar[1];
	oldClashLhCollar = "";
}
if (oldClashMainFront != "") {
	customisedGarments[selectedDesignRef].mainfront[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].mainfront[1];
	oldClashMainFront= "";
}
if (oldClashBackTop1!= "") {
	customisedGarments[selectedDesignRef].backtop1[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].backtop1[1];
	oldClashBackTop1 = "";
}
if (oldClashBackTop2 != "") {
	customisedGarments[selectedDesignRef].backtop2[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].backtop2[1];
	oldClashBackTop2 = "";
}
if (oldClashBackBottom1!= "") {
	customisedGarments[selectedDesignRef].backbottom1[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].backbottom1[1];
	oldClashBackBottom1 = "";
}
if (oldClashBackBottom2 != "") {
	customisedGarments[selectedDesignRef].backbottom2[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].backbottom2[1];
	oldClashBackBottom2= "";
}
if (oldClashLhSleeveLower != "") {
	customisedGarments[selectedDesignRef].lhsleevelower[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].lhsleevelower[1];
	oldClashLhSLeeveLower = "";
}
if (oldClashLhSleeveUpper!= "") {
	customisedGarments[selectedDesignRef].lhsleeveupper[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].lhsleeveupper[1];
	oldClashLhSleeveUpper = "";
}
if (oldClashRhSleeveLower != "") {
	customisedGarments[selectedDesignRef].rhsleevelower[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].rhsleevelower[1];
	oldClashRhSleeveLower = "";
}
if (oldClashRhSleeveUpper != "") {
	customisedGarments[selectedDesignRef].rhsleeveupper[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].rhsleeveupper[1];
	oldClashRhSleeveUpper = "";
}
if (oldClashNumberBox != "") {
	customisedGarments[selectedDesignRef].numberbox[1] = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor].numberbox[1];
	oldClashNumberBox = "";
}


if (clashClub === "leedsrhinos" && clashSponsorsVersion === "sponsors") {
	if (clashGarmentType === "prorugbyshirt" || clashGarmentType === "replicarugbyshirt" || clashGarmentType === "trainingtshirt") {
		lbsPosition = "mainfront";
	} else if (clashGarmentType === "poloshirt" || clashGarmentType === "ohhoodie") {
		lbsPosition = "rhchest";
	}
}

if (lbsPosition != "") {



	lbsBackgroundColor = customisedGarments[selectedDesignRef][lbsPosition][1].replace("tone","color") + "Ref";
	lbsBackgroundColor = customisedGarments[selectedDesignRef][lbsBackgroundColor];

	clashChange = "leedsrhinos";

}



if (clashChange === "leedsrhinos") {

	if (lbsBackgroundColor === "6" || lbsBackgroundColor === "7" || lbsBackgroundColor === "16" || lbsBackgroundColor === "24" ) {

		if (customisedGarments[selectedDesignRef][lbsPosition][1] != "clash" ) {
			
			if (lbsPosition === "mainfront") {
				oldClashMainFront = customisedGarments[selectedDesignRef][lbsPosition][1];
				customisedGarments[selectedDesignRef][lbsPosition][1] = "clash";
			} else if (lbsPosition === "rhchest") {
				oldClashRhChest = customisedGarments[selectedDesignRef][lbsPosition][1];
				customisedGarments[selectedDesignRef][lbsPosition][1] = "clash";
			}
		} 
		} else if (lbsBackgroundColor === "4" || lbsBackgroundColor === "18") {

		if (customisedGarments[selectedDesignRef][lbsPosition][1] != "clash2") {
			
			if (lbsPosition === "mainfront") {
				oldClashMainFront = customisedGarments[selectedDesignRef][lbsPosition][1];
				customisedGarments[selectedDesignRef][lbsPosition][1] = "clash2";
			} else if (lbsPosition === "rhchest") {
				oldClashRhChest = customisedGarments[selectedDesignRef][lbsPosition][1];
				customisedGarments[selectedDesignRef][lbsPosition][1] = "clash2";
			}
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
		gloucesterPosition = "lhchest";
	} else if (clashGarmentType === "trainingtshirt" || clashGarmentType === "poloshirt" || clashGarmentType === "ohhoodie") {
		gloucesterPosition = "lhchest";
	}
}

if (gloucesterPosition != "") {

	if (clashGarmentType === "prorugbyshirt" || clashGarmentType === "replicarugbyshirt") {




		hartpuryBackgroundColor = customisedGarments[selectedDesignRef][hartpuryUniPosition][1].replace("tone","color") + "Ref";
		hartpuryBackgroundColor = customisedGarments[selectedDesignRef][hartpuryBackgroundColor];

		olbas1BackgroundColor = customisedGarments[selectedDesignRef][olbas1Position][1].replace("tone","color") + "Ref";
		olbas1BackgroundColor = customisedGarments[selectedDesignRef][olbas1BackgroundColor];

		olbas3BackgroundColor = customisedGarments[selectedDesignRef][olbas3Position][1].replace("tone","color") + "Ref";
		olbas3BackgroundColor = customisedGarments[selectedDesignRef][olbas3BackgroundColor];

		karcherBackgroundColor = customisedGarments[selectedDesignRef][karcherPosition][1].replace("tone","color") + "Ref";
		karcherBackgroundColor = customisedGarments[selectedDesignRef][karcherBackgroundColor];

		gloucesterBackgroundColor = customisedGarments[selectedDesignRef][gloucesterPosition][1].replace("tone","color") + "Ref";
		gloucesterBackgroundColor = customisedGarments[selectedDesignRef][gloucesterBackgroundColor];

		clashChange = "gloucester";

	} else if (clashGarmentType === "trainingtshirt" || clashGarmentType === "poloshirt" || clashGarmentType === "ohhoodie")  {



		gloucesterBackgroundColor = customisedGarments[selectedDesignRef][gloucesterPosition][1].replace("tone","color") + "Ref";
		gloucesterBackgroundColor = customisedGarments[selectedDesignRef][gloucesterBackgroundColor];

		clashChange = "gloucester";
	}

}


if (clashChange === "gloucester") {

	if (hartpuryBackgroundColor === "4" || hartpuryBackgroundColor === "12" || hartpuryBackgroundColor === "13" || hartpuryBackgroundColor === "18") {

		if (customisedGarments[selectedDesignRef][hartpuryUniPosition][1] != "clash") {
			oldClashRhCollar = customisedGarments[selectedDesignRef][hartpuryUniPosition][1];
			oldClashLhCollar = customisedGarments[selectedDesignRef][hartpuryCollegePosition][1];
			customisedGarments[selectedDesignRef][hartpuryUniPosition][1] = "clash";
			customisedGarments[selectedDesignRef][hartpuryCollegePosition][1] = "clash";

			console.log("yes");
		}

	} 

	if (olbas1BackgroundColor === "0" ) {

		if (customisedGarments[selectedDesignRef][olbas1Position][1] != "clash") {
			oldClashBackTop1 = customisedGarments[selectedDesignRef][olbas1Position][1];
			oldClashBackTop2 = customisedGarments[selectedDesignRef][olbas2Position][1];
			customisedGarments[selectedDesignRef][olbas1Position][1] = "clash";
			customisedGarments[selectedDesignRef][olbas2Position][1] = "clash";
		}

	} 


	if (olbas3BackgroundColor === "0" ) {


		if (customisedGarments[selectedDesignRef][olbas3Position][1] != "clash") {
			oldClashBackBottom1 = customisedGarments[selectedDesignRef][olbas3Position][1];
			customisedGarments[selectedDesignRef][olbas3Position][1] = "clash";
		}


	} 



	if (karcherBackgroundColor === "6" || karcherBackgroundColor === "7" || karcherBackgroundColor === "16" || karcherBackgroundColor === "24" ) {

		if (customisedGarments[selectedDesignRef][karcherPosition][1] != "clash") {
			oldClashBackBottom2 = customisedGarments[selectedDesignRef][karcherPosition][1];
			customisedGarments[selectedDesignRef][karcherPosition][1] = "clash";
		}
	
	}

	if (gloucesterBackgroundColor === "10" || gloucesterBackgroundColor === "11") {

		if (customisedGarments[selectedDesignRef][gloucesterPosition][1] != "clash") {
			oldClashLhChest = customisedGarments[selectedDesignRef][gloucesterPosition][1];
			customisedGarments[selectedDesignRef][gloucesterPosition][1] = "clash";
		}
	
	}
	
}


}




