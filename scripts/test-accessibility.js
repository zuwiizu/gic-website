#!/usr/bin/env node

/**
 * Accessibility Testing Script
 * Tests the website for WCAG 2.2 AA compliance using axe-core
 */

const { AxePuppeteer } = require('@axe-core/puppeteer');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Pages to test
const PAGES_TO_TEST = [
  { url: 'http://localhost:3000', name: 'Homepage' },
  { url: 'http://localhost:3000/about', name: 'About' },
  { url: 'http://localhost:3000/services', name: 'Services' },
  { url: 'http://localhost:3000/case-studies', name: 'Case Studies' },
  { url: 'http://localhost:3000/insights', name: 'Insights' },
  { url: 'http://localhost:3000/speaking', name: 'Speaking & Media' },
  { url: 'http://localhost:3000/contact', name: 'Contact' },
];

// WCAG 2.2 AA configuration
const AXE_CONFIG = {
  rules: {
    // WCAG 2.2 AA rules
    'color-contrast': { enabled: true },
    'keyboard-navigation': { enabled: true },
    'focus-order-semantics': { enabled: true },
    'aria-allowed-attr': { enabled: true },
    'aria-required-attr': { enabled: true },
    'aria-valid-attr-value': { enabled: true },
    'aria-valid-attr': { enabled: true },
    'button-name': { enabled: true },
    'bypass': { enabled: true },
    'document-title': { enabled: true },
    'duplicate-id': { enabled: true },
    'form-field-multiple-labels': { enabled: true },
    'frame-title': { enabled: true },
    'html-has-lang': { enabled: true },
    'html-lang-valid': { enabled: true },
    'image-alt': { enabled: true },
    'input-image-alt': { enabled: true },
    'label': { enabled: true },
    'link-name': { enabled: true },
    'list': { enabled: true },
    'listitem': { enabled: true },
    'meta-refresh': { enabled: true },
    'meta-viewport': { enabled: true },
    'object-alt': { enabled: true },
    'role-img-alt': { enabled: true },
    'td-headers-attr': { enabled: true },
    'th-has-data-cells': { enabled: true },
    'valid-lang': { enabled: true },
    'video-caption': { enabled: true },
  },
  tags: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']
};

async function testPage(browser, page) {
  console.log(`Testing ${page.name} (${page.url})...`);
  
  const browserPage = await browser.newPage();
  
  try {
    // Navigate to page
    await browserPage.goto(page.url, { waitUntil: 'networkidle0' });
    
    // Wait for page to be fully loaded
    await browserPage.waitForTimeout(2000);
    
    // Run axe accessibility tests
    const results = await new AxePuppeteer(browserPage)
      .configure(AXE_CONFIG)
      .analyze();
    
    return {
      page: page.name,
      url: page.url,
      violations: results.violations,
      passes: results.passes.length,
      incomplete: results.incomplete,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error(`Error testing ${page.name}:`, error.message);
    return {
      page: page.name,
      url: page.url,
      error: error.message,
      timestamp: new Date().toISOString()
    };
  } finally {
    await browserPage.close();
  }
}

async function generateReport(results) {
  const reportDir = path.join(__dirname, '..', 'reports');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  const reportPath = path.join(reportDir, `accessibility-report-${Date.now()}.json`);
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPages: results.length,
      pagesWithViolations: results.filter(r => r.violations && r.violations.length > 0).length,
      totalViolations: results.reduce((sum, r) => sum + (r.violations ? r.violations.length : 0), 0),
      totalPasses: results.reduce((sum, r) => sum + (r.passes || 0), 0)
    },
    results
  };
  
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  // Generate HTML report
  const htmlReport = generateHTMLReport(report);
  const htmlPath = path.join(reportDir, `accessibility-report-${Date.now()}.html`);
  fs.writeFileSync(htmlPath, htmlReport);
  
  console.log(`\nReports generated:`);
  console.log(`JSON: ${reportPath}`);
  console.log(`HTML: ${htmlPath}`);
  
  return report;
}

