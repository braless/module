let url = $request.url;

url = url.replace(
    /([?&])wxid=[^&]*/,
    "$1wxid=wxid_io6mahhnwuzj22"
);

$notification.post(
    "Shadowrocket",
    "URL Rewrite",
    url
);

$done({ url });
