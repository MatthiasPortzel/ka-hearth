---
title: Profile UI update
layout: default
---

My [last post](profile-ui-update) had the URI `profile-ui-update`. That post of course described the changes to the top part of the [user profile page](https://www.khanacademy.org/profile/me), and I imagined that was as extreme of an update as we would see from KA for a while. On the contaray, that was just the beginning of a much larger profile re-work KA unvieled earlier today (noticed first by Elijah in Discord).

Notable changes include:
- Moving the tabs for different profile sub-pages to the left side of the page, instead of along the top.
- Removing the "Badges" and "Projects" pages from that list.
- Renaming "Profile" to "Learner Home" under the user-name dropdown in the upper right.

The area under MY STUFF is personalized. It's unclear how much flexibilty it has, but it appears that other tabs appear there, in addition to courses, based on your activity.

![]({{ "/assets/images/complete-new-profile.png" | relative_url }})

Personally, I think that this is a good aesthetic change, it looks cleaner and still includes most of the same content. By far, the concern that has been the most vocalized is that the browse projects page is no longer one-click away from all pages on your profile. It is still possible to get to your projects (or badges) page by clicking "View All" on the widget on the main profile page. I have said that the KA Extension should be able to replace those missing sidebar links.

There also appears to be a bug where the badges display case isn't editable if you directly navigate to the profile page; only if you cause it load dynamically (e.g. switching to Projects and then back to profile). It's also worth noting that KA appears to have added a second check for duplicate badges in your display case, patching the KA Extension's hack. It remains to be seen if it is possible to fix.
