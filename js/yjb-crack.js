
var objc = JSON.parse($response.body)
objc.data.nickname = "超级SVIP";
objc.data.is_pay = true;
objc.data.open_free_vip_sign = true;
objc.data.subscribe_status = 0;
objc.data.vip_expiry_date = "2299-12-31"
objc.data.vip_label = true;
objc.data.created_at = "2020-01-01 01:01:01"
$done({body: JSON.stringify(objc)});