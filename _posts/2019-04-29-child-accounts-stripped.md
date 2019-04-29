---
title: Child Accounts stripped of bio & nicknames
layout: default
---

When testing bio link bypasses, I noticed that child accounts no longer have a profile edit button. That is, they can't open the panel to change their nickname, username, or bio. This is the first I've noticed of the change, but I don't know exactly when it when into affect.

Unsuprisingly, this appears to be a client side change; the API still shows a bio and nickname, but the bio is `""` and the nickname is the same as the username. And this is a child account I've had for a while, that had a changed bio, so KA actually reset these values for all child accounts.

The background and avatar can still be changed.

It is possible for a linked parent account to change the username, but not the other fields. Using the API, I was able to change the nickname of the child account, but the bio remained empty after I attempted to change it.
