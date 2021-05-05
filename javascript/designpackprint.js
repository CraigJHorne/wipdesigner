let numberNeeded = Math.ceil(customisedGarments.length/2);


 function determineClubLogo() {
 	numberNeeded = Math.ceil(customisedGarments.length/2);
	let leedsrhinos = 0;
	let gloucester = 0;
	let noclub = 0;
	let club = "noclub"
	for (let i = 0; i < customisedGarments.length; i++) {
		if (customisedGarments[i].club === "noclub") {
       		noclub++
       	} else if (customisedGarments[i].club === "leedsrhinos") {
       		leedsrhinos++
        }  else if (customisedGarments[i].club === "gloucester") {
       		gloucester++
        }
	}

	if (leedsrhinos > 0 && gloucester === 0){
		document.getElementById("pack-titles").innerHTML = 

		`<div id="title-info" class="title-info">
			<div class="club-logo"><img src="assets/clublogos/leedsrhinos.svg"></div>
		</div>`;

		club = "leedsrhinos"


	} else if (gloucester > 0 && leedsrhinos === 0){
		document.getElementById("pack-titles").innerHTML = 

		`<div id="title-info" class="title-info">
			<div class="club-logo"><img src="assets/clublogos/gloucester.svg"></div>
		</div>`;

		club = "gloucester"


	} else { 
		document.getElementById("pack-titles").innerHTML = 

		`<div id="title-info" class="title-info">
			<div class="club-logo"><img src="assets/clublogos/noclub.svg"></div>
		</div>`;

		club = "noclub"
	
	}


	mapDesignPackLogos(club)
}

determineClubLogo() 






function mapDesignPackLogos(club) {
	for (let i = 1; i < numberNeeded; i++) {
		document.getElementById("pack-titles").innerHTML = document.getElementById("pack-titles").innerHTML + 

		`<div id="title-info" class="title-info">
			<div class="club-logo"><img src="${("assets/clublogos/" + club + ".svg")}"</div>
		</div>`;
	}
}


mapDesignPackLogos() // map on load
