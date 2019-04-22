---
title: KA silently blocking off-site links
layout: "default"
---

I recently noticed, while making a comment linking to the KA Hearth, that my comment had been hidden. The KA Extension showed it with 3 `lowquality` flags, seconds after it had been posted.

Khan Academy has a spam prevention system in place. KA calculates a `lowQualityScore` for all comments when the comment is posted, and if the score is too high, then the comment is hidden. KA creates three `lowquality` flags on the comment, and being flagged three times causes a comment to be instantly hidden. (The same mechanics also apply to programs.)

Now, my post was relatively long, and there was no obvious reason why it should be hidden. It's unknown exactly what KA's algorithm is for determining `lowQualityScore`, but they probably look at comment length, repeated characters, all caps, expletives, and similar markers of spam. I suspected that the off-KA link might be an issue, and indeed, reposting without the link allowed the comment to appear.

This annoyed and surprised me, obviously because this comment was not spam, but also because just a couple months ago, I had posted a *very* similar comment, also linking to the KA Hearth, which was not hidden. This comment has a `lowQualityScore` of around 0.2, whereas my recent comments have a `lowQualityScore` of around 17. I'm fairly sure KA starts hiding comments with a `lowQualityScore` over 1.

When I asked Josh to comment, he neither confirmed nor denied that there a change blocking links. I'm concluding from this and my research that there has been a change, and links off KA are being silently hidden.

Recently, there has been a problem with a spammer posting links to a Google Doc promoting Nazi and white supremacist propaganda. This spammer has created many accounts, and the KA guardians have been playing whak-a-mole trying to keep these accounts banned. KA should absolutely take action against this behavior. I'm guessing that banning links off-KA is an attempted solution. However, they haven't been successful. The spammer has re-emerged, and moved the link to the bio. At this point KA should give up this route. It seems to me that IP banning is the most appropriate solution. Even playing whak-a-mole with IPs seems more productive than trying to ban accounts or blocking all external links.

There are a myriad of reasons why users should be able to link to helpful websites off-KA, from myself linking to KA Hearth posts, to linking learners to the MDN's documentation. However, I'd be shocked if this changed anytime soon. In the mean time, guardians can unhide comments that have been wrongly hidden, or you can employ tricks like replacing periods in URLs with commas if you need to link off-KA.
