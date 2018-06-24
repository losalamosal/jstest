#!/usr/bin/env sh
# Add documentatin and error checking!
# ./mkraw.sh "`date`" "`./node_modules/fast-cli/cli.js`"
FASTCLI=`~/fast-cli/cli.js`
DATE=`date`
cd ~/jstest
git pull
# cd down into internet speed page
# git clone git@losalamosal.github.com:losalamosal/jstest.git
sed "s+\/\* SED TARGET \*\/+{d: \"$DATE\", s: \"$FASTCLI\"},\\
  &+" raw_data.js > raw_data.js.tmp && mv raw_data.js.tmp raw_data.js
git commit -am "New data: ${DATE}"
git push
# Remove puppeteer cruft or it'll exhaust /tmp space
rm -rf /tmp/.org.chromium.Chromium.*
