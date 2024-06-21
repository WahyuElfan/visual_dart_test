# visual_dart_test

#Install cypress & plugins cucumber
1. npm install -D cypress@13.11.0
2. npm install --save-dev cypress-file-upload
3. npm install --save-dev cypress @badeball/cypress-cucumber-preprocessor
4. npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
5. npm install --save-dev cypress @badeball/cypress-cucumber-preprocessor @cypress/webpack-preprocessor @babel/core @babel/preset-env babel-loader webpack @esbuild-plugins/node-globals-polyfill @esbuild-plugins/node-modules-polyfill
6. npm version 10.7.0
7. node.js version 21.6.1
6. Run on terminal -> npx cypress open or npx cypress run

#Clone git
1. git clone git@github.com:WahyuElfan/visual_dart_test.git

#Structure Folder
cypress
 ┣ downloads
 ┣ e2e
 ┃ ┗ app_builder
 ┃ ┃ ┣ group_channel
 ┃ ┃ ┃ ┣ create_group_channel.feature
 ┃ ┃ ┃ ┣ create_group_channel.js
 ┃ ┃ ┃ ┣ receiving_message.feature
 ┃ ┃ ┃ ┣ receiving_message.js
 ┃ ┃ ┃ ┣ upload_file.feature
 ┃ ┃ ┃ ┗ upload_file.js
 ┃ ┃ ┗ setup_user
 ┃ ┃ ┃ ┣ setup_user.feature
 ┃ ┃ ┃ ┗ setup_user.js
 ┣ fixtures
 ┃ ┣ example.json
 ┃ ┗ image.PNG
 ┣ plugins
 ┃ ┗ index.js
 ┣ screenshots
 ┣ support
 ┃ ┣ commands.js
 ┃ ┗ e2e.js
 ┗ videos
