---
title: "MiFluids"
kind: project
description: "Virtual Fluid Dynamics Lab"
summary: "A high-resolution interactive wind tunnel used by 400+ students."
period: "2026 - Present"
role: "core systems & optimization"
team: "3 members"
stack: ["Unity", "C#", "Python"]
highlights: ["heap fragmentation profiling", "custom chunk allocator", "probe rakes"]
reel: /media/mifluids.mp4
poster: /media/mifluids.jpg
---

As part of the Purdue Envision Center, I worked in a team of 3 to build this application
from the ground up over the course of several months for some of our clients.

MiFluids supports the visualization and sampling of high-resolution pre-processed CFD datasets,
runnable in the browser with no download required.

I had the most impact on the optimization side of things. Through extensive profiling and experimentation,
I diagnosed root causes of memory leaks and out-of-memory (OOM) crashes.

To patch these critical issues, I re-designed the data loading and visualization pipeline
to use Unity Native Arrays, pre-allocated circular buffers, and a custom allocator written in C#.

Later down the road, I deployed this same strategy to resolve a different OOM bug related
to CSV data export.

Other features I developed include the majority of probe/rake systems (how the user samples and records data),
scenario swapping, and the help menu.
