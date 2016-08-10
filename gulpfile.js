var gulp = require('gulp');
var chalk = require('chalk');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function(){
    console.log(chalk.blue('Running default task'));
});

var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./app/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch:sass', function () {
    gulp.watch('./app/app.scss', ['sass']);
});

gulp.task('ts', function() {
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('app'));
});

gulp.task('watch:ts', ['ts'], function() {
    gulp.watch('lib/*.ts', ['scripts']);
});

gulp.task('watch', ['watch:ts', 'watch:sass'], function(){
    console.log(chalk.green('Watching .ts and scss'));
});