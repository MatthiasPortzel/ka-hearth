---
title: What is the CSP
layout: default
slug: "csp"
---

One of the most useful pieces of information you can have when trying to stretch the limits of Khan Academy's live-editor is knowledge of the Content Security Policy (CSP). The CSP defines what domains you can load certain types of data from on Khan Academy. It's returned as one of the headers (`content-security-policy`) from `https://www.kasandbox.org/computer-programming/exec/pjs`. Last I checked, the CSP for both the webpage and PJS environments is what's listed below:

Data Type | CSP name | Valid values
--- | --- | --- |
Default | default-src | 'none'
Fonts | font-src |  data:<br>'self'<br>fonts.gstatic.com<br>themes.googleusercontent.com<br>\*.bootstrapcdn.com
Images | img-src | \*.kastatic.org<br>www.khanacademy.org<br>\*.kasandbox.org<br>chart.googleapis.com<br>upload.wikimedia.org<br>ka-perseus-images.s3.amazonaws.com<br>'self'
Videos & Audio | media-src | \*.kastatic.org<br>www.khanacademy.org<br>\*.kasandbox.org
CSS | style-src | \*.kastatic.org<br>www.khanacademy.org<br>'self'<br>cdn.rawgit.com<br>rawgit.com<br>\*.bootstrapcdn.com<br>fonts.googleapis.com<br>cdnjs.cloudflare.com<br>'unsafe-inline'
JavaScript | script-src | \*.kastatic.org<br>www.khanacademy.org<br>'self'<br>cdn.rawgit.com<br>rawgit.com<br>ajax.googleapis.com<br>cdn.jsdelivr.net<br>cdnjs.cloudflare.com<br>'unsafe-inline'<br>'unsafe-eval'
iframes | child-src | \*.kastatic.org<br>www.khanacademy.org<br>'self';
