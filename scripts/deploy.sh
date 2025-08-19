#!/bin/bash

# GIC Website Deployment Script
# This script builds and deploys the website to Cloudflare Pages

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
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

# Check if required tools are installed
check_dependencies() {
    log_info "Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        log_error "npm is not installed"
        exit 1
    fi
    
    if ! command -v wrangler &> /dev/null; then
        log_error "Wrangler CLI is not installed. Install with: npm install -g wrangler"
        exit 1
    fi
    
    log_info "All dependencies are installed"
}

# Install project dependencies
install_dependencies() {
    log_info "Installing project dependencies..."
    npm ci
}

# Run linting and type checking
run_checks() {
    log_info "Running code quality checks..."
    
    log_info "Running ESLint..."
    npm run lint
    
    log_info "Running TypeScript type check..."
    npm run type-check
}

# Build the project
build_project() {
    log_info "Building project for Cloudflare Pages..."
    npm run pages:build
}

# Deploy to Cloudflare Pages
deploy_to_cloudflare() {
    local environment=${1:-staging}
    
    log_info "Deploying to Cloudflare Pages ($environment)..."
    
    if [ "$environment" = "production" ]; then
        wrangler pages deploy out --project-name=gic-website
    else
        wrangler pages deploy out --project-name=gic-website-staging
    fi
}

# Main deployment function
main() {
    local environment=${1:-staging}
    
    log_info "Starting deployment process for $environment environment..."
    
    check_dependencies
    install_dependencies
    run_checks
    build_project
    deploy_to_cloudflare "$environment"
    
    log_info "Deployment completed successfully!"
    log_info "Your site should be available at:"
    
    if [ "$environment" = "production" ]; then
        log_info "https://gic-website.pages.dev"
    else
        log_info "https://gic-website-staging.pages.dev"
    fi
}

# Parse command line arguments
case "${1:-}" in
    "production"|"prod")
        main "production"
        ;;
    "staging"|"stage"|"")
        main "staging"
        ;;
    "help"|"-h"|"--help")
        echo "Usage: $0 [environment]"
        echo ""
        echo "Environments:"
        echo "  staging     Deploy to staging environment (default)"
        echo "  production  Deploy to production environment"
        echo ""
        echo "Examples:"
        echo "  $0                    # Deploy to staging"
        echo "  $0 staging           # Deploy to staging"
        echo "  $0 production        # Deploy to production"
        ;;
    *)
        log_error "Unknown environment: $1"
        log_info "Use '$0 help' for usage information"
        exit 1
        ;;
esac
