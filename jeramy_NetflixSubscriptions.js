

const plans = [
  { id: 1, name: "Basic", price: 9.9, maxScreens: 1, resolution: "720p", hasAds: false },
  { id: 2, name: "Standard", price: 15.9, maxScreens: 2, resolution: "1080p", hasAds: true },
  { id: 3, name: "Premium", price: 21.9, maxScreens: 4, resolution: "4K", hasAds: false }
];

const users = [
  { id: 101, name: "Aisha", planId: 2, startDate: "2026-01-15", status: "active" },
  { id: 102, name: "Daniel", planId: 1, startDate: "2026-03-31", status: "active" },
  { id: 103, name: "Mei Ling", planId: 3, startDate: "2025-11-05", status: "cancelled" },
  { id: 104, name: "Ravi", planId: 2, startDate: "2026-02-28", status: "active" }
];



module.exports = {
  description: "Streaming subscription manager",

  //shows a users name, plan, status and start date
  getUserSummary(userIndex) {
    let user = users[userIndex];
    if (!user) return "User not found";

    let plan = plans[user.planId - 1];
    return user.name + " | " + plan.name + " plan | " + user.status + " | since " + user.startDate;
  },

  //shows a plan's price, screens and quality 
    getPlanDetails(planIndex) {
    let plan = plans[planIndex];
    if (!plan) return "Plan not found";

    return plan.name + ": $" + plan.price + " per month, " + plan.maxScreens + " screen(s), " + plan.resolution;
  },

  //checks if a user can stream on a number of screens
    canStream(userIndex, screens) {
    let user = users[userIndex];
    if (!user) return "User not found";
    if (user.status == "cancelled") return user.name + " cannot stream: subscription is cancelled";

    let plan = plans[user.planId - 1];
    if (screens > plan.maxScreens) return user.name + " cannot stream: " + plan.name + " allows only " + plan.maxScreens + " screen(s)";
    else return user.name + " can stream in " + plan.resolution + " on " + screens + " screen(s)";
  },

  //checks if a user will see adds
  showsAds(userIndex) {
    let user = users[userIndex];
    if (!user) return "User not found";

    let plan = plans[user.planId - 1];
    if (plan.hasAds == true) return user.name + " will see ads";
    else return user.name + " will not see ads";
  },

  //changes users plans
    changePlan(userIndex, newPlanId) {
    let user = users[userIndex];
    let newPlan = plans[newPlanId - 1];
    if (!user) return "User not found";
    if (!newPlan) return "Plan not found";
    if (user.status == "cancelled") return "Please reactivate the subscription first";
    if (user.planId == newPlanId) return user.name + " is already on this plan";

    let oldPlan = plans[user.planId - 1];
    user.planId = newPlanId;
    if (newPlan.price > oldPlan.price) return user.name + " upgraded from " + oldPlan.name + " to " + newPlan.name;
    else return user.name + " downgraded from " + oldPlan.name + " to " + newPlan.name;
  },
  //cancels users subscriptions
    cancelSubscription(userIndex) {
    let user = users[userIndex];
    if (!user) return "User not found";
    if (user.status == "cancelled") return user.name + " is already cancelled";

    user.status = "cancelled";
    return user.name + "'s subscription has been cancelled";
  },
  
  //reactivates users subscriptions
    reactivateSubscription(userIndex, planId, newStartDate) {
    let user = users[userIndex];
    let plan = plans[planId - 1];
    if (!user) return "User not found";
    if (!plan) return "Plan not found";
    if (user.status == "active") return user.name + " is already active";

    user.status = "active";
    user.planId = planId;
    user.startDate = newStartDate;
    return user.name + " reactivated on the " + plan.name + " plan";
  }
};