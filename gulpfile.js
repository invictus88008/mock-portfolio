var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var minifyjs = require('gulp-js-minify');
var critical = require('critical').stream;

//Minified CSS in root dir
gulp.task('minifyRootCss', function() {
    gulp.src('./src/css/*.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('public/css'))
});

//Minifies Css in Vies Dir
gulp.task('minifyViewsCss', function() {
    gulp.src('./src/views/css/*.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('public/views/css'))
});

//Moves images to public
gulp.task('moveRootImages', function() {
    gulp.src('./src/img/**.*')
    .pipe(gulp.dest('public/img'))
});

//Moves images to public
gulp.task('moveViewsImages', function() {
    gulp.src('./src/views/images/**.*')
    .pipe(gulp.dest('public/views/images'))
})

//Moves html to public
gulp.task('moveRootHtml', function() {
    gulp.src('./src/**.html')
    .pipe(gulp.dest('public/'))
})

//Moves html to public
gulp.task('moveViewsHtml', function() {
    gulp.src('./src/views/**.html')
    .pipe(gulp.dest('public/views/'))
})


//Minifies JS
gulp.task('minifyRootJs', function(){
  gulp.src('./src/js/*.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('./public/js'))
});

//Minifies JS
gulp.task('moveViewsJs', function(){
  gulp.src('./src/views/js/*.js')
    .pipe(gulp.dest('./public/views/js'))
});

//Generates inline css for above the fold content
gulp.task('criticalCss', function() {
    gulp.src('./src/*.html')
        .pipe(critical({base: 'src/', inline: true, css: ['src/css/style.css']}))
        .pipe(gulp.dest('./public'))
})




gulp.task('build', ['criticalCss', 'moveViewsHtml','minifyRootCss', 'minifyViewsCss', 'moveRootImages', 'moveViewsImages', 'minifyRootJs', 'moveViewsJs']);

