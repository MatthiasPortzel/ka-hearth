---
title: "A fix for memory leaks with OOP"
layout: "default"
---

The issue is of course described in my [earlier post](/ka-hearth/posts/new-memory-leak).<br>
I stumbled across a solution to this issue when looking at Sherlock Holme's recent [Planes 2](https://khanacademy.org/cs/i/5707702964748288). Include the following code snippet at the top of the program.

```js
Object.constructor.prototype.create = function () {
    var obj = Object.create(this.prototype);
    this.apply(obj, arguments);
    return obj;
};
```

Then instead of using `new`, one can use `WhateverClass.create(params)`. This allows you to bypass KA's parsing of `new` and their pesky ApplyInstance code. If you're going to be writing complex, Object Oriented code on Khan Academy, of the sort that I advised against in my previous post, I can recommend this method as a way to cut down on lag.

A short history of this code snippet*:
 - It originates [here](https://khanacademy.org/cs/leak/5149570618228736?qa_expand_key=kaencrypted_253e5ac20a52281419c6e0aedb0aec2d_e878108bbeb73878eb650faaded8f65d644e0c73ad245cab12046e609eb6531e3360bb463d762b487232c13c6b8f74d3e18b6245d95d071e41935bdce7ac2039c100ad1b73fe91467c1a2ef161e80bdb07696cba5bfe991bd9b3b4ff8b9165e6a125981e0130c52d105a4654faadc15490de166138d7dcd2b172380ba6f4bd0824969a58b03f12a6a542eb4b6592375c1072f15da363d8eb32ef71bc66d7b34ed9caf752cb83b57bcd3633b9106b0c3b2e1e9b4e44482491196d23870f6b1073), in a crude form, two years ago, by AWC.
 - It's picked up by Lin Gh. in a May 2018 [blog post](https://khanacademy.org/cs/i/5142208270336000)
 - The current version more or less appears in one of Talid Muhbib's programs, but I'm not sure where he got it from. I've seen several people using it recently, and it seems to be rightfully becoming mainstream.

\*If you used this earlier but didn't end up on this list, let me know, but the above happened to be the people I saw using it. I'm sure it's more well know than I realized and this is not meant to be a conclusive history.

The below code (which crashed in less than a minute with `new`), ran fine and without lag during my testing. Though the framerate seemed slightly slower than without OOP, I'm sure it's not much worse than `new` would be without KA's fiddling.

```js
Object.constructor.prototype.create = function () {
    var obj = Object.create(this.prototype);
    return this.apply(obj, arguments), obj;
};

var obj = new PVector(width/2, height/2);

var draw = function() {
    background(255);
    ellipse(obj.x, obj.y, 10, 10);

    for (var i = 0; i < 10000; i ++) {
        obj.add(PVector.create(random(-1, 1), random(-1, 1)));
    }
};
```
