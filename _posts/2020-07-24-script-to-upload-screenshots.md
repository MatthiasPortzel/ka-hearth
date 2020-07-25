---
layout: default
title: A Python script to perform the screenshot hack
---

I wrote a small Python script to perform the screenshot hack. I realize I still haven't written a post about the hack, but I won't at this time. I merely wanted a place to share this code.

It is a Python 3 script, requiring no dependencies. This is only useful to you if you know how to run Python code from a command line.

It also requires you to extract the full cookie string from Khan Academy. `document.cookie` doesn't include HttpOnly cookies like `KAID`, which are important. I recommend finding a request in the network tab of the browser debug tools, and copying the text of the Cookie header.

It will look for a file titled `image.png` or `image.gif` in the same directory.

It will look for a `cookie.txt` file to extract cookies from, and will prompt you to paste a cookie at the command line if it doesn't exist.

It will prompt for the ID of the program on which to perform the hack.

```python

#!/usr/bin/env python3

### Copyright Matthias Saihttam 2020
### The following script is provided with no warranty, express or implied. It may break at any time, and I do not provide support for it.

import urllib.request
import json
import base64
import getopt, sys

opts, args = getopt.getopt(sys.argv[1:], "", ["debug"])
try:
    debug = opts[0][0] == "--debug"
    if debug:
        print("debug on")
except IndexError:
    debug = False

# Load an image
try:
    with open("image.png", "rb") as f:
        b64_string = base64.b64encode(f.read()).decode('utf-8')
        image_type = "image/png" # This is ignored by KA, but I set it to be nice.
except IOError:
    with open("image.gif", "rb") as f:
        b64_string = base64.b64encode(f.read()).decode('utf-8')
        image_type = "image/gif"

try:
    with open("cookie.txt") as f:
        cookie_str = f.read()
except IOError:
    print("Cookie string for the author of the program: ")
    cookie_str = input("")

cookie_data = dict([[m.strip() for m in e.split("=", 1)] for e in cookie_str.split(";")])
if debug:
    print(cookie_data)

# Prompt for program ID
program_id = input("Program id? ")

# Look up the program
req = urllib.request.Request(f"https://www.khanacademy.org/api/internal/scratchpads/{program_id}",  method="GET", headers={
    "X-KA-FKEY": cookie_data["fkey"],
    "Cookie": cookie_str
})

with urllib.request.urlopen(req) as response:
    program_data = json.loads(response.read())

if debug:
    print(image_type)

# Upload the image
request_data = {
    "title": program_data["title"],
    "revision": {
        "code": program_data["revision"]["code"],
        "image_url": f"data:{image_type};base64,{b64_string}"
    }
}
headers = {
    "X-KA-FKEY": cookie_data["fkey"],
    "Cookie": cookie_str,
    "Content-Type": "application/json"
}

req = urllib.request.Request(
    f"https://www.khanacademy.org/api/internal/scratchpads/{program_id}",
    method="PUT",
    headers=headers,
    data=json.dumps(request_data).encode("utf-8")
)
try:
    with urllib.request.urlopen(req) as res:
        res_text = res.read()
        if res.status == 200:
            print("Success! Screenshot has been uploaded. It's located at:")
            print(json.loads(res_text)["imageUrl"])
        if debug:
            print(res.status)
            print(json.dumps(json.loads(res_text), indent=4))
            print(res.info())
except urllib.error.HTTPError as e:
    print("Uploading failed!")
    print(e.read())
    if debug:
        print(e.code)
        print(e.info())
```
