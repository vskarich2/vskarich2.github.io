---
layout: default
title: Home
permalink: /
description: Veljko Skarich — AI agents, reasoning, and reliable intelligent systems.
nav: false
---

{% assign portrait = site.static_files | where: 'path', '/assets/img/headshot.jpg' | first %}

<main class="site-home">
  <section class="home-hero" aria-labelledby="home-title">
    <div class="home-hero__field">
      <svg class="hero-geometry" viewBox="0 0 1512 906" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="#64efff" stroke-width="1.25" vector-effect="non-scaling-stroke">
          <path d="M460 905 C580 760 650 625 760 530 S1080 200 1532 97" opacity=".43"/>
          <path d="M740 -84 C904 62 917 176 1038 292 S1260 519 1510 602" opacity=".36"/>
          <ellipse cx="1184" cy="367" rx="378" ry="205" transform="rotate(-24 1184 367)" opacity=".41"/>
          <ellipse cx="1184" cy="367" rx="483" ry="292" transform="rotate(-24 1184 367)" opacity=".21"/>
          <path d="M-63 721 H190 L344 623 H601" stroke-dasharray="3 8" opacity=".35"/>
        </g>
        <g fill="none" stroke="#b8fbff" stroke-width="1" opacity=".6">
          <circle cx="831" cy="396" r="8"/>
          <circle cx="1142" cy="312" r="6"/><circle cx="1320" cy="441" r="8"/>
          <path d="M831 374 v-44 M1120 312 h-35 M1320 461 v33"/>
        </g>
        <g fill="#8af4ff">
          <circle cx="831" cy="396" r="2.5"/>
          <circle cx="1142" cy="312" r="2.5"/><circle cx="1320" cy="441" r="2.5"/>
        </g>
      </svg>
      <div class="hero-coordinates" aria-hidden="true">03A8 / 7C12<br>00110101<br>48° 12′ 06″</div>

      <div class="hero-copy">
        <div class="hero-copy__content">
          <h1 id="home-title">VELJKO SKARICH</h1>
          <p class="hero-copy__descriptor">AI AGENTS / INTERPRETABILITY / VERIFICATION</p>
          <p class="hero-copy__bio">[BIO — TO BE PROVIDED]</p>
          <nav class="hero-copy__links" aria-label="Research profile links">
            <a href="https://poisonvalleys.org" rel="noopener noreferrer" target="_blank">POISONVALLEYS.ORG <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/vskarich2" rel="me noopener noreferrer" target="_blank">GITHUB <span aria-hidden="true">↗</span></a>
            <a href="{{ '/publications/' | relative_url }}">PUBLICATIONS <span aria-hidden="true">↗</span></a>
            <a href="{{ '/cv/' | relative_url }}">CV <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </div>

      <div class="portrait-window">
        <div class="portrait-window__bar">PROFILE_01</div>
        <div class="portrait-window__image">
          {% if portrait and site.headshot_ready %}
            <img src="{{ '/assets/img/headshot.jpg' | relative_url }}" alt="Portrait of Veljko Skarich" width="340" loading="eager">
          {% else %}
            <div class="portrait-placeholder" role="img" aria-label="Portrait to be added">
              <span class="portrait-placeholder__mark" aria-hidden="true">VS</span>
              <span>Portrait forthcoming</span>
            </div>
          {% endif %}
        </div>
        <div class="portrait-window__foot">V. SKARICH / 01A</div>
      </div>
    </div>

  </section>

  <section class="home-section interests" aria-labelledby="interests-title">
    <div class="section-heading">
      <div><h2 id="interests-title">Selected Research</h2></div>
      <a class="section-more" href="{{ '/research/' | relative_url }}">Research themes <span aria-hidden="true">↗</span></a>
    </div>
    <div class="interest-grid">
      <article><h3>Agent Reliability</h3><p>How reasoning and context failures propagate through long-horizon autonomous systems.</p></article>
      <article><h3>Interpretability</h3><p>Connecting an agent's intermediate reasoning decisions to downstream behavior.</p></article>
      <article><h3>Verification</h3><p>Building systems capable of detecting when autonomous agents are incorrect rather than merely plausible.</p></article>
    </div>
  </section>

  <section class="home-section selected-research" aria-labelledby="selected-publications-title">
    <div class="section-heading">
      <div><h2 id="selected-publications-title">Selected Publications</h2></div>
      <a class="section-more" href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">↗</span></a>
    </div>
    <article class="research-entry">
      <div class="research-entry__meta">2026 <span aria-hidden="true">/</span> IAB @ NeurIPS</div>
      <div class="research-entry__body">
        <h3>Poisoned Valleys</h3>
        <p>Accepted at the First Workshop on Interpreting Agent Behavior, NeurIPS 2026.</p>
        <p class="research-entry__authors">Veljko Skarich</p>
        <div class="research-entry__links"><a href="https://poisonvalleys.org" target="_blank" rel="noopener noreferrer">Project <span aria-hidden="true">↗</span></a></div>
      </div>
    </article>
  </section>

  <section class="home-section selected-projects" aria-labelledby="selected-projects-title">
    <div class="section-heading">
      <div><h2 id="selected-projects-title">Selected Systems</h2></div>
      <a class="section-more" href="{{ '/projects/' | relative_url }}">Explore projects <span aria-hidden="true">↗</span></a>
    </div>
    <a class="project-row" href="https://poisonvalleys.org" target="_blank" rel="noopener noreferrer">
      <span class="project-row__category">RESEARCH PROJECT</span><span class="project-row__title">Poisoned Valleys</span><span class="project-row__arrow" aria-hidden="true">↗</span>
    </a>
  </section>

  <section class="home-section home-contact" aria-labelledby="contact-title">
    <div class="section-heading">
      <div><h2 id="contact-title">Stay in touch</h2></div>
    </div>
    <div class="home-contact__body">
      <p>Interested in agents, verification, interpretability, and reliable AI systems.</p>
      <div class="home-contact__links"><a href="https://github.com/vskarich2" target="_blank" rel="me noopener noreferrer">GitHub ↗</a><a href="{{ '/contact/' | relative_url }}">Contact details ↗</a></div>
    </div>
  </section>
</main>
