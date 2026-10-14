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
          <nav class="hero-copy__links symbol-links" aria-label="Research profile links">
            <a class="symbol-link symbol-link--orbit" href="https://poisonvalleys.org" rel="noopener noreferrer" target="_blank">
              <svg class="symbol-link__art" viewBox="515 170 690 385" aria-hidden="true" focusable="false">
                <defs>
                  <filter id="orbit-contrast" color-interpolation-filters="sRGB">
                    <feComponentTransfer>
                      <feFuncR type="linear" slope="1.55" intercept="-0.25"></feFuncR>
                      <feFuncG type="linear" slope="1.55" intercept="-0.25"></feFuncG>
                      <feFuncB type="linear" slope="1.55" intercept="-0.25"></feFuncB>
                    </feComponentTransfer>
                  </filter>
                  <mask id="orbit-mask" maskUnits="userSpaceOnUse" x="515" y="170" width="690" height="385" style="mask-type: luminance">
                    <image href="{{ '/assets/img/symbols/retro-symbol-sheet.jpg' | relative_url }}" x="0" y="0" width="1800" height="1200" filter="url(#orbit-contrast)"></image>
                  </mask>
                </defs>
                <rect x="515" y="170" width="690" height="385" fill="#fff" mask="url(#orbit-mask)"></rect>
              </svg>
              <span class="symbol-link__label">POISONVALLEYS.ORG <span aria-hidden="true">↗</span></span>
            </a>
            <a class="symbol-link symbol-link--coil" href="https://github.com/vskarich2" rel="me noopener noreferrer" target="_blank">
              <svg class="symbol-link__art" viewBox="1210 710 385 125" aria-hidden="true" focusable="false">
                <defs>
                  <filter id="coil-contrast" color-interpolation-filters="sRGB">
                    <feComponentTransfer>
                      <feFuncR type="linear" slope="1.55" intercept="-0.25"></feFuncR>
                      <feFuncG type="linear" slope="1.55" intercept="-0.25"></feFuncG>
                      <feFuncB type="linear" slope="1.55" intercept="-0.25"></feFuncB>
                    </feComponentTransfer>
                  </filter>
                  <mask id="coil-mask" maskUnits="userSpaceOnUse" x="1210" y="710" width="385" height="125" style="mask-type: luminance">
                    <image href="{{ '/assets/img/symbols/retro-symbol-sheet.jpg' | relative_url }}" x="0" y="0" width="1800" height="1200" filter="url(#coil-contrast)"></image>
                  </mask>
                </defs>
                <rect x="1210" y="710" width="385" height="125" fill="#fff" mask="url(#coil-mask)"></rect>
              </svg>
              <span class="symbol-link__label">GITHUB <span aria-hidden="true">↗</span></span>
            </a>
            <a class="symbol-link symbol-link--hourglass" href="{{ '/publications/' | relative_url }}" >
              <svg class="symbol-link__art" viewBox="1200 165 410 290" aria-hidden="true" focusable="false">
                <defs>
                  <filter id="hourglass-contrast" color-interpolation-filters="sRGB">
                    <feComponentTransfer>
                      <feFuncR type="linear" slope="1.55" intercept="-0.25"></feFuncR>
                      <feFuncG type="linear" slope="1.55" intercept="-0.25"></feFuncG>
                      <feFuncB type="linear" slope="1.55" intercept="-0.25"></feFuncB>
                    </feComponentTransfer>
                  </filter>
                  <mask id="hourglass-mask" maskUnits="userSpaceOnUse" x="1200" y="165" width="410" height="290" style="mask-type: luminance">
                    <image href="{{ '/assets/img/symbols/retro-symbol-sheet.jpg' | relative_url }}" x="0" y="0" width="1800" height="1200" filter="url(#hourglass-contrast)"></image>
                  </mask>
                </defs>
                <rect x="1200" y="165" width="410" height="290" fill="#fff" mask="url(#hourglass-mask)"></rect>
              </svg>
              <span class="symbol-link__label">PUBLICATIONS <span aria-hidden="true">↗</span></span>
            </a>
            <a class="symbol-link symbol-link--star" href="{{ '/cv/' | relative_url }}" >
              <svg class="symbol-link__art" viewBox="225 175 275 100" aria-hidden="true" focusable="false">
                <defs>
                  <filter id="star-contrast" color-interpolation-filters="sRGB">
                    <feComponentTransfer>
                      <feFuncR type="linear" slope="1.55" intercept="-0.25"></feFuncR>
                      <feFuncG type="linear" slope="1.55" intercept="-0.25"></feFuncG>
                      <feFuncB type="linear" slope="1.55" intercept="-0.25"></feFuncB>
                    </feComponentTransfer>
                  </filter>
                  <mask id="star-mask" maskUnits="userSpaceOnUse" x="225" y="175" width="275" height="100" style="mask-type: luminance">
                    <image href="{{ '/assets/img/symbols/retro-symbol-sheet.jpg' | relative_url }}" x="0" y="0" width="1800" height="1200" filter="url(#star-contrast)"></image>
                  </mask>
                </defs>
                <rect x="225" y="175" width="275" height="100" fill="#fff" mask="url(#star-mask)"></rect>
              </svg>
              <span class="symbol-link__label">CV <span aria-hidden="true">↗</span></span>
            </a>
          </nav>
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
