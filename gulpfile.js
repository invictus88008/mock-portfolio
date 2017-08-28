var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var minifyjs = require('gulp-js-minify');

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
gulp.task('minifyViewsJs', function(){
  gulp.src('./src/views/js/*.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('./public/views/js'))
});


gulp.task('build', ['moveRootHtml', 'moveViewsHtml','minifyRootCss', 'minifyViewsCss', 'moveRootImages', 'moveViewsImages', 'minifyRootJs', 'minifyViewsJs']);

