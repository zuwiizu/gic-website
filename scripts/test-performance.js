#!/usr/bin/env node

/**
 * Performance Testing Script
 * Tests Core Web Vitals and performance metrics using Lighthouse
 */

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

// Pages to test for performance
const PAGES_TO_TEST = [
  { url: 'http://localhost:3000', name: 'Homepage' },
  { url: 'http://localhost:3000/about', name: 'About' },
  { url: 'http://localhost:3000/services', name: 'Services' },
  { url: 'http://localhost:3000/contact', name: 'Contact' },
];

// Lighthouse configuration for performance testing
const LIGHTHOUSE_CONFIG = {
  extends: 'lighthouse:default',
  settings: {
    formFactor: 'mobile',
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0
    },
    screenEmulation: {
      mobile: true,
      width: 412,
      height: 823,
      deviceScaleFactor: 2.625,
      disabled: false,
    },
    emulatedUserAgent: 'Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.101 Mobile Safari/537.36',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  }
};

// Performance thresholds (scores out of 100)
const PERFORMANCE_THRESHOLDS = {
  performance: 90,
  accessibility: 90,
  'best-practices': 90,
  seo: 90,
  'first-contentful-paint': 1800, // ms
  'largest-contentful-paint': 2500, // ms
  'cumulative-layout-shift': 0.1,
  'total-blocking-time': 200, // ms
};

async function testPagePerformance(url, name) {
  console.log(`Testing performance for ${name} (${url})...`);
  
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const runnerResult = await lighthouse(url, {
      port: chrome.port,
      disableDeviceEmulation: false,
      emulatedFormFactor: 'mobile',
    }, LIGHTHOUSE_CONFIG);
    
    const { lhr } = runnerResult;
    
    // Extract key metrics
    const metrics = {
      page: name,
      url: url,
      timestamp: new Date().toISOString(),
      scores: {
        performance: Math.round(lhr.categories.performance.score * 100),
        accessibility: Math.round(lhr.categories.accessibility.score * 100),
        bestPractices: Math.round(lhr.categories['best-practices'].score * 100),
        seo: Math.round(lhr.categories.seo.score * 100),
      },
      coreWebVitals: {
        firstContentfulPaint: lhr.audits['first-contentful-paint'].numericValue,
        largestContentfulPaint: lhr.audits['largest-contentful-paint'].numericValue,
        cumulativeLayoutShift: lhr.audits['cumulative-layout-shift'].numericValue,
        totalBlockingTime: lhr.audits['total-blocking-time'].numericValue,
        speedIndex: lhr.audits['speed-index'].numericValue,
      },
      opportunities: lhr.audits['diagnostics'] ? 
        Object.keys(lhr.audits)
          .filter(key => lhr.audits[key].details && lhr.audits[key].details.type === 'opportunity')
          .map(key => ({
            id: key,
            title: lhr.audits[key].title,
            description: lhr.audits[key].description,
            score: lhr.audits[key].score,
            numericValue: lhr.audits[key].numericValue
          }))
          .filter(opp => opp.score < 1)
        : [],
      diagnostics: Object.keys(lhr.audits)
        .filter(key => lhr.audits[key].details && lhr.audits[key].score !== null && lhr.audits[key].score < 1)
        .map(key => ({
          id: key,
          title: lhr.audits[key].title,
          description: lhr.audits[key].description,
          score: lhr.audits[key].score
        }))
        .slice(0, 10) // Top 10 issues
    };
    
    return metrics;
  } finally {
    await chrome.kill();
  }
}

function evaluatePerformance(results) {
  const issues = [];
  
  results.forEach(result => {
    const { page, scores, coreWebVitals } = result;
    
    // Check score thresholds
    Object.entries(scores).forEach(([category, score]) => {
      const threshold = PERFORMANCE_THRESHOLDS[category];
      if (threshold && score < threshold) {
        issues.push({
          page,
          type: 'score',
          category,
          actual: score,
          expected: threshold,
          severity: score < threshold * 0.8 ? 'high' : 'medium'
        });
      }
    });
    
    // Check Core Web Vitals
    Object.entries(coreWebVitals).forEach(([metric, value]) => {
      const threshold = PERFORMANCE_THRESHOLDS[metric.replace(/([A-Z])/g, '-$1').toLowerCase()];
      if (threshold && value > threshold) {
        issues.push({
          page,
          type: 'core-web-vital',
          metric,
          actual: value,
          expected: threshold,
          severity: value > threshold * 1.5 ? 'high' : 'medium'
        });
      }
    });
  });
  
  return issues;
}

async function generatePerformanceReport(results) {
  const reportDir = path.join(__dirname, '..', 'reports');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  const issues = evaluatePerformance(results);
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPages: results.length,
      averagePerformanceScore: Math.round(
        results.reduce((sum, r) => sum + r.scores.performance, 0) / results.length
      ),
      averageAccessibilityScore: Math.round(
        results.reduce((sum, r) => sum + r.scores.accessibility, 0) / results.length
      ),
      pagesPassingThresholds: results.filter(r => 
        r.scores.performance >= PERFORMANCE_THRESHOLDS.performance &&
        r.scores.accessibility >= PERFORMANCE_THRESHOLDS.accessibility
      ).length,
      totalIssues: issues.length,
      highSeverityIssues: issues.filter(i => i.severity === 'high').length
    },
    results,
    issues,
    thresholds: PERFORMANCE_THRESHOLDS
  };
  
  const reportPath = path.join(reportDir, `performance-report-${Date.now()}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  // Generate HTML report
  const htmlReport = generatePerformanceHTMLReport(report);
  const htmlPath = path.join(reportDir, `performance-report-${Date.now()}.html`);
  fs.writeFileSync(htmlPath, htmlReport);
  
  console.log(`\nPerformance reports generated:`);
  console.log(`JSON: ${reportPath}`);
  console.log(`HTML: ${htmlPath}`);
  
  return report;
}

function generatePerformanceHTMLReport(report) {
  const { summary, results, issues } = report;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Performance Report - ${new Date(report.timestamp).toLocaleDateString()}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 40px; }
        .summary { background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
        .score { padding: 4px 8px; border-radius: 4px; color: white; font-weight: bold; }
        .score-good { background: #059669; }
        .score-average { background: #d97706; }
        .score-poor { background: #dc2626; }
        .metric-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0; }
        .metric-card { background: white; border: 1px solid #e5e5e5; padding: 15px; border-radius: 8px; }
        .issue { background: #fef2f2; border-left: 4px solid #ef4444; padding: 15px; margin: 10px 0; }
        .issue.medium { background: #fffbeb; border-left-color: #f59e0b; }
        .page-result { margin-bottom: 30px; border-bottom: 1px solid #e5e5e5; padding-bottom: 20px; }
    </style>
</head>
<body>
    <h1>Performance Report</h1>
    <p>Generated on ${new Date(report.timestamp).toLocaleString()}</p>
    
    <div class="summary">
        <h2>Summary</h2>
        <div class="metric-grid">
            <div class="metric-card">
                <h3>Pages Tested</h3>
                <p style="font-size: 24px; margin: 0;">${summary.totalPages}</p>
            </div>
            <div class="metric-card">
                <h3>Avg Performance</h3>
                <p style="font-size: 24px; margin: 0;">
                    <span class="score ${summary.averagePerformanceScore >= 90 ? 'score-good' : summary.averagePerformanceScore >= 50 ? 'score-average' : 'score-poor'}">
                        ${summary.averagePerformanceScore}
                    </span>
                </p>
            </div>
            <div class="metric-card">
                <h3>Avg Accessibility</h3>
                <p style="font-size: 24px; margin: 0;">
                    <span class="score ${summary.averageAccessibilityScore >= 90 ? 'score-good' : summary.averageAccessibilityScore >= 50 ? 'score-average' : 'score-poor'}">
                        ${summary.averageAccessibilityScore}
                    </span>
                </p>
            </div>
            <div class="metric-card">
                <h3>Issues Found</h3>
                <p style="font-size: 24px; margin: 0; color: ${summary.totalIssues > 0 ? '#dc2626' : '#059669'};">
                    ${summary.totalIssues}
                </p>
            </div>
        </div>
    </div>
    
    ${issues.length > 0 ? `
        <h2>Issues Found</h2>
        ${issues.map(issue => `
            <div class="issue ${issue.severity}">
                <h4>${issue.page} - ${issue.type === 'score' ? issue.category : issue.metric}</h4>
                <p><strong>Expected:</strong> ${issue.expected} | <strong>Actual:</strong> ${issue.actual}</p>
                <p><strong>Severity:</strong> ${issue.severity}</p>
            </div>
        `).join('')}
    ` : '<h2>✅ No performance issues found!</h2>'}
    
    <h2>Detailed Results</h2>
    ${results.map(result => `
        <div class="page-result">
            <h3>${result.page}</h3>
            <p><strong>URL:</strong> ${result.url}</p>
            
            <h4>Scores</h4>
            <div class="metric-grid">
                <div class="metric-card">
                    <strong>Performance:</strong> 
                    <span class="score ${result.scores.performance >= 90 ? 'score-good' : result.scores.performance >= 50 ? 'score-average' : 'score-poor'}">
                        ${result.scores.performance}
                    </span>
                </div>
                <div class="metric-card">
                    <strong>Accessibility:</strong> 
                    <span class="score ${result.scores.accessibility >= 90 ? 'score-good' : result.scores.accessibility >= 50 ? 'score-average' : 'score-poor'}">
                        ${result.scores.accessibility}
                    </span>
                </div>
                <div class="metric-card">
                    <strong>Best Practices:</strong> 
                    <span class="score ${result.scores.bestPractices >= 90 ? 'score-good' : result.scores.bestPractices >= 50 ? 'score-average' : 'score-poor'}">
                        ${result.scores.bestPractices}
                    </span>
                </div>
                <div class="metric-card">
                    <strong>SEO:</strong> 
                    <span class="score ${result.scores.seo >= 90 ? 'score-good' : result.scores.seo >= 50 ? 'score-average' : 'score-poor'}">
                        ${result.scores.seo}
                    </span>
                </div>
            </div>
            
            <h4>Core Web Vitals</h4>
            <div class="metric-grid">
                <div class="metric-card">
                    <strong>FCP:</strong> ${Math.round(result.coreWebVitals.firstContentfulPaint)}ms
                </div>
                <div class="metric-card">
                    <strong>LCP:</strong> ${Math.round(result.coreWebVitals.largestContentfulPaint)}ms
                </div>
                <div class="metric-card">
                    <strong>CLS:</strong> ${result.coreWebVitals.cumulativeLayoutShift.toFixed(3)}
                </div>
                <div class="metric-card">
                    <strong>TBT:</strong> ${Math.round(result.coreWebVitals.totalBlockingTime)}ms
                </div>
            </div>
        </div>
    `).join('')}
</body>
</html>`;
}

