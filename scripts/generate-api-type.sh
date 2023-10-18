#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

npx openapi-client-axios-typegen https://dash.readme.com/api/v1/api-registry/p570f12ln978a7s > src/api/spacefill-api-openapi.d.ts
