const mix = require("laravel-mix");
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/Frontend/app.js", "public/frontend/js")
    .js("resources/js/Backend/app.js", "public/backend/js")
    .vue()
    .sass("resources/sass/app.scss", "public/frontend/css")
    .sass("resources/sass/admin.scss", "public/backend/css")
    .options({
        processCssUrls: false,
    })
    .disableSuccessNotifications()
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "resources"),
            },
        },
    });

if (mix.inProduction()) {
    mix.version();
}
