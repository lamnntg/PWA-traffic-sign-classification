self.addEventListener('install', function (event) {
    console.log('SW installed');
    event.waitUntil(
        caches.open('static')
            .then(function (cache) {
                cache.addAll([
                    '/',
                    '/index.html',
                    '/camera.html',
                    '/reviewer.html',
                    '/map.html',
                    '/trafficsigns.html',
                    '/app.js',
                    '/js/freelancer.js',
                    '/js/freelancer.min.js',
                    '/css/freelancer.css',
                    '/css/freelancer.min.css',
                    '/vendor/bootstrap/css/bootstrap.min.css',
                    '/vendor/fontawesome-free/css/all.min.css',
                    '/vendor/magnific-popup/magnific-popup.css',
                    'https://fonts.googleapis.com/css?family=Montserrat:400,700',

                    '/vendor/bootstrap/css/bootstrap.css',
                    '/vendor/bootstrap/css/bootstrap.css.map',
                    '/vendor/bootstrap/css/bootstrap.min.css.map',
                    '/vendor/bootstrap/css/bootstrap-grid.css',

                    '/img/icon96.png', '/img/icon128.png','/img/icon256.png',
                    '/img/icon512.png', '/img/profile.png', '/img/portfolio/cake.png',
                    '/img/portfolio/cabin.png', '/img/portfolio/circus.png', '/img/portfolio/pavement.png',
                    '/img/portfolio/submarine.png', '/img/portfolio/row.png', '/img/portfolio/safe.png',
                    '/img/portfolio/game.png', '/img/portfolio/biconly.png',
                    '/img/portfolio/2m.png', '/img/portfolio/35m.png', '/img/portfolio/48h.png',
                    '/img/portfolio/48m.png', '/img/portfolio/52m.png', '/img/portfolio/60kph.png',
                    '/img/portfolio/110m.png', '/img/portfolio/adj.png', '/img/portfolio/adv.png',
                    '/img/portfolio/advex.png', '/img/portfolio/ah.png', '/img/portfolio/airplane.png',
                    '/img/portfolio/allow.png', '/img/portfolio/alltraffic.png', '/img/portfolio/altrail.png',
                    '/img/portfolio/altrout.png', '/img/portfolio/animal.png', '/img/portfolio/approach.png',
                    '/img/portfolio/approachmerg.png', '/img/portfolio/approachside.png', '/img/portfolio/arrows.png',
                    '/img/portfolio/bewarechild.png', '/img/portfolio/bewareped.png', '/img/portfolio/bewarepwd.png',
                    '/img/portfolio/bikelane.png', '/img/portfolio/bridge.png', '/img/portfolio/brokensolid.png',
                    '/img/portfolio/brokenyellow.png', '/img/portfolio/buslane.png', '/img/portfolio/buslaneline.png',
                    '/img/portfolio/buspuj.png', '/img/portfolio/busstop.png', '/img/portfolio/centerline.png',
                    '/img/portfolio/checkbrakes.png', '/img/portfolio/chevron.png', '/img/portfolio/chevy.png',
                    '/img/portfolio/continuity.png', '/img/portfolio/curbs.png',

                    
                ]);
            })
    );
});



self.addEventListener('activate', function (event) {
    console.log('SW activated');
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (res) {
                if (res) {
                    return res;
                } else {
                    return fetch(event.request);
                }
            })
    );
});
