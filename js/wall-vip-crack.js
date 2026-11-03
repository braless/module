var objc = JSON.parse($response.body);
//绑定会员
objc.account.enabled = true;
objc.account.bound = true
// 关闭广告
objc.policy.ios_ads_enabled = false;

// 永久会员
objc.membership = {
    status: "vip",
    vip_expires_at: "2066-11-01T00:00:00+08:00",
    is_permanent: true
};

// 取消每日、每周限制
objc.policy.daily_limit = 100;
objc.policy.weekly_limit = 100;
objc.policy.reward_ad_count = 100;

// 永久额度
objc.quota.daily_remaining = 100;
objc.quota.daily_used = 0;
objc.quota.daily_reserved = 0;
// objc.quota.daily_next_reset = "2016-11-01T00:00:00+08:00";
// objc.quota.next_reset = "2016-11-01T00:00:00+08:00";
objc.quota.remaining = 100;
objc.quota.used = 1;
objc.quota.reserved = 0;

// 清空任务记录
objc.quota.pending_ids = [];
objc.quota.completed_ids = [760,735,496];
//发送通知
$notification.post(
    "注入会员信息",
    "",
    JSON.stringify(objc)
);
$done({body: JSON.stringify(objc)});
