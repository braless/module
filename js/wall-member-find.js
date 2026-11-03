
var objc = JSON.parse($response.body);
objc.ok = true;
objc.error = null;
var text = JSON.stringify(objc);
$done({
    body: text
});
