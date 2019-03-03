const { watch } = require('gulp');
const browserSync = require('browser-sync').create();

function reload(done) {
    browserSync.reload();
    done();
}

function watchFiles() {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html'
        }
    });

    watch('./*.html', reload);
    watch('./*.css', reload);
}

exports.watch = watchFiles;
