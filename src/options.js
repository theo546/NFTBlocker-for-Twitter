var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isFirefox = typeof InstallTrigger !== 'undefined';

if(isChrome) browser_storage_type = chrome;
if(isFirefox) browser_storage_type = browser;

document.getElementById("resetbutton").addEventListener("click", function() {
	browser_storage_type.storage.sync.set({
		blocked_accounts: btoa([])
	});
});