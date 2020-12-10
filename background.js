console.log('background works');

//chrome.tabs.create({url: 'https://www.highspeedinternetdeals.com/offers.php?address=+89+rayzoe+terrace+&zip=06514&type=', active: false}, callback);
function callback(data) {
				console.log(data.url);
		}

searchUrbanDict = function(word){
    var query = word.selectionText;
		var address_text = query;
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
//create url
var internet_speed_url = 'https://www.highspeedinternetdeals.com/offers.php?address=+' + address_without_zipcode + '+&zip=' + zipcode + '&type='
    chrome.tabs.create({url: internet_speed_url});
 };

chrome.contextMenus.create({
 title: "HighSpeedInternetSearch",
 contexts:["selection"],  // ContextType
 onclick: searchUrbanDict // A callback function
});

