---
layout: default.liquid
---
## Blog!

Hello world!


{% for post in collections.posts.pages %}
#### {{post.title}}

[{{ post.title }}]({{ post.permalink }})
{% endfor %}
