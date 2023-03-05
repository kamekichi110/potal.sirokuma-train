Push.create('しろくま鉄道ポータル(system)', {
    body: '現在、お知らせはありません',
    icon: './icon.png',
    timeout: 6000, // 通知が消えるタイミング
    vibrate: [250, 100, 150], // モバイル端末でのバイブレーション秒数
    onClick: function() {
    // 通知がクリックされた場合の設定
    window.location = "https://kamekichi110.github.io/potal.sirokuma-train/ja-JP/notice/";
    }
    });