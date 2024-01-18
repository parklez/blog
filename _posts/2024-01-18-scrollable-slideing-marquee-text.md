---
title: Creating a scrolling text bar effect for special announcements!
---

Inspired by Let It Die's interface, I wanted to add a scrolling text bar on the top of my homepage whenever I had something important going on that my visitors might want to know. \
While trying out a few approaches, here's what I learned on each of them:

#### Approach 1
Deprecated `<marquee>` tag \
Con: Easiest \
Issue: It's not smooth & it's deprecated.

#### Approach 2
CSS Animation \
Con: Smooth, code-free \
Issue: Animation speed relies on element width/height.

#### Approach 3
Incrementing CSS's "right: 0px" element over time \
Con: Great control over animation, speed is the same no matter the size of the component. \
Issue: Updating "right" is not performatic as "translate" or similar is.

#### Approach 4
