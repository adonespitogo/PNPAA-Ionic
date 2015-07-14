
// http://ionicframework.com/docs/guide/publishing.html

var shell = require('shelljs');

module.exports = function (gulp) {

  shell.exec('cordova plugin rm org.apache.cordova.console');
  shell.exec('cordova build --release android');
  shell.exec('cordova plugin add org.apache.cordova.console');

  var unsigned = 'platforms/android/build/outputs/apk/android-release-unsigned.apk';

  return shell.cp(unsigned, 'releases/android/unsigned.apk');

  // shell.exec('zipalign -v 4 '+apk+' ./releases/android/'+releaseName+'.apk');


};