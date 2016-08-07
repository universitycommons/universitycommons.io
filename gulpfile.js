var cssmin = require('gulp-cssmin');
var del = require('del');
var gulp = require('gulp');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

gulp.task('default', ['minify:css', 'minify:js']);
gulp.task('clean', ['clean:css', 'clean:js']);

gulp.task('minify:css', function () {

  gulp.src('./public/style/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/style/'));

});

gulp.task('minify:js', function () {

  gulp.src('./public/script/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/script/'));

});

gulp.task('clean:css', function() {

  del('./public/style/*.min.css');

});

gulp.task('clean:js', function() {

  del('./public/script/*.min.js');

});
