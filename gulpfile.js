var gulp = require('gulp');
var chalk = require('chalk');

gulp.task('default', function(){
    console.log(chalk.blue('Running default task'));
});

var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./app/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/app.scss', ['sass']);
});