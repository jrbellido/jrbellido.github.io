---
layout: default.liquid
---
## Joan Ramon Bellido

<a href="https://github.com/jrbellido/">GitHub</a>
<a href="https://bitbucket.org/jrbellido/">Bitbucket</a>


{% for post in collections.posts.pages %}
#### {{post.title}}

[{{ post.title }}]({{ post.permalink }})
{% endfor %}
