let numberNeeded = Math.ceil(customisedGarments.length/2);


 function determineClubLogo() {
 	numberNeeded = Math.ceil(customisedGarments.length/2);
	let leedsrhinos = 0;
	let gloucester = 0;
	let hullkr = 0;
	let castleford = 0;
	let noclub = 0;
	let club = "noclub"
	for (let i = 0; i < customisedGarments.length; i++) {
		if (customisedGarments[i].club === "noclub") {
       		noclub++
       	} else if (customisedGarments[i].club === "leedsrhinos") {
       		leedsrhinos++
        }  else if (customisedGarments[i].club === "gloucester") {
       		gloucester++
        } else if (customisedGarments[i].club === "hullkr") {
       		hullkr++
        } else if (customisedGarments[i].club === "castleford") {
       		castleford++
        }
	}

	if (leedsrhinos > gloucester && leedsrhinos > hullkr && leedsrhinos > castleford){
		document.getElementById("pack-titles").innerHTML = 

		`<div id="title-info" class="title-info">
			<div class="club-logo"><img src="assets/clublogos/leedsrhinos.svg"></div>
		</div>`;

		club = "leedsrhinos"


	} else if (gloucester > leedsrhinos && gloucester > hullkr && gloucester > castleford){
		document.getElementById("pack-titles").innerHTML = 

		`<div id="title-info" class="title-info">
			<div class="club-logo"><img src="assets/clublogos/gloucester.svg"></div>
		</div>`;

		club = "gloucester"


	} else if (hullkr > leedsrhinos && hullkr > gloucester && hullkr > castleford){
		document.getElementById("pack-titles").innerHTML = 

		`<div id="title-info" class="title-info">
			<div class="club-logo"><img src="assets/clublogos/hullkr.svg"></div>
		</div>`;

		club = "hullkr"


	} else if (castleford > leedsrhinos && castleford > hullkr && castleford > gloucester){
		document.getElementById("pack-titles").innerHTML = 

		`<div id="title-info" class="title-info">
			<div class="club-logo"><img src="assets/clublogos/castleford.svg"></div>
		</div>`;

		club = "castleford"


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