async function main() {
  console.log('Starting performance tests...\n');
  
  const results = [];
  
  for (const page of PAGES_TO_TEST) {
    try {
      const result = await testPagePerformance(page.url, page.name);
      results.push(result);
      
      console.log(`  ✓ Performance: ${result.scores.performance}, Accessibility: ${result.scores.accessibility}`);
    } catch (error) {
      console.error(`  ✗ Error testing ${page.name}: ${error.message}`);
    }
  }
  
  const report = await generatePerformanceReport(results);
  
  console.log('\n=== PERFORMANCE TEST SUMMARY ===');
  console.log(`Average Performance Score: ${report.summary.averagePerformanceScore}`);
  console.log(`Average Accessibility Score: ${report.summary.averageAccessibilityScore}`);
  console.log(`Pages passing thresholds: ${report.summary.pagesPassingThresholds}/${report.summary.totalPages}`);
  console.log(`Total issues: ${report.summary.totalIssues}`);
  
  if (report.summary.highSeverityIssues > 0) {
    console.log(`\n❌ ${report.summary.highSeverityIssues} high severity performance issues found.`);
    process.exit(1);
  } else if (report.summary.totalIssues > 0) {
    console.log(`\n⚠️  ${report.summary.totalIssues} performance issues found (medium severity).`);
  } else {
    console.log('\n✅ All performance tests passed!');
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { testPagePerformance, generatePerformanceReport };
