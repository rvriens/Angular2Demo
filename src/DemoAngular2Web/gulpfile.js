/// <binding AfterBuild='copy-deps' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var gutil = require('gulp-util');
var merge = require('gulp-merge');
var del = require('del');
var tslint = require("gulp-tslint");
var tsc = require("gulp-typescript");
var Dotnet = require('gulp-dotnet');
var pump = require('pump');


gulp.task('default', function () {
    // place code for your default task here
});

var paths = {};
paths.webroot = "wwwroot/";
paths.npmSrc = "\./node_modules/";
paths.npmLibs = paths.webroot + "lib/npmlibs/";

paths.scripts =  ['Scripts/**/*.js', 'Scripts/**/*.ts', 'Scripts/**/*.map', 'Scripts/**/*.tsx'];
var tsProject = tsc.createProject("Scripts/tsconfig.json");

gulp.task("copy-deps:systemjs", function () {
    return gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*', { base: paths.npmSrc + '/systemjs/dist/'})
         .pipe(gulp.dest(paths.npmLibs + '/systemjs/'));
});


gulp.task("clean", ["clean:js", "clean:dotnet"]);

gulp.task('clean:js', function (cb) {
    return del(['wwwroot/scripts/**/*']);
});

gulp.task('clean:dotnet', function (cb) {
    return del(['bin/**/*']);
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

    var tasks = [
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

gulp.task("copy-deps:jquery", function () {
    return gulp.src(paths.npmSrc + '/jquery/dist/**/*.*', { base: paths.npmSrc + '/jquery/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/jquery/dist/'));
});

gulp.task("copy-deps:bootstrap", function () {
    return gulp.src(paths.npmSrc + '/bootstrap/dist/**/*.*', { base: paths.npmSrc + '/bootstrap/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/bootstrap/dist/'));
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
gulp.task("copy-deps", ["copy-deps:jquery", "copy-deps:bootstrap", "copy-deps:rxjs", 'copy-deps:angular', 'copy-deps:react', 'copy-deps:systemjs', 'copy-deps:zonejs', 'copy-deps:reflect-metadata']);


gulp.task("build:dotnet", ["clean:dotnet"], function (cb) {
    Dotnet.build({ cwd: './' }, cb);
});

gulp.task('build:js', ['clean:js'], function () { 
    /*pump([
        gulp.src(paths.scripts),
        ,        
        gulp.dest('wwwroot/scripts')
    ],
        cb
    );*/
    gutil.log('build: js');
    return gulp.src(paths.scripts)
            .pipe(tsProject()).js
            .pipe(gulp.dest('wwwroot/app'));
});


gulp.task("build", ["build:dotnet", 'copy-deps', "build:js"]);