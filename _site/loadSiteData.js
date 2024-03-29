handleSiteData({
    "url": "http://ka-hearth.learnerpages.com/",
    "title": "KA Hearth",
    "description": "A small blog where Matthias posted thoughts on things happening around Khan Academy. (Archived)",
    "github_url": "https://github.com/MatthiasPortzel/ka-hearth",
    "posts": [
        {
            "url": "/welcome",
            "date": "2018-09-17 00:00:00 -0500",
            "slug": "welcome",
            "title": "Welcome to the KA Hearth",
            "excerpt": "<p>My goal with the KA Hearth is to create a place to follow for news about KA, particularly the computer science section.\nI hear a lot and read a lot about this, but don’t really talk about it.</p>\n\n"
        },
        {
            "url": "/posts/error-buddy",
            "date": "2018-09-22 00:00:00 -0500",
            "slug": "error-buddy",
            "title": "Error Buddy. And how to bypass him",
            "excerpt": "<p>When Error Buddy appears in the live editor, it can be for one of five reasons. I want to make people aware of these and the differences between them.</p>\n\n"
        },
        {
            "url": "/posts/location-unchangeable",
            "date": "2018-09-24 00:00:00 -0500",
            "slug": "location-unchangeable",
            "title": "KA breaks changing your location",
            "excerpt": "<p>As pointed out by Literally Void today, you can’t currently change your location (the official way) on Khan Academy. Typing a new location in the box is supposed to propagate a list of valid locations from the Google Maps API and allow you to chose one. Currently, the request for possible locations is failing because KA isn’t using an API key, something Google requires so that they can bill people making a large number of requests. (That is, Khan Academy trying to use the free tier of the Maps API, and Google wants them to pay.)</p>\n\n"
        },
        {
            "url": "/posts/3D-on-KA",
            "date": "2018-10-23 00:00:00 -0500",
            "slug": "3D-on-KA",
            "title": "All 3D on KA is bad",
            "excerpt": "<p>I am very proud of the 3D effect I created for Terra Magma. It was much more flexible then what I ended up using it for, and in my opinion, looked a lot better than the other options at the time.</p>\n\n"
        },
        {
            "url": "/posts/new-memory-leak",
            "date": "2018-10-23 00:00:00 -0500",
            "slug": "new-memory-leak",
            "title": "Using Object Oriented Programming on KA causes memory leaks",
            "excerpt": "<p>People have known for a long time, either through word of mouth or anecdotal experience that PVectors are a laggy solution. However, relatively few know of the Khan Academy bug that causes this behavior. Indeed, I didn’t until recently. That being said, the bug has been know for quite a long time, first being reported by Bob Lyon <a href=\"https://github.com/Khan/live-editor/issues/444\">here on Github</a>. And it was <a href=\"https://github.com/Khan/live-editor/commit/011551276711abe80e60cee12253c7ceb95c6c70\">fixed</a> by Kevin Barabash shortly after being reported, but the fix was tragically <a href=\"https://github.com/Khan/live-editor/commit/4c3e42072ab53b499b19e622e6b5fa681edd4b48\">reverted</a>, for <a href=\"https://github.com/Khan/live-editor/issues/561#issuecomment-194096794\">causing other, undisclosed, issues</a>.</p>\n\n"
        },
        {
            "url": "/posts/fix-for-new-issues",
            "date": "2018-10-29 00:00:00 -0500",
            "slug": "fix-for-new-issues",
            "title": "A fix for memory leaks with OOP",
            "excerpt": "<p>The issue is of course described in my <a href=\"/posts/new-memory-leak\">earlier post</a>.<br />\nI stumbled across a solution to this issue when looking at a recent <a href=\"https://khanacademy.org/cs/i/5707702964748288\">Hot list program</a>. It included the following code snippet at the top of the program.</p>\n\n"
        },
        {
            "url": "/posts/KA-is-more-blue",
            "date": "2018-11-07 00:00:00 -0600",
            "slug": "KA-is-more-blue",
            "title": "KA is more blue",
            "excerpt": "<p>KA just updated program pages to change the user nickname, the highlight on the selected tab, and the based on link of programs to be blue, instead of green like most elements on the CS pages.</p>\n\n"
        },
        {
            "url": "/posts/Re-removing-auto-suggestion",
            "date": "2018-11-10 00:00:00 -0600",
            "slug": "Re-removing-auto-suggestion",
            "title": "KA's removing auto suggestion from the live editor (again)",
            "excerpt": "<p>I broke my silence on the <a href=\"https://github.com/Khan/live-editor\">live editor Github</a> today (which I’ve maintained since Kevin asked everybody to stop submitting pull requests). I commented, asking Pamela to reconsider her decision to remove the code that powers auto suggestion in the live editor. You can see my comment <a href=\"https://github.com/Khan/live-editor/pull/695#issuecomment-437649648\">here</a>.</p>\n\n"
        },
        {
            "url": "/posts/T-1B12P-and-the-most-voted-KA-program",
            "date": "2018-11-12 00:00:00 -0600",
            "slug": "T#1B12P-and-the-most-voted-KA-program",
            "title": "T#1B12P and the most voted program on KA",
            "excerpt": "<p>The first program on the top list is <a href=\"https://khanacademy.org/cs/i/1431776579\">doodle jump</a>, by nordituck, which currently has <span class=\"vote-count\" data-program-id=\"1431776579\">11904</span> votes. But the highest voted program on Khan Academy is <a href=\"https://khanacademy.org/cs/i/1106141208\">Ultimate Tower Defense</a>, by <a href=\"https://khanacademy.org/profile/kaid_587121826918705844471320\">The #1 Base 12 Proponent</a>, with <span class=\"vote-count\" data-program-id=\"1106141208\">14335</span> votes.</p>\n\n"
        },
        {
            "url": "/posts/auto-suggestion-update",
            "date": "2018-11-22 00:00:00 -0600",
            "slug": "auto-suggestion-update",
            "title": "Update to KA re-removing auto suggestion",
            "excerpt": "<p>This is a follow up post to <a href=\"/re-removing-auto-suggestion\">this post</a>. Read it first.</p>\n\n"
        },
        {
            "url": "/posts/csp",
            "date": "2018-11-22 00:00:00 -0600",
            "slug": "csp",
            "title": "What is the CSP",
            "excerpt": "<p>One of the most useful pieces of information you can have when trying to stretch the limits of Khan Academy’s live-editor is knowledge of the Content Security Policy (CSP). The CSP defines what domains you can load certain types of data from on Khan Academy. For information about what CSP is, see <a href=\"/posts/sandbox-post-requests\">this post</a> about making POST requests.</p>\n\n"
        },
        {
            "url": "/posts/custom-audio",
            "date": "2018-11-24 00:00:00 -0600",
            "slug": "custom-audio",
            "title": "Uploading custom audio to KA",
            "excerpt": "<p><strong>Update, while custom audio is still possible, this method has been patched. See the <a href=\"/posts/audio-thumbnails-update\">follow-up post</a></strong></p>\n\n"
        },
        {
            "url": "/posts/jresig-live-editor",
            "date": "2018-12-05 00:00:00 -0600",
            "slug": "jresig-live-editor",
            "title": "John Resig working on the Live Editor",
            "excerpt": "<p>John Resig recently created a <a href=\"https://github.com/Khan/live-editor/pull/696\">PR</a> on the Live Editor Github. John is the creator of JQuery and of Processing.js (the port of Processing that KA uses).</p>\n\n"
        },
        {
            "url": "/posts/processing-processing-js",
            "date": "2018-12-05 00:00:00 -0600",
            "slug": "processing-processing-js",
            "title": "Processing, Processing.js (RIP), and p5.js",
            "excerpt": "<p>There’s frequently some confusion about the differences between Processing, Processing.js, and p5.js. All three aim to run the same code, so projects created in one should translate well to the others. However, there are important differences.</p>\n\n"
        },
        {
            "url": "/posts/bypassing-slowparse",
            "date": "2018-12-29 00:00:00 -0600",
            "slug": "bypassing-slowparse",
            "title": "Bypassing Slowparse (How to avoid Error Buddy in HTML)",
            "excerpt": "<p>I’m just going to open this by saying this technique was discovered by <a href=\"https://khanacademy.org/profile/kaid_1063314115048600759228780\">Ethan</a>, and while I researched and described how it works here, I don’t deserve credit for the clever idea.</p>\n\n"
        },
        {
            "url": "/posts/hide-your-own-programs",
            "date": "2019-02-05 00:00:00 -0600",
            "slug": "hide-your-own-programs",
            "title": "How to hide your own programs from the hot list",
            "excerpt": "<p>Using a technique discovered by <a href=\"https://kaid_724017587964593627235978\">Josh</a>, it’s possible to hide your own programs from the hot list. He <a href=\"https://khanacademy.zendesk.com/hc/en-us/community/posts/115000251328\">posted about it on Zendesk</a> about 2 years ago, while asking for an official way to do the same thing.</p>\n\n"
        },
        {
            "url": "/posts/locations-removed",
            "date": "2019-02-05 00:00:00 -0600",
            "slug": "locations-removed",
            "title": "What was the location hack and what were locations?",
            "excerpt": "<h4 id=\"ka-removes-locations\">KA Removes locations</h4>\n\n"
        },
        {
            "url": "/posts/hidden-vs-deleted",
            "date": "2019-02-06 00:00:00 -0600",
            "slug": "hidden-vs-deleted",
            "title": "Hidden, Completely Hidden, and Deleted programs",
            "excerpt": "<h3 id=\"hidden-from-hot-list\">Hidden from Hot list</h3>\n\n"
        },
        {
            "url": "/posts/sandbox-post-requests",
            "date": "2019-02-25 00:00:00 -0600",
            "slug": "sandbox-post-requests",
            "title": "You can’t make POST requests on KA",
            "excerpt": "<p>I wrote this almost a year ago, but I didn’t have anywhere to put it. I just remembered it, and so I’m posting it now.</p>\n\n"
        },
        {
            "url": "/posts/saveStrings",
            "date": "2019-02-25 00:00:00 -0600",
            "slug": "saveStrings",
            "title": "The allowed [sic] way to access localStorage in PJS",
            "excerpt": "<p><strong>Update: Two weeks after I made this, KA changed the guidelines to disallow it. See <a href=\"guideline-updates\">this post</a>.</strong></p>\n\n"
        },
        {
            "url": "/posts/guideline-updates",
            "date": "2019-03-23 00:00:00 -0500",
            "slug": "guideline-updates",
            "title": "Program guidelines update: localStorage not allowed",
            "excerpt": "<p>In my last <a href=\"saveStrings\">post</a>, I described how to use <code class=\"language-plaintext highlighter-rouge\">saveStrings</code> in Processing.js to access <code class=\"language-plaintext highlighter-rouge\">localStorage</code> and save data without escaping the sandbox, and without violating KA’s rules.</p>\n\n"
        },
        {
            "url": "/posts/off-site-links",
            "date": "2019-04-20 00:00:00 -0500",
            "slug": "off-site-links",
            "title": "KA silently blocking off-site links",
            "excerpt": "<p>I recently noticed, while making a comment linking to the KA Hearth, that my comment had been hidden. The KA Extension showed it with 3 <code class=\"language-plaintext highlighter-rouge\">lowquality</code> flags, seconds after it had been posted.</p>\n\n"
        },
        {
            "url": "/posts/bio-links",
            "date": "2019-04-29 00:00:00 -0500",
            "slug": "bio-links",
            "title": "KA censoring links in Bio",
            "excerpt": "<p>First brought to my attention by Jett on Discord, on April 24th, KA started censoring links in user bios. A link in your bio ends up being replaced with ***. This makes sense in context of my <a href=\"off-site-links\">previous post</a>.</p>\n\n"
        },
        {
            "url": "/posts/child-accounts-stripped",
            "date": "2019-04-29 00:00:00 -0500",
            "slug": "child-accounts-stripped",
            "title": "Child Accounts stripped of bio & nicknames",
            "excerpt": "<p>When testing bio link bypasses, I noticed that child accounts no longer have a profile edit button. That is, they can’t open the panel to change their nickname, username, or bio. This is the first I’ve noticed of the change, but I don’t know exactly when it when into affect.</p>\n\n"
        },
        {
            "url": "/posts/bio-censoring-bypass",
            "date": "2019-05-03 00:00:00 -0500",
            "slug": "bio-censoring-bypass",
            "title": "Patched bypass for bio link censoring",
            "excerpt": "<p>This is the technical analysis of the KA’s code censoring, including discussion of how to bypass it, that I retracted from my earlier news post about link censoring, <a href=\"bio-links\">here</a>. I felt obliged to report this to KA, so I filed a Zendesk report, and it has been fixed, so a lot of the below analysis is outdated.</p>\n\n"
        },
        {
            "url": "/posts/ep-comment-requirement",
            "date": "2019-05-19 00:00:00 -0500",
            "slug": "ep-comment-requirement",
            "title": "EP requirement to comment",
            "excerpt": "<p>As part of continued efforts to crack down on recent issues with a spammer posting links to a Google Doc promoting Nazi and white supremacist propaganda, Khan Academy has implemented an energy point requirement before being allowed to comment. You can still see comments, but in order to post a question, answer, T&amp;T, or reply, you need at least 5,000 EPs.</p>\n\n"
        },
        {
            "url": "/posts/KA-sub-page",
            "date": "2019-06-02 00:00:00 -0500",
            "slug": "KA-sub-page",
            "title": "KA sub page for the KA Hearth",
            "excerpt": "<p>I recently created a <a href=\"https://khanacademy.org/cs/i/5479641673728000\">KA program</a> for the KA Hearth, mostly for people to subscribe and get KA notifications for new posts.</p>\n\n"
        },
        {
            "url": "/posts/better-html-screenshots",
            "date": "2019-06-02 00:00:00 -0500",
            "slug": "better-html-screenshots",
            "title": "How to get better webpage thumbnails",
            "excerpt": "<p>KA webpage thumbnails are generated by <a href=\"https://html2canvas.hertzen.com/\">HTML2Canvas</a>. This program parses your HTML and draws a picture of it on a canvas. Unfortunely, this is a hard problem, and there are lot of things that can go wrong. This posts has recommendations on how to fix some of the worst issues.</p>\n\n"
        },
        {
            "url": "/posts/being-banned",
            "date": "2019-07-02 00:00:00 -0500",
            "slug": "being-banned",
            "title": "The 16 days I was banned",
            "excerpt": "<h4 id=\"being-banned\">Being banned</h4>\n\n"
        },
        {
            "url": "/posts/profile-ui-update",
            "date": "2019-07-02 00:00:00 -0500",
            "slug": "profile-ui-update",
            "title": "Bio UI update",
            "excerpt": "<p>KA updated a couple of weeks ago to change the UI layout of user profiles and bios. I first noticed this change on June 18th. Below are screenshots before and after the changes. Prominent is the deemphasis of usernames. Visually, they now appear to be part of the bio.</p>\n\n"
        },
        {
            "url": "/posts/complete-profile-ui-update",
            "date": "2019-07-23 00:00:00 -0500",
            "slug": "complete-profile-ui-update",
            "title": "Profile UI update",
            "excerpt": "<p>My <a href=\"profile-ui-update\">last post</a> had the URI <code class=\"language-plaintext highlighter-rouge\">profile-ui-update</code>. That post of course described the changes to the top part of the <a href=\"https://www.khanacademy.org/profile/me\">user profile page</a>, and I imagined that was as extreme of an update as we would see from KA for a while. On the contaray, that was just the beginning of a much larger profile re-work KA unvieled earlier today (noticed first by Elijah in Discord).</p>\n\n"
        },
        {
            "url": "/posts/KA-API-Depreciation",
            "date": "2019-11-06 00:00:00 -0600",
            "slug": "KA-API-Depreciation",
            "title": "KA Public API Deprecated",
            "excerpt": "<p>Yesterday, KA <a href=\"https://github.com/Khan/khan-api/commit/f35d8aee5cb4c1fdfc19c3b024b69868cae2286d\">updated</a> the Github repository holding documentation for their publicly available API to contain a deprecation notice. It contains a timeline including when various endpoints will be deprecated, which I have included below. These deprecations begin in just 2 months from today, although KA giving some notice is better than none.</p>\n\n"
        },
        {
            "url": "/posts/launching-ourjseditor",
            "date": "2019-12-31 00:00:00 -0600",
            "slug": "launching-ourjseditor",
            "title": "OurJSEditor (v1.0.0)",
            "excerpt": "<p>A project I’ve been working on for the past 3 years now, OurJSEditor, is entering the second stage of its life. Version 1.0.0 of this website launches today, Dec 31, 2019. It aims to replicate and extend the community features from the computing section of KA. In particular:</p>\n<ol>\n  <li>Improve on KA’s community management. At least 3 of the 8 current Challenge Council members have been banned from the website at some point. KA continues to tighten moderation and stifle conversation, recently by disallowing links.</li>\n  <li>Improve on the live editor. The live editor has not received new features or even bug fixes in years. Processing.js is archived. It’s very difficult to write a large-scale game or modern ES6 Javascript. OurJSEditor has native editor settings, support for ES6, and is flexible, allowing anything from Markdown to P5.js.</li>\n  <li>Improve on KA’s website. OurJSEditor is designed to be lightweight, with the home page loading 34kb, compared to KA’s 1,200kb (113kb vs. 7,676kb total). And it’s entirely open source.</li>\n  <li>Other countless features, like the ability to subscribe to a user natively. And as OJSE is in active development, it will only get better.</li>\n</ol>\n\n"
        },
        {
            "url": "/posts/leaving-challenge-council",
            "date": "2019-12-31 00:00:00 -0600",
            "slug": "leaving-challenge-council",
            "title": "Leaving the KA Challenge Council",
            "excerpt": "<p>Unfortunately, my time on the Challenge Council has come to an end. My daily use of Khan Academy has declined since I joined the council 2 years ago. And recently I haven’t been particularly active on the Challenge Council.</p>\n\n"
        },
        {
            "url": "/posts/child-account-security-changes",
            "date": "2020-06-18 00:00:00 -0500",
            "slug": "child-account-security-changes",
            "title": "Child account status is now checked through in the API",
            "excerpt": "<p>Child accounts on KA can perform limited actions, like they cannot comment on programs. Previously, this was only checked on the client side, and by running some code, it was trivial to allow a child account to comment like a normal user.</p>\n\n"
        },
        {
            "url": "/posts/audio-thumbnails-update",
            "date": "2020-07-24 00:00:00 -0500",
            "slug": "audio-thumbnails-update",
            "title": "Audio thumbnails patched",
            "excerpt": "<p>This is a followup to a previous <a href=\"/posts/custom-audio\">post</a>, which described how it was possible to upload arbitrary base64 data to KA as a program image (“thumbnail” or “screenshot”).</p>\n\n"
        },
        {
            "url": "/posts/script-to-upload-screenshots",
            "date": "2020-07-24 00:00:00 -0500",
            "slug": "script-to-upload-screenshots",
            "title": "A Python script to perform the screenshot hack",
            "excerpt": "<p>I wrote a small Python script to perform the screenshot hack. I realize I still haven’t written a post about the hack, but I won’t at this time. I merely wanted a place to share this code.</p>\n\n"
        },
        {
            "url": "/posts/events-of-september-22nd",
            "date": "2020-10-16 00:00:00 -0500",
            "slug": "events-of-september-22nd",
            "title": "The Events of September 22nd (or \"The 3 hours I was banned\")",
            "excerpt": "<p>A lot happened on September 22nd. It is here arranged chronologically.</p>\n\n"
        },
        {
            "url": "/posts/hc-post-backups",
            "date": "2020-10-16 00:00:00 -0500",
            "slug": "hc-post-backups",
            "title": "Backups of censored help center posts",
            "excerpt": "<p>This is a source for <a href=\"events-of-september-22nd\">this</a> post.</p>\n\n"
        },
        {
            "url": "/posts/using-es6-in-ka-html",
            "date": "2020-10-18 00:00:00 -0500",
            "slug": "using-es6-in-ka-html",
            "title": "Using ES6 in KA HTML",
            "excerpt": "<h4 id=\"intro\">Intro</h4>\n<p>Using ES6 in the KA webpage environment is obviously desirable. And unlike the Processing.JS environment, it’s quite feasible.</p>\n\n"
        }
    ]
})
