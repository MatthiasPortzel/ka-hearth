---
layout: "default"
title: "T#1B12P and the most voted program on KA"
---

The first program on the top list is [doodle jump](https://khanacademy.org/cs/i/1431776579), by nordituck, which currently has <span class="vote-count" data-program-id="1431776579">11904</span> votes. But the highest voted program on Khan Academy is [Ultimate Tower Defense](https://khanacademy.org/cs/i/1106141208), by [The #1 Base 12 Proponent](https://khanacademy.org/profile/kaid_587121826918705844471320), with <span class="vote-count" data-program-id="1106141208">14335</span> votes.

The #1 Base 12 Proponent is well known on Khan Academy because he created this extremely highly voted program, but also because of his contributions to the community over a very large time span. He one of the members of the first "generation" of programmers on Khan Academy. Ultimate Tower Defense was created November 12, 2012 (6 years ago today!); making it one of the very first programs on the hot list. (I don't know when the hot list was first created, but the [oldest program](https://khanacademy.org/cs/i/981865901) on the recent list was made August 20, 2012.) And T#1B12P was active up until he was banned, February 5, 2017. He won one of the [early contests](https://khanacademy.org/cs/i/5845440555384832) with his circular platformer, as well as the [Code a Character contest](https://khanacademy.org/cs/i/5715371182129152), both in 2015. He vehemently opposed the popularity of button programs as well as the perceived mindless worship of cuteness. And he would be annoyed if I didn't mention [Ultimate Tower Defense 2](https://khanacademy.org/cs/i/6104174283718656) here, which he saw as much more deserving of thousands of votes. It was also on the top list, with <span class="vote-count" data-program-id="6104174283718656">3478</span> votes.

When T#1B12P was banned, all his programs were completely hidden (not just hidden from the hotlist), so you'll get a 404 error if you follow the link to UTD. However, it still exists in the API, so we can confirm the number of votes it has. (All vote counts on this page were populated from the API when you opened this page.) Now, Doodle Jump had only 8000 or so votes when UTD was hidden. But Doodle Jump's vote count has been increasing quickly now that it is first on the top list. Unfortunately, this means that soon UTD will lose its title as most highly voted program, a title it's held for over 5 years.

No one knows for sure why T#1B12P was banned. As far as I've heard, it was for being rude, and then being rude to a moderator. He was actually unbanned a month or two after being banned, but like other un-banned members of the community, the programs he made before being banned were not restored. Unfortunately, he never returned to the same levels of activity after his ban.

<script>
var voteCounts = Array.from(document.getElementsByClassName("vote-count"));
for (var i = 0; i < voteCounts.length; i ++) {
    var req = new XMLHttpRequest();
    req.open("GET", "https://www.khanacademy.org/api/internal/scratchpads/" + voteCounts[i].dataset.programId + "?projection={\"sumVotesIncremented\":1,\"id\":1}");
    req.addEventListener("load", function () {
        var data = JSON.parse(this.responseText);
        for (var j = 0; j < voteCounts.length; j++) {
            if (data.id.toString() === voteCounts[j].dataset.programId) {
                voteCounts[j].innerText = data.sumVotesIncremented;
                break;
            }
        }
    });
    req.send();
}
</script>
