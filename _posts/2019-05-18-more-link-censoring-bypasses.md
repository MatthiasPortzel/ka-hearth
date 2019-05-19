---
layout: default
title: More link censoring bypasses
---

There are several alternatives to bypassing KA's bio-link-censoring that are ~~a little~~ more elegant than the way I described in my [previous method, using emojis in domain names](emoji-link-censoring-bypass).

### KA doesn't like this

I received a guardian message after my last post asking me not to try to avoid the link filter. (My thoughts on that can be found here [post coming soon].)

This discussion is for academic purposes. I can't even say, "use at your own risk," because I recommend not using these techniques.

### t.co link shortening

The first was pointed out to me by [Luke](https://khanacademy.org/profile/kaid_933093676418892226040682). It makes use of the fact that Twitter's link shortener, t.co, has a one-character domain name, where KA's regular expression assume at least 2 characters. Unfortunately, this link shortener is only available on Twitter.

You can use t.co by DMing yourself a link on Twitter and copying the result. I ended up with this link to this article [https://t.co/kaS7Mu2MDc](https://t.co/kaS7Mu2MDc), which I could put in my bio. Or, there are other 2-letter-domain URL shorteners, such as [3.ly](http://3.ly/) and [u.nu](https://u.nu/). While these will give you very short links, which is an advantage keeping with KA's 140 character bio limit, they come without any guarantee of continued uptime, compared to t.co and Twitter's backing.

### Including invisible characters

This is a weird one. As pointed out to me by [Loki](https://khanacademy.org/profile/kaid_1167230140884859457175747), there are characters that browsers will strip out if they are included in a domain name. The one I found was everyone's favorite, the zero width space (`\u200b`). If you're not aware, this character is semantically a space character, but it has no width and is therefore invisible. (It's possible browsers ignore other invisible characters, but because I had one that worked for this purpose, I didn't try any others.)

For example, in this link to [this article](https://matthiassaihttam.​github.​io/ka-hearth/posts/more-link-censoring-bypasses), there's a zero width space after each of the periods. One can still, however, copy and paste this link out of my bio and into the address bar to go to this post.

I don't know why browsers ignore this character, because as far as I know, it's allowed to be included in a URL. I suppose it makes sense to prevent against phishing or similar attacks.
