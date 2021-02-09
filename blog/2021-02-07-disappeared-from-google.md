---
slug: disappeared-from-google
title: How we disappeared from Google
author: Nikola
author_title: Founder
author_url: https://twitter.com/IT_mafija
author_image_url: https://avatars0.githubusercontent.com/u/363811?s=460&v=4
tags: [google, seo, ranking, disappear, gone]
---

Short tutorial: **How to Lose Position #1 on Google in 4 Easy Steps**
<!--truncate-->
> Disclaimer - It was positioned #1 for the following keywords “*hosted status page*”.

TL;DR:

1.  Open your Caddyfile
2.  Set “X-Robots-Tag” value to “none”
3.  Save Caddyfile and restart Caddy
4.  Don’t mind checking for crawling errors for a while

![seriously, dude](https://i.imgur.com/5nL5ViV.gif)

So, there I was, fine-tuning [Caddyfile](https://caddyserver.com/docs/caddyfile/concepts) for [Hosted Status Page](https://www.indiehackers.com/product/hosted-status-page).

I was right at tuning those pesky headers. It came down to checking of `X-Robots-Tag` was configured properly, and I decided to ~~change it~~ fix it!

[By setting it to](https://developers.google.com/search/reference/robots_meta_tag#none) `none`.

It was back on December 29th 2020.

For some reason, I thought that if I set it to `none` (I figured that none is for no restrictions) it will let in all those web crawlers and continue indexing it as they did up until then.

⚠️ Obviously, `none` is equivalent to `noindex`.

That's the price  you pay when you act smart 👨‍🔧.

![Smart](https://i.imgur.com/2WEdsTm.gif)

Well, ***it's been like that for the entire month*** now. I figured out accidentally by going to the [Google Search Console](https://search.google.com/search-console) to check if there are any issues or something worth fixing.

Well, there was 🤣🤣🤣

So, if your Product ends up as mine did, simply fix your headers (or check for any  `<meta name="robots" content="noindex">` tags throughout your pages) and request reindexing from the Search Console mentioned above.

Anyway, [RTFM](http://readthefuckingmanual.com/) guys, and don't fix stuff that works!


Sorry for the long post.

Wish you all a happy Monday!

Cheers!
