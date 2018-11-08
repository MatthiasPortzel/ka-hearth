---
title: "Error Buddy. And how to bypass him"
layout: default
---

When Error Buddy appears in the live editor, it can be for one of five reasons. I want to make people aware of these and the differences between them.

### 1. Baby Hint
Baby Hint ([Github source](https://github.com/Khan/live-editor/blob/master/js/output/pjs/babyhint.js)) is the error catching written by Khan Academy. It is the first thing that runs, because it tries mostly to catch errors that would be caught by the next two systems, but tries to provide friendlier error messages. For example, if you type `recta(200, 200, 50, 50);`, Error Buddy will prompt you with

> `recta` is not defined. Maybe you meant to type `rect`, or you're using a variable you didn't define.

This error is throw from Khan Academy, from Baby Hint. The other systems don't offer suggestions (generally), and they don't know about the `rect` function, which is exclusive to Processing.js. BabyHint also throws errors if you try to use reserved words, like `location`.

Baby Hint is relatively easy to break. It is has some logic for searching for comments, but it's far from perfect. Ben Burrill cleverly worked around this by escaping the start of a multi line comment inside a regular expression (`/\/*/`), which tricks BabyHint into thinking the rest of the program (or until a `*/`) is inside a comment block. I stumbled across a similar bug with a one line block comment followed by a single line comment (`/**///`).

### 2. JSHint

[JSHint](https://jshint.com) is probably the most extensive error checking that takes place. It's what notices when you forgot to define a variable, or don't close a multiline comment, or try to use features that are bad practice (like `eval`), or you're missing a semi-colon. JSHint is a product not just used on Khan Academy, so it has a lot of features KA doesn't take advantage of.

One easy example is options. For example, if you type `==`, you probably meant `===`, and JSHint (through Error Buddy) will tell you so. But maybe you actually want to use the `==` operator. There's a JSHint option for that, and if you add `//jshint eqeqeq:false` to the top of your code, Error Buddy won't error on double equals anymore. You can see all JSHint options [here](http://jshint.com/docs/options/), and I highly recommend glancing through them. I should probably also mention that adding `/*jshint ignore:start*/` to the top of your program will disable all JSHint errors for the program.

### 3. Syntax Error

A syntax error ([Github link]([here](https://github.com/Khan/live-editor/blob/11b9fb0c3d27bd0ff773cc9b4962506a064a9a41/js/output/pjs/pjs-code-injector.js#L495))) is perhaps the simplest and most deadly mistake you can make. This looks like forgetting a closing bracket, for instance. Normally, JSHint (#4) would catch this, but if JSHint fails to realize anything's wrong (or you've disabled JSHint errors), you'll still get an error. This is because KA parses and transforms your code before running it. I don't want to go into too much detail about that process here except to say that if your code can't be parsed, it can't be run and you'll get an error. In a normal environment, the easiest way to see one of these errors is putting a random back-tick (`` ` ``) somewhere in your code.

### 4. Try Catch
A `try...catch` block ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)) is a native Javascript feature. It prevents errors that occur inside the `try` from stoping the execution of the program, instead informing the `catch` block of the error. This is the last resort for Khan Academy's error catching. Khan Academy takes the error message that the browser throws, and passes it to Error Buddy. For example, the following code

```js
    var a = {};
    a.hello();
```

produces the following error from Error Buddy:

> \__env__.a.hello is not a function

It should go without saying, this is not an error message that Khan Academy or any one else wrote for you. This the direct Javascript error from running your code (after KA's modifications--hence the `__env__.`).

### 5. Loop Errors
These errors are possibly the weirdest, in that they're the least like the other types. 

### 6. Errors Not Caught
I suppose there's a sixth type of error on Khan Academy, and those are the ones not caught by Error Buddy. These errors aren't caught by option 4 for some reason, and instead fall through to the developer console, silently halting the execution of code in the live editor. It's relatively hard to find one of these, but [this program](https://www.khanacademy.org/cs/i/6715456460554240) represents one. This particular bug with the live editor was brought up by a user [here](https://github.com/Khan/live-editor/592) (and should really be reopened, since it still effects the editor).
