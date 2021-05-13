function colorClash(selectedDesignRef) {

	let designsCopy = [...designs];
	let customisedGarmentsCopy = {...customisedGarments};


	let clashClub = customisedGarmentsCopy[selectedDesignRef].club;
	let clashSponsorsVersion = customisedGarmentsCopy[selectedDesignRef].sponsorsVersion;
	let clashGarmentTypeRef = customisedGarmentsCopy[selectedDesignRef].garmentTypeRef;
	let clashGarmentType = customisedGarmentsCopy[selectedDesignRef].garmentType;
	let clashDesignRef = customisedGarmentsCopy[selectedDesignRef].designRef;
	let clashSponsor = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashClub];

	let clashColorBackground = customisedGarmentsCopy[selectedDesignRef].colorBackgroundRef;
	let clashColor1 = customisedGarmentsCopy[selectedDesignRef].color1Ref;
	let clashColor2 = customisedGarmentsCopy[selectedDesignRef].color2Ref;
 
 	let clashPositions = designsCopy[clashGarmentTypeRef].designs[clashDesignRef][clashSponsor];




 	if (clashClub === "leedsrhinos" && clashSponsorsVersion === "sponsors") {



 		if (clashGarmentType === "prorugbyshirt" || clashGarmentType === "replicarugbyshirt" || clashGarmentType === "trainingtshirt") {

 			console.log(clashPositions.mainfront[1])

 			let lbsBackgroundColor = "";



 			if (clashPositions.mainfront[1] === "toneBackground") {

				lbsBackgroundColor = clashColorBackground;

				customisedGarments[selectedDesignRef].mainfront[1] = "toneBackground"

			} else if (clashPositions.mainfront[1] === "tone1") {

				lbsBackgroundColor = clashColor1;

				customisedGarments[selectedDesignRef].mainfront[1] = "tone1"

			} if (clashPositions.mainfront[1] === "tone2") {

				lbsBackgroundColor = clashColor2;

				customisedGarments[selectedDesignRef].mainfront[1] = "tone2"

			}


			if (lbsBackgroundColor === "6" || lbsBackgroundColor === "7" || lbsBackgroundColor === "16" || lbsBackgroundColor === "24" ) {

				console.log("leeds pro clash")

				customisedGarments[selectedDesignRef].mainfront[1] = "clash"

			} else if (lbsBackgroundColor === "4" || lbsBackgroundColor === "18") {

				console.log("leeds pro clash2")

				customisedGarments[selectedDesignRef].mainfront[1] = "clash2"

			} 



 		} else if (clashGarmentType === "poloshirt" || clashGarmentType === "ohhoodie") {


 			if (clashPositions.rhchest[1] === "toneBackground") {

				let lbsBackgroundColor = clashColorBackground;

				customisedGarments[selectedDesignRef].mainfront[1] = "toneBackground"

			} else if (clashPositions.rhchest[1] === "tone1") {

				let lbsBackgroundColor = clashColor1;

				customisedGarments[selectedDesignRef].mainfront[1] = "tone1"

			} if (clashPositions.rhchest[1] === "tone2") {

				let lbsBackgroundColor = clashColor2;

				customisedGarments[selectedDesignRef].mainfront[1] = "tone2"

			}



			if (lbsBackgroundColor === "6" || lbsBackgroundColor === "7" || lbsBackgroundColor === "16" || lbsBackgroundColor === "24" ) {

				console.log("leeds polo clash")

				customisedGarments[selectedDesignRef].rhchest[1] = "clash"

			} else if (lbsBackgroundColor === "4" || lbsBackgroundColor === "18") {

				console.log("leeds polo clash2")

				customisedGarments[selectedDesignRef].rhchest[1] = "clash2"

			} 



		}


 	









 	} else if (clashClub === "gloucester" && clashSponsorsVersion === "sponsors") {


 	

 	









 	} else if (clashClub === "gloucester" && clashSponsorsVersion === "logos") {


 	

 	









 	}

 }