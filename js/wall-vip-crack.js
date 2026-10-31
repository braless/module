var objc = JSON.parse($response.body);

// 关闭广告
objc.policy.ios_ads_enabled = false;

// 永久会员
objc.membership = {
    status: "vip",
    vip_expires_at: null,
    is_permanent: true
};

// 取消每日、每周限制
objc.policy.daily_limit = -1;
objc.policy.weekly_limit = -1;
objc.policy.reward_ad_count = 0;

// 永久额度
objc.quota.daily_remaining = -1;
objc.quota.daily_used = 0;
objc.quota.daily_reserved = 0;
objc.quota.remaining = -1;
objc.quota.used = 0;
objc.quota.reserved = 0;

// 清空任务记录
objc.quota.pending_ids = [];
objc.quota.completed_ids = [];

$done({body: JSON.stringify(objc)});
