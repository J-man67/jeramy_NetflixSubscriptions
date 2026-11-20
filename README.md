# Assignment 1

# Netflix Subscription Manager

A Node.js module for managing Netflix users. It can look up user and plan details, check streaming limits and ads, and change, cancel or reactivate subscriptions.

## Setup

1. Save the module as `jeramy_SubscriptionManager.js` in the same folder as your app file.
2. No packages are needed, so there is no `npm install` step.
3. Import it in your app file:

```js
const manager = require("./jeramy_SubscriptionManager.js");
```

4. Run your app with:

```bash
node app.js
```

## Built-in data

| Plans (`planId`) | Name     | Price (per month) | Max screens | Resolution | Ads |
|------------------|----------|-------------------|-------------|------------|-----|
| 1                | Basic    | $9.9              | 1           | 720p       | No  |
| 2                | Standard | $15.9             | 2           | 1080p      | Yes |
| 3                | Premium  | $21.9             | 4           | 4K         | No  |

| `userIndex` | Name     | Plan     | Status    | Start date |
|-------------|----------|----------|-----------|------------|
| 0           | Aisha    | Standard | active    | 2026-01-15 |
| 1           | Daniel   | Basic    | active    | 2026-03-31 |
| 2           | Mei Ling | Premium  | cancelled | 2025-11-05 |
| 3           | Ravi     | Standard | active    | 2026-02-28 |

> **Note:** Users are looked up by their **position in the list** (`userIndex`, starting at 0), not by their user id.
> Changes are kept in memory only and are reset every time the program runs.

## Functions

All functions return a string message. If a user or plan does not exist, they return `"User not found"` or `"Plan not found"`.

### `description`
A text property (not a function) describing the module.

### `getUserSummary(userIndex)`
Shows a user's name, plan, status and start date.
- `userIndex` (number): position of the user, starting at 0.

```js
manager.getUserSummary(0); // "Aisha | Standard plan | active | since 2026-01-15"
```

### `getPlanDetails(planIndex)`
Shows a plan's price, number of screens and resolution.
- `planIndex` (number): position of the plan, starting at 0 (`0` = Basic, `1` = Standard, `2` = Premium).

```js
manager.getPlanDetails(1); // "Standard: $15.9 per month, 2 screen(s), 1080p"
```

### `canStream(userIndex, screens)`
Checks whether a user can stream on a given number of screens. Cancelled users cannot stream.
- `userIndex` (number): position of the user.
- `screens` (number): number of screens the user wants to use.

```js
manager.canStream(0, 2); // "Aisha can stream in 1080p on 2 screen(s)"
manager.canStream(1, 2); // "Daniel cannot stream: Basic allows only 1 screen(s)"
```

### `showsAds(userIndex)`
Checks whether a user will see ads on their plan.
- `userIndex` (number): position of the user.

```js
manager.showsAds(0); // "Aisha will see ads"
```

### `changePlan(userIndex, newPlanId)`
Upgrades or downgrades an active user's plan. Cancelled users must be reactivated first.
- `userIndex` (number): position of the user.
- `newPlanId` (number): the plan id to switch to (`1`, `2` or `3`).

```js
manager.changePlan(1, 3); // "Daniel upgraded from Basic to Premium"
manager.changePlan(0, 1); // "Aisha downgraded from Standard to Basic"
```

### `cancelSubscription(userIndex)`
Cancels a user's subscription.
- `userIndex` (number): position of the user.

```js
manager.cancelSubscription(3); // "Ravi's subscription has been cancelled"
```

### `reactivateSubscription(userIndex, planId, newStartDate)`
Reactivates a cancelled user on a chosen plan with a new start date.
- `userIndex` (number): position of the user.
- `planId` (number): the plan id to subscribe to (`1`, `2` or `3`).
- `newStartDate` (string): the new start date, e.g. `"2026-11-14"`.

```js
manager.reactivateSubscription(2, 2, "2026-11-14"); // "Mei Ling reactivated on the Standard plan"
```

## Example (`app.js`)

```js
const manager = require("./jeramy_SubscriptionManager.js");

console.log(manager.description);
console.log(manager.getUserSummary(0));
console.log(manager.getPlanDetails(1));
console.log(manager.canStream(1, 2));
console.log(manager.showsAds(0));
console.log(manager.changePlan(1, 3));
console.log(manager.cancelSubscription(2));
console.log(manager.reactivateSubscription(2, 2, "2026-11-14"));
console.log(manager.getUserSummary(2));
```

### Output

```
Netflix subscription manager
Aisha | Standard plan | active | since 2026-01-15
Standard: $15.9 per month, 2 screen(s), 1080p
Daniel cannot stream: Basic allows only 1 screen(s)
Aisha will see ads
Daniel upgraded from Basic to Premium
Mei Ling is already cancelled
Mei Ling reactivated on the Standard plan
Mei Ling | Standard plan | active | since 2026-11-14
```


## Declaration of AI Use

AI (Claude) was used to help find the Netflix website and to build up the mock data (plans and users) used in this Netflix subscription manager module.

## References

- Netflix. (2026). *Netflix*. https://www.netflix.com