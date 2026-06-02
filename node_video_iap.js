var body = $response.body;
var obj = JSON.parse(body);

// Apple verifyReceipt response usually has a "status" field (0 means success)
// and a "receipt" field containing "in_app" array with purchases.
// Node Video checks specific product IDs.
// Common product IDs might be "com.shallwaystudio.nodevideo.pro.yearly" or "com.shallwaystudio.nodevideo.pro.lifetime".
// We inject a fake active subscription.

obj.status = 0;

if (!obj.receipt) {
    obj.receipt = {};
}

if (!obj.receipt.in_app) {
    obj.receipt.in_app = [];
}

// Thêm biên lai mua hàng giả mạo (Fake Receipt)
var fake_purchase = {
    "quantity": "1",
    "product_id": "com.shallwaystudio.nodevideo.pro.lifetime", 
    "transaction_id": "1000000000000000",
    "original_transaction_id": "1000000000000000",
    "purchase_date": "2023-01-01 00:00:00 Etc/GMT",
    "purchase_date_ms": "1672531200000",
    "purchase_date_pst": "2022-12-31 16:00:00 America/Los_Angeles",
    "original_purchase_date": "2023-01-01 00:00:00 Etc/GMT",
    "original_purchase_date_ms": "1672531200000",
    "original_purchase_date_pst": "2022-12-31 16:00:00 America/Los_Angeles",
    "expires_date": "2099-01-01 00:00:00 Etc/GMT",
    "expires_date_ms": "4070908800000",
    "expires_date_pst": "2098-12-31 16:00:00 America/Los_Angeles",
    "web_order_line_item_id": "100000000000000",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false"
};

// Nếu có in_app, xoá các item cũ và chèn item VIP giả vào
obj.receipt.in_app = [fake_purchase];

// Đối với auto-renewable subscriptions, Apple trả về mảng pending_renewal_info và latest_receipt_info
obj.latest_receipt_info = [fake_purchase];
obj.pending_renewal_info = [{
    "expiration_intent": "1",
    "auto_renew_status": "1",
    "is_in_billing_retry_period": "0",
    "product_id": "com.shallwaystudio.nodevideo.pro.lifetime",
    "original_transaction_id": "1000000000000000",
    "auto_renew_product_id": "com.shallwaystudio.nodevideo.pro.lifetime"
}];

$done({body: JSON.stringify(obj)});
