---
title: Server Side Rendering - The paradigm change in web development
tags: angular
---

Learning how to make a website requires studying several technologies and how they stitch together - it's no easy feat, to start with backend: 
- Authentication
- REST API
- Middlewares
- Error handling
- Database (CRUD) / Sessions

...To then start learning the front-end aspect of things:

- HTML
- CSS
- NodeJS
- RXJS
- Angular and Single Page Applications (SPA)

And speaking of Angular alone (which is the first framework/experience I properly had with web applications), I happen to start learning at a time when the web was all about making them behave like full standalone "applications" just like a phone app or computer software. It's impressive how with just HTML, CSS and JavaScript this could be accomplished, and alas, things like Electron made way for web applications to be bundled next to native apps in phones and computers. Spotify, VSCode, Discord, just to name a few.

So what's new? Well, nothing new new. Just that these applications became so complex that bundling all the logic and features on the client side could easily take long to transfer & load the bigger the apps gets. It does make sense - I was planning on adding code highlighting feature to my blog, but it would cost me few mbs of extra library code just for that feature alone. If I had a server rendering, the clients would receive just a fraction of the resulting bundle, eg. The HTML and CSS already baked with the resulting highlights, posts, you name it.

To SPA's defence, modules can be dynamically loaded and transferred as needed, and my blog makes use of this feature. However, that's not truly enough when competing for the fastest page loading & interaction times.

Now here's the thing about my blog in recent times. None will ever read anything here, ever. Why should I spend my hard earned money and limited free time on paying for domain, server, database just to accomplish so much with Server Side Rendering (SSR)? Nonsense. I stripped all dynamic features (such as making posts, authentication, editing, etc) and made my blog static. I could improve it further by pre-compiling each possible view using SSR during compilation time, but that's a bit overkill.

To make matters worse, Angular is also recommending to start using "Standalone Components" and "Signals" instead of modular components and whatever was the alternative to Signals - Inputs and Outputs I imagine - I figure they're working on removing "zone.js" as one major dependency of Angular in favor of speed - and that alone requires a LOT of re-learning and changes in this blog that I'm not quite willing to do. I much rather re-write from scratch or work on a new project altogether. What is the benefit of rewriting what can't be seen anyway?

As of the writing of this blog post, I'm in the beginning of... learning several hours of Angular again, since most of these new features are all alien to me. In fact, web development is the most complex, ever evolving technologies out there. I haven't pushed myself to learn React and or other frameworks because Angular alone already takes most of my off-work time when studying or developing things.

In conclusion, we're all likely re-learning web dev every 2-3 years. It's incredible how obsolete things get, not to mention the overall maintenance these things need ever so often. I'll try to write my next web app as either a personal card with links OR a simple line graph for my price checker using Angular's new paradigm.

I'm leaving here an awesome post for myself and others who want to understand the technical differences between SPA and SSR

- https://www.joshwcomeau.com/react/server-components/
- https://angular.dev/guide/signals
