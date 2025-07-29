# PowerOfAum - Module H: Admin Metrics Dashboard Stub

This repository is part of the tech assessment for the Contract Web Developer role at PowerOfAum.com.

## 🧘‍♀️ About PowerOfAum.com
PowerOfAum is a private SaaS engine for spiritual platforms, handling subscriptions, one-time add-ons, referral tracking, webhook processing, and admin analytics.

## 🔧 Assessment Task
**Module H: Admin Metrics Dashboard Stub**

Implement a backend module exposing the following endpoints:

### 📊 GET `/api/platform-commission-metrics`
**Mock Response:**
```json
{
  "totalGrossRevenueCents": 15000000,
  "totalCommissionCents": 3000000
}
```

### 📊 GET `/api/overall-metrics`
**Mock Response:**
```json
{
  "totalUsers": 1200,
  "totalSubscriptions": 800,
  "totalAddOnSales": 150,
  "totalProTrials": 200
}
```
---

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node index.js
   ```
3. Access endpoints:
   - [http://localhost:3000/api/platform-commission-metrics](http://localhost:3000/api/platform-commission-metrics)
   - [http://localhost:3000/api/overall-metrics](http://localhost:3000/api/overall-metrics)
   - [http://localhost:3000/](http://localhost:3000/) (optional HTML stub)

---

For any questions, please contact me.