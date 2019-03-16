
// Arranges for the current date and time then sends to HTML

const correctHour = number => {
	return (number > 12) ? number = number - 12 : number;
}

const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dateNow = new Date();

let day = daysOfWeek[dateNow.getDay()];

let dayOfMonth = dateNow.getDate();

let end = "";

if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
	end = "st";
} else if (dayOfMonth === 2 || dayOfMonth === 22) {
	end = "nd";
} else if (dayOfMonth === 3 || dayOfMonth === 23) {
	end = "rd";
} else {
	end = "th";
}

let month = monthsOfYear[dateNow.getMonth()];

let hour = dateNow.getHours();

let minute = dateNow.getMinutes();

let readTime = "";

if (hour === 0) {
	if (minute === 0) {
		readTime = "midnight.";
	} else if (minute === 1) {
		readTime = minute + " minute past midnight."
	} else {
		readTime = minute + " minutes past midnight.";
	}
} else if (hour > 0 && hour < 6) {
	if (minute === 0) {
		readTime = hour + " o'clock in the early morning.";
	} else if (minute > 0 && minute < 10) {
		readTime = hour + ":0" + minute + " in the early morning."		
	} else {
		readTime = hour + ":" + minute + " in the early morning.";
	}
} else if (hour >= 6 && hour < 12) {
	if (minute === 0) {
		readTime = hour + " o'clock in the morning.";
	} else if (minute > 0 && minute < 10) {
		readTime = hour + ":0" + minute + " in the morning."		
	} else {
		readTime = hour + ":" + minute + " in the morning.";
	}
} else if (hour === 12 && minute === 0) {
	readTime = "noon.";
} else if (hour === 12 && minute !== 0) {
	if (minute < 10) {
		readTime = hour + ":0" + minute + " in the afternoon."		
	} else {
		readTime = hour + ":" + minute + " in the afternoon.";
	}
} else if (hour > 12 && hour < 18) {
	hour = correctHour(hour);
	if (minute === 0) {
		readTime = hour + " o'clock in the afternoon.";
	} else if (minute > 0 && minute < 10) {
		readTime = hour + ":0" + minute + " in the afternoon."		
	} else {
		readTime = hour + ":" + minute + " in the afternoon.";
	}
} else {
	hour = correctHour(hour);
	if (minute === 0) {
		readTime = hour + " o'clock at night.";
	} else if (minute > 0 && minute < 10) {
		readTime = hour + ":0" + minute + " in the evening."		
	} else {
		readTime = hour + ":" + minute + " in the evening.";
	}
}

let firstLine = "You landed here on " + day;
let secondLine = " the " + dayOfMonth + end + " of " + month;
let thirdLine = " at " + readTime;

document.getElementById("landOne").innerHTML = firstLine;
document.getElementById("landTwo").innerHTML = secondLine;
document.getElementById("landThree").innerHTML = thirdLine;

// Starts a five minute timer for how long they are on the website then sends to HTML

const tenthSecond = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

let min = 0;
let sec = 0;
let plural = "s";

document.getElementById("minutes").innerHTML = "0";
document.getElementById("howMany").innerHTML = "s";
document.getElementById("seconds").innerHTML = "00";

const runningTime = () => {
	sec++;
	(sec > 11) ? min++ : min;
	(sec > 11) ? sec = 0 : sec;
	(min === 1) ? (plural = "") : (plural = "s");
	document.getElementById("minutes").innerHTML = min;
	document.getElementById("howMany").innerHTML = plural;
	document.getElementById("seconds").innerHTML = tenthSecond[sec];
	if (min > 2) {
		clearInterval(showTime);
		document.getElementById("howLong").innerHTML = "You've been here for three minutes.  Time to give me a call!";
	}
}

const showTime = setInterval(runningTime, 5000);

