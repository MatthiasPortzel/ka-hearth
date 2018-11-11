---
layout: "default"
title: "KA's removing auto suggestion from the live editor (again)"
---

I broke my silence on the [live editor Github](https://github.com/Khan/live-editor) today (which I've maintained since Kevin asked everybody to stop submitting pull requests). I commented, asking Pamela to reconsider her decision to remove the code that powers auto suggestion in the live editor. You can see my comment [here](https://github.com/Khan/live-editor/pull/695#issuecomment-437649648).

In that comment, I mention a code snippet I use to turn on and off live autosuggestion. If KA goes through with this change, I'll probably make a new post with an updated code snippet to restore some of the live suggestion functionity. For now, here's my current code (to be run in the console of KA program page):
```js
//Turn it on. You could add other Ace options here too, even without the lower line.
ScratchpadAutosuggest.editor.setOptions({enableLiveAutocompletion: true});
//Overwrite KA's function to keep them from turning it back off
ScratchpadAutosuggest.enableLiveCompletion = function () {};
```

Auto suggestion was added to the live editor 4 years ago, shortly after the live editor was created. 3 years ago, Gigabyte Giant contributed some code to conditionally turn on and off autosuggestion. 6 months later, KA decided auto suggestions would be "more confusing than it is helpful" ([quote](https://github.com/Khan/live-editor/pull/498#issuecomment-160809824)) for participants in Hour of Code. Rather than just turning it off by default, they turned it off in such a way that Gigabyte Giant's options to reenable it no longer worked. Several people have requested this change be undone. KA hasn't listened.

My hope, when I heard that Pamela returned to KA to fix up the live editor would be that she would resolve issues like these with complicated histories and relatively simple solutions. If she removes this code altogether, she would be resolving this problem. But I obviously would like auto suggestion, at least as an option, and my first comment on the live-editor in a year and a half says as much. We'll see if KA listens.
