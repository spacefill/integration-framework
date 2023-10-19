#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

OPENAPI_DEF="https://dash.readme.com/api/v1/api-registry/p570f12ln978a7s"

npx openapi-client-axios-typegen "$OPENAPI_DEF" > src/api/spacefill-api-openapi.d.ts
