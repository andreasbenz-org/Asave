const { series, parallel,src, dest, watch  } = require('gulp');
const sass = require('gulp-sass')(require('sass'));;
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const inject = require('gulp-inject');

function scssTask(){
    return src('src/scss/styles.scss', {sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(dest('dist/css', {sourcemaps: '.'}));
}

function injectJSTask(){
    return src('src/**/*.html')
    .pipe(inject(src('src/js/**/*.js', {read: false}), {relative: true}))
    .pipe(dest('src'))
}
function injecCSSTask(){
    return src('src/**/*.html')
    .pipe(inject(src('dist/css/*.css', {read: false}),{ignorePath: '/dist', addRootSlash: false}, {relative: true}))
    .pipe(dest('src'))
}
function htmlTask(){
    return src('./src/*.html')
    .pipe(dest('dist'))
    
}

function imagesTask(){
    return src('src/imgs/**/*', {sourcemaps: true})
    .pipe(imagemin())
		.pipe(dest('dist/imgs', {sourcemaps: '.'}))
}

function jsTask(){
    return src('src/js/*.js', {sourcemaps: true})
    .pipe(terser())
    .pipe(dest('dist/js', {sourcemaps: '.'}));
}

function browsersyncServe(cb){
    browsersync.init({
        server: {
            baseDir: 'dist'
        }
    });
    cb();
}

function browsersyncReload(cb){
    browsersync.reload();
}

function watchTask(){
    watch('src/**/*.html',htmlTask,imagesTask, browsersyncReload);
    watch(['src/scss/**/*.scss', 'src/js/**/*.js'],series(scssTask,jsTask,htmlTask,browsersyncReload))
}
exports.default = series(
    scssTask,
    jsTask,
    injectJSTask,
    injecCSSTask,
    htmlTask,
    imagesTask,
    browsersyncServe,
    watchTask
)
