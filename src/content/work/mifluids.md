---
title: "MiFluids"
kind: project
description: "Virtual Fluid Dynamics Lab"
summary: "Unity/C# systems for a virtual fluid dynamics lab used by 400+ students."
period: "2026"
reel: /media/mifluids.mp4
poster: /media/mifluids.jpg
---

One of the projects I am working on as part of the Purdue Envision Center.
I worked in a team of 3 to build this application from the ground up over
the course of several months for clients in the Purdue Physics and Engineering departments.

MiFluids supports the visualization and sampling of high-resolution pre-processed CFD datasets,
runnable in the browser with no download required.

I had the most impact on the optimization side of things. Through extensive profiling and experimentation,
I diagnosed root causes of memory leaks and out-of-memory crashes.
Furthermore, I patched these failures by re-designing the data loading pipeline
to use Unity Native Arrays, pre-allocated circular buffers, and a custom chunk allocator written in C# (this was actually a really niche and ~~frustrating~~ fun problem, I might write an article about it sometime soon).

Other features I developed include the majority of probe/rake systems (how the user samples and records data),
scenario swapping, and the help menu.
