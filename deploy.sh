#!/bin/bash

ssh zear16@zear16.com <<EOF
cd /home/zear16/tcl-api-mockup
pm2 stop tcl-api-mockup-server
git pull origin master
npm install
pm2 start tcl-api-mockup-server
exit
EOF
