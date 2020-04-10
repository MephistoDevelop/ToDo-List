# To-Do List Project

> Project taked from Microverse Curriculum from [The Odin Page project Site]().

### Desktop view

![screenshot](./todo.gif)

Javascript with Webpack project from [The Odin Project curriculum](https://www.theodinproject.com/courses/javascript/lessons/todo-list)

## Built With Javascript and Webpack

- Html,Css,JavaScript
- Webpack
- npm manager

## Live Demo

[Live Demo Link](https://mephistodevelop.github.io/ToDo-List/)

## Future Features

- store data on remote server
- reminders with notifications

## Getting Started

### Prerequisites

-before to run this project you will need to install before webpack and configure the live server on your webpac.config file. you can check more about it on this [page](https://webpack.js.org/guides/installation/) .
[npm install and config: ](https://docs.npmjs.com/cli/install)

### Setup

To use this project you will need to download this repository and put in on your computer.
after you will need to install webpack and npm to run correctlly this project.

in `package.json` file on the rules we are going to put this:

```
 "scripts": {
 "test": "echo \"Error: no test specified\" && exit >1",
 "build": "webpack --mode production",
 "builddev": "webpack --mode development",
 "start": "webpack-dev-server --mode development >--open"
 }
```

Install Webpack live Server plugin with this command:

`npm install --save-dev browser-sync-webpack-plugin`

in `webpack.config.js` file we are going to put this config to use live-sync browser reloaded automatly using `npm run start` :

```
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
entry: './src/index.js',
output: {
filename: 'main.js',
path: path.resolve(\_\_dirname, 'dist'),
},
watch: true,
module: {
rules: [
{
test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
use: ['file-loader'],
},
],
},
};

module.exports = {
watch: true,
plugins: [
new BrowserSyncPlugin({
host: 'localhost',
port: 3001,
files: [
'./dist/*.html',
'./dist/*.js',
'./dist/*.css',
'./src/*.js',
'./src/img/*.jpg',
],
server: { baseDir: ['dist'] },
}),
],
};
```

Installing Bootstrap

Use the following command to install Bootstrap and its peer dependencies, jQuery and Popper:

\$ npm install bootstrap jquery popper.js --save

If you choose to import Bootstrap’s JavaScript plugins individually as needed, you must also install exports-loader.

\$ npm install exports-loader --save-dev

You’ll need to install the required loaders and postcss plugins for compiling and bundling Bootstrap precompiled Sass files.

\$ npm install autoprefixer css-loader node-sass postcss-loader sass-loader style-loader --save-dev

### Deployment

To deploy the application and see it on the browser you can use npm to do that task on the server provider by webpack. to run the live server you will need to open your project folder terminal and run this commands:

```
`npm install`
`npm run build`
`npm i -D webpack-dev-server`
`npm i browser-sync --save`
''
```

To Run the Linter files you will need to run this commands on the terminal :

```
`npm install eslint eslint-config-airbnb --save-dev`
`npx eslint --init`
`npx eslint`
```

after you will need to enter to [Stickler Page](https://stickler-ci.com/) and activate your repository.

## Authors

👤 **Cristian Ines Hernandez A. - MephistoDevelop**

- Github: [@MephistoDevelop](https://github.com/MephistoDevelop)
- Twitter: [@MephistoDevelop](https://twitter.com/MephistoDevelop)
- Linkedin: [Cristian Hernandez](https://www.linkedin.com/in/cristian-hernandez1992/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](lic.url) licensed.

### Author:

[Cristian Ines (MephistoDevelop)](https://github.com/MephistoDevelop)
