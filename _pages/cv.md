---
layout: page
permalink: /cv/
title: CV
description: Curriculum vitae of Veljko Skarich.
nav: true
nav_order: 4
---

<div class="system-page">
  <p class="system-eyebrow">CV / DOCUMENT</p>
  {% assign cv_file = site.static_files | where: "path", "/assets/pdf/veljko-skarich-cv.pdf" | first %}
  {% if cv_file %}
    <p class="system-intro">A concise record of my research and experience.</p>
    <a class="cv-download" href="{{ '/assets/pdf/veljko-skarich-cv.pdf' | relative_url }}" download>Download CV <span aria-hidden="true">↓</span></a>
  {% else %}
    <p class="system-intro">A public CV will be available here soon.</p>
    <p>In the meantime, you can explore my <a href="{{ '/research/' | relative_url }}">research</a>, <a href="{{ '/publications/' | relative_url }}">publications</a>, and <a href="{{ '/projects/' | relative_url }}">projects</a>.</p>
  {% endif %}
</div>
