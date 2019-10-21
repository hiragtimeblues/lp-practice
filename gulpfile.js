const gulp = require('gulp');
const sass = require('gulp-sass'); //Sassコンパイル
const plumber = require('gulp-plumber'); //エラー時の強制終了を防止
const notify = require('gulp-notify'); //エラー発生時にデスクトップ通知する
const postcss = require('gulp-postcss'); //autoprefixerとセット
const autoprefixer = require('autoprefixer'); //ベンダープレフィックス付与

// パスの管理？
// const paths = {
//     styles: {
//         src: './src/scss/**/*.scss',
//         dest: './dest/css/'
//     },
//     scripts: {
//         src: './src/js/**/*.{js,jsx}',
//         dest: './dest/js/',
//         entry: {
//             main: './src/js/main.js'
//         }
//     },
//     images: {
//         src: './src/img/**/*.{jpg,jpeg,png,gif,svg}',
//         dest: './dest/img/'
//     }
// };


gulp.task('sass', function () {
    return gulp.src("sass/styles.scss", { sourcemaps: true })
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(postcss([
            autoprefixer({ cascade: false })
        ]))
        .pipe(gulp.dest("css/", { sourcemaps: true }));
});

gulp.task('watch', function () {
    gulp.watch('sass/', gulp.task('sass'));
});

gulp.task('default', gulp.task('watch'));