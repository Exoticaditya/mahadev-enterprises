# 13 Accessibility

## Accessibility Philosophy

Accessibility is not a compliance layer here. It is part of the premium experience. A truly elegant interface is clear, usable, and inclusive.

## Contrast

- Maintain strong contrast in both themes.
- Never sacrifice legibility for aesthetic subtlety.
- Test all text, icons, and controls against their backgrounds.

## Keyboard Navigation

- Every interactive element must be fully keyboard accessible.
- Tab order must feel logical and predictable.
- Focus should never be trapped unless in a valid modal or dialog state.

## ARIA

- Use ARIA only when semantic HTML alone is insufficient.
- Labels should be meaningful and concise.
- Avoid over-marking elements that are already semantically clear.

## Focus

- Focus states must be visible, consistent, and elegant.
- The user should always know where they are on the page.
- Focus styling must work in light and dark mode.

## Reduced Motion

- Respect reduced-motion preferences everywhere.
- Replace complex motion with simple state changes when needed.
- Never make animation a dependency for understanding content.

## Accessibility Rules

- Touch targets must be comfortably sized.
- Forms must have labels and useful error messages.
- Images that convey information must be described appropriately.
- Repeated navigation should be predictable and not surprising.
