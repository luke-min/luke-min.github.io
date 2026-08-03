---
layout: default
title: Writings
---

# Writings

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }})  
  {{ post.date | date: "%B %-d, %Y" }}
{% endfor %}