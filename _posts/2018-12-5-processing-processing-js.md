---
title: "Processing, Processing.js (RIP), and p5.js"
layout: "default"
---

There's frequently some confusion about the differences between Processing, Processing.js, and p5.js. All three aim to run the same code, so projects created in one should translate well to the others. However, there are important differences.

 - [Processing](https://processing.org) is a computer programming language, created in 2001 and based on Java. It focuses on bringing code to the visual arts. It has a relatively intuitive system for drawing and coloring shapes on the screen.
 - [Processing.js](http://processingjs.org) is an unofficial Javascript port of Processing created by John Resig in 2008. Because Javascript and Processing both use Java syntax, Processing.js is basically just a library.
 - [p5.js](http://p5js.org) was created later (2013), by the official Processing Foundation (the same people who originally made Processing).

Khan Academy hired John Resig, and (among other things) had him work on their Live Editor. KA PJS programs use Processing.js. Processing.js has not been actively maintained, and as of yesterday (December 4, 2018) has been [archived](https://github.com/processing-js/processing-js). So there will be no changes to Processing.js in the future. New programs, for example, on OurJSEditor, should use p5.js, the maintained and official version. It remains to be seen if KA will ever switch away from Processing.js or if they will even maintain their own [fork](https://github.com/Khan/processing-js).
