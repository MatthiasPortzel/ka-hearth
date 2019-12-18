---
title: KA Public API Deprecated
layout: default
---

Yesterday, KA [updated](https://github.com/Khan/khan-api/commit/f35d8aee5cb4c1fdfc19c3b024b69868cae2286d) the Github repository holding documentation for their publicly available API to contain a deprecation notice. It contains a timeline including when various endpoints will be deprecated, which I have included below. These deprecations begin in just 2 months from today, although KA giving some notice is better than none.

| **Endpoints**       | **When deprecated:**  |
|---------------------|-----------------------|
| /api/v1/badges/*    | January 6, 2020       |
| /api/v1/badges/*    | January 6, 2020       |
| /api/v1/user/*      | January 6, 2020       |
| /api/v1/playlists/* | July 1, 2020          |
| /api/v1/topictree   | July 1, 2020          |
| /api/v1/topics/*    | July 1, 2020          |
| /api/v1/videos/*    | July 1, 2020          |
| /api/v1/exercises/* | July 1, 2020          |

This will definitely break projects like Collingridge's [What Badge Next?](https://whatbadgenext.appspot.com/), which make use of these endpoints. But what is particularly concerning is that KA has not provided another official API or documentation for an alternative&mdash;there's no way to fix this.

Pamela [updated](https://github.com/Khan/live-editor/pull/720) the live-editor to remove one place where a sample program accessed the KA API to get scratchpad data. This feature is relatively unimportant (the KA Extension used it in one place), especially because it's easy to re-add or use an older version of the live-editor if you need this functionality. However, the API endpoint used here is not a `/api/v1/*` endpoint, but rather an Internal API endpoint (`/api/internal/...`). KA doesn't mention these endpoints being deprecated, but they also never officially supported them either. KA is in the process of making a transition towards a GraphQL API backend, and this is likely a part of that transition. However, to my knowledge, there is no way to get program data with GraphQL, and so KA can't remove the older program endpoints without breaking the functionality of their own website. I think Pamela is being overly aggressive here by removing this internal endpoint from the live-editor.

Given the amount of energy KA has spent on updating the programming section historically, I don't think they will move the programming section of the website to GraphQL before Jan 6th. I don't think the internal API will be shut down soon. The best case scenario going forward is that all of these systems continue to work. Projects that interact with KA would then have to choose between the unofficial internal API, the deprecated v1 API, or the undocumented and unofficial GraphQL API.
