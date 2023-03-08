let baseURL = 'https://kamekichi110.github.io/potal.sirokuma-train/ja-JP/';

self.addEventListener('push', event => {
    let json = event.data.json();

    baseURL = json.data.url;

    event.waitUntil(
        self.registration.showNotification(json.notification.title, {
            'body': json.notification.body,
            'tag': 'request',
            'actions': JSON.parse(json.data.action)
        })
    );
});

self.addEventListener('notificationclick', event => {
    if (event.action === 'select-a') {
        self.clients.openWindow('https://kamekichi110.github.io/potal.sirokuma-train/ja-JP/');
    } else if (event.action === 'select-b') {
        self.clients.openWindow('https://kamekichi110.github.io/potal.sirokuma-train/ja-JP/photo');
    } else {
        self.clients.openWindow(baseURL);
    }

    event.notification.close();
});