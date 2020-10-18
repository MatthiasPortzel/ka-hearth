---
layout: default
title: Using ES6 in KA HTML
---

#### Intro
Using ES6 in the KA webpage environment is obviously desirable. And unlike the Processing.JS environment, it's quite feasible. 

For detail on how and why KA parses your HTML, see [this post](bypassing-slowparse), which seeks to answer how to disable Slowparse for large swaths of HTML. 

#### The trick
If, however, you merely want to disable KA's parsing of your Javascript, you can put your Javascript inside a script tag with the type set to `application/javascript`.

Unfortunately, because KA doesn't completely clear the window before re-running code, you can't use `const` or `let`.

This technique also has the benefit/risk of bypassing KA's infinite loop protection.  

#### How it works
Slowparse tries to follow the HTML spec as closely as possible, so it ignores `script` blocks that don't have a `script` type set to `text/javascript` (or unset of course). Browsers, on the other hand, will run code with a `script` that is any of the [valid MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types) (or unset, or an empty string).

#### Example

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Example</title>
</head>
<body>
    <script type="application/javascript">
        // `var` because `let` and `const` still don't work  
        var test = () => {
            console.log("Hello");
        }
        test();
    </script>
</body>
</html>
```

