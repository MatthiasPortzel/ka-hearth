---
title: "What was the location hack and what were locations?"
layout: "default"
---

#### KA Removes locations

On Januaray 9th, 2019, Khan Academy removed locations from the website. I'm about a month late for this to be news, but I think it's important enough an event to still be worth covering. (I first saw this noted by Nicholas.) This marks the resolution to [locations being unchangeable](location-unchangeable), and also to the Location Hack. At risk of being cynical, it seems like a typical KA fix to remove the cause of the problem rather than fixing it.s

#### What were locations?

Locations were a line of text under bios on the profile page. In the normal profile editing UI, you could only set the location to options chosen from a dropdown, provided by the Google places API.

![](/ka-hearth/assets/images/pamela-location.png)

Pamela's profile with a location (screenshot credit Light Runner for the KA Users Wikia).

#### What was the location hack?

The location hack was one of many exploits discovered by [Loki](https://khanacademy.org/profile/kaid_1167230140884859457175747). KA's servers didn't check if the location was valid, so if you forged a request with a location that wasn't a place, you could put arbitrary text underneath your bio. Some people used this to circumvent the character limit, using it as a second bio, and others put creative or fantasy locations.

The classic method for doing the location hack relies on using the Firefox developer tools to resend a fake request. KA knew about it, but asked people not to share how it do it. If you could figure it out, then you got a cool location few else had. At least until Aidabaida (in a now deleted program) described how it do it publicly. This was the first time a majority of active users were able to do the hack.<br>
I had discovered a way of doing it without using Firefox, but I didn't describe it until Aidabaida's program, at which point I felt that the secret was out, and created [my own tutorial](https://khanacademy.org/cs/i/5671169815).<br>
The KA Extension also had a nice feature that allowed you to change your location easily, adding a textbox for it on the profile edit screen.

By the time KA removed locations, they were an integral part of the profile, mostly because of the ability to put arbitrary text there.
