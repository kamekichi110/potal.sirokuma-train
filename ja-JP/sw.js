
// インストール
self.addEventListener('install', function (e) {
    console.info('install', e);
    });

    // アクティベート
    self.addEventListener('activate', function (e) {
        console.info('activate', e);
        });

        // フェッチ
        self.addEventListener('fetch', function (e) {
            console.info('fetch', e);
            });
            