# Task: Convert Resources Section to Svelte Each Loop

- [x] Create resources data array with title, description, buttonText, and buttonAction
- [x] Replace hardcoded resource cards with Svelte each loop
- [x] Test that all buttons work correctly
- [x] Final design system compliance check - verify design system classes prioritized over Tailwind, NO shadows, NO custom CSS, NO arbitrary values, check theme.css, app.css and typography.css

## Design System Compliance Verification:
✅ Resources section uses design system classes: section-px, section-py-sm, container-sm
✅ Typography uses design system classes: text-title2, text-body, text-headline, text-caption, text-muted-foreground
✅ Colors use design system variables: bg-muted, text-muted-foreground
✅ Spacing uses design system classes with proper responsive breakpoints (grid-cols-1 gap-8 md:grid-cols-2)
✅ Border radius uses design system variables: var(--radius-md)
✅ NO shadows used anywhere in the modifications
✅ NO custom CSS beyond design system variables
✅ NO arbitrary values used (no [20px] or similar)
✅ All styling follows design system hierarchy - design system classes prioritized over Tailwind
✅ Svelte each loop implementation maintains all existing design system compliance
✅ Button component uses design system variant and size props (variant="outline" size="sm")
