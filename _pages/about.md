---
layout: default
title: Home
permalink: /
description: Veljko Skarich — AI agents, reasoning, and reliable intelligent systems.
nav: false
---

{% assign portrait = site.static_files | where: 'path', '/assets/img/headshot.png' | first %}

<main class="site-home">
  <section class="home-hero" aria-labelledby="home-title">
    <div class="home-hero__field">
      <div class="hero-copy">
        <div class="hero-copy__content">
          <h1 id="home-title">VELJKO SKARICH</h1>
          <p class="hero-copy__descriptor">AI AGENTS / INTERPRETABILITY / VERIFICATION</p>
          <p class="hero-copy__bio">
            I’m a researcher with a background in software engineering. I study how language model agents reason, where their reasoning fails, and how to
            inspect and verify their behavior. In Poisoned Valleys, I investigate how misconceptions during code repair shape an agent’s hypotheses,
            plans, and resulting patches.
          </p>
        </div>
      </div>

      <div class="portrait-window">
        <div class="portrait-window__image">
          {% if portrait and site.headshot_ready %}
            <img src="{{ '/assets/img/headshot.png' | relative_url }}?v=near-black-20261014" alt="Portrait of Veljko Skarich" width="720" height="960" loading="eager">
          {% else %}
            <div class="portrait-placeholder" role="img" aria-label="Portrait to be added">
              <span class="portrait-placeholder__mark" aria-hidden="true">VS</span>
              <span>Portrait forthcoming</span>
            </div>
          {% endif %}
        </div>
      </div>
    </div>

  </section>

  <section class="home-section selected-research" aria-labelledby="selected-publications-title">
    <div class="section-heading">
      <div><h2 id="selected-publications-title">Selected Publications</h2></div>
    </div>
    <article class="research-entry">
      <div class="research-entry__meta">2026 <span aria-hidden="true">/</span> IAB @ NeurIPS</div>
      <div class="research-entry__body">
        <h3>Poisoned Valleys</h3>
        <p>Interpreting Agent Behavior, NeurIPS 2026.</p>
        <p class="research-entry__authors">Veljko Skarich</p>
        <div class="research-entry__links"><a href="https://poisonvalleys.org" target="_blank" rel="noopener noreferrer">PoisonValleys.org <span aria-hidden="true">↗</span></a></div>
      </div>
    </article>
    <article class="research-entry">
      <div class="research-entry__meta">2026 <span aria-hidden="true">/</span> Who Verifies the Agents? @ NeurIPS</div>
      <div class="research-entry__body">
        <h3>Multi-Agent Debate for Explainable Trading: Reasoning, Consensus, and Performance in Simulated Markets</h3>
        <p>Who Verifies the Agents? NeurIPS 2026.</p>
        <p class="research-entry__authors">Juli Huang, Alanood Alrassan, Deveen Harischandra, Theodore Wu, Veljko Skarich, Matthew Hayes</p>
        <div class="research-entry__links"><a href="https://arxiv.org/abs/2609.29701" target="_blank" rel="noopener noreferrer">arXiv <span aria-hidden="true">↗</span></a></div>
      </div>
    </article>
  </section>

</main>
