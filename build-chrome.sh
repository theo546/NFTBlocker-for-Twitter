#!/bin/sh

cd src
mv manifest.json ..
sed '6,11d' ../manifest.json > manifest.json
sed -i 's/"manifest_version": 2,/"manifest_version": 3,/g' manifest.json
sed -i 's/"browser_action"/"action"/g' manifest.json
7z a -tzip -mx=9 ../build-chrome.zip *
mv ../manifest.json manifest.json