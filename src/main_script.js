var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isFirefox = typeof InstallTrigger !== 'undefined';

if(isChrome) browser_storage_type = chrome;
if(isFirefox) browser_storage_type = browser;

function runLoop() {
	browser_storage_type.storage.sync.get(null, function(e) {
		try {
			blocked_accounts = atob(e.blocked_accounts) || "";
		} catch (error) {
			blocked_accounts = ""
		}
		const blocked_accounts_array = blocked_accounts.split(",");

		const articles = document.getElementsByTagName("article");
		for (const element of articles) {
			const account_username = element['innerText'].split("@")[1].split("\n")[0];
			let result = element['innerHTML'].includes("#hex-hw-shapeclip-clipconfig");
			if (result == true) {
				let is_blocked = blocked_accounts_array.includes(account_username);
				if (is_blocked == false) {
					const menu = element.querySelectorAll("[data-testid='caret']");
					for (const menu_button of menu) {
						menu_button.click();
						const block_buttons = document.querySelectorAll("[data-testid='block']");
						if (block_buttons['length'] == 0) {
							menu_button.click();
							return
						}
						for (const block_button of block_buttons) {
							let is_not_blocked = block_button['innerHTML'].includes("1.5c2.28");
							if (is_not_blocked == true) {
								block_button.click();
								const confirm_block = document.querySelectorAll("[data-testid='confirmationSheetConfirm']");
								for (const confirm_block_button of confirm_block) {
									confirm_block_button.click();

									blocked_accounts_array.push(account_username);
									browser_storage_type.storage.sync.set({
										blocked_accounts: btoa(blocked_accounts_array)
									});

									let loop = 0;
									current_interval = setInterval(function() {
										if (loop == 50) clearInterval(current_interval);
										loop++;
										const toast_notifications = document.querySelectorAll("[data-testid='toast']");
										for (const toast_notification of toast_notifications) {
											console.log('test');
											toast_notification.style.display = "none";
										}
									}, 10);
								}
							}
							else {
								menu_button.click();
							}
						}
					}
					//console.log("NFT Bro detected: " + account_username)
				}
			}
		}
	});
}
setInterval(runLoop, 500);