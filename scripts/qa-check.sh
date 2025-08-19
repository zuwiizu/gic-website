#!/bin/bash

# Quality Assurance Check Script
# Runs comprehensive tests to ensure the website meets all quality standards

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

# Track test results
TESTS_PASSED=0
TESTS_FAILED=0
FAILED_TESTS=()

# Function to run a test and track results
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    log_step "Running $test_name..."
    
    if eval "$test_command"; then
        log_info "$test_name passed ✓"
        ((TESTS_PASSED++))
    else
        log_error "$test_name failed ✗"
        FAILED_TESTS+=("$test_name")
        ((TESTS_FAILED++))
    fi
    
    echo ""
}

# Check if development server is running
check_dev_server() {
    if curl -s http://localhost:3000 > /dev/null; then
        return 0
    else
        return 1
    fi
}

# Start development server if not running
start_dev_server() {
    if ! check_dev_server; then
        log_info "Starting development server..."
        npm run dev &
        DEV_SERVER_PID=$!
        
        # Wait for server to start
        log_info "Waiting for server to start..."
        npx wait-on http://localhost:3000 --timeout 60000
        
        if check_dev_server; then
            log_info "Development server started successfully"
            return 0
        else
            log_error "Failed to start development server"
            return 1
        fi
    else
        log_info "Development server is already running"
        return 0
    fi
}

# Stop development server
stop_dev_server() {
    if [ ! -z "$DEV_SERVER_PID" ]; then
        log_info "Stopping development server..."
        kill $DEV_SERVER_PID 2>/dev/null || true
        wait $DEV_SERVER_PID 2>/dev/null || true
    fi
}

# Cleanup function
cleanup() {
    stop_dev_server
}

# Set trap for cleanup
trap cleanup EXIT

# Main QA check function
main() {
    log_info "Starting comprehensive QA checks for GIC Website"
    log_info "================================================"
    echo ""
    
    # Create reports directory
    mkdir -p reports
    
    # 1. Code Quality Checks
    log_step "Phase 1: Code Quality Checks"
    run_test "ESLint" "npm run lint"
    run_test "TypeScript Check" "npm run type-check"
    
    # 2. Build Test
    log_step "Phase 2: Build Test"
    run_test "Next.js Build" "npm run build"
    
    # 3. Start Development Server
    log_step "Phase 3: Starting Development Server"
    if ! start_dev_server; then
        log_error "Cannot proceed with tests - development server failed to start"
        exit 1
    fi
    
    # 4. Accessibility Tests
    log_step "Phase 4: Accessibility Tests"
    run_test "Accessibility Audit" "node scripts/test-accessibility.js"
    
    # 5. Performance Tests
    log_step "Phase 5: Performance Tests"
    run_test "Performance Audit" "node scripts/test-performance.js"
    
    # 6. Basic Lighthouse Test
    log_step "Phase 6: Lighthouse Audit"
    run_test "Lighthouse Audit" "npm run test:lighthouse"
    
    # 7. Manual Checks (informational)
    log_step "Phase 7: Manual Check Reminders"
    log_warn "Remember to perform manual testing:"
    log_warn "- Cross-browser testing"
    log_warn "- Mobile device testing"
    log_warn "- Screen reader testing"
    log_warn "- Keyboard navigation testing"
    log_warn "- Form submission testing"
    echo ""
    
    # 8. Security Headers Check (if server is accessible)
    log_step "Phase 8: Security Headers Check"
    if check_dev_server; then
        log_info "Checking security headers..."
        curl -s -I http://localhost:3000 | grep -E "(X-Frame-Options|X-Content-Type-Options|Referrer-Policy)" || log_warn "Some security headers may be missing (normal in development)"
    fi
    
    # 9. SEO Checks
    log_step "Phase 9: SEO Checks"
    log_info "Checking sitemap..."
    if curl -s http://localhost:3000/sitemap.xml > /dev/null; then
        log_info "Sitemap is accessible ✓"
        ((TESTS_PASSED++))
    else
        log_error "Sitemap is not accessible ✗"
        FAILED_TESTS+=("Sitemap Check")
        ((TESTS_FAILED++))
    fi
    
    log_info "Checking robots.txt..."
    if curl -s http://localhost:3000/robots.txt > /dev/null; then
        log_info "Robots.txt is accessible ✓"
        ((TESTS_PASSED++))
    else
        log_error "Robots.txt is not accessible ✗"
        FAILED_TESTS+=("Robots.txt Check")
        ((TESTS_FAILED++))
    fi
    
    # 10. Final Report
    log_step "Phase 10: Final Report"
    echo ""
    log_info "QA Check Summary"
    log_info "================"
    log_info "Tests Passed: $TESTS_PASSED"
    log_info "Tests Failed: $TESTS_FAILED"
    
    if [ $TESTS_FAILED -eq 0 ]; then
        log_info "🎉 All QA checks passed! The website is ready for deployment."
        echo ""
        log_info "Next steps:"
        log_info "1. Complete manual testing checklist (docs/TESTING_CHECKLIST.md)"
        log_info "2. Review generated reports in ./reports/"
        log_info "3. Deploy to staging for final review"
        log_info "4. Deploy to production"
    else
        log_error "❌ Some QA checks failed. Please address the following issues:"
        for test in "${FAILED_TESTS[@]}"; do
            log_error "  - $test"
        done
        echo ""
        log_info "Please fix the issues and run the QA check again."
        exit 1
    fi
}

# Parse command line arguments
case "${1:-}" in
    "help"|"-h"|"--help")
        echo "Usage: $0 [options]"
        echo ""
        echo "Options:"
        echo "  help    Show this help message"
        echo ""
        echo "This script runs comprehensive QA checks including:"
        echo "  - Code quality (ESLint, TypeScript)"
        echo "  - Build verification"
        echo "  - Accessibility testing"
        echo "  - Performance testing"
        echo "  - SEO checks"
        echo "  - Security headers"
        echo ""
        echo "Reports are generated in the ./reports/ directory."
        ;;
    *)
        main
        ;;
esac
