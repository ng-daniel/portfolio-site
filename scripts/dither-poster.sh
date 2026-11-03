#!/usr/bin/env bash
# Turns poster frames into small dithered masks for the work grid.
#
#   scripts/dither-poster.sh <name>...   dither the named posters
#   scripts/dither-poster.sh --all       dither every poster in public/media
#
# Reads public/media/<name>.jpg (or .png) and writes public/media/dither/<name>.png: opaque
# where the poster dithers light, transparent where it dithers dark. WorkGrid uses it as a
# CSS mask over each tile until its reel plays, so the colors come from --dither-light and
# --dither-dark in src/styles/index.css and change without rerunning this script.
set -euo pipefail

media_dir="public/media"
out_dir="$media_dir/dither"

# Dither pattern. Append ",3" (e.g. o8x8,3) to add a half-transparent midtone between the two colors.
pattern="o8x8"

# Brightens shadows before dithering so dark footage lights enough dots. Higher is brighter; 1 is off.
gamma="1"

# S-curve contrast that pushes midtones apart, for flat footage. Around 3-10; 0 is off.
contrast="0"

# How color becomes gray before dithering. Rec709Luma matches perceived brightness;
# Brightness takes each pixel's brightest channel, so saturated reds and blues stand out
# from dull backgrounds; Lightness sits between the two.
grayscale="Rec709Luma"

# Per-poster settings, for footage the defaults don't suit. Kept here so --all reapplies them.
overrides() {
	case "$1" in
		spitfire) grayscale="Brightness" contrast="6" ;;
	esac
}

# About half a tile's on-screen width, so each dither cell renders as a crisp 2x2 block.
size="200x112"

mkdir -p "$out_dir"

if [[ "${1:-}" == "--all" ]]; then
	names=()
	for file in "$media_dir"/*.jpg "$media_dir"/*.png; do
		[[ -e "$file" ]] && names+=("$(basename "${file%.*}")")
	done
else
	names=("$@")
fi

if [[ ${#names[@]} -eq 0 ]]; then
	echo "usage: $0 <name>... | --all" >&2
	exit 1
fi

for name in "${names[@]}"; do
	src="$media_dir/$name.jpg"
	[[ -e "$src" ]] || src="$media_dir/$name.png"
	if [[ ! -e "$src" ]]; then
		echo "no poster found for $name" >&2
		exit 1
	fi

	# Overrides apply to this poster only.
	(
		overrides "$name"

		tone=()
		[[ "$contrast" != "0" ]] && tone=(-sigmoidal-contrast "${contrast}x50%")

		# -normalize stretches contrast first so dark game footage doesn't dither to solid background.
		magick "$src" -resize "$size^" -gravity center -extent "$size" \
			-grayscale "$grayscale" -normalize -gamma "$gamma" "${tone[@]}" -ordered-dither "$pattern" \
			-background white -alpha shape -strip "$out_dir/$name.png"
	)
	echo "$out_dir/$name.png"
done
