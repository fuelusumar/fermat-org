#!/bin/sh
# npm install
forever stopall
NODE_ENV=production PORT=3000 forever start bin/www
NODE_ENV=development PORT=3002 forever start bin/www
forever start proxy.js
forever list