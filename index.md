---
layout: default.liquid
---
# Joan Ramon Bellido

## Contact

* [jrbellido@gmail.com](mailto:jrbellido@gmail.com)

## Privacy

* [https://keybase.io/jrbellido](https://keybase.io/jrbellido)

## Code

* [https://github.com/jrbellido](https://github.com/jrbellido)
* [https://bitbucket.org/jrbellido](https://bitbucket.org/jrbellido)

## Social

* [https://www.pinterest.com/jrbellido](https://www.pinterest.com/jrbellido)

{% for post in collections.posts.pages %}
#### {{post.title}}

[{{ post.title }}]({{ post.permalink }})
{% endfor %}
