var objc = JSON.parse($response.body)
objc.paid_mode_enabled = false;
objc.ads_enabled = false
ojbc.ios_preview_static_only = true
$done({body: JSON.stringify(objc)});
