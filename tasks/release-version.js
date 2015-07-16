var gulp = require('gulp');
var xmlEditor = require('gulp-xml-editor');
var cordovaLib = require('cordova-lib').cordova;
var projectRoot = cordovaLib.findProjectRoot();
var path = require('path');
var configXML = path.join(projectRoot, 'config.xml');
var version = null;

function incrementVersion (v) {
  var components = v.split('.');
  var major = parseInt(components[0]);
  var minor = parseInt(components[1]);
  var dot = parseInt(components[2]);
  var max = 20;

  dot ++;

  if (dot > max) {
    dot = 0;
    minor ++;
  }
  if (minor > max) {
    minor = 0;
    major ++;
  }

  return [major, minor, dot].join('.');
}

gulp.task('release:version:increment', function () {

  return gulp.src(configXML)
        .pipe(xmlEditor(function (xml, xmljs) {

          version = xml.root().attr('version').value();
          version = incrementVersion(version);

          xml.root().attr('version').value(version);

          return xml;
        }))
        .pipe(gulp.dest(projectRoot));

});