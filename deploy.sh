#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ ! -f node_modules/.bin/wrangler ]]; then npm install; fi
echo "Building Bar Harbor Shore Excursions..."
npm run build
echo "Deploying to Cloudflare..."
npx wrangler deploy
echo ""
echo "Done. If barharborshoreexcursions.com still shows 404:"
echo "  Workers & Pages → bar-harbor-shore-excursions → Settings → Domains"
echo "  → Add barharborshoreexcursions.com and www.barharborshoreexcursions.com"
