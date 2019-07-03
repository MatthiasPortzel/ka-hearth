---
title: The 16 days I was banned
layout: default
---

#### Being banned

On June 2nd I created a KA subscription page for the KA Hearth.

When I checked the program on June 3rd, it had been completely hidden. I received no communication about this, and I thought it was pretty surprising, considering that Josh (Sponge) had previously seen the program and subscribed. I reached out to Josh about this, and he suggested I file a report on the Help Center. Upon attempting to do this, I found that I was unable to log in. This was quite surprising to me, because I had logged in the previous day without issue. Zendesk redirected me to [this page](https://khanacademy.zendesk.com/hc/en-us/articles/231279688-Why-isn-t-my-Khan-Academy-account-automatically-linked-to-the-Support-Community-), which mentioned one of the reasons I might not be able to log in was because I was banned. For the people in the back, banned users are not allowed to log into Zendesk or post there. I confirmed that I was discussion banned by using the v1 API (as opposed to the internal API) by running the following snippet in my browser console (while on a KA page and logged in)

```js
[, fkey] = document.cookie.match(/fkey=(.*?);/);
fetch("/api/v1/user", {headers: {"X-KA-FKEY": fkey}}).then(r => r.json().then(d => console.log("Banned?", d.discussion_banned)))
```

#### Appealing

Having confirmed with Josh that I was indeed banned, I contacted Alina (KA's Community Liaison, who I had previously talked through the Challenge Council). I informed her that I had been banned, was no longer able to log in to Zendesk, and would no longer be able to participate with the Challenge Council.

Alina replied June 5th. She appeared sympathetic, and recommended I fill out the ban appeal form as soon as possible. (I was familiar with the ban appeal form; however, I hadn't planned on filling it out, as I guessed that I wouldn't be unbanned quickly. I had planned on waiting about a year, and then filling out the appeal form, with the reasoning that KA would be more sympathetic after time had passed.) Alina also mentioned the reason I was banned. She said that the issue was that I had linked to information about bypassing the link filter, something that I had been warned about before. With this in mind, the ban makes more sense. I had [previously](link-censoring-guardian-message) been warned by Davin not to bypass the link filter, and then I had posted a link to website explaining how to bypass the link filter. I replied, explaining to Alina that these actions were in my mind distinct. I was linking to the KA Heath, which has a great number of posts describing how to do things that KA has requested not be done. The link bypass articles included a disclaimer that you shouldn't use them. 

I filled out the ban appeal form June 7th. In the intervening time I removed the Hearth articles that included information about working link bypasses.

#### Being Unbanned

On June 18th, I received a message from Evan Lewis explaining why I had been banned, and informing me that I had been unbanned. He stated, "it is still a violation of the Terms of Service to circumvent security features of the site" and advised me in the future err on the side of caution in reporting loopholes to KA first, through HackerOne or Zendesk. He ended requesting that I open Zendesk tickets in the future to ask any questions I might have.
