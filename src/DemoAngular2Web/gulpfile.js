/// <binding AfterBuild='copy-deps' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var gutil = require('gulp-util');
var merge = require('gulp-merge');


gulp.task('default', function () {
    // place code for your default task here
});

var paths = {};
paths.webroot = "wwwroot/";
paths.npmSrc = "\./node_modules/";
paths.npmLibs = paths.webroot + "lib/npmlibs/";

gulp.task("copy-deps:systemjs", function () {
    return gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*', { base: paths.npmSrc + '/systemjs/dist/'})
         .pipe(gulp.dest(paths.npmLibs + '/systemjs/'));
});


gulp.task("copy-deps:angular", function () {

    var components = ['core','common','compiler','forms','http','platform-browser','platform-browser-dynamic','router','upgrade'];

    var tasks = components.map(function (component) {
        gutil.log('comp:' + component);
        return gulp.src(paths.npmSrc + '/@angular/'+component+'/bundles/*.js', { base: paths.npmSrc + '/@angular/'+component+'/bundles/' })
        .pipe(gulp.dest(paths.npmLibs + '/@angular/'+component+'/'));
    });   


    return merge(tasks);

    gutil.log('comp:' + 'hi');       
});

gulp.task("copy-deps:react", function () {

    var task = [
        gulp.src(paths.npmSrc + '/react/dist/*.js', { base: paths.npmSrc + '/react/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/react/')),
        gulp.src(paths.npmSrc + '/react-dom/dist/*.js', { base: paths.npmSrc + '/react-dom/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/react-dom/')),
    ];

    

    return merge(tasks);
});

//gulp.task("copy-deps:es6-shim", function () {
//    return gulp.src(paths.npmSrc + '/es6-shim/es6-sh*', { base: paths.npmSrc + '/es6-shim/' })
//         .pipe(gulp.dest(paths.npmLibs + '/es6-shim/'));
//});
//gulp.task("copy-deps:es6-promise", function () {
//    return gulp.src(paths.npmSrc + '/es6-promise/dist/**/*.*', { base: paths.npmSrc + '/es6-promise/dist/' })
//         .pipe(gulp.dest(paths.npmLibs + '/es6-promise/'));
//});

//gulp.task("copy-deps:rxjs", function () {
//    return gulp.src(paths.npmSrc + '/rxjs/bundles/*.*', { base: paths.npmSrc + '/rxjs/bundles/' })
//         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
//});


gulp.task("copy-deps:rxjs", function () {
    return gulp.src(paths.npmSrc + '/rxjs/**/*.js', { base: paths.npmSrc + '/rxjs/' })
         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
});

gulp.task("copy-deps:zonejs", function () {
    return gulp.src(paths.npmSrc + '/zone.js/dist/**/*.js', { base: paths.npmSrc + '/zone.js/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/zone.js/'));
});


gulp.task("copy-deps:reflect-metadata", function () {
    return gulp.src(paths.npmSrc + '/reflect-metadata/temp/*.js', { base: paths.npmSrc + '/reflect-metadata/temp/' })
         .pipe(gulp.dest(paths.npmLibs + '/reflect-metadata/'));
});



// , 'copy-deps:es6-shim', 'copy-deps:es6-promise'
gulp.task("copy-deps", ["copy-deps:rxjs", 'copy-deps:angular', 'copy-deps:react', 'copy-deps:systemjs', 'copy-deps:zonejs', 'copy-deps:reflect-metadata']);
