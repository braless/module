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

 ^http[s]?:\/\/license.autotouch.net\/license?v=4 script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/233.js

 [mitm] 

 hostname = api.233.com

 *******************************/

var body = {"validated":true,"key":"KV66M9P3WJ","create_time":"2099-02-02 00:00:00"}
// $response.body.replace(/validated":\d/g,'validated":true')
$done({ body });