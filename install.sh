#!/bin/sh
set -e

if ! command -v docker >/dev/null 2>&1; then
  echo "[ERROR] Docker is not installed. Install Docker and try again."
  exit 1
fi
if ! command -v docker-compose >/dev/null 2>&1; then
  echo "[ERROR] docker-compose is not installed. Install docker-compose and try again."
  exit 1
fi

echo "[INFO] Building Docker image..."
docker-compose build

echo "[INFO] Starting containers..."
docker-compose up -d

echo "[INFO] App containers are now running."
