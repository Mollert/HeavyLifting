
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let end = "";
switch(dayOfMonth) {
	case 1:
 	case 21:
 	case 31:
 		end = "st";
 		break;
 	case 2:
	case 22:
 		end = "nd";
 		break;
 	case 3:
	case 23:
		end = "rd";
 		break;  
 	default:
		end = "th";
}



let dateNow = new Date();

let day = daysOfWeek[dateNow.getDay()];
console.log(day);

let dayOfMonth = dateNow.getDate();


let arrived = "You landed here on " + day + " the " + dayOfMonth end;



