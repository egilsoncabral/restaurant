class IndexController {
    /**
    * @description Register the service worker on navigator
    */
    static registerServiceWorker() {
        if (!navigator.serviceWorker) return;

        navigator.serviceWorker.register('/sw.js').then(function (reg) {
            if (!navigator.serviceWorker.controller) {
                return;
            }

        });
    };
};
