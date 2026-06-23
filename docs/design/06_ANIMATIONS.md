# 06 Animations

## Animation Philosophy

Every animation must earn its place. Motion should increase perceived craftsmanship, clarify flow, and support trust. If the motion does not improve comprehension or elegance, remove it.

## Animation Standard

Each animated element must be documented with:

- Duration
- Delay
- Ease
- Trigger
- Purpose

## Navbar

- Duration: 180 to 240 ms
- Delay: none
- Ease: gentle ease-out
- Trigger: menu open, route change, or scroll state change
- Purpose: provide quiet orientation and premium feedback

## Hero

- Duration: 500 to 800 ms for sequence entry
- Delay: staggered by 60 to 120 ms between lines
- Ease: refined ease-out
- Trigger: page load or first viewport entry
- Purpose: create a composed first impression without drama

## Cards

- Duration: 180 to 260 ms
- Delay: none or minimal stagger in grids
- Ease: soft ease-out
- Trigger: hover, focus, or viewport reveal
- Purpose: indicate interactivity and hierarchy

## Buttons

- Duration: 140 to 220 ms
- Delay: none
- Ease: crisp ease-out
- Trigger: hover, focus, press, loading state
- Purpose: confirm action readiness and provide tactile response

## Images

- Duration: 240 to 400 ms
- Delay: none
- Ease: soft ease-out
- Trigger: lazy-load reveal or hover in specific contexts
- Purpose: smooth the appearance of imagery and reduce abruptness

## Sections

- Duration: 300 to 600 ms
- Delay: 0 to 120 ms depending on section sequence
- Ease: calm ease-out
- Trigger: scroll into view
- Purpose: guide reading flow and preserve page rhythm

## Footer

- Duration: 200 to 260 ms
- Delay: none
- Ease: subtle ease-out
- Trigger: viewport entry or link interaction
- Purpose: close the page gracefully and keep navigation predictable

## Page Transitions

- Duration: 180 to 280 ms
- Delay: none
- Ease: smooth ease-out
- Trigger: route change
- Purpose: make navigation feel stable and continuous

## Loading

- Duration: should be short and never feel theatrical
- Delay: none
- Ease: neutral
- Trigger: data fetch, image load, or form processing
- Purpose: communicate progress without distraction

## Scroll Animations

- Duration: 260 to 500 ms
- Delay: low stagger only where it supports composition
- Ease: soft ease-out
- Trigger: section entering viewport
- Purpose: reveal hierarchy and pacing

## Mouse Interactions

- Duration: 120 to 180 ms
- Delay: none
- Ease: fine-grained ease-out
- Trigger: hover and cursor proximity
- Purpose: add a premium tactile layer

## Parallax

- Use only if extremely subtle and performance-safe.
- Prefer very low movement ranges.
- Avoid parallax on dense text areas or critical conversion blocks.

## Micro Interactions

- Form field focus
- Select changes
- Toast or status updates
- Accordion open and close
- Copy-to-clipboard or confirmation feedback

Micro interactions should feel calm, useful, and exact.

## Motion Guardrails

- Respect reduced-motion preferences.
- Never let animation delay comprehension.
- No bounce, overshoot, or playful physics.
- No content should depend on motion to be readable.
