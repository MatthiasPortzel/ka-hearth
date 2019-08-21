---
title: Update to KA re-removing auto suggestion
layout: default
---

This is a follow up post to [this post]({{ "/re-removing-auto-suggestion" | relative_url }}). Read it first.

Pamela [replied](https://github.com/Khan/live-editor/pull/695#issuecomment-438061782) to my comment and said that she liked the idea of including auto suggestion as an option, but she was focused on cleaning up the underlying source of repository first. I definitely agree with her decision. I mentioned the "complicated history" of this issue, and I agree it would probably be simpler to rebuild this part of the live editor with modern components. But I guess I'm still very skeptical that anyone will go back and re-add these features that got lost over the years after the immediate rebasing is complete.

I also pointed out to Pamela how KA could remove Ace's language tools, as they were only used by auto suggestion. I'm shooting myself in the foot here a bit, because it means that if I want to turn on auto suggestion again, I have to reload these language tools. Anyways, here's the quick fix to turn auto suggestion on. It still doesn't redo KA's improvements to auto suggestion, so it doesn't suggest `ellipse` or `rect` until you've used them once in your project. I'd like to be able to support those things again, but I don't see a way to do it without manually loading the hundreds of lines of code that Pamela removed.
```js
var scriptEl = document.createElement("script");
scriptEl.setAttribute("src", "https://cdn.jsdelivr.net/gh/ajaxorg/ace-builds@1.1.4/src-min-noconflict/ext-language_tools.js");
scriptEl.addEventListener("load", function () {
    ace.require("ace/ext/language_tools");
    ace.edit(document.querySelector("scratchpad-ace-editor")).setOption("enableLiveAutocompletion", true);
});
document.head.appendChild(scriptEl);
```
