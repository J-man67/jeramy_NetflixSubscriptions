const manager = require("./jeramy_SubscriptionManager.js");

console.log(manager.description);
console.log(manager.getUserSummary(0));
console.log(manager.getUserSummary(2));


console.log(manager.getPlanDetails(1));


console.log(manager.canStream(0, 2));
console.log(manager.canStream(1, 2));
console.log(manager.canStream(2, 1));

