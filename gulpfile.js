// Init
var gulp = require("gulp"),
    tslint = require("gulp-tslint"),
    protractor = require('gulp-protractor').protractor;

/* Task to verify that linting is ok for TS files during development  */
gulp.task("tslint", function(){
    gulp.src("./features/**/*.ts")
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report({
            summarizeFailureOutput: true
        }));
});

/* Task to execute tests with Protractor(include typescripted tests on CucumberJS) */
gulp.task('protractor', function(callback) {
    gulp
        .src(["./features/**/*.feature"])
        .pipe(protractor({
            'configFile': 'protractor.conf.js'
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});

/* Default task for Gulpfile -> Execute Tests */
gulp.task('default',['protractor']);