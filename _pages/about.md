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
    <div class="home-hero__copy">
      <p class="eyebrow"><span class="eyebrow__line" aria-hidden="true"></span> 01 / Profile</p>
      <h1 id="home-title">Veljko<br>Skarich<span class="hero-period">.</span></h1>
      <p class="home-hero__tagline">AI agents, reasoning, and reliable intelligent systems.</p>
      <p class="home-hero__bio">[BIO — TO BE PROVIDED]</p>
      <div class="hero-links" aria-label="Profile links">
        <span class="hero-location">SF Bay Area</span>
        <a href="https://github.com/vskarich2" rel="me noopener noreferrer" target="_blank">GitHub <span aria-hidden="true">↗</span></a>
        <a href="{{ '/cv/' | relative_url }}">CV <span aria-hidden="true">↗</span></a>
        <!-- TODO: Add LinkedIn and email when their verified addresses are available. -->
      </div>
      <div class="hero-status" aria-label="Research focus">
        <span><b>FIELD</b> AI SYSTEMS</span>
        <span><b>FOCUS</b> AGENTS / INTERPRETABILITY / VERIFICATION</span>
      </div>
    </div>

    <div class="portrait-window">
      <div class="portrait-window__bar"><span>PROFILE_01</span><span class="portrait-window__state"><i aria-hidden="true"></i> ACTIVE</span></div>
      <div class="portrait-window__image">
        {% if portrait %}
          <img src="{{ '/assets/img/headshot.jpg' | relative_url }}" alt="Portrait of Veljko Skarich" width="340" loading="eager">
        {% else %}
          <div class="portrait-placeholder" role="img" aria-label="Portrait to be added">
            <span class="portrait-placeholder__mark" aria-hidden="true">VS</span>
            <span>Portrait forthcoming</span>
          </div>
        {% endif %}
      </div>
      <div class="portrait-window__foot"><span>SUBJECT / V. SKARICH</span><span>01A</span></div>
    </div>

  </section>

  <div class="trace-panel" aria-label="Research workflow: hypothesis, plan, code, verification, and recovery">
    <div class="trace-panel__meta"><span>TRACE_VIEW / 001</span><span>REASONING · EXECUTION · VERIFICATION</span></div>
    <svg class="trace-panel__diagram" viewBox="0 0 900 190" role="img" aria-labelledby="trace-title" preserveAspectRatio="xMidYMid meet">
      <title id="trace-title">Abstract reasoning trace with a recovery branch</title>
      <g fill="none" stroke="currentColor" stroke-width="1.15">
        <path d="M85 91 H235 C280 91 284 72 328 72 H472 C512 72 516 91 560 91 H789"/>
        <path d="M472 72 C508 72 510 142 554 142 H686 C731 142 735 91 789 91" class="trace-panel__branch"/>
        <path d="M54 91 H85 M789 91 H839" stroke-dasharray="3 7"/>
        <path d="M264 91 C294 31 378 21 419 58" class="trace-panel__orbit"/>
        <circle cx="85" cy="91" r="5"/><circle cx="235" cy="91" r="5"/><circle cx="328" cy="72" r="5"/>
        <circle cx="472" cy="72" r="5"/><circle cx="560" cy="91" r="5"/><circle cx="686" cy="142" r="5"/>
        <circle cx="789" cy="91" r="8" class="trace-panel__terminal"/>
      </g>
      <g class="trace-panel__labels">
        <text x="85" y="117">HYPOTHESIS</text><text x="235" y="117">PLAN</text><text x="328" y="53">CODE</text>
        <text x="472" y="53">CHECK</text><text x="560" y="117">VERIFY</text><text x="686" y="166">RECOVER</text>
        <text x="789" y="68">STATE_OK</text>
      </g>
    </svg>
    <div class="trace-panel__foot"><span>H → P → C → V</span><span>PATH / 01.02.03</span></div>
  </div>

  <section class="home-section interests" aria-labelledby="interests-title">
    <div class="section-heading">
      <div><p class="section-index">02 / Research</p><h2 id="interests-title">Selected Research<span class="heading-period">.</span></h2></div>
      <a class="section-more" href="{{ '/research/' | relative_url }}">Research themes <span aria-hidden="true">↗</span></a>
    </div>
    <div class="interest-grid">
      <article><span class="interest-grid__number">R_01</span><h3>Agent Reliability</h3><p>How reasoning and context failures propagate through long-horizon autonomous systems.</p></article>
      <article><span class="interest-grid__number">R_02</span><h3>Interpretability</h3><p>Connecting an agent's intermediate reasoning decisions to downstream behavior.</p></article>
      <article><span class="interest-grid__number">R_03</span><h3>Verification</h3><p>Building systems capable of detecting when autonomous agents are incorrect rather than merely plausible.</p></article>
    </div>
  </section>

  <section class="home-section selected-research" aria-labelledby="selected-publications-title">
    <div class="section-heading">
      <div><p class="section-index">03 / Publications</p><h2 id="selected-publications-title">Selected Publications<span class="heading-period">.</span></h2></div>
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
      <div><p class="section-index">04 / Projects</p><h2 id="selected-projects-title">Selected Systems<span class="heading-period">.</span></h2></div>
      <a class="section-more" href="{{ '/projects/' | relative_url }}">Explore projects <span aria-hidden="true">↗</span></a>
    </div>
    <a class="project-row" href="https://poisonvalleys.org" target="_blank" rel="noopener noreferrer">
      <span class="project-row__category">PROJECT_01 / RESEARCH</span><span class="project-row__title">Poisoned Valleys</span><span class="project-row__arrow" aria-hidden="true">↗</span>
    </a>
  </section>

  <section class="home-section home-contact" aria-labelledby="contact-title">
    <div class="section-heading">
      <div><p class="section-index">05 / Contact</p><h2 id="contact-title">Stay in touch<span class="heading-period">.</span></h2></div>
    </div>
    <div class="home-contact__body">
      <p>Interested in agents, verification, interpretability, and reliable AI systems.</p>
      <div class="home-contact__links"><span>CHANNEL / OPEN</span><a href="https://github.com/vskarich2" target="_blank" rel="me noopener noreferrer">GitHub ↗</a><a href="{{ '/contact/' | relative_url }}">Contact details ↗</a></div>
    </div>
  </section>
</main>
