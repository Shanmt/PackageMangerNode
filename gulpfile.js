var gulp = require('gulp');
var ts = require('gulp-typescript');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build:server', function () {
    var tsProject = ts.createProject(path.resolve('./tsconfig.json'));
    var tsResult = gulp.src(['app/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.resolve('./app')))
});

gulp.task('build',['build:server']);

gulp.task('default', ['build']);

gulp.task('watch', function () {
    gulp.watch('app/**/*.*', ['build']);
});