---
title: "Bypassing Slowparse (How to avoid Error Buddy in HTML)"
layout: "default"
---

I'm just going to open this by saying this technique was discovered by [Ethan](https://khanacademy.org/profile/kaid_1063314115048600759228780), and while I researched and described how it works here, I don't deserve credit for the clever idea.

### Background

[Josh](https://khanacademy.org/profile/kaid_724017587964593627235978) recently posed a question on UKADS, where he asked how to avoid the Error Buddy errors created by attempting to use Vue.js inside of Khan Academy's webpage environment.

I had a couple of ideas, but none of them worked as well as the solution posted by Ethan. He linked to a [comment](https://khanacademy.org/cs/i/4992020057718784?qa_expand_key=kaencrypted_b0522ce23ec5dd28239294f6bc06eba9_f2dbccc62aa0e56d2a3ebe5cbee53c840f3a14d901cdd7b3c92b251f84ea51eb9e040c5d8d400f1cdbeb64298065bb9fa0a0853a65e562c9634397b890f9d8d965f926f6a7591038adcb2158fe5a8416989abcc25d22e76283a8edaf46c157c12e413c65f4bc29b9757c76da85a1f150a3ca31b7b14776bac5ba8e27845df0756fe47626c0faddbfc215c4a088d8034e6d1e2c9494d3616ca534e628a978cb16a6946df30d6bc8066600b6a67c03e84f44abda804774fbb0b78d5b16e07eed22) he had made (on one of [Luke's](https://khanacademy.org/profile/kaid_933093676418892226040682) programs), explaining the following trick.

### The problem

Okay, just a little more before we get to the interesting part. I want to mention that the parser used by KA ([live-editor source link](https://github.com/Khan/live-editor/commit/7b2418209fd935c61aa0916f02893ea8d7dd7ea2)) for webpage projects (as Josh identified), is [Slowparse](https://github.com/mozilla/slowparse), by Mozilla. It's meant as an HTML validator, and so it throw errors for the custom attributes that Vue requires but that are not allowed by the HTML standard. Unfortunately, there's no official way to turnoff its errors like there is with JSHint.

One interesting thing to note, is that no run time errors in the webpage environment are passed to Oh Noes. This is in contrast to the `try...catch` step in the [PJS error flow](/ka-hearth/posts/error-buddy). Instead, webpages go through these steps:

1. Script tags have infinite loop protect code added. (This requires parsing the JS with [Eprisma](https://github.com/Khan/live-editor/blob/67e6b62e9bca6b3ed6dc5dfdcedae98c86df5af1/js/output/shared/loop-protect.js#L197), so Javascript syntax errors will be returned here.)
2. HTML is parsed with Slowparse.
3. Some other changes are made ([source](https://github.com/Khan/live-editor/blob/fa96f04c7302b370dbbebc184a57309853d6d060/build/js/live-editor.output_webpage.js#L838)). Notably, links have a redirect confirm added and the title tag is kept in sync with the page title.
4. The HTML is inserted into the page and run.

# The solution

In order to get Slowparse to not parse our HTML code, Ethan put it inside a `script` tag with a `type` attribute. Of course, the HTML doesn't run here, but we can get it easily with Javascript and insert into the page. This is more or less equivalent to putting the HTML code inside a Javascript string or loading it from a different program, but this has the advantage that you can edit it in a more normal fashion. Slowparse is smart enough to not run Javascript parsing on it, because of the `type="text/html"` tag. [The MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type) specifies that if `type` is anything other an a Javascript type, it is ignored by the browser, and treated as a data block, and Slowparse complies with this.

Here's a quick inline example, or you can checkout a [demo KA program](https://khanacademy.org/cs/i/5614082676129792);

```html
<html>
<body>
    <script type="text/html" id="htmlDataBlock">
        <div fake:attr="hello">Test</div>
    </script>

    <script>
        el = document.getElementById("htmlDataBlock");
        el.outerHTML = el.innerHTML; //Replaces the tag and nested HTML with the inner HTML.
    </script>
</body>
</html>
```
