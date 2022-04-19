import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import Layout from "./Shared/Layout";
import { Inertia } from "@inertiajs/inertia";
import NProgress from "nprogress";
import Toaster from "@meforma/vue-toaster";
window.$ = window.jQuery = require('jquery');

createInertiaApp({
    resolve: async (name) => {
        const page = (await import(`./Pages/${name}`)).default;
        page.layout ??= Layout;

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(Toaster)
            .mount(el);
    },
});

InertiaProgress.init({
    showSpinner: true,
});

Inertia.on("start", () => NProgress.start());
Inertia.on("finish", () => NProgress.done());
