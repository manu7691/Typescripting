// Init
var gulp = require("gulp"),
    cucumber = require("gulp-cucumber"),
    gulpProtractorAngular = require('gulp-angular-protractor'),
    tslint = require("gulp-tslint");

/* Task to execute only cucumber with ts files */
gulp.task('cucumber', function() {
    gulp.src('*features/**/*')
        .pipe(cucumber({
        'compiler' : 'ts:ts-node/register',
        'emitErrors': true,
        'tags': '~@todo'
    }));
});

/* Task to execute tests with Protractor(include typescripted tests on CucumberJS) */
gulp.task('protractor', function(callback) {
    gulp
        .src(["./features/**/*.feature"])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});

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


/* Default task for Gulpfile -> Execute Tests */
gulp.task('default',['protractor']);