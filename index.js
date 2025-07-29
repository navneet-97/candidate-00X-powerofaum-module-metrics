const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/platform-commission-metrics", (req, res) => {
  res.json({
    totalGrossRevenueCents: 15000000,
    totalCommissionCents: 3000000,
  });
});

app.get("/api/overall-metrics", (req, res) => {
  res.json({
    totalUsers: 1200,
    totalSubscriptions: 800,
    totalAddOnSales: 150,
    totalProTrials: 200,
  });
});

app.get("/", (req, res) => {
  res.send(`
    <h1>Admin Metrics Dashboard (Stub)</h1>
    <ul>
      <li>GET <code>/api/platform-commission-metrics</code></li>
      <li>GET <code>/api/overall-metrics</code></li>
    </ul>
  `);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});