# kuppi-test-backend
git init
git add
git commmit -m "sds"
git remote origin https...
git branch -M main
git push -u origin main

npm init -y
npm install express mongoose cors dotenv
npm install nodemon --save-dev
npm install dns

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

npm create vite@latest
npm install axios

cd c:\Users\UMAIR\Desktop\test1\test1\backend
echo node_modules/ > .gitignore
echo .env >> .gitignore
git add .gitignore package.json package-lock.json routes server.js models
git commit -m "Add backend source files"
git push origin main

"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
