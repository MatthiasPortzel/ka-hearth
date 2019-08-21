---
title: The allowed [sic] way to access localStorage in PJS
layout: default
---

**Update: Two weeks after I made this, KA changed the guidelines to disallow it. See [this post](guideline-updates).**

### What is localStorage?

`localStorage` is an object provided by the browser. You can set properties on it, and when the user leaves and comes back or refreshes the page, the properties you set will still be there. Local Storage is easy to use in KA's webpage environment ([MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)), but though people have hacked it in, KA doesn't allow accessing it in the Processing.js environment.

### How do I use it in Processing.js?

`saveStrings` and `loadStrings` are functions originally used by Processing to write data to a file. In Processing.js they write and read data from `localStorage` (what's the difference?: [Processing vs. Processing.js]({{ "/posts/processing-processing-js)" | relative_url }}). For example:
```js
saveStrings("ka-hearth-saving-example", ["hi", 500, {}, "multi\nline"]);
```
The user can reload the page here.
```js
loadStrings("ka-hearth-saving-example"); //Returns ["hi", "500", "[object Object]", "multi", "line"]
```

As you can see, `saveStrings` has to take an array of data to store, and all data gets converted to strings. Similarly, `loadStrings` returns an array. I included a couple of weird types in that example, if you're just saving and loading normal strings, you shouldn't have any issues. But for example, if your strings have `"\n"`, they're going to get split by `loadStrings`.

I use `ka-hearth-saving-example` as the name of the data in that example. Since local storage is done on a per-domain basis, all KA programs use the same local storage dictionary. If a different KA program had a `"high-score"` in local storage and I used `"high-score"`, the two would conflict. I recommend for that reason using a unique string as your key.

Demo program on KA [here](https://khanacademy.org/cs/i/5287548549169152).

### And this is allowed?

It's likely that KA originally didn't know about this functionality when they used Processing.js. Recently, on Discord, [Josh](https://www.khanacademy.org/profile/kaid_724017587964593627235978) stated that this was allowed, since it was native Processing.js functionality, and wasn't breaking the sandbox or accessing the DOM, which are the things disallowed by KA's rules. Here's his message:

> Anyway, go ahead and use `saveStrings()` and `loadStrings()` in PJS env. for now. Sponge says it's ok unless you hear otherwise from another moderator or staff.  Please mind the following caveats:<br>
Be nice to each other and mind the namespacing  best practices. Don't call your strings something like `highscore`, try something like `spongejr-hoppershappyadventure-highscore` -- that will help you avoid collisions with others' projects *and* your own. Be reasonable with what you store there so that you don't fill anyone's localStorage up. Keep in mind that the functionality could disappear at any time, especially if it should cause moderation issues.<br>
Have fun, and learn lots and teach lots.
