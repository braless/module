
var objc = JSON.parse($response.body);
objc.paid_mode_enabled = true;
objc.ads_enabled = false;
objc.ios_preview_static_only = true;
var text = JSON.stringify(objc);
// $notification.post(
//     "开启会员",
//     "",
//     text
// );
$done({
    body: text
});
