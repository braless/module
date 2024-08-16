var req = JSON.parse($request.body);
var app_user_id = req.app_user_id;
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

$done({body: JSON.stringify(obj)});