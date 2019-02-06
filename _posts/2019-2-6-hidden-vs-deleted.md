---
title: "Hidden, Completely Hidden, and Deleted programs"
layout: "default"
---

### Hidden from Hot list

Programs are hidden from the hotlist fairly often. These programs aren't eligible to show up on the hot or top list, no matter how many votes they get. Other than that, these programs are perfectly visible.
Programs can be hidden from the hot list automatically if they have enough flags, or if they link to Art Maker Pro (see [here](hide-your-own-programs)). But they can also be hidden manually by guardians, and low effort programs or drawings or petitions get hidden from the hot list frequently.

### Completely hidden

But sometimes hiding a program from the hot list isn't enough. Guardians can "Completely Hide" programs. These programs show up for guardians, but most people see a 404 error. The exception is if it's your own program. If your program is hidden completely, you'll still be able to see it and it will show up in your profile list for you, but not for anyone else.

The KA API calls this `appearsAsDeleted`, the button in the guardian UI is called "Hide Everywhere", and the KA Extension calls it "Completely Hidden."

With the KA internal API, though, you can see the data for a completely hidden program. The KA Extension will check if a 404 page is actually completely hidden and prompt you with a link to the API if it is (though this feature is inconsistent). The KA Extension will also let you know if you're looking at one of your own programs and it's completely hidden to everyone else. See

### Guardian Approved

The KA Extension will describe a program as "Guardian Approved" if it is marked as `definitelyNotSpam`. This isn't really a hidden/not hidden but we're assuming a guardian approved program can't also be hidden. Guardian approved programs can't be flagged (you can flag them, but the flags are ignored and don't show up).

### Deleted

When you delete a program on KA, it's gone. It's possible KA still saves a copy in a backup or something, but no one can see it on the website.

### Examples

For screenshots and examples of these, see the [PR I made](https://github.com/ka-extension/ka-extension-ts/pull/119) when adding support these different types of programs to the KA Extension.
