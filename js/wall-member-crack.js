var objc = JSON.parse($response.body);

// 关闭广告

// 永久会员
objc.membership = {
    status: "vip",
    vip_expires_at: "2066-11-01T00:00:00+08:00",
    is_permanent: true
};

objc.status = null;
objc.order_id = null;
//发送通知
// $notification.post(
//     "ios_membership_order_status",
//     "",
//     JSON.stringify(objc)
// );
$done({body: JSON.stringify(objc)});
