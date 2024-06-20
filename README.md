# visual_dart_test

#Install cypress & plugins cucumber
1. npm install cypress --save-dev
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
├── .github/
│   ├── workflows/
│   │   └── cypress.yml
├── cypress/
│   ├── download/
│   ├── e2e/
│   │   ├── app_builder/
|   |   |   ├── group_channel/
|   |   |   |   ├── create_group_channel.feature
│   │   │   │   ├── create_group_channel.js
|   |   |   |   ├── receiving_message.feature
│   │   │   │   ├── receiving_message.js
|   |   |   |   ├── upload_file.feature
│   │   │   │   ├── upload_file.js
│   │   │   ├── setup_user/
│   │   │   │   ├── setup_user.feature
│   │   │   │   ├── setup_user.js
│   ├── fixtures/
│   │   └── example.json
│   ├── plugins/
│   │   └── index.js
│   ├── support/
│   │   ├── e2e.js
│   │   ├── commands.js
│   ├── hooks/
├── node_modules/
├── cypress.config.js
├── package.json
├── package-lock.json
├── README.md
├── webpack.config.js
