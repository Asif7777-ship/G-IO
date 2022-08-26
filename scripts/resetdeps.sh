#!/bin/bash
set -e
set -x
rm -rf node_modules
rm -rf docs/node_modules
rm -rf smoke-tests/node_modules
rm -rf "workspaces/*/node_modules"
git checkout node_modules
# Install and rebuild the first time so we
# have our deps and can run the next scripts
node . i --ignore-scripts --no-audit --no-fund
node . rebuild --ignore-scripts
# Set the bundled deps and then install again
# so that our query has up to date info
# which deps are bundled
node scripts/bundle-deps.js
node . i --ignore-scripts --no-audit --no-fund
# Write our ignores for node modules based
# on the deps that were installed
node scripts/node-modules-ignores.js
