var objc = JSON.parse($response.body);

// 关闭广告

// 永久会员
objc.membership = {
    status: "is_vip",
    vip_expires_at: "2066-11-01T00:00:00+08:00",
    is_permanent: true
};

objc.status = null;
objc.order_id = null;
$done({body: JSON.stringify(objc)});
