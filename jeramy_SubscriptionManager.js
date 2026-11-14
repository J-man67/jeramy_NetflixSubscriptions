

const plans = [
  { id: 1, name: "Basic", price: 9.9, maxScreens: 1, resolution: "720p", hasAds: false },
  { id: 2, name: "Standard", price: 15.9, maxScreens: 2, resolution: "1080p", hasAds: false },
  { id: 3, name: "Premium", price: 21.9, maxScreens: 4, resolution: "4K", hasAds: false }
];

const users = [
  { id: 101, name: "Aisha", planId: 2, startDate: "2026-01-15", status: "active" },
  { id: 102, name: "Daniel", planId: 1, startDate: "2026-03-31", status: "active" },
  { id: 103, name: "Mei Ling", planId: 3, startDate: "2025-11-05", status: "cancelled" },
  { id: 104, name: "Ravi", planId: 2, startDate: "2026-02-28", status: "active" }
];

module.exports = {
    // Explain what function A does
    functionA() {
        return 1+2;
    },
    // Explain what function B does
    functionB() {
        console.log("Hello function B");
    }
}