---
title: "How to hide your own programs from the hot list"
layout: "default"
---

Using a technique discovered by [Josh](https://kaid_724017587964593627235978), it's possible to hide your own programs from the hot list. He [posted about it on Zendesk](https://khanacademy.zendesk.com/hc/en-us/community/posts/115000251328) about 2 years ago, while asking for an official way to do the same thing.

[Art Maker Pro](https://khanacademy.org/cs/i/5733417664643072) is a program created by [Timothy Smith](kaid_260898553571312085319284). It lets you draw and create cool animations that you can post in a new program. These programs however had a tendency of getting votes, despite not being high quality. KA's solution was to add a blacklist. If a program is created with the string `/cs/pro/5733417664643072`, it will be hidden from the hot list.

It's very important to note that this check is preformed exactly once per program, when the program is first created. If you add this a program later, it has no effect. If you remove the string after it's created, the program will stay hidden.
