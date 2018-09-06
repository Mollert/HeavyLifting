
// Query web page only every 40 milliseconds
function debounce(func, wait=40, immediate=true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Tell when list items are in view then adding class which starts css animation

let listGroup = document.getElementById("listGroup");
let allSentences = document.querySelectorAll(".listSentence");
let allChecks = document.querySelectorAll(".listCheck");
let screenTopToID = listGroup.offsetTop;

function weAreThere() {
	let runningHeight = window.pageYOffset + window.innerHeight;

	if ( runningHeight > screenTopToID && !(allSentences[0].classList.contains("active"))) {
		allSentences.forEach(function(unit) {
			unit.classList.add("active");
		});
		allChecks.forEach(function(unit) {
			unit.classList.add("active");
		});		
	}

	if ( runningHeight < screenTopToID && (allSentences[0].classList.contains("active"))) {
		allSentences.forEach(function(unit) {
			unit.classList.remove("active");
		});
		allChecks.forEach(function(unit) {
			unit.classList.remove("active");
		});	
	}
};

window.addEventListener("scroll", debounce(weAreThere));

