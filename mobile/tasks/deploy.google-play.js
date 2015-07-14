
// http://ionicframework.com/docs/guide/publishing.html

var util = require('util');
var gulp = require('gulp');
var shell = require('shelljs');
process = require('child_process');

module.exports = function () {

  // shell.exec('cordova plugin rm org.apache.cordova.console');
  shell.exec('cordova build --release android');

  var apk = 'platforms/android/build/outputs/apk/android-release-unsigned.apk';

  // shell.exec('jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore '+apk+' alias_name');

  var jarsigner = shell.exec('jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore '+apk+' alias_name', {async: true});

  jarsigner.stdout.on('data', function (data) {
    console.log(data);
  });

  // shell.exec('imc3bu\n');

  // var releaseName = Math.round(Math.random()*100);

  // shell.exec('zipalign -v 4 '+apk+' ./releases/android/'+releaseName+'.apk');

  // shell.exec('cordova plugin add org.apache.cordova.console');

};