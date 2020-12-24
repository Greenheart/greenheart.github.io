---
title: xkcd cacher
tech: ['PHP', 'Node.js', 'PostgreSQL', 'Docker', 'JavaScript']
year: '2019'
github: https://github.com/Greenheart/xkcd-cacher
id: xkcdCacher
---

This was a really fun full stack project built in an evening. The goal was to fetch data from the xkcd API with PHP, store it in a PostgreSQL database and use Node.js to present cached comics to the users. I also built a simple JSON-API for testing and used a quick Docker setup to get a modern development environment.

It would have been really nice to get XDebug, Composer and GuzzleHttp working with the php-app Docker image - but since the Docker config didn't work, I opted to use hacky solutions instead of wasting too much time on config. Most importantly, the project goals were fulfilled in a reasonable time, allowing me to complete the project and solve the challenge. Get things done. Then iterate and improve.
