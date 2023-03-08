Push.create('しろくま鉄道ポータル:system', {
    body: '現在、お知らせはありません',
    icon: 'https://kamekichi110.github.io/potal.sirokuma-train/ja-JP/js/icon.png',
    timeout: 5000, // 通知が消えるタイミング
    vibrate: [250, 100, 150], // モバイル端末でのバイブレーション秒数
    onClick: function() {
    // 通知がクリックされた場合の設定
    window.location.href = "https://kamekichi110.github.io/potal.sirokuma-train/ja-JP/notice/";
    },
    onShow: function() {
        const audio = new Audio('https://kamekichi110.github.io/potal.sirokuma-train/ja-JP/js/notice.mp3');
        audio.play();
    }
    });