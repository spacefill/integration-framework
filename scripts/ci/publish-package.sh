#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../../"

echo "$AUTH_TOKEN"

docker run --rm \
  -v "$(pwd)":/src \
  -e "AUTH_TOKEN=$AUTH_TOKEN" \
  -w /src \
  node:18.12-alpine \
  sh -c 'cp ./scripts/ci/.npmrc ./ && yarn install && npm publish --access=restricted && rm .npmrc'
