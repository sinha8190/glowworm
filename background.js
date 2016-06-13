/**
 * background.js
 * For getting list of keywords from Google spreadsheet, searching them in a given web page and highlighting them.
 */
var tabId = ""; var url = ''; var pattern = 'http*://*/*'; var query;

chrome.browserAction.onClicked.addListener(function(tab) {
//Find the tab matching gCases
		var activeTabId;
		activeTabId = tab.id;
		
//Read the keywords from Google drive
		function getSearch() {	
		url = 'https://script.google.com/a/macros/google.com/s/AKfycbyZsE9oEUsdez02iKQoXrx9zPic5TBqKxACi1p-u9mZdIykQL-u/exec';
			function getQuery() {
			    console.log("query2 = "+query);
				chrome.tabs.sendMessage(activeTabId, { text: "paste_query", title: query }, function() {} );
				//chrome.tabs.sendMessage(activeTabId, { text: "click_search" }, function () {} );
			}
			
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				query = JSON.parse(xhr.responseText);
				getQuery(query);
			}
		}	
		xhr.open('GET', url, true);
		xhr.send();
	}
	getSearch();
});