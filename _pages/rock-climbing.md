---
layout: default
permalink: /rock-climbing/
title: Rock Climbing
nav: true
nav_order: 2
#pagination:
 # enabled: true
  #collection: posts
  #permalink: /page/:num/
  #per_page: 5
  #sort_field: date
  #sort_reverse: true
  #trail:
  #  before: 1 # The number of links before the current page
  #  after: 3 # The number of links after the current page
---

<div class="post">
  <div class="header-bar climbing-header">
    <h1>{{ "Rock Climbing" }}</h1>
    <h2>{{ "A collection of rock climbing trips and photos." }}</h2>
</div>

<br>

  <ul class="post-list">

  {% assign postlist = site.categories.climbing %}


    {% for post in postlist %}

    
    {% assign year = post.date | date: "%Y" %}


<li>
  <a href="{{ post.url | relative_url }}" class="post-link-wrapper">
    <div class="row">
      <div class="col-sm-9">
        <h2 class="post-title">{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p>
      </div>

      {% if post.thumbnail %}
      <div class="col-sm-3">
        <img class="card-img {% if post.thumbnail_position %}thumb-pos-{{ post.thumbnail_position | replace: '%', 'p' }}{% endif %}" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
      </div>
      {% endif %}
    </div>
  </a>
</li>

    {% endfor %}

  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>
