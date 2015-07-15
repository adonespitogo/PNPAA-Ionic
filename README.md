Getting Started
===============

Prepare your system
--------------
 - Install [android sdk](https://developer.android.com/sdk/installing/index.html)
 - Install [nodejs](https://nodejs.org/download/)
 - Install `cordova` `ionic` and `gulp` -> `npm install -g cordova ionic gulp`

Prepare dev environment
------------------------------
 - `git clone git@github.com:adonespitogo/PNPAA-Ionic.git`
 - `cd PNPAA-Ionic`
 - `npm install`
 - `bower install`
 - `gulp resources:unzip`
 - `gulp plugins`
 - `cordova platform add android`
 - `ionic browser add crosswalk`
 - `gulp debug:web`

Gulp tasks
-----------
 - `gulp build:assets` - Recompiles assets from `app` to `www`
 - `gulp resources:unzip` - Unzips files from `resources.zip` to `resources` directory
 - `gulp watch` - Watch changes in `app` and recompile them
 - `gulp debug:web` - View app in the browser
 - `gulp plugins` - Install required cordova plugins
 - `gulp debug:android` - Install and run app in android device/emulator
 - `gulp release:android` - Creates ready to publish apk under `release/android/` directory
