# Hide videos from particular YouTube channels from your Subscribe page without "Unsubscribing"

## Tired of blotted newsfeed with videos from known people?

---

- Download this extension: [Enhancer for YouTube™](https://chrome.google.com/webstore/detail/enhancer-for-youtube/ponfpcnoihfmfllpaingbgckeeldkhle)
- Go to extension [settings](chrome-extension://ponfpcnoihfmfllpaingbgckeeldkhle/options.html) (link for chrome)
- Scroll down to "custom script" section
- Copy & paste all code from [script.js](script.js)
- edit channels variable according to your need
- Tick on this option:
- [x] Automatically execute the script when YouTube is loaded in a tab
- Save and all good to go

## Customization:-

---

```javaScript
// Exact name of the channel(case sensitive)
const channels = ["Channel Name 1", "Channel Name 2"];

// 1 = newest video, 2 = second newest,....
const videoToKeep = 1;
```
