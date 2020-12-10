console.log("Chrome extension go");

let listing = document.getElementsByClassName('list-card list-card_not-saved')
let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
let price = document.getElementsByClassName('list-card-price')
let html = document.documentElement
let bottom = document.getElementsByClassName('list-card-type')
var address = document.getElementsByClassName('list-card-addr')
var number_of_elements = address.length;
var arr = [0]
console.log(number_of_elements)
for (var i = 0; i < number_of_elements; i++) {
				arr[i] = i + 2;
}
console.log(arr)
console.log(arr.length)

//for (elt of address) {
//	var address_text = address.innerText;
//	console.log(address_text);
//}

var count = 0;
for (var i = 0; i < address.length; i++) {
	var address_text = address[i].innerText;
//run replace method twice to remove two commas
	var address_text = address_text.replace(',', '');
	var address_text = address_text.replace(',', '');
//turn address into an array
	var n = address_text.split(" ");
//isolate last element of the array to get zipcode
	var zipcode = n[n.length - 1];
	n.pop();
//turn array back into string
	var address_without_zipcode = n.join();
//turn commas into plus signs for url
	var address_without_zipcode = address_without_zipcode.replaceAll(',', '+');
	var address_without_zipcode = address_without_zipcode.replaceAll('#', '');
	//console.log(house_link[i]);
//create url
var internet_speed_url = 'https://www.highspeedinternetdeals.com/offers.php?address=+' + address_without_zipcode + '+&zip=' + zipcode + '&type='
arr[i] = internet_speed_url

var internet_speed_url_with_space = ' https://www.highspeedinternetdeals.com/offers.php?address=+' + address_without_zipcode + '+&zip=' + zipcode + '&type='
let high_speed_url = document.createTextNode(internet_speed_url_with_space);
//bottom[i].appendChild(high_speed_url);
}
//END OF FOR LOOP
console.log(arr)
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = internet_speed_url; // site that doesn’t send Access-Control-*



//START OF MANUAL LOOPS

fetch(arr[count]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[count])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[count].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[count].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[1]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[1])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[1].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[1].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})


fetch(arr[2]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[2])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[2].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[2].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})


fetch(arr[3]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[3])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[3].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[3].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})
fetch(arr[4]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[4])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[4].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[4].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})
fetch(arr[5]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[5])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[5].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[5].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})
fetch(arr[6]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[6])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[6].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[6].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[7]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[7])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[7].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[7].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[8]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[8])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[8].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[8].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[9]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[9])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[9].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[9].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[10]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[10])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[10].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[10].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[11]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[11])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[11].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[11].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[12]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[12])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[12].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[12].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[13]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[13])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[13].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[13].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[14]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[14])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[14].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[14].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[15]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[15])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[15].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[15].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[16]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[16])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[16].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[16].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[17]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[17])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[17].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[17].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[18]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[18])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[18].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[18].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[19]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[19])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[19].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[19].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[20]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[20])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[20].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[20].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[21]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[21])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[21].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[21].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[22]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[22])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[22].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[22].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[23]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[23])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[23].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[23].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[24]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[24])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[24].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[24].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[25]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[25])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[25].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[25].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[26]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[26])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[26].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[26].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[27]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[27])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[27].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[27].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[28]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[28])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[28].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[28].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[29]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[29])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[29].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[29].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[30]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[30])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[30].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[30].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[31]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[31])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[31].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[31].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[32]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[32])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[32].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[32].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[33]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[33])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[33].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[33].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[34]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[34])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[34].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[34].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[35]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[35])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[35].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[35].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[36]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[36])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[36].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[36].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[37]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[37])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[37].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[37].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[38]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[38])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[38].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[38].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[39]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[39])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[39].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[39].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

fetch(arr[40]) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
//START OF FUNCTION IN FETCH
.then(contents => {
		console.log(arr[40])
		var address = document.getElementsByClassName('list-card-addr')
		var index = contents.indexOf('Mbps');
		var fastest_speed = '8'; 
		while (index >= 0) {
						console.log(index);
						var speed = contents.slice(index -5, index - 1);
					  var speed = speed.replaceAll("n", "");
					  var speed = speed.replaceAll(">", "");
					  var speed = speed.replaceAll("a", "");
					  var speed = speed.replaceAll("c", "");
					  var speed = speed.replaceAll("<", "");
					  var speed = speed.replaceAll("l", "");
					  var speed = speed.replaceAll("p", "");
					  var speed = speed.replaceAll(" ", "");
						console.log('speed is ' + speed);
						if (speed[0] == '9') {
						fastest_speed = speed;
						}
						if (speed.length > fastest_speed.length) {
							fastest_speed = speed;
							}
						index = contents.indexOf('Mbps', index + 1);
						//let house_link = document.getElementsByClassName('list-card-link list-card-link-top-margin list-card-img')
}
	console.log("fastest speed is " + fastest_speed + ' ' + address[40].innerText);
	var fastest_speed = ' ' + fastest_speed + ' Mbps'
 	let internet_speed = document.createTextNode(fastest_speed);
	let price = document.getElementsByClassName('list-card-price');
	price[40].appendChild(internet_speed);
//END OF FUNCTION IN FETCH
})

.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
