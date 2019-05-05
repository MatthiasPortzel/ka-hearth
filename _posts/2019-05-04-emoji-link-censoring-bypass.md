---
layout: default
title: Using emojis in a domain name to bypassing bio-link-censoring
---

In my previous two posts I described how KA is [censoring links in bios](bio-links) and a (now-fixed) [trick for bypassing this](bio-censoring-bypass). This post is a follow up to those two sharing another way to bypass link blocking. 

The URL matching KA employs assumes that the domain name is composed of `-` and capital and lower case letters (`[-a-zA-Z]`). However, it is possible for a domain name to include unicode characters, for the purposed of internationalization and non-English domains.

However using the "service" (sarcastic air quotes), [😻🍕.ws](https://😻🍕.ws), we can create URLs with a domain that KA thinks is invalid. This website is a link shortener, but with a domain that includes emojis. By putting links through this, it is possible to put the result in your bio. For example, the link [https://😻🍕.ws/🔥🍃1️⃣](https://😻🍕.ws/🔥🍃1️⃣) takes you to this post, and is allowed in my bio.

I mean, on one hand, "Get your act together KA, this is way too easy to bypass." On the other hand, "why the heck can emojis be included in domain names?"

Thanks to Bding for pointing this out to me [on Twitter](https://twitter.com/jenazero/status/1124729201570013185).
