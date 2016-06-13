/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
if (msg.title && (msg.text == "paste_query")) {
	var txtTofindArr = msg.title;
	
	txtTofindArr.forEach(function(elem){	
		//var txtTofind = "(" + elem + ")";	
		var txtTofind = elem;
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp(txtTofind + '(?!([^<]+)?>)', 'gi'),
		'<b style="background-color:#ff0;font-size:100%">$&</b>'
		);
	});
	sendResponse(document.body.innerHTML);
}
});