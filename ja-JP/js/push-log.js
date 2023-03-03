Push.create('しろくま鉄道ポータル(system)', {
    body: 'ポータルバージョン(v1.2)',
    icon: 'icon.png',
    timeout: 8000, // 通知が消えるタイミング
    vibrate: [100, 100, 100], // モバイル端末でのバイブレーション秒数
    onClick: function() {
    // 通知がクリックされた場合の設定
    window.location.href = "https://kamekichi110.github.io/potal.sirokuma-train/ja-JP/";
    }
    });