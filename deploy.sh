#!/bin/bash

ssh zear16@zear16.com <<EOF
cd /home/zear16/tcl-api-mockup
git pull
npm install
pm2 start all
exit
EOF
