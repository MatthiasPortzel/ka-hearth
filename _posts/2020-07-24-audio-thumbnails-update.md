---
layout: default
title: Audio thumbnails patched
---

This is a followup to a previous [post](/posts/custom-audio), which described how it was possible to upload arbitrary base64 data to KA as a program image ("thumbnail" or "screenshot").

KA has patched out this behavior, by adding a check to the type of data that you are uploading.

Attempting to upload data of a different type, yeilds a 400 error with the following message:

    Bad data supplied: Image must be png or gif format

Uploading animated GIFs still works, and this language implies that this behavior is intential.

(They are not verifying that the image data is valid, merely that it is an image. Uploading an invalid/corrupted PNG with an intact header is allowed. The file type that you send e.g. "data:image/png;base64," is ignored, only the base64 data is used.)

[Thomas Li](https://khanacademy.org/profile/kaid_901380113796617843784450), the inspiration for this technique, was able to continue to load arbitrary audio less-directly, by storing it in the code of another program. [Example](https://www.khanacademy.org/computer-programming/play-buffer-v21/5998595453304832) (probably hidden by now).
