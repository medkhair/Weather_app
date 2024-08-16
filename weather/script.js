var localisation = 'milan'
const key = '8a386975aa02abc056eef758f1580743';
var url = `https://api.openweathermap.org/data/2.5/weather?q=${localisation}&appid=${key}&units=metric`;
var d = new Date();
var 
date = document.getElementById("date");
date.innerHTML = d.getDate() + "/"+ (d.getMonth()+1)+"/"+ d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();
async function home(){
	var txt = document.getElementById("searched");
	const response = await fetch(url);
	const  data = await response.json();
	document.getElementById("city").innerHTML = data.name;
	document.getElementById("temp").innerHTML = data.main.temp + " °C";
	document.getElementById("Hum").innerHTML = "Humidity : "+data.main.humidity + " %";
	document.getElementById("win").innerHTML = "Wind : "+data.wind.speed + " km/h";
	d = new Date();
	date.innerHTML = d.getDate() + "/"+ (d.getMonth()+1)+"/"+ d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();
}
home();
async function change(){
	var txt = document.getElementById("searched");
	if (txt.value != "") {
		url = `https://api.openweathermap.org/data/2.5/weather?q=${txt.value}&appid=${key}&units=metric`;
	}
	const response = await fetch(url);
	const  data = await response.json();
	document.getElementById("city").innerHTML = data.name;
	document.getElementById("temp").innerHTML = data.main.temp + " °C";
	document.getElementById("Hum").innerHTML = "Humidity : "+data.main.humidity + " %";
	document.getElementById("win").innerHTML = "Wind : "+data.wind.speed + " km/h";
	d = new Date();
	date.innerHTML = d.getDate() + "/"+ (d.getMonth()+1)+"/"+ d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();
}

