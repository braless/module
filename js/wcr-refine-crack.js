let url = $request.url;

if (url.includes("wcrefine.iosrxwy.com/api.php") &&
    url.includes("action=update")) {
    url = url.replace(
        /([?&])wxid=[^&]*/,
        "$1wxid=wxid_io6mahhnwuzj22"
    );
}

$done({url});
