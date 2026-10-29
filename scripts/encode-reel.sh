#!/usr/bin/env bash
# Turns a raw recording into a silent, web-sized looping reel plus a poster frame.
#
#   scripts/encode-reel.sh <input> <name> [start-seconds] [duration-seconds]
#
# Writes public/media/<name>.mp4 and public/media/<name>.jpg, which work
# entries reference as /media/<name>.mp4 and /media/<name>.jpg.
set -euo pipefail

input="$1"
name="$2"
start="${3:-0}"
duration="${4:-8}"
out_dir="public/media"

mkdir -p "$out_dir"

# 720p H.264 with no audio track; faststart lets playback begin before the file finishes downloading.
# CRF sets quality, and maxrate/bufsize cap busy footage (dense particles, crowds) at about 3 Mbps
# so a single reel can't balloon to tens of megabytes.
ffmpeg -y -ss "$start" -t "$duration" -i "$input" \
	-vf "scale=-2:720,fps=30" -an \
	-c:v libx264 -preset slow -crf 28 -maxrate 3M -bufsize 6M -pix_fmt yuv420p -movflags +faststart \
	"$out_dir/$name.mp4"

ffmpeg -y -ss "$start" -i "$input" -frames:v 1 -vf "scale=-2:720" -q:v 3 "$out_dir/$name.jpg"
