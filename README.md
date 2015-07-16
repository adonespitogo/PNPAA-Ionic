PNPAA Ionic App
===============

Prepare your system
--------------
 - Install [android sdk](https://developer.android.com/sdk/installing/index.html)
 - Install [nodejs](https://nodejs.org/download/)
 - Install `cordova` `ionic` `bower` and `gulp`
  - `npm install -g cordova ionic gulp bower`

Getting started
------------------------------
 - `git clone git@github.com:adonespitogo/PNPAA-Ionic.git`
 - `cd PNPAA-Ionic`
 - `npm install`
 - `bower install`
 - `gulp plugins:install`
 - `gulp resources:unzip`
 - `gulp debug:web` or `gulp debug:android`

Gulp tasks
-----------
 - `gulp build:assets` - Recompiles assets from `app` to `www`
 - `gulp resources:unzip` - Unzips files from `resources.zip` to `resources` directory
 - `gulp watch` - Watch changes in `app` and recompile them
 - `gulp plugins` - Install required cordova plugins
 - `gulp debug:web` - Opens app in the browser
 - `gulp debug:android` - Install and run app on android device/emulator
 - See [tasks directory](./tasks/) for more

Important files and directories
-------------------------------
 - [assets.json](./assets.json) - Determines the assets to include for compilation
 - [/app](./app/) - Contains sources files that are concatinated, minified and copied into [/www](./www/)
 - [/www](./www/) - Contains minified assets
 - [/tasks](./tasks) - Contains gulp tasks
