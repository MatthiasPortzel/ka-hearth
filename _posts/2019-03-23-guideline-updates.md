---
title: "Program guidelines update: localStorage not allowed"
layout: default
---

In my last [post](saveStrings), I described how to use `saveStrings` in Processing.js to access `localStorage` and save data without escaping the sandbox, and without violating KA's rules.

Two weeks after that post, on March 10th, I was informed that KA has updated their program guidelines. As far as I can remember, this is the first time the program guidelines have been updated since they were introduced about 4 years ago. (Let me know if you have info on when the guidelines were first introduced or any previous revisions)

#### What changed?

There were two major clarifications in the category of disallowed functionality.
The first was in regard to `localStorage` ([MDN link](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)). Previously, localStorage had been allowed and used in HTML projects. The new rule is:
>Webpages should not attempt to get or set `localStorage`. Doing so will cause projects to run out of quota.

It is possible a KA program maliciously saves a large amount of data to `localStorage`, potentially messing with other programs that use `localStorage`, but this has *never* happened in the years it's been allowed. And perhaps the more pressing point is that it is inherently more work for guardians to try to hide every program that uses localStorage than it is to ask guardians to hide every program that uses localStorage maliciously.

The other addition to the guidelines is regarding sound.
>Webpages should only create sounds using the files available to ProcessingJS programs.

The timing of this suggests to me that this is in part a response to my earlier post on [using external sounds](custom-audio), which KA, understandably, did not like. However, the wording of this means that playing even basic notes is now against the guidelines for HTML programs, and that old programs like Element118's [HTML Audio Library](https://khanacademy.org/cs/i/6127087949578240), (which plays one note at a time instead of loading and playing a file), is now not allowed.

The following rule, which effects PJS programs, is also new, but unlike the above changes, doesn't outlaw anything wasn't disallowed before.
>Links: JS Programs should not automatically open links to other web pages, on Khan Academy or otherwise; if you want to direct learners to a relevant link please use `println()` with the URL instead.

#### What does this say about the future?

This might appear as only annoying at first glance. However, this could be worse. I would prefer it if KA updated the guidelines like this to reflect their moderation practices. They saw someone using the environment in a way they didn't like, and actually changed something to make it clear that wasn't allowed. In the past, it's possible they would have just started hiding programs that used `localStorage` without telling anyone.

However, they are very clearly limiting the creativity of the users on their platform. I believe the underlying program is that KA's mission is to teach people, and that they just don’t understand why anyone would want to do something that they don’t teach. They miss that their platform could be a launching point for you to learn more on your own.

It's worth noting, we saw this in the past with `script` tags. They just weren't allowed, until KA released a course on using HTML and JS, at which point the environment updated and allowed them. Auto-suggestion was disabled because it "might confuse users". KA will continue to limit its growth as a platform if it fails to realize that growth is possible without confusing  people or having security issues.
