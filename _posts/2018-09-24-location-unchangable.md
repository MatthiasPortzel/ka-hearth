---
title: "KA Breaks changing your location"
layout: "default"
---

As pointed out by Literally Void today, you can't currently change your location (the official way) on Khan Academy. Typing a new location in the box is supposed to propagate a list of valid locations from the Google Maps API and allow you to chose one. Currently, the request for possible locations is failing because KA isn't using an API key, something Google requires so that they can bill people making a large number of requests. (That is, Khan Academy trying to use the free tier of the Maps API, and Google wants them to pay.)

I'm interested to know when this issue first began occurring. I first heard about it today, but I also haven't changed my location to a valid location in a couple of years. Google ([here](https://cloud.google.com/maps-platform/user-guide/)) claims "As of June 11, 2018, you must enable billing with a credit card and have a valid API key for all of your projects." And while it's possible this has been broken since June, it's also possible KA was using an API key until a couple of days ago, when they redid the interface for editing your profile, and somehow the key got dropped in that update.

To clarify, this issue effects changing your location to an actual place; changing your location with a location text hack (either [my bookmarklet](https://khanacademy.org/cs/i/5671169815) or through the Firefox developer tools) is now the only way to change your location. However, this issue remains interesting, because it represents a relatively obscure feature of the site totally breaking, and I'm curious how long it will take for KA to fix this. The issue with including `"<", ">", "&"` in profiles hasn't been fixed, despite having been a big deal when it was introduced a year ago, so I wouldn't be surprised if we went a long time before this issue is fixed as well.
