---
title: JOAN R. BELLIDO
layout: default.liquid
---

## Contact

* [jrbellido@gmail.com](mailto:jrbellido@gmail.com)
* Twitter/Mastodon: [@jrbellido](https://twitter.com/jrbellido)

## Privacy

* [https://keybase.io/jrbellido](https://keybase.io/jrbellido)

## Code

* [https://github.com/jrbellido](https://github.com/jrbellido)
* [https://bitbucket.org/jrbellido](https://bitbucket.org/jrbellido)

## Social

* [https://www.pinterest.com/jrbellido](https://www.pinterest.com/jrbellido)

## Posts

{% for post in collections.posts.pages %}
#### {{post.title}}

[{{ post.title }}]({{ post.permalink }})
{% endfor %}
