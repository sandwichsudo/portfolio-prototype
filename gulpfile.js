var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var compass = require('gulp-compass');
var inject = require('gulp-inject');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var rev = require('gulp-rev');

var webserver = require('gulp-webserver');

// Constants
var SERVER_PORT = 31415;

gulp.task('webserver', function() {
  gulp.src('./build')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port:SERVER_PORT
    }));
});

gulp.task('compass', function () {
    return gulp.src('src/app/assets/styles/*.scss')
        .pipe(compass({
            css: 'build/min/styles',
            sass: 'src/app/assets/styles',
            image: 'src/app/assets/images'
        }))
        .on('error', function(err) {
            console.log(err.message);
        })
        .pipe(gulp.dest('./build/min/css'))
});

gulp.task('lint', function() {
    return gulp.src('src/app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
        .pipe(gulp.dest('./build/min/js'))
       // .pipe(refresh(lrserver));
});

gulp.task('images', function() {
    return gulp.src('src/app/assets/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/min/images'));
});

gulp.task('compile', ['images', 'compass', 'lint'], function() {
    gulp.src('src/app/*.html')
/*        .pipe(inject(gulp.src('./build/min/js/templates.js', {read: false}),
            {
                starttag: '<!-- inject:templates:js -->',
                ignorePath: '/.tmp'
            }
        ))
        .pipe(usemin({
            css:          [minifyCss(), rev()],
            html:         [minifyHtml({ empty: true })],
            js:           [uglify(), rev()],
        }))*/
        .pipe(gulp.dest('build/'));

    gulp.src('src/app/vendor/**/*.js')
        .pipe(gulp.dest('build/'));

});

// Serve tasks
gulp.task('reload:html', function () {
    console.log("Reloading html");
    return gulp.src('src/app/**/*.html')
        .pipe(gulp.dest('build/'))
})

gulp.task('watch', function () {
    gulp.watch('src/app/assets/styles/**/*.scss', ['compass']);
    gulp.watch('src/app/**/*.js', ['lint']);
});

gulp.task('default', ['compile','webserver','watch']);
