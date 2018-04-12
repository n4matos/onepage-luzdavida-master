var gulp = require('gulp');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

var js = [
    'js/jquery.js',
    'js/bootstrap.js',
    'js/SmoothScroll.js',
    'js/wow.min.js',
    'js/nivo-lightbox.js',
    'js/jquery.isotope.js',
    'js/owl.carousel.js',
    'js/jqBootstrapValidation.js',
    'js/contact_me.js',
    'js/main.js'
];

gulp.task('minify-js', function () {
    gulp.src(js)
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/'));
});

gulp.task('js', ['minify-js']);



var css = [
    'css/style.css',
    'css/animate.min.css',
    'css/nivo-lightbox/nivo-lightbox.css',
    'css/nivo-lightbox/default.css'
];

var cssmin = require("gulp-cssmin");
var stripCssComments = require('gulp-strip-css-comments');

gulp.task('minify-css', function () {
    gulp.src(css)
        .pipe(concat('style.min.css'))
        .pipe(stripCssComments({ all: true }))
        .pipe(cssmin())
        .pipe(gulp.dest('css/'));
});

gulp.task('css', ['minify-css']);