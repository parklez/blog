---
title: Static Github Pages with routing
---
After a ton of trial and error, turns out Github fetches urls directly as if fetching files, e.g. "/posts/some-file" instead of working like you'd expect in a server running NodeJS/Express for example.

TL;DR
Add `{useHash: true}` in app-routing-module.ts

And well, there's 2 ways one can deal with this challenge:
1. Navigate the user using a '#' before routes
2. Pre-compile page for every possible url, including dynamic ones such as post/:id.

Naturally when looking for my problem with Github Pages, I faced the 2 option more often in Stackoverflow and blog articles alike, and man what a pain it was. Most of them will suggest "Scully" which I had in mind from a previous attempt at this, but never tried. At the time of writing this article, their guide did not create any files for me, I even created a brand new project and nothing. Manually configuring worked and I was delighted to see every single possible path in the built version with an index.html at the end of it. Curious like I am, I decided to just replicate what I observed but it's not the secret, there's a lot more into it to make it work and I'm not a fan of manually patching things that will break in the future.

Was interesting to read about high throughput websites compiling their most accessed pages and articles to reduce costs and be overall faster and gain higher rank at search engines though.

Number 1 is what I tried later and hooray! Problem solved without any downsides or big code changes, it's almost like they made this feature for me! A pillar to making static pages in Github Pages.