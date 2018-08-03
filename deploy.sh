#!/bin/bash

ssh zear16@zear16.com <<EOF
cd /home/zear16/tcl-api-mockup
git pull origin master
npm install && pm2 reload ecosystem.config.js --env production
exit
EOF
