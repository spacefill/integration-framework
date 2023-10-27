#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

OPENAPI_DEF="https://api.spacefill.fr/openapi.json"

npx openapi-client-axios-typegen "$OPENAPI_DEF" > src/api/spacefill-api-openapi.d.ts
