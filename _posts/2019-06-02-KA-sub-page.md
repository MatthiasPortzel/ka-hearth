---
title: KA sub page for the KA Hearth
layout: default
---

I recently created a [KA program](https://khanacademy.org/cs/i/5479641673728000) for the KA Hearth, mostly for people to subscribe and get KA notifications for new posts.

Discoverablity is a relatively low priority for me with the Hearth. My goal is to document, so that there is written record of notable KA events and the technical analysis that I do, that otherwise isn't shared.  Indeed, the oldest Hearth post is dated Sep. 17th, but at that point I didn't even have a website; the Github repository was created Oct 24th, and I don't think I linked anyone to it until later.

I, of course, wanted the subscription page to be more than just a program with the name, so I put together a website with links to the posts on Github pages. I've said before, I don't want the Hearth to live on KA. (There are two obvious reasons for this: more screen space, and less of an issue if my program gets hidden.)

I'm quite proud of the code for the code for the KA page. I do a couple of interesting things, including [this trick](bypassing-slowparse) to use ES6 on KA, and a variation of Bluebird's [auto-saving](https://khanacademy.org/cs/i/5833972799930368) to improve the thumbnail. And the whole page is powered by ruby code ([Github](https://github.com/MatthiasSaihttam/ka-hearth/blob/master/_plugins/siteDataJS.rb)) that ties into Jekyll in order to generate JSON with the post links.
