var gulp = require('gulp')
    , usemin = require('gulp-usemin')
    , uglify = require('gulp-uglify')
    , minifyHtml = require('gulp-minify-html')
    , minifyCss = require('gulp-minify-css')
    , compass = require('gulp-compass')
    , inject = require('gulp-inject')
    , imagemin = require('gulp-imagemin')
    , refresh = require('gulp-livereload')
    , jshint = require('gulp-jshint')
    , rev = require('gulp-rev')
    , lrserver = require('tiny-lr')()
    , express = require('express')
    , livereload = require('connect-livereload');

// Constants
var SERVER_PORT = 31415;
var LIVERELOAD_PORT = 35729;

gulp.task('compass', function () {
    return gulp.src('./app/styles/*.scss')
        .pipe(compass({
            css: 'build/min/styles',
            sass: 'app/styles',
            image: 'app/images'
        }))
        .on('error', function(err) {
            console.log(err.message);
        })
        .pipe(gulp.dest('./build/min/css'))
        .pipe(refresh(lrserver));
});

gulp.task('lint', function() {
    return gulp.src('./app/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
        .pipe(gulp.dest('./build/min/js'))
        .pipe(refresh(lrserver));
});

gulp.task('images', function() {
    return gulp.src('./app/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/min/images'));
});

gulp.task('compile', ['images', 'compass', 'lint'], function() {
    gulp.src('./app/*.html')
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

    gulp.src('./vendor/**/*.js')
        .pipe(gulp.dest('build/'));

});

// Serve tasks
gulp.task('reload:html', function () {
    console.log("Reloading html");
    return gulp.src('./app/**/*.html')
        .pipe(gulp.dest('build/'))
        .pipe(refresh(lrserver));
})

gulp.task('watch', function () {
    gulp.watch('app/styles/**/*.scss', ['compass']);
    gulp.watch('app/js/**/*.js', ['lint']);
    gulp.watch('app/**/*.html', ['reload:html']);
});

gulp.task('serve:app', ['watch'], function() {
    var server = express();
    server.use(livereload({
      port: LIVERELOAD_PORT
    }));
    server.use(express.static('./build/min'));
    server.use(express.static('./app'));
    server.listen(SERVER_PORT);

    lrserver.listen(LIVERELOAD_PORT);
});

gulp.task('serve:build', function() {
    var server = express();
    server.use(express.static('./build'));
    server.listen(SERVER_PORT);
});

gulp.task('default', ['compile','serve:build','watch']);