function generateHTMLReport(report) {
  const { summary, results } = report;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessibility Report - ${new Date(report.timestamp).toLocaleDateString()}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 40px; }
        .summary { background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
        .violation { background: #fef2f2; border-left: 4px solid #ef4444; padding: 15px; margin: 10px 0; }
        .pass { color: #059669; }
        .fail { color: #dc2626; }
        .page-result { margin-bottom: 30px; border-bottom: 1px solid #e5e5e5; padding-bottom: 20px; }
        .violation-details { margin-left: 20px; font-size: 14px; color: #666; }
        pre { background: #f8f8f8; padding: 10px; border-radius: 4px; overflow-x: auto; }
    </style>
</head>
<body>
    <h1>Accessibility Report</h1>
    <p>Generated on ${new Date(report.timestamp).toLocaleString()}</p>
    
    <div class="summary">
        <h2>Summary</h2>
        <ul>
            <li>Total Pages Tested: ${summary.totalPages}</li>
            <li>Pages with Violations: <span class="${summary.pagesWithViolations > 0 ? 'fail' : 'pass'}">${summary.pagesWithViolations}</span></li>
            <li>Total Violations: <span class="${summary.totalViolations > 0 ? 'fail' : 'pass'}">${summary.totalViolations}</span></li>
            <li>Total Passes: <span class="pass">${summary.totalPasses}</span></li>
        </ul>
    </div>
    
    <h2>Detailed Results</h2>
    ${results.map(result => `
        <div class="page-result">
            <h3>${result.page} ${result.violations && result.violations.length === 0 ? '✅' : result.violations && result.violations.length > 0 ? '❌' : '⚠️'}</h3>
            <p><strong>URL:</strong> ${result.url}</p>
            
            ${result.error ? `
                <div class="violation">
                    <strong>Error:</strong> ${result.error}
                </div>
            ` : ''}
            
            ${result.violations ? `
                <p><strong>Violations:</strong> ${result.violations.length}</p>
                <p><strong>Passes:</strong> ${result.passes}</p>
                
                ${result.violations.map(violation => `
                    <div class="violation">
                        <h4>${violation.id}: ${violation.help}</h4>
                        <p><strong>Impact:</strong> ${violation.impact}</p>
                        <p><strong>Description:</strong> ${violation.description}</p>
                        <div class="violation-details">
                            <p><strong>Affected Elements:</strong> ${violation.nodes.length}</p>
                            ${violation.nodes.slice(0, 3).map(node => `
                                <pre>${node.html}</pre>
                                <p><strong>Failure Summary:</strong> ${node.failureSummary}</p>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            ` : ''}
        </div>
    `).join('')}
</body>
</html>`;
}

async function main() {
  console.log('Starting accessibility tests...\n');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const results = [];
    
    for (const page of PAGES_TO_TEST) {
      const result = await testPage(browser, page);
      results.push(result);
      
      if (result.violations) {
        console.log(`  ✓ ${result.violations.length} violations, ${result.passes} passes`);
      } else if (result.error) {
        console.log(`  ✗ Error: ${result.error}`);
      }
    }
    
    const report = await generateReport(results);
    
    console.log('\n=== ACCESSIBILITY TEST SUMMARY ===');
    console.log(`Total pages tested: ${report.summary.totalPages}`);
    console.log(`Pages with violations: ${report.summary.pagesWithViolations}`);
    console.log(`Total violations: ${report.summary.totalViolations}`);
    console.log(`Total passes: ${report.summary.totalPasses}`);
    
    if (report.summary.totalViolations > 0) {
      console.log('\n❌ Accessibility violations found. Please review the report.');
      process.exit(1);
    } else {
      console.log('\n✅ All accessibility tests passed!');
    }
    
  } finally {
    await browser.close();
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { testPage, generateReport };
