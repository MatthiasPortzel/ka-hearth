---
layout: default
title: EP requirement to comment
---

As part of continued efforts to crack down on recent issues with a spammer posting links to a Google Doc promoting Nazi and white supremacist propaganda, Khan Academy has implemented an energy point requirement before being allowed to comment. You can still see comments, but in order to post a question, answer, T&T, or reply, you need at least 5,000 EPs.

An example of the UI for a user with no energy points:
![No reply buttons, and the text "Want to join the conversation? You need at least 5000 energy points to get started."]({{ "/assets/images/no-eps-discussion.png" | relative_url }})

#### Recap (with dates!)

I first noticed this change May 7th, (so this post is quite late). I first mentioned the Nazi-spammer after he/she caused [off-site links in comments](off-site-links) to be hidden (May 20th). However, after he/she just moved the link to the bio, KA [banned links in bios](bio-links) (Apr 24th). This is just the latest step KA has taken in attempting to make this behavior impossible.

#### Bypass attempts

I did some quick tests in an attempt to ascertain whether or not this was a server-side change or something that could by bypassed using the API. After making a request that was, to my knowledge, correctly authenticated as a user with no energy points, I got a 200 response code. But with the response text was `null`, and no comment was posted. I take this to mean that KA is properly enforcing this server-side. This makes sense, since it removes the possibility of bot-ing the creation of accounts to then spam comments. 

#### Analysis

I think this is a relatively good solution. There's precedent for requiring energy points for participating in discussion, as you need 5,000 EP to cast up votes. 5,000 EPs is also few enough that this is unlikely to effect people who are serious about the site. And of course, it does a lot to discourage the exact problem: quickly creating accounts to circumvent bans and spam comments. It is worth pointing out that this will probably effect people who are new to the site, who are confused, and who want to ask a question. On the other hand, newer users are less likely to know KA's strict rules and more likely to post a low-quality question that requires guardian attention. So if the goal is to reduce low-quality, spammy content, I think this change will definitely accomplish that.
