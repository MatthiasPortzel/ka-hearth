---
title: You can’t make POST requests on KA
layout: default
---

I wrote this almost a year ago, but I didn't have anywhere to put it. I just remembered it, and so I'm posting it now.

Also see the much shorter CSP post [here](/ka-hearth/posts/csp).

**TL;DR:** You can't make POST requests. You don't want to be able to make POST requests.

### POST requests

Most requests to the API are GET requests, for example when visiting a link in the browser. Data is being requested, no data is being sent from the user's account. POST requests (and also PATCH requests, but KA doesn't use those) are when data is sent from the user to the server and saved. Most prominently, posting and editing comments, voting up programs, and updating bio information require POST requests, but there's a lot of obscure stuff (like adding coaches) that also requires them.

### The Sandbox and Same Origin Restrictions

Programs on Khan Academy are sandboxed, or run inside an `iframe` with security settings turned on. An [`iframe`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) is an HTML element that embeds the content of another website. For websites on the same domain, this really isn't limited, and Javascript inside the iframe can access everything the normal page can. But when a website from a different domain is included, then [Cross Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) begins to apply.

Cross Origin Restrictions are implemented and enforced by the browser. The iframe Khan Academy programs run in is hosted on the www.kasandbox.org domain, in order to force these restrictions into effect. They prevent a website, such as the one inside an iframe, from interacting with another website the user happens to have open. Attempting to do so, for example by running the following code on in a Khan Academy HTML program, will cause the browser to throw an error saying something like `SecurityError: Blocked a frame from accessing a cross-origin frame. Protocols, domains, and ports must match.`

```html
<script>
    //Fails with a SecurityError
    console.log(window.top.location.href) //Try to print the URL of the window this is embedded in.
</script>
```

Cross Origin Restrictions are a basic security measure. But the [sandbox](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox) is one step further that. Sandboxing an iframe prevents what it can do itself, not just how it can interact with other windows. Khan Academy requests programs be sandboxed, and browsers implement it. KA specifies a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy), which sets out what the webpage can and can't do. The complete policy is below. For example, `style-src` proceeds a list of domains a program can get CSS from.

```css
default-src 'none';
font-src data: 'self' fonts.gstatic.com themes.googleusercontent.com *.bootstrapcdn.com;
img-src *.kastatic.org www.khanacademy.org *.kasandbox.org chart.googleapis.com upload.wikimedia.org ka-perseus-images.s3.amazonaws.com 'self';
media-src *.kastatic.org www.khanacademy.org *.kasandbox.org;
style-src *.kastatic.org www.khanacademy.org 'self' cdn.rawgit.com rawgit.com *.bootstrapcdn.com fonts.googleapis.com cdnjs.cloudflare.com 'unsafe-inline';
script-src *.kastatic.org www.khanacademy.org 'self' cdn.rawgit.com rawgit.com ajax.googleapis.com cdn.jsdelivr.net cdnjs.cloudflare.com 'unsafe-inline' 'unsafe-eval';
child-src *.kastatic.org www.khanacademy.org 'self';
```

### Making POST requests inside the sandbox

As seen above, the `connect-src` policy is not set, and `default-src` is set to `none`, and `allow-forms` is not set, so it shouldn't be possible to make these requests. There might be a way to work around this, but as far as we know, there isn't. Older browsers might not enforce the policy. It might be possible to have users disable cross origin restrictions in their browser settings. It might be possible to do something complicated like embed an iframe with a custom form. However, nothing found thus far will work reliably across multiple browsers or without extra user action. A program could also try to escape the sandbox, running illegal code in the main page. One way to do this is demonstrated [here](https://khanacademy.org/cs/i/6396708672897024). It basically has the user run a bookmarklet which allows the page to break out of the sandbox. While this works, it or any other way of exiting the sandbox would not be allowed, because it would give you complete access to the user's account, which the program needs in order to make POST requests on the user's behalf, but would also let the program, theoretically delete his/her account or edit programs. Not mention that a single bug in your code could let anybody else using your program control the accounts of other users', then delete all their programs or otherwise wreck havoc.
