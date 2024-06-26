---
title: Why did I make a static version of this feature-rich blog?
tags: angular 
---
#### How does the static version work?
- I created an Angular environment called "static" that will make functions like ["fetching posts"](https://github.com/parklez/blog/commit/3077856fa84ce1a038bed5bfc336ef53b3615497#diff-09332a8008ef020b3debfe12146fc06830c396342256f440176e66ebe8863ca7) to call for local "MongoDB"-like paylods.
- I then wrote this [script](https://github.com/parklez/blog/commit/3077856fa84ce1a038bed5bfc336ef53b3615497#diff-b4129de25ae7aeb8dc1f859f0654702b1cacbcaec1d5fb9f50d562ce363a6c45) to compile posts in a similar fashion that Jekyll does but outputs in the format I mentioned above.

With these 2 changes alone, I can continue to maintain the "fully-featured" version of my blog while having this one with ZERO maintenance, clever huh?

![shibawink](https://cdn.frankerfacez.com/emoticon/224668/2)

#### Lore
I work with several technologies at work and I decided that I needed to show off what I can do with all the tools I've learned over the several months using the Udemy courses I had available, and why not by making a fully featured blog? Well that was great for putting my learning into fruition however I knew this is just a tiny piece of sand in the universe and it's not meant to be alive in the sense that people will WANT to come and see anything in here.

I spent quite a while looking at other people's personal pages seeing what I could borrow from them with their cool unique URLs but the fact that hosting is expensive and just a pile of burning money for me 💸 - I decided to ~~leech~~ utilize the free tools available out there to start off.

![mokou](https://cdn.frankerfacez.com/emoticon/248549/4)


---
Here's a list of links I used for reference:
- Angular documentation
https://angular.io/guide/deployment#deployment
https://github.com/angular-schule/angular-cli-ghpages

- Possible fixes
https://stackoverflow.com/questions/75644587/angular-website-hosted-in-github-pages-does-not-work-if-i-refresh-in-any-route
https://stackoverflow.com/questions/73264184/angular-github-io-routing-results-in-404

- Might not be possible using Angular SSR
https://stackoverflow.com/questions/51909059/deploying-angular-universal-on-github-pages

- Good examples
https://dalenguyen.me/blog/why-i-moved-my-website-from-github-pages-to-heroku-with-a-cost
https://github.com/dalenguyen/dalenguyen.github.io
https://github.com/Gabri432/angular-personal-website/blob/master/scully.angular-personal-website.config.ts

- SSR example
https://github.com/ganatan/angular-ssr

- Reading
https://www.antoinebernard.com/create-a-static-website-with-angular/