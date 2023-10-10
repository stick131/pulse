const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoPrefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// gulp.task('server', function(){
//     browserSync.init({
//         server:{
//             baseDir: "src"
//         }
//     })

  

// });


gulp.task('server',function() {
    browserSync.init({
        server: "./src"
    });


    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch('src/sass/**/*.+(scss|sass)', gulp.series('styles'));
    //gulp.watch("src/sass/*.+(scss|sass)"), gulp.parallel("styles");
    //gulp.watch("src/*.html").on('change', browserSync);
    //gulp.watch("src/css/*.css").on('change', browserSync.reload);

});

gulp.task('styles', function() {
    return gulp.src("src/sass/*.+(scss|sass)")
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('src/css'))
      .pipe(browserSync.stream())
     
  })



// gulp.task('styles', function(){
//     return gulp.src("src/sass/*.+(scss|sass)")
//     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     // .pipe(rename({
//     //     prefix: "",
//     //     suffix: ".min",
//     // }))
//     .pipe(autoPrefixer({
//         browsers: ['last 2 versions'],
//         cascade: false
//     }))
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest("src/css"))
//     .pipe(browserSync.stream());
// })

// gulp.task('watch', function(){
//      gulp.watch("src/sass/*.+(scss|sass)"), gulp.parallel("styles");
//      gulp.watch("src/*.html").on('change', browserSync);

// })
//gulp.task('default', gulp.parallel('watch','server', 'styles'));

gulp.task('default', gulp.parallel('server','styles'));
                                                                                                                                