const manager = require("./jeramy_SubscriptionManager.js");

//shows a uses name, plan, status and start date
console.log(manager.description);
console.log(manager.getUserSummary(0));
console.log(manager.getUserSummary(2));

//shows a plan's price, screens and quality
console.log(manager.getPlanDetails(1));

//checks if a user can stream on a number of screens
console.log(manager.canStream(0, 2));
console.log(manager.canStream(1, 2));
console.log(manager.canStream(2, 1));

//checks if a user will see adds
console.log(manager.showsAds(0));
console.log(manager.showsAds(1));

