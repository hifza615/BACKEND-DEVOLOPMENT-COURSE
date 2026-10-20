function prepareOrder(callback) {
    console.log("Order preparation started...");

    setTimeout(function () {
        console.log("Order preparation completed!");
        callback();
    }, 1000);
}

function packOrder(callback) {
    console.log("Order packing started...");

    setTimeout(function () {
        console.log("Order packing completed!");
        callback();
    }, 1000);
}

function notifyCustomer() {
    console.log("Customer notification started...");

    setTimeout(function () {
        console.log("Customer has been notified!");
    }, 1000);
}

// Version 1: Nested callbacks (Callback Hell)
console.log("=== Callback Version ===");

prepareOrder(function () {
    packOrder(function () {
        notifyCustomer();
    });
});

// Version 2: Promise-based approach
function prepareOrderPromise() {
    return new Promise(function (resolve) {
        console.log("Order preparation started...");

        setTimeout(function () {
            console.log("Order preparation completed!");
            resolve();
        }, 1000);
    });
}

function packOrderPromise() {
    return new Promise(function (resolve) {
        console.log("Order packing started...");

        setTimeout(function () {
            console.log("Order packing completed!");
            resolve();
        }, 1000);
    });
}

function notifyCustomerPromise() {
    return new Promise(function (resolve) {
        console.log("Customer notification started...");

        setTimeout(function () {
            console.log("Customer has been notified!");
            resolve();
        }, 1000);
    });
}

console.log("=== Promise Version ===");

prepareOrderPromise()
    .then(function () {
        return packOrderPromise();
    })
    .then(function () {
        return notifyCustomerPromise();
    })
    .then(function () {
        console.log("Order workflow completed!");
    });

// Callback version uses nested functions, while Promise chaining
// makes the sequence easier to read and maintain.