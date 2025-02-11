#!/bin/bash
# run-all.sh
#
# This script runs the Keycloak and Next.js services using their separate docker-compose files.
# It first starts Keycloak in detached mode, then starts Next.js in the foreground.
# Make sure to give this script execute permissions: chmod +x run-all.sh

echo "Starting Keycloak..."
docker compose -f docker-compose.keycloak.yml up -d

echo "Starting Next.js..."
docker compose -f docker-compose.nextjs.yml up -d