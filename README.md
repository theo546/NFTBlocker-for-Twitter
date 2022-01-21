<h1 align="center">
    <sub>
        <img src="NFTBlocker.webp" height="38" width="38">
    </sub>
    NFTBlocker for Twitter
</h1>

This extension automatically block anyone who has an hexagon-shaped profile picture (NFT bros) on Twitter.

## How to use the extension?
Well, you have nothing to do!  
Once the extension is installed, it will block users that have an hexagon-shaped profile picture automatically.  
If you wish to unblock an account that the extension blocked, it will not reblock that account again.

## Privacy
This extension does not send data through internet.  
The only data that are stored are the username of the user that the extension has blocked so it can allow you to unblock them without automatically reblocking them.

## How to package the zip?
You can package the extension easily, you only need these tools:
 - p7zip
 - git

Once all of this is downloaded, open a terminal then clone the repo:
```
git clone https://github.com/theo546/NFTBlocker-for-Twitter.git
```

Once the project has been cloned, cd into it:
```
cd NFTBlocker-for-Twitter
```

Then, to package for each browsers:  
`sh build-firefox.sh` to package for Firefox or  
`sh build-chrome.sh` to package for Google Chrome / Chromium.

You can now import this extension in your favorite browser!
