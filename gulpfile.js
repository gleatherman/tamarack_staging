
var gulp = require('gulp'),
    exec = require('child_process').exec,           // Run child processes with exec
    browserSync = require('browser-sync'),          // Live reload and more
    sass = require('gulp-sass'),                    // Compile SASS (scss) files
    // prefix = require('gulp-autoprefixer'),	        // CSS browser prefixing
    cleanCSS = require('gulp-clean-css');			// Minify CSS files


// DEFAULT TASK
// This task runs when you type 'gulp' on the command line
//--------------------------------------------
gulp.task('default', function(){

    // SCSS/CSS WATCHERS
    gulp.watch('./scss/**/*.scss', gulp.series('scss'));

    browserSync.init({
        server: "./"
    });

});


// SASS/CSS
//--------------------------------------------
gulp.task('scss', function () {


    return gulp.src(['./scss/app.scss'])

    // Compile SASS
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))

    // Add browser specific css prefixes
    // .pipe(prefix({ browsers: ['last 2 versions', 'Explorer >= 9'] }))

    // Minify CSS
    .pipe(cleanCSS({compatibility: 'ie9'}))

    // Save minified CSS file to compiled site
    .pipe(gulp.dest('./css/'))

    // Update via Browser Sync
    .pipe(browserSync.stream())
});
