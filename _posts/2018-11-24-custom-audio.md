---
title: Uploading custom audio to KA
layout: default
---

[Thomas Li](https://khanacademy.org/profile/kaid_901380113796617843784450) showed me a [program](https://khanacademy.org/cs/i/6502440965406720) he had made, which grabbed base64 audio data from the code of a KACS project, and loaded it as a `data:` URL and played it. The problem was it didn't work on KA because of KA's Content Security Policy (CSP). He had a working mirror up on OurJSEditor though, and I thought it was pretty cool. My immediate reaction was, "Can I make this work on KA?"

To cut the suspense, [yes](https://khanacademy.org/cs/i/5490650088374272) (though that proof of concept program was hidden). The CSP for media (like audio) is `*.kastatic.org www.khanacademy.org *.kasandbox.org` (see my [CSP reference post](/ka-hearth/csp)). This means we can only load audio from those domains, not from a random place on the internet or from arbitrary data. Theoretically, the screenshot hack allows us to host audio on `www.khanacademy.org`, which we can then load and play. There was the question of Content-Type, but the `new Audio` function in Javascript doesn't check content type, which allows this exploit to work.

### Overview of the screenshot hack

Generally, the screenshot hack allows you to get a screenshot (or thumbnail) for your program that doesn't match the actual program output. Normally, when you save a KA program, KA takes a "screenshot" of the program, on your computer, and then uploads that to their servers with the rest of the program data you're trying to save (like the code). The screenshot hack was first popularized by [Loki](https://khanacademy.org/profile/kaid_1167230140884859457175747), around 2014. He used it to make programs with animated thumbnails. If you're interested in how to do this hack exactly, Bob Lyon has an [excellent tutorial](https://khanacademy.org/cs/i/5159970200). But basically, we make a request identical to the one KA uses to save the program, except that instead of sending the image data for the current program, we send image data for a different image, even an animated GIF.

### Uploading Audio as a screenshot

To play custom audio, we have to take the screenshot hack one step further. KA expects the image data for a PNG. KA doesn't do any sort of check to see if this uploaded data is an image of the type they expect. (This type of check is notoriously difficult to do). So to get audio, we can upload an audio file in place of the screenshot data. The file needs to be converted to base64. That can be done easily by using an online file-to-base64 converter (or with some python code).

I'm avoiding going into too much detail, mostly because the details are very hard to work through. The best tool for doing this kind of hack is probably the Firefox developer tools (what Bob Lyon describes how to use), but really any approach requires editing KA's long JSON requests and moving around huge base64 strings by hand.

### The small issue of Content-Type

When I first got the idea to try this, I didn't think it would work because of Content Type headers. I had previously tried to use the screenshot hack to store HTML data. While the data was stored correctly, no modern browser would load it when navigating to page, because KA returned the Content-Type header for an image. The browser tried to display it as an image and failed, because it was HTML data, not image data. The same thing applied for loading this data in an iframe. If this had worked, it would have caused *major* security issues.

The [`Audio` constructor](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement), however, doesn't check the Content-Type of the data it is requesting. This is definitely weird. It's not a security issue as such--the worst someone could do was play "illegal" sounds--but it seems like this is a browser bug. If I took the time to find the correct place to report this, it would probably be fixed/changed in the future. Speaking of browsers, this proof of concept doesn't seem to work on Safari. The error I was getting was vague, though, so it's possible Safari isn't smart enough to realize the security issue, and was having issues playing the media in the later place.

### Is this allowed?

I talked to [Josh](https://khanacademy.org/profile/kaid_724017587964593627235978) and he said no. He seemed receptive to the general idea, but I can understand how uploading whole files in a place KA doesn't want to upload files in the first place is something KA wants to shut down. My initial proof of concept program as well as a pretty sweet [program](https://khanacademy.org/cs/i/5729098250485760) Thomas made, both got completely hidden. Don't do this at home kids.

### Examples
**HTML**
```html
<button onclick="snd.play()">Click me!</button>
<script>
    var snd = new Audio("https://www.khanacademy.org/computer-programming/i/5032949717827584/5676830073815040.png");
</script>
```

**Processing.js**
```js
var getAudio = function (url) {
    return (new ((function (a) { return this[a]; } )("Function"))("return new Audio(\"" + url + "\")"))();
}

var snd = getAudio("https://www.khanacademy.org/computer-programming/i/5032949717827584/5676830073815040.png");

var mouseClicked = function () {
    snd.play();
};
```


<!--
\*These types of checks are notoriously difficult to do. Most websites don't try to do them.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement

https://khanacademy.org/cs/i/5490650088374272 - my program

https://www.browserling.com/tools/file-to-base64

https://khanacademy.org/cs/i/5159970200 -- Bob

https://khanacademy.org/cs/i/5729098250485760 -- Thomas's second program
-->
