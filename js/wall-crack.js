$notification.post(
    "Shadowrocket",
    "URL Rewrite",
    "Anymore"
);
var objc = JSON.parse($response.body);
objc.paid_mode_enabled = true;
objc.ads_enabled = false;
ojbc.ios_preview_static_only = true ;

//发送通知
var text = JSON.stringify(objc);
$notification.post(
    "Shadowrocket",
    "URL Rewrite",
    text
);
$done({body: JSON.stringify(objc)});
