const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const njk = require("gulp-nunjucks-render");

function scssTask() {
  return src("src/scss/styles.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(dest("dist/css", { sourcemaps: "." }));
}

function mergeHtml() {
  return src("src/html/pages/*.+(html|njk)")
    .pipe(
      njk({
        path: ["src/html"],
      })
    )
    .pipe(dest("dist"));
}

function imagesTask() {
  return src("src/imgs/**/*", { sourcemaps: true })
    .pipe(imagemin())
    .pipe(dest("dist/imgs", { sourcemaps: "." }));
}

function jsTask() {
  return src("src/js/*.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("dist/js", { sourcemaps: "." }));
}

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "dist",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
}

function watchTask() {
  watch("src/**/*.html", mergeHtml, imagesTask, browsersyncReload);
  watch(
    ["src/scss/**/*.scss", "src/js/**/*.js"],
    series(scssTask, jsTask, browsersyncReload)
  );
}
exports.default = series(
  mergeHtml,
  scssTask,
  jsTask,
  imagesTask,
  browsersyncServe,
  watchTask
);
