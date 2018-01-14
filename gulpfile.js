var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./",
            index: "index.html"
        }
    });
});

gulp.task('html', function() {
    gulp.src('./*.html')
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('css', function() {
    gulp.src('./*.css')
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function() {
    gulp.watch('./*.html', ['html']);
    gulp.watch('./*.css', ['css']);
    
});

gulp.task('start', ['browser-sync', 'watch']);
