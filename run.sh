#!/bin/sh
set -e
sh ./install.sh
echo "[INFO] Containers running. Access the app at http://localhost:3000"
echo "[INFO] Use Ctrl+C to stop when done."
docker-compose logs -f
