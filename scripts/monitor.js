/**
 * System Monitoring Script
 * Supports both production and development modes
 * AI features available optionally (experimental)
 */

const ENV = process.env.NODE_ENV || "production";
const ENABLE_AI_MONITORING = process.env.AI_MONITORING === "true"; // Feature flag

// ✅ Stable production & development configuration
const monitorConfig = {
  production: {
    interval: 60000,
    alertThreshold: 80,
    debugMode: false,
  },
  development: {
    interval: 5000,
    alertThreshold: 90,
    debugMode: true,
    verboseLogging: true,
  },
};

const config = monitorConfig[ENV];

console.log("=================================");
console.log("DevOps Simulator - Monitor");
console.log(`Environment: ${ENV}`);
console.log(`Debug: ${config.debugMode ? "ENABLED" : "DISABLED"}`);
console.log("AI Monitoring:", ENABLE_AI_MONITORING ? "ENABLED" : "DISABLED");
console.log("=================================");

// ✅ Standard system health check (Production-safe)
function checkSystemHealth() {
  const timestamp = new Date().toISOString();

  if (config.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }

  console.log("✓ CPU usage: Normal");
  console.log("✓ Memory usage: Normal");
  console.log("✓ Disk space: Adequate");

  if (config.debugMode) {
    console.log("✓ Hot reload: Active");
    console.log("✓ Debug port: 9229");
  }

  console.log("System Status: HEALTHY");

  // ✅ AI predictive monitoring (optional/experimental)
  if (ENABLE_AI_MONITORING) {
    runAIPredictiveMonitoring();
  }
}

// ⚠ Experimental AI code (Only runs when feature flag enabled)
function runAIPredictiveMonitoring() {
  console.log("\n🤖 AI Prediction Engine (Experimental)");
  console.log("Analyzing patterns...");

  const prediction = {
    cpu: Math.random() * 100,
    memory: Math.random() * 100,
    traffic: Math.random() * 1000,
    confidence: (Math.random() * 30 + 70).toFixed(2),
  };

  console.log(
    `📊 Predicted (next 5min): CPU=${prediction.cpu.toFixed(
      2
    )}% | Memory=${prediction.memory.toFixed(
      2
    )}% | Traffic=${prediction.traffic.toFixed(0)} req/s | Confidence=${
      prediction.confidence
    }%`
  );

  if (prediction.cpu > config.alertThreshold) {
    console.log(
      "⚠️ Predictive Alert: High CPU expected - Auto-scaling triggered"
    );
  }
}

// ✅ Start Monitoring
console.log(`Monitoring every ${config.interval}ms`);
setInterval(checkSystemHealth, config.interval);
checkSystemHealth();
