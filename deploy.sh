#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ ! -f node_modules/.bin/wrangler ]]; then npm install; fi
echo "Building Boston Shore Excursions..."
npm run build
echo "Deploying to Cloudflare..."
npx wrangler deploy
echo ""
echo "Done. If bostonshoreexcursion.com still shows 404:"
echo "  Workers & Pages → boston-shore-excursion → Settings → Domains"
echo "  → Add bostonshoreexcursion.com and www.bostonshoreexcursion.com"
