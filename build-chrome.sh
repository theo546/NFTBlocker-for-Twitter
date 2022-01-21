#!/bin/sh

cd src
mv manifest.json ..
sed '6,11d' ../manifest.json > manifest.json
7z a -tzip -mx=9 ../build-chrome.zip *
mv ../manifest.json manifest.json