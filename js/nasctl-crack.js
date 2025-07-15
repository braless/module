//var req = $request.body;
var app_user_id = "$RCAnonymousID:074797887abf4e0bab67da1fcc28e3d4";//req.app_user_id;
var obj = {
    "request_date": "2024-08-16T01:00:29Z",
    "request_date_ms": 1723770029815,
    "subscriber": {
        "entitlements": {
            "nasctl_annually": {
                "expires_date": "2099-02-12T01:48:23Z",
                "grace_period_expires_date": null,
                "product_identifier": "nasctl_annually",
                "purchase_date": "2024-02-12T01:48:23Z"
            }
        },
        "first_seen": "2023-09-30T23:33:29Z",
        "last_seen": "2024-08-16T00:53:52Z",
        "management_url": "https://apps.apple.com/account/subscriptions",
        "non_subscriptions": {},
        "original_app_user_id": app_user_id,
        "original_application_version": "12",
        "original_purchase_date": "2023-07-11T06:12:46Z",
        "other_purchases": {},
        "subscriptions": {
            "nasctl_annually": {
                "auto_resume_date": null,
                "billing_issues_detected_at": null,
                "expires_date": "2099-02-12T01:48:23Z",
                "grace_period_expires_date": null,
                "is_sandbox": false,
                "original_purchase_date": "2000-02-12T01:48:24Z",
                "ownership_type": "PURCHASED",
                "period_type": "normal",
                "purchase_date": "2024-02-12T01:48:23Z",
                "refunded_at": null,
                "store": "app_store",
                "store_transaction_id": "410001841512563",
                "unsubscribe_detected_at": "2034-06-07T16:34:13Z"
            }
        }
    }
}
var headers={
    "x-revenuecat-etag":"76b55ffe296f2f81",
    ":status":"304",
    "x-signature":"JfdFtzdsRBb3bg9XZ/wla0YIVyo7pzetLZdIHvakKL8iTgAAK3vrCHvD+hO5yfc4t/6/+UfCwM9Vv2OnTrT3K7Y4DTwtbwcZA3QQkhZH0ZLGRunTRlJxl9UZ/yKX0ByUYrevCQHkX9bM4GVYFw5J1aM2slxtg8hzZY2apQXV1MuEWsUdr4bSbgulElxst2XwKXhjZctiNvfTegu0ICeq5T1HexZyYCpgUbQ3GsniLtHQDeYB\n" +
        "x-amzn-trace-id: Root=1-66beb13f-51436b3550faa93f46c59faa",
    "x-revenuecat-request-time":"1723773247969",
    "server":"envoy",
    "x-request-id":"fc46e927-3ca2-4cd0-95d0-e6c9cded49c7"
}
$done({body: JSON.stringify(obj),headers:headers});