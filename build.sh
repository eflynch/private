#!/bin/bash
npm run build
gpg --armor --symmetric --output-file docs/data.gpg docs/main.js
rm docs/main.js

