
//
// var body_ = {
//     "code": 200,
//     "message": "SUCCESS",
//     "timestamp": 1721138195,
//     "data": {
//         "has_fund_hold": true,
//         "nickname": "超级VIP",
//         "has_fund_option": true,
//         "open_free_vip_sign": true,
//         "is_pay": true,
//         "medal": [],
//         "is_app_user": true,
//         "id": 202691,
//         "gender": 1,
//         "token": "9aaf7fde-976b-4d7c-b3ea-f1f12374583a",
//         "roles": [],
//         "phone": "",
//         "subscribe_status": 0,
//         "vip_expiry_date": "2999-99-20",
//         "avatar": "http:\/\/imgcdn.yangjibao.com\/avatar\/316a5\/x8vSAyTPtjmgps9kx8HmzcyUOM.jpeg",
//         "vip_label": true,
//         "created_at": "2021-08-04 12:37:44",
//         "has_stock_hold": false,
//         "has_stock_option": false,
//         "show_bkxh": false,
//         "is_visitor": true
//     }
// }
    var objc = JSON.parse($response.body)
    objc.data.nickname = "超级SVIP";
    objc.data.is_pay = true;
    objc.data.open_free_vip_sign = true;
    objc.data.subscribe_status = 0;
    objc.data.vip_expiry_date = "2099-12-31"
    objc.data.vip_label = true;
    objc.data.created_at = "2020-01-01 01:01:01"
    $done({body: JSON.stringify(objc)});