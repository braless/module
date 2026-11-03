var objc = JSON.parse($response.body);

// 关闭广告
objc.policy.ios_ads_enabled = false;

// 永久会员
objc.membership = {
    status: "is_vip",
    vip_expires_at: "2066-11-01T00:00:00+08:00",
    is_permanent: true
};

// 取消每日、每周限制
objc.policy.daily_limit = 100;
objc.policy.weekly_limit = 100;
objc.policy.reward_ad_count = 100;

// 永久额度
objc.quota.daily_remaining = 1000;
objc.quota.daily_used = 0;
objc.quota.daily_reserved = 1000;
objc.quota.daily_next_reset = "2016-11-01T00:00:00+08:00";
objc.quota.next_reset = "2016-11-01T00:00:00+08:00";
objc.quota.remaining = 1000;
objc.quota.used = 0;
objc.quota.reserved = 100;

// 清空任务记录
objc.quota.pending_ids = [];
objc.quota.completed_ids = [];
//发送通知
$notification.post(
    "ios_access",
    "",
    JSON.stringify(objc)
);
$done({body: JSON.stringify(objc)});
