function push() {
    push.Permission.request();
    Push.create('ページ詳細', {
        body: 'バージョン1.2,最終更新:2023/03/04',
        icon: 'icon.png',
        timeout: 8000, // 通知が消えるタイミング
        vibrate: [100, 100, 100], // モバイル端末でのバイブレーション秒数
        onClick: function() {
        // 通知がクリックされた場合の設定
        window.location.href = "https://kamekichi110.github.io/potal.sirokuma-train/ja-JP/";
        }
        });
        Push.create('送信元', {
            body: 'page id:BD78ac4,管理者:sirokuma2468',
            icon: 'icon.png',
            timeout: 8000, // 通知が消えるタイミング
            vibrate: [100, 100, 100], // モバイル端末でのバイブレーション秒数
            onClick: function() {
            // 通知がクリックされた場合の設定
            console.log(this);
            }
            });
            Push.create('お知らせ', {
                body: 'お知らせはありません。',
                icon: 'icon.png',
                timeout: 8000, // 通知が消えるタイミング
                vibrate: [100, 100, 100], // モバイル端末でのバイブレーション秒数
                onClick: function() {
                // 通知がクリックされた場合の設定
                console.log(this);
                }
                });
}