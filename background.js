var bkg = chrome.extension.getBackgroundPage();
chrome.webRequest.onBeforeRequest.addListener(
    function(details)
    {
    	if(details.method == "POST"){
            bkg.console.log(JSON.stringify(details.requestBody), JSON.stringify(details.url));
    	}
    },
    {urls: [ "<all_urls>" ]},
    ['requestBody']
);
