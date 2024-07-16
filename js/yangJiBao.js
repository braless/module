/*******************************

 脚本名称: 223网校——解锁视频观看
 下载地址：https://is.gd/63j7aM
 软件版本：3.7.1
 脚本作者：彭于晏💞
 更新时间：2023-8-18
 问题反馈：QQ+89996462
 QQ会员群：779392027💞
 TG反馈群：https://t.me/plus8889
 TG频道群：https://t.me/py996
 使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

 更多资源请微信搜索小程序【屌丝博客】

 *******************************
 [rewrite_local]

 ^http[s]?:\/\/license.autotouch.net\/license?v=4 script-response-body https://github.com/braless/module/raw/main/js/yangJiBao.js

 [mitm] 

 hostname = api.233.com

 *******************************/


var body = {
    "code": 200,
    "message": "SUCCESS",
    "timestamp": 1721138195,
    "data": {
        "has_fund_hold": true,
        "nickname": "神经蛙",
        "has_fund_option": true,
        "open_free_vip_sign": true,
        "is_pay": true,
        "medal": [],
        "is_app_user": true,
        "id": 202691,
        "gender": 1,
        "token": "9aaf7fde-976b-4d7c-b3ea-f1f12374583a",
        "roles": [],
        "phone": "",
        "subscribe_status": 1,
        "vip_expiry_date": "2999-03-20",
        "avatar": "http:\/\/imgcdn.yangjibao.com\/avatar\/316a5\/x8vSAyTPtjmgps9kx8HmzcyUOM.jpeg",
        "vip_label": true,
        "created_at": "2021-08-04 12:37:44",
        "has_stock_hold": false,
        "has_stock_option": false,
        "show_bkxh": false,
        "is_visitor": true
    }
}

$done({body});