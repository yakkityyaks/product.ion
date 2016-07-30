var gulp = require('gulp');
var shell = require('gulp-shell');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
// var webpack = require('gulp-webpack');
// var webpackConfig = require('./webpack.config.js');

// gulp default to test if it works.
gulp.task('default', function() {
  console.log('GULP works!');
});

// gulp babel to compile components.
gulp.task('babel', function() {
	return gulp.src(['./app/client/*.jsx/', './app/client/*/*.jsx'])
    // .pipe(jsx())
		.pipe(babel({
			presets: ['react']
		}))
		.pipe(gulp.dest('./compiled/'));
});

// gulp watch to monitor changes in any jsx file.
// If there is a file change, use babel task.
gulp.task('watch', function() {
  gulp.watch('./client/*/*.jsx', ['babel']);
});

// gulp heroku for Heroku shell commands.
// Be sure to login to Heroku, clone repo, create, add, commit
// before calling this task.
gulp.task('heroku', shell.task([
  'git push heroku master',
  'heroku open'
]));

// // gulp webpack to minify, watch, and pipe compiled js files to dist.
// gulp.task('webpack', function() {
//   return gulp.src('./compiled/components/*.js')
//   .pipe(webpack({
//     watch: true,
//     webpackConfig
//   }))
//   .pipe(gulp.dest('./dist'));
// });
