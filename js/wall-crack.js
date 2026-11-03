var objc = JSON.parse($response.body)
objc.paid_mode_enabled = false;
objc.ads_enabled = false
ojbc.ios_preview_static_only = true
//发送通知
$notification.post(
    "通用配置",
    "",
    JSON.stringify(objc)
);
$done({body: JSON.stringify(objc)});
