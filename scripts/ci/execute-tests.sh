#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../../"

docker run --rm \
  -v "$(pwd)":/src \
  -w /src \
  node:18.12-alpine \
  sh -c 'yarn install && yarn run tests:ci'
