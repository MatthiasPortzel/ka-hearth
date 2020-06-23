---
title: Child account status is now checked through in the API
layout: default
---

Child accounts on KA can perform limited actions, like they cannot comment on programs. Previously, this was only checked on the client side, and by running some code, it was trivial to allow a child account to comment like a normal user.

Following a Hacker1 report I made in February of 2019 which mentioned this issue, KA has notified me that it has now been fixed. And indeed in my test I was met with a 401 Unauthorized error when attempting to comment while logged to a child account.

It's good to see that KA is taking the time to fix backend API issues in the move to graphQL.
