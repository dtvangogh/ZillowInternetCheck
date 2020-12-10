
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
