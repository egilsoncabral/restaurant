class IndexController {
    static registerServiceWorker() {
        if (!navigator.serviceWorker) return;

        navigator.serviceWorker.register('/sw.js').then(function (reg) {
            if (!navigator.serviceWorker.controller) {
                return;
            }

        });
    };
};
