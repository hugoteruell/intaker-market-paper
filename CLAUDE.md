# INTAKER — INTERACTIVE MARKET REPORT EXPERIENCE

## Objective

Build a cinematic, interactive market report for Intaker focused on the collapse of traditional early-career hiring and the emergence of behavioral decision intelligence.

This is NOT a corporate dashboard.
This is NOT a static consulting PDF.

The experience must feel like a controlled narrative film about a broken hiring system.

The user should progressively realize:

1. The industrial recruiting model is collapsing
2. Gen Z fundamentally changed hiring dynamics
3. Traditional ATS systems optimize workflow, not match quality
4. Behavioral intelligence is becoming infrastructure
5. Intaker is positioned at the center of this shift

The experience should create tension, pacing, and emotional weight before presenting clarity.

---

# CORE CREATIVE DIRECTION

The experience must feel:

Cinematic  
Intentional  
Slow  
Heavy  
Immersive  
Editorial  
Behavioral  
High-conviction

Reference the pacing philosophy of:
Apple product films
Stripe interactive reports
A24 title pacing
Linear.app transitions
Vercel storytelling
Modern luxury brand websites

Avoid:
Corporate SaaS aesthetics
Fast animations
Overloaded UI
Cards everywhere
Startup generic design
“Dashboard” feeling
Templates

Every transition must feel deliberate.

---

# TECH STACK

Framework:
Next.js (App Router)

Styling:
TailwindCSS

Animation:
GSAP
ScrollTrigger
Lenis

Rules:
Lenis controls ALL scrolling
GSAP controls ALL movement
ScrollTrigger controls ALL sequencing and pinning

No CSS-only motion for major interactions.

---

# GLOBAL ANIMATION RULES

## Timing Philosophy

Fast animation destroys cinematic tension.

Minimum animation duration:
0.6s

Preferred range:
0.8s to 1.6s

Large reveals:
2s to 4s

Pin sections:
Long enough to create psychological immersion

---

## Easing Rules

Allowed:
power3.out
power3.inOut
expo.out
expo.inOut

Avoid:
linear
bounce
elastic
default eases

Movement should feel expensive and intentional.

---

# SCROLL PHILOSOPHY

Scrolling must feel camera-controlled.

The user should never feel like they are “reading a webpage”.

The user should feel:
dragged through a narrative,
revealing layers of reality progressively.

Lenis smooth scroll is mandatory globally.

Scroll speed should create weight.

---

# EXPERIENCE STRUCTURE

## SECTION 1 — HERO

Fullscreen cinematic hero.

Background:
Looping video with subtle movement and dark contrast.

Typography:
Massive typography.
Minimal wording.
High tension before first reveal.

The first words should NOT appear immediately.

Create anticipation through:
delay,
opacity,
blur,
micro motion.

Possible emotional direction:
“The hiring system broke.”
or
“400 applications.
No signal.”

Scroll indicator:
Visible initially.
Disappears progressively while scrolling.

The hero should feel emotionally uncomfortable before clarity arrives.

---

## SECTION 2 — MARKET COLLAPSE

Pinned scroll section using ScrollTrigger.

Narrative pacing:
Each insight enters sequentially with ~0.2s stagger.

Use:
power3.out

Possible sequence:

400 applications per candidate

36 applicants per opening

22% Gen Z attrition

33% leave in first year

The visual pacing should simulate pressure accumulation.

The section should feel heavier as the user scrolls.

---

## SECTION 3 — THE BROKEN SIGNAL

Demonstrate how traditional hiring systems rely on weak proxies:
degrees,
keywords,
generic assessments,
resume filtering.

Interaction concept:
Candidates become visually identical.
Cards collapse into sameness.
Signal density disappears.

This section should visually communicate:
“the system cannot distinguish humans anymore.”

---

## SECTION 4 — GEN Z SHIFT

Narrative about behavioral change.

Key concepts:
Gen Z rejects bureaucracy
Gen Z values identity
Gen Z communicates differently
Gen Z wants authenticity
Gen Z separates less between culture and work

Motion direction:
More human.
More fluid.
Less rigid grid structure.

The interface itself should subtly evolve visually here.

---

## SECTION 5 — INTAKER THESIS

This is the emotional release moment.

The pacing becomes calmer.
Typography becomes clearer.
Motion becomes more confident.

Introduce Intaker as:
Behavioral decision intelligence infrastructure.

NOT:
another ATS.

Core thesis:
“Better hiring decisions require behavioral signal, not workflow optimization.”

---

## SECTION 6 — MARKET OPPORTUNITY

Present the actual market numbers with confidence and restraint.

Do NOT overload charts.

Use:
large typography,
isolated metrics,
editorial layouts,
slow reveals.

Important metrics from report:
HR Tech Market:
USD 12.28B → USD 31.75B

Recruitment Software CAGR:
7.85%–9.6%

Gen Z:
22% attrition
1.1 year average tenure

Avoid looking like a pitch deck slide.

---

# UI PRINCIPLES

Whitespace is part of storytelling.

Do not fill space unnecessarily.

Large typography > excessive components.

Minimal UI chrome.

No visible “SaaS cards” unless absolutely necessary.

The report should feel premium and restrained.

---

# SOUND DESIGN THINKING (OPTIONAL)

Even if no audio exists, motion should FEEL audible.

Transitions should imply:
impact,
pressure,
silence,
release.

---

# PERFORMANCE RULES

GSAP animations must be optimized.
Avoid unnecessary rerenders.
Use GPU-friendly transforms.
Avoid layout thrashing.

Smoothness matters more than visual complexity.

---

# CONTENT STRATEGY

The report is NOT informational only.

It is persuasive narrative architecture.

Every section should answer:
“What tension is being built or released here?”

The user should leave feeling:
“The current hiring system is fundamentally broken,
and Intaker is building infrastructure for what comes next.”

---

# SOURCE MATERIAL

All data and strategic positioning must be based on:

Intaker_Market_Research_USA_2026.pdf

Including:
market sizing,
Gen Z behavior,
turnover statistics,
ATS landscape,
behavioral mismatch thesis,
ICP definition,
decision intelligence positioning.

Key strategic positioning:

Intaker is NOT an ATS replacement.

Intaker is a behavioral intelligence layer for early-career hiring.

Its moat is longitudinal behavioral data and predictive match quality.

---

# FINAL CREATIVE RULE

If a section feels like a normal startup website,
it failed.
