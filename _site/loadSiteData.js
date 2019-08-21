handleSiteData({
    "url": "http://ka-hearth.learnerpages.com/",
    "title": "KA Hearth",
    "description": "A small blog where Matthias posts thoughts on things happening around Khan Academy. <a href=\"/ka-hearth/about\">About me</a>",
    "github_url": "https://github.com/MatthiasSaihttam/ka-hearth",
    "posts": [
        {
            "url": "/welcome",
            "date": "2018-09-17 00:00:00 -0400",
            "slug": "welcome",
            "title": "Welcome to the KA Hearth",
            "excerpt": "<p>My goal with the KA Hearth is to create a place to follow for news about KA, particularly the computer science section.\nI hear a lot and read a lot about this, but don’t really talk about it.</p>\n\n"
        },
        {
            "url": "/posts/error-buddy",
            "date": "2018-09-22 00:00:00 -0400",
            "slug": "error-buddy",
            "title": "Error Buddy. And how to bypass him",
            "excerpt": "<p>When Error Buddy appears in the live editor, it can be for one of five reasons. I want to make people aware of these and the differences between them.</p>\n\n"
        },
        {
            "url": "/posts/location-unchangeable",
            "date": "2018-09-24 00:00:00 -0400",
            "slug": "location-unchangeable",
            "title": "KA breaks changing your location",
            "excerpt": "<p>As pointed out by Literally Void today, you can’t currently change your location (the official way) on Khan Academy. Typing a new location in the box is supposed to propagate a list of valid locations from the Google Maps API and allow you to chose one. Currently, the request for possible locations is failing because KA isn’t using an API key, something Google requires so that they can bill people making a large number of requests. (That is, Khan Academy trying to use the free tier of the Maps API, and Google wants them to pay.)</p>\n\n"
        },
        {
            "url": "/posts/3D-on-KA",
            "date": "2018-10-23 00:00:00 -0400",
            "slug": "3D-on-KA",
            "title": "All 3D on KA is bad",
            "excerpt": "<p>I am very proud of the 3D effect I created for Terra Magma. It was much more flexible then what I ended up using it for, and in my opinion, looked a lot better than the other options at the time.</p>\n\n"
        },
        {
            "url": "/posts/new-memory-leak",
            "date": "2018-10-23 00:00:00 -0400",
            "slug": "new-memory-leak",
            "title": "Using Object Oriented Programming on KA causes memory leaks",
            "excerpt": "<p>People have known for a long time, either through word of mouth or anecdotal experience that PVectors are a laggy solution. However, relatively few know of the Khan Academy bug that causes this behavior. Indeed, I didn’t until recently. That being said, the bug has been know for quite a long time, first being reported by Bob Lyon <a href=\"https://github.com/Khan/live-editor/issues/444\">here on Github</a>. And it was <a href=\"https://github.com/Khan/live-editor/commit/011551276711abe80e60cee12253c7ceb95c6c70\">fixed</a> by Kevin Barabash shortly after being reported, but the fix was tragically <a href=\"https://github.com/Khan/live-editor/commit/4c3e42072ab53b499b19e622e6b5fa681edd4b48\">reverted</a>, for <a href=\"https://github.com/Khan/live-editor/issues561#issuecomment-194096794\">causing other, undisclosed, issues</a>.</p>\n\n"
        },
        {
            "url": "/posts/fix-for-new-issues",
            "date": "2018-10-29 00:00:00 -0400",
            "slug": "fix-for-new-issues",
            "title": "A fix for memory leaks with OOP",
            "excerpt": "<p>The issue is of course described in my <a href=\"/posts/new-memory-leak\">earlier post</a>.<br />\nI stumbled across a solution to this issue when looking at Sherlock Holme’s recent <a href=\"https://khanacademy.org/cs/i/5707702964748288\">Planes 2</a>. Include the following code snippet at the top of the program.</p>\n\n"
        },
        {
            "url": "/posts/KA-is-more-blue",
            "date": "2018-11-07 00:00:00 -0500",
            "slug": "KA-is-more-blue",
            "title": "KA is more blue",
            "excerpt": "<p>KA just updated program pages to change the user nickname, the highlight on the selected tab, and the based on link of programs to be blue, instead of green like most elements on the CS pages.</p>\n\n"
        },
        {
            "url": "/posts/Re-removing-auto-suggestion",
            "date": "2018-11-10 00:00:00 -0500",
            "slug": "Re-removing-auto-suggestion",
            "title": "KA's removing auto suggestion from the live editor (again)",
            "excerpt": "<p>I broke my silence on the <a href=\"https://github.com/Khan/live-editor\">live editor Github</a> today (which I’ve maintained since Kevin asked everybody to stop submitting pull requests). I commented, asking Pamela to reconsider her decision to remove the code that powers auto suggestion in the live editor. You can see my comment <a href=\"https://github.com/Khan/live-editor/pull/695#issuecomment-437649648\">here</a>.</p>\n\n"
        },
        {
            "url": "/posts/T-1B12P-and-the-most-voted-KA-program",
            "date": "2018-11-12 00:00:00 -0500",
            "slug": "T#1B12P-and-the-most-voted-KA-program",
            "title": "T#1B12P and the most voted program on KA",
            "excerpt": "<p>The first program on the top list is <a href=\"https://khanacademy.org/cs/i/1431776579\">doodle jump</a>, by nordituck, which currently has <span class=\"vote-count\" data-program-id=\"1431776579\">11904</span> votes. But the highest voted program on Khan Academy is <a href=\"https://khanacademy.org/cs/i/1106141208\">Ultimate Tower Defense</a>, by <a href=\"https://khanacademy.org/profile/kaid_587121826918705844471320\">The #1 Base 12 Proponent</a>, with <span class=\"vote-count\" data-program-id=\"1106141208\">14335</span> votes.</p>\n\n"
        },
        {
            "url": "/posts/auto-suggestion-update",
            "date": "2018-11-22 00:00:00 -0500",
            "slug": "auto-suggestion-update",
            "title": "Update to KA re-removing auto suggestion",
            "excerpt": "<p>This is a follow up post to <a href=\"/re-removing-auto-suggestion\">this post</a>. Read it first.</p>\n\n"
        },
        {
            "url": "/posts/csp",
            "date": "2018-11-22 00:00:00 -0500",
            "slug": "csp",
            "title": "What is the CSP",
            "excerpt": "<p>One of the most useful pieces of information you can have when trying to stretch the limits of Khan Academy’s live-editor is knowledge of the Content Security Policy (CSP). The CSP defines what domains you can load certain types of data from on Khan Academy. For information about what CSP is, see <a href=\"/posts/sandbox-post-requests\">this post</a> about making POST requests.</p>\n\n"
        },
        {
            "url": "/posts/custom-audio",
            "date": "2018-11-24 00:00:00 -0500",
            "slug": "custom-audio",
            "title": "Uploading custom audio to KA",
            "excerpt": "<p><a href=\"https://khanacademy.org/profile/kaid_901380113796617843784450\">Thomas Li</a> showed me a <a href=\"https://khanacademy.org/cs/i/6502440965406720\">program</a> he had made, which grabbed base64 audio data from the code of a KACS project, and loaded it as a <code class=\"highlighter-rouge\">data:</code> URL and played it. The problem was it didn’t work on KA because of KA’s Content Security Policy (CSP). He had a working mirror up on OurJSEditor though, and I thought it was pretty cool. My immediate reaction was, “Can I make this work on KA?”</p>\n\n"
        },
        {
            "url": "/posts/jresig-live-editor",
            "date": "2018-12-05 00:00:00 -0500",
            "slug": "jresig-live-editor",
            "title": "John Resig working on the Live Editor",
            "excerpt": "<p>John Resig recently created a <a href=\"https://github.com/Khan/live-editor/pull/696\">PR</a> on the Live Editor Github. John is the creator of JQuery and of Processing.js (the port of Processing that KA uses).</p>\n\n"
        },
        {
            "url": "/posts/processing-processing-js",
            "date": "2018-12-05 00:00:00 -0500",
            "slug": "processing-processing-js",
            "title": "Processing, Processing.js (RIP), and p5.js",
            "excerpt": "<p>There’s frequently some confusion about the differences between Processing, Processing.js, and p5.js. All three aim to run the same code, so projects created in one should translate well to the others. However, there are important differences.</p>\n\n"
        },
        {
            "url": "/posts/bypassing-slowparse",
            "date": "2018-12-29 00:00:00 -0500",
            "slug": "bypassing-slowparse",
            "title": "Bypassing Slowparse (How to avoid Error Buddy in HTML)",
            "excerpt": "<p>I’m just going to open this by saying this technique was discovered by <a href=\"https://khanacademy.org/profile/kaid_1063314115048600759228780\">Ethan</a>, and while I researched and described how it works here, I don’t deserve credit for the clever idea.</p>\n\n"
        },
        {
            "url": "/posts/hide-your-own-programs",
            "date": "2019-02-05 00:00:00 -0500",
            "slug": "hide-your-own-programs",
            "title": "How to hide your own programs from the hot list",
            "excerpt": "<p>Using a technique discovered by <a href=\"https://kaid_724017587964593627235978\">Josh</a>, it’s possible to hide your own programs from the hot list. He <a href=\"https://khanacademy.zendesk.com/hc/en-us/community/posts/115000251328\">posted about it on Zendesk</a> about 2 years ago, while asking for an official way to do the same thing.</p>\n\n"
        },
        {
            "url": "/posts/locations-removed",
            "date": "2019-02-05 00:00:00 -0500",
            "slug": "locations-removed",
            "title": "What was the location hack and what were locations?",
            "excerpt": "<h4 id=\"ka-removes-locations\">KA Removes locations</h4>\n\n"
        },
        {
            "url": "/posts/hidden-vs-deleted",
            "date": "2019-02-06 00:00:00 -0500",
            "slug": "hidden-vs-deleted",
            "title": "Hidden, Completely Hidden, and Deleted programs",
            "excerpt": "<h3 id=\"hidden-from-hot-list\">Hidden from Hot list</h3>\n\n"
        },
        {
            "url": "/posts/sandbox-post-requests",
            "date": "2019-02-25 00:00:00 -0500",
            "slug": "sandbox-post-requests",
            "title": "You can’t make POST requests on KA",
            "excerpt": "<p>I wrote this almost a year ago, but I didn’t have anywhere to put it. I just remembered it, and so I’m posting it now.</p>\n\n"
        },
        {
            "url": "/posts/saveStrings",
            "date": "2019-02-25 00:00:00 -0500",
            "slug": "saveStrings",
            "title": "The allowed [sic] way to access localStorage in PJS",
            "excerpt": "<p><strong>Update: Two weeks after I made this, KA changed the guidelines to disallow it. See <a href=\"guideline-updates\">this post</a>.</strong></p>\n\n"
        },
        {
            "url": "/posts/guideline-updates",
            "date": "2019-03-23 00:00:00 -0400",
            "slug": "guideline-updates",
            "title": "Program guidelines update: localStorage not allowed",
            "excerpt": "<p>In my last <a href=\"saveStrings\">post</a>, I described how to use <code class=\"highlighter-rouge\">saveStrings</code> in Processing.js to access <code class=\"highlighter-rouge\">localStorage</code> and save data without escaping the sandbox, and without violating KA’s rules.</p>\n\n"
        },
        {
            "url": "/posts/off-site-links",
            "date": "2019-04-20 00:00:00 -0400",
            "slug": "off-site-links",
            "title": "KA silently blocking off-site links",
            "excerpt": "<p>I recently noticed, while making a comment linking to the KA Hearth, that my comment had been hidden. The KA Extension showed it with 3 <code class=\"highlighter-rouge\">lowquality</code> flags, seconds after it had been posted.</p>\n\n"
        },
        {
            "url": "/posts/bio-links",
            "date": "2019-04-29 00:00:00 -0400",
            "slug": "bio-links",
            "title": "KA censoring links in Bio",
            "excerpt": "<p>First brought to my attention by Jett on Discord, on April 24th, KA started censoring links in user bios. A link in your bio ends up being replaced with ***. This makes sense in context of my <a href=\"off-site-links\">previous post</a>.</p>\n\n"
        },
        {
            "url": "/posts/child-accounts-stripped",
            "date": "2019-04-29 00:00:00 -0400",
            "slug": "child-accounts-stripped",
            "title": "Child Accounts stripped of bio & nicknames",
            "excerpt": "<p>When testing bio link bypasses, I noticed that child accounts no longer have a profile edit button. That is, they can’t open the panel to change their nickname, username, or bio. This is the first I’ve noticed of the change, but I don’t know exactly when it when into affect.</p>\n\n"
        },
        {
            "url": "/posts/bio-censoring-bypass",
            "date": "2019-05-03 00:00:00 -0400",
            "slug": "bio-censoring-bypass",
            "title": "Patched bypass for bio link censoring",
            "excerpt": "<p>This is the technical analysis of the KA’s code censoring, including discussion of how to bypass it, that I retracted from my earlier news post about link censoring, <a href=\"bio-links\">here</a>. I felt obliged to report this to KA, so I filed a Zendesk report, and it has been fixed, so a lot of the below analysis is outdated.</p>\n\n"
        },
        {
            "url": "/posts/ep-comment-requirement",
            "date": "2019-05-19 00:00:00 -0400",
            "slug": "ep-comment-requirement",
            "title": "EP requirement to comment",
            "excerpt": "<p>As part of continued efforts to crack down on recent issues with a spammer posting links to a Google Doc promoting Nazi and white supremacist propaganda, Khan Academy has implemented an energy point requirement before being allowed to comment. You can still see comments, but in order to post a question, answer, T&amp;T, or reply, you need at least 5,000 EPs.</p>\n\n"
        },
        {
            "url": "/posts/KA-sub-page",
            "date": "2019-06-02 00:00:00 -0400",
            "slug": "KA-sub-page",
            "title": "KA sub page for the KA Hearth",
            "excerpt": "<p>I recently created a <a href=\"https://khanacademy.org/cs/i/5479641673728000\">KA program</a> for the KA Hearth, mostly for people to subscribe and get KA notifications for new posts.</p>\n\n"
        },
        {
            "url": "/posts/better-html-screenshots",
            "date": "2019-06-02 00:00:00 -0400",
            "slug": "better-html-screenshots",
            "title": "How to get better webpage thumbnails",
            "excerpt": "<p>KA webpage thumbnails are generated by <a href=\"https://html2canvas.hertzen.com/\">HTML2Canvas</a>. This program parses your HTML and draws a picture of it on a canvas. Unfortunely, this is a hard problem, and there are lot of things that can go wrong. This posts has recommendations on how to fix some of the worst issues.</p>\n\n"
        },
        {
            "url": "/posts/being-banned",
            "date": "2019-07-02 00:00:00 -0400",
            "slug": "being-banned",
            "title": "The 16 days I was banned",
            "excerpt": "<h4 id=\"being-banned\">Being banned</h4>\n\n"
        },
        {
            "url": "/posts/profile-ui-update",
            "date": "2019-07-02 00:00:00 -0400",
            "slug": "profile-ui-update",
            "title": "Bio UI update",
            "excerpt": "<p>KA updated a couple of weeks ago to change the UI layout of user profiles and bios. I first noticed this change on June 18th. Below are screenshots before and after the changes. Prominent is the deemphasis of usernames. Visually, they now appear to be part of the bio.</p>\n\n"
        },
        {
            "url": "/posts/complete-profile-ui-update",
            "date": "2019-07-23 00:00:00 -0400",
            "slug": "complete-profile-ui-update",
            "title": "Profile UI update",
            "excerpt": "<p>My <a href=\"profile-ui-update\">last post</a> had the URI <code class=\"highlighter-rouge\">profile-ui-update</code>. That post of course described the changes to the top part of the <a href=\"https://www.khanacademy.org/profile/me\">user profile page</a>, and I imagined that was as extreme of an update as we would see from KA for a while. On the contaray, that was just the beginning of a much larger profile re-work KA unvieled earlier today (noticed first by Elijah in Discord).</p>\n\n"
        }
    ]
})