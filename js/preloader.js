
let pageState = () => {
	return document.readyState;
}


let preloader = setInterval( ()=> {
	if (pageState() == 'complete') {

		document.querySelector("div.preloader_alright").classList.add("hide");
		clearInterval(preloader);
	}
}, 3000);