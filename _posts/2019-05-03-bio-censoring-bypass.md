---
title: Patched bypass for bio link censoring
layout: default
---

This is the technical analysis of the KA's code censoring, including discussion of how to bypass it, that I retracted from my earlier news post about link censoring, [here](bio-links). I felt obliged to report this to KA, so I filed a Zendesk report, and it has been fixed, so a lot of the below analysis is outdated. You can find two currently-working bypasses in [this post](more-link-censoring-bypasses).

### KA's source

```js
//Searchs all KA's functions for any that contain "***", the string links are replaced with
webpackJsonp.flatMap(a => Object.keys(a[1]).map(p => a[1][p])).filter(f => f.toString().includes("***"));
```
The second function returned contains a lot of stuff that I ignored, and a snippet that looks something like this:
```js
{
    key: "hideExternalLinks",
    value: function e (t) {
        var a = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
        var r = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
        var n = "***";
        return t.replace(a,n).replace(r,n);
    }
}
```

This is the function KA calls with your bio to censor it. This looks hurried, maybe not developed for KA. The key `"hideExternalLinks"` is interesting, because this hides all links, including KA links.

### Block emails as well as URLs

The first regular expression looks at emails; There's a raw `@` in the middle, and there's a section after that `[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}` that might be looking for an IPv4, and that's an alternative to a check for something, a period, something. Before the @ is basically, 'some number of non-special characters'. Quick testing confirms, email addresses in bios are blocked as well.

### The now-patched bypass

The second regular expression is more interesting than the first. It optionally checks for a http protocol and then optionally "www". It then checks for between 2 and 256 characters. This makes me think this snippet wasn't written for KA; because KA bios can only be 140 characters. We then have a period, and between 2 and 6 letters for a top level domain. This is very interesting, because TLDs can be more than 6 characters. The one I can think of off the top of my head is https://practical.engineering/; and indeed, this text was allowed in a bio.

My first thought was that by adding `_`, a word character in regular expressions, we can make a normal TLD (like `.com`) look like `.com` to a human, but look longer than 6 characters and therefore be ignored by this check. And for example, `khanacademy.org____` was allowed in a bio. 

But then I noticed that the characters checked for a TLD are only `[a-z]`. And this regular expression is case sensitive so the website `example.ORG` wouldn't be viewed as a valid URL, and could be placed in a bio; despite the fact that hostnames should be case insensitive ([RFC 4343](https://tools.ietf.org/html/rfc4343#section-2)). With this trick, I considered KA's URL blocking to be bypassed.

To clarify, my criteria for bypass here is something that can be copied and pasted into the address bar and directly navigated to. Capitalizing .Com in a KA Hearth link, for instance, allows one to do that.

### KA patched this bypass

I felt morally obligated to report this to KA. However, I did so on Zendesk and not Hacker1 (though it probably could have been a Hacker1 report), because I don't see this as a pressing security issue. And of course, I could imagine a time in the future where I wanted to take advantage of this. (As it is, I thought the risk that this was abused by our spammer friend too high.) Most of the bugs I have previously submitted through Zendesk have gone unfixed, and I was half-hoping this one would as well.

However, KA had fixed the issue within a day. I am happy with the response time on this, because it shows that occasionally bugs reported on Zendesk do get fixed. Additionally, I think the fact that I reported this so soon after it became an issue helped. The developer who worked on this still had the feature fresh in his/her mind. In the future, I think it's important in getting bugs fixed to report them soon after they appear.

KA's fixed code is now:
```js
{
    key: "hideExternalLinks",
    value: function e(t){
        var a = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
        var r = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-zA-Z]{2,62}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
        var n = "***";
        return t.replace(a,n).replace(r,n)
    }
}
```

The key of course being `[a-zA-Z]{2,62}` instead of `[a-z]{2,6}`. It still might be possible to bypass this. (For example, it's technically possible to have a `.xn--fiqs8s` URL, the ASCII from the Chinese .中国. However, I don't know any websites actually using this. `.cn` is normally used in China.) However, any bypasses I can think of now are better accomplished by removing periods or using commas instead.

The fact that this link detection is so imperfect makes me wonder if it's possible to preform a similar bypass on comment link detection. However, it would be much harder to discover, as we don't have access to the serverside code that does link detection in comments.
