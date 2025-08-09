#!/bin/sh
set -e

ports="5010 5011 5012 5013 5014"
pids=""

echo "Freeing ports if already in use..."
for p in $ports; do
  if command -v fuser >/dev/null 2>&1; then
    fuser -k "${p}/tcp" 2>/dev/null || true
  elif command -v lsof >/dev/null 2>&1; then
    pid=$(lsof -ti tcp:$p 2>/dev/null || true)
    [ -n "$pid" ] && kill $pid 2>/dev/null || true
  fi
done

sleep 1

for p in $ports; do
  (
    cd "service-$p"
    npm start &
  )
  pid=$!
  pids="$pids $pid"
  echo "Started service-$p (pid $pid)"
done

trap 'echo "Stopping..."; kill $pids 2>/dev/null || true; exit 0' INT TERM

wait
