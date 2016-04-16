/**
 * Created by Hernan Y.Ke on 2016/4/16.
 */
var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util');

gulp.task('mocha',function(){
    return gulp.src(['testold/*.js'],{read:false}).pipe(mocha({reporter:'list'})).on('error',gutil.log);
});

gulp.task('watch-mocha',function(){
    gulp.series('mocha');
    gulp.watch(['testold/*.js'],gulp.series(['watch-mocha']));
})
gulp.task('default',gulp.series(['watch-mocha']));

