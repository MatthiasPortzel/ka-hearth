---
title: "Using Object Oriented Programming on KA causes memory leaks"
layout: "default"
slug: "new-memory-leak"
---

People have known for a long time, either through word of mouth or anecdotal experience that PVectors are a laggy solution. However, relatively few know of the Khan Academy bug that causes this behavior. Indeed, I didn't until recently. That being said, the bug has been know for quite a long time, first being reported by Bob Lyon [here on Github](https://https://github.com/Khan/live-editor/444). And it was [fixed](https://github.com/Khan/live-editor/commit/011551276711abe80e60cee12253c7ceb95c6c70) by Kevin Barabash shortly after being reported, but the fix was tragically [reverted](https://github.com/Khan/live-editor/commit/4c3e42072ab53b499b19e622e6b5fa681edd4b48), for [causing other, undisclosed, issues](https://github.com/Khan/live-editor/561#issuecomment-194096794).

### What's the issue?
Every time you use the `new` keyword on KA, the live-editor does a lot of extra work to parse and apply your code. One of the things it does is save the resulting object (for example, the new PVector) into an array. The side effect of this is that if you let the program continue to run, it will continue to add objects to this array. If you're creating several new objects every tick, it is not unsurprising that you start to see lag, because these objects keep building up and filling the user's RAM. The problem comes when you have throw-away objects, like a PVector that you add to an object's position, but don't save into a variable. All these throw-away values get added to this `instances` array, so the browser can't forget about them like it should. This is what's know as a memory leak. After a couple of minutes, depending on the intensity of your program, the user's computer will run out of RAM, and the browser will crash or restart the page.

Now, I use PVectors primarily as an example here. This same bug effects any user code, it's just that it's very easy to create PVectors for a short period of time; for example, to add to the position of every particle, every tick. This shouldn't cause a long term issue. But it does.

### How can I avoid it?

**Update**: See my [follow-up post](/ka-hearth/posts/fix-for-new-issues) for a solution.

I'm going to include here several interesting code snippets I used for testing this, before confirming my findings with the Github issues linked above. The short answer is: don't create throw-away instances of classes.

PVector, Crashes with loop error after about 40 seconds,
```js
var obj = new PVector(width/2, height/2);

var draw = function() {
    background(255);
    ellipse(obj.x, obj.y, 10, 10);

    for (var i = 0; i < 10000; i ++) {
        obj.add(new PVector(random(-1, 1), random(-1, 1)));
    }
};
```

I thought using a custom Vector object might help. With the same code as above, but with `MVector` instead, I got the same results as with `PVector`.
```js
var MVector = function (x, y) {
    this.x = x;
    this.y = y;
    this.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
    };
};
```

With no `new` and no OOP, there's no noticeable lag at all, even after 5 minutes.
```js
var obj = new PVector(width/2, height/2);

var draw = function() {
    background(255);
    ellipse(obj.x, obj.y, 10, 10);

    for (var i = 0; i < 10000; i ++) {
        obj.add( {x: random(-1, 1), y: random(-1, 1)} ); //PVector.add doesn't care if it's a PVector
    }
};
```

I attempted to write a patch that could be included in other code to mitigate this issue. I'll include my attempt below. I think I technically succeeded; the page didn't crash after a couple of minutes, so I don't think there's a memory leak. However, the program was still extremely laggy (running at about 10 fps, compared to the 60fps of the last example). I definitely think avoiding `new` for throw-away values is the best option.
```js
var obj = new PVector(width/2, height/2);

/*jshint ignore:start*/
PJSCodeInjector.instances = {length: 0, push: function () {}};
/*jshint ignore:end*/

var draw = function() {
    background(255);
    ellipse(obj.x, obj.y, 10, 10);

    for (var i = 0; i < 10000; i ++) {
        obj.add(new PVector(random(-1, 1), random(-1, 1)));
    }
};

var mouseClicked = function () {
    /*jshint ignore:start*/
    debug(PJSCodeInjector.instances, this.__frameRate);
    /*jshint ignore:end*/
};
```
