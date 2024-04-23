---
title: Creating a scrolling text bar effect for special announcements!
tags: angular, css
---

Inspired by Let It Die's interface, I wanted to add a scrolling text bar on the top of my homepage whenever I had something important going on that my visitors might want to know. \
While trying out a few approaches, here's what I learned on each of them:

**1. The < marquee > tag** \
Con: Easiest \
Issue: It's not smooth & it's deprecated.

**2. CSS animation** \
Con: Smooth, code-free \
Issue: Animation speed relies on element width/height, longer text = faster

**3. A (bad) JavaScript hack** \
Incrementing CSS's "right: 0px" element over time \
Con: Great control over animation, speed is the same no matter the size of the component. \
Issue: Updating "right" is not performatic as "translate" or similar is. The animation is not that smooth either.

#### So what is the best approach?
I coded all of the three options but ultimately settled on approach 2 for the sake of smoother and performant experience - I couldn't have done it if not by looking for a few hundred articles out there - Special thanks to this StackOverflow user: [https://stackoverflow.com/a/41958209](https://stackoverflow.com/a/41958209)

There is a special combination of CSS and JavaScript for horizontally looping images and text, really common for showcasing tools, avatars and so on BUT I'll leave that for a future iteration, I usually prefer simplicity over complexity for something as simple as this.
