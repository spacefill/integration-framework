#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

npx tsuml2 --glob "./src/**/*.(ts|mts)" -m -o ./docs/uml-diagram.svg
