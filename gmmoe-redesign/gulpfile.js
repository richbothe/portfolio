var gulp = require( 'gulp' );

// Plugins
var del = require( 'del' );
var sass = require( 'gulp-sass' );
var cleanCSS = require( 'gulp-clean-css' );
var sourcemaps = require( 'gulp-sourcemaps' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var rename = require( 'gulp-rename' );
var browserSync = require( 'browser-sync' ).create();
var reload = browserSync.reload;

// Delete the contents of the dist directory
gulp.task( 'clean', function( done ) {
	return del( [
		'dist/css/*.css',
		'dist/js/*.js',
		'dist/*.html' 
	], done );
} );

// compilie sass
gulp.task( 'sass', function() {
	return gulp.src( [
		'src/scss/**/*.scss',
		'src/vendor/css/*.css'
	] )
    	.pipe( sass() )
    	.pipe( gulp.dest( 'dist/css' ) )
    	.pipe( sourcemaps.init() )
    	.pipe( cleanCSS() )
    	.pipe( sourcemaps.write() )
    	.pipe( rename( 'styles.min.css' ) )
    	.pipe( gulp.dest( 'dist/css' ) );
} );

// concatenate & minify js
gulp.task( 'scripts', function() {
	return gulp.src( [
		'./node_modules/jquery/dist/jquery.js',
		'./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
		'./node_modules/dropkickjs/lib/polyfills/*.js',
		'./node_modules/dropkickjs/lib/dropkick.js',
		'./node_modules/snapsvg/dist/snap.svg-min.js',
		'./node_modules/slick-carousel/slick/slick.min.js',
		'src/js/*.js'
	] )
		.pipe( concat( 'main.js' ) )
		.pipe( gulp.dest( 'dist/js' ) )
		.pipe( rename( 'main.min.js' ) )
		.pipe( uglify() )
		.pipe( gulp.dest( 'dist/js' ) );
} );

// copy fonts
gulp.task( 'fonts', function() {
	return gulp.src( 'src/fonts/**/*.{ttf,woff,woff2,eot,svg}' )
		.pipe( gulp.dest( './dist/fonts' ) );
} );

// copy images
gulp.task( 'images', function() {
	return gulp.src( 'src/img/**/*' )
		.pipe( gulp.dest( './dist/img' ) );
} );

// copy html
gulp.task( 'html', function() {
	return gulp.src( 'src/*.html' )
		.pipe( gulp.dest( 'dist' ) );
} );

// Browser-sync
gulp.task( 'browserSync', function() {
    browserSync.init( {
        server: {
           baseDir: 'dist'
        }
    } );
} );

// watch for changes
gulp.task( 'watch', [ 'clean', 'sass', 'scripts', 'fonts', 'images', 'html', 'browserSync' ], function() {
	gulp.watch( 'src/scss/**/*.scss', [ 'sass' ] ).on( 'change', reload );
	gulp.watch( 'src/js/**/*.js', [ 'scripts' ] ).on( 'change', reload );
	gulp.watch( 'src/*.html', [ 'html' ] ).on( 'change', reload );
} );

// Default task
gulp.task( 'default', [ 'clean', 'watch' ] );