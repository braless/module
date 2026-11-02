var objc = JSON.parse($response.body);

// 关闭广告

// 永久会员
objc.membership = {
    status: "is_vip",
    vip_expires_at: "2099-12-31",
    is_permanent: true
};

objc.status = null;
objc.order_id = null;
$done({body: JSON.stringify(objc)});
