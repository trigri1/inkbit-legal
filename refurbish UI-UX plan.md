# InkBit Public Website Refurbishment Plan

## Source Of Truth

This plan uses the latest product brief as the design source of truth. The current website is useful for factual content, links, privacy/support details, and available assets, but it must not define the new visual direction.

Core constraint:

> Translate the app's atmosphere into a public web experience; do not clone the app UI.

The website should feel like the public, editorial expression of InkBit: calm, literary, private, emotionally warm, spacious, minimal, premium, and softly reflective.

InkBit is not a social app, productivity app, dashboard, habit tracker, quote wallpaper app, or generic notes app. It is a calm, private, literary reflection app for meaningful excerpts, quotes, poems, reading moments, reflections, and personal thoughts.

## Current Project Read

- The repo is already GitHub Pages-friendly: static `index.html`, `privacy/index.html`, `privacy/privacy_policy.md`, `robots.txt`, `sitemap.xml`, branding assets, and six app screenshots.
- The existing homepage is an outdated compact support/legal page. It uses a centered `860px` wrapper, one bordered panel, a basic feature list, and a screenshot dump.
- Existing factual content can be reused carefully: app name, Google Play link, privacy link, support email, local-first/privacy claims that match the privacy policy, and screenshot assets.
- Existing visual direction should be replaced: do not preserve the green/white panel system, dense screenshot grid, or support-page structure.
- Existing relative links are appropriate for a GitHub Pages project URL such as `https://trigri1.github.io/inkbit-legal/`. Keep avoiding root-relative links like `/assets/...`.

## Reference Research Takeaways

Sources reviewed:

- [Reflectly](https://reflectlyapp.com/) proves that a journaling/reflection product can lead with one clear emotional promise and direct download paths.
- [Day One](https://dayoneapp.com/) shows strong app-site architecture: memorable promise, product proof, privacy ownership, repeated CTAs, and credibility.
- [SimpleDot](https://simpledot.app/) is especially relevant because it sells a small private habit with calm copy, privacy repetition, and a product story rather than a screenshot dump.
- [DAYS](https://days.app/) shows the value of a minimal proposition and a short set of reasons to begin.
- [DayGrid](https://daygrid.org/) shows useful SEO content, FAQs, and feature explanation, but InkBit should avoid DayGrid's habit/productivity framing.
- [Calm](https://www.calm.com/) and [Headspace](https://www.headspace.com/) show how wellness-adjacent sites organize around outcomes, not raw features.
- [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) confirms the implementation should remain static HTML/CSS/JS/assets.

## Product Positioning

Primary brand idea:

> A quiet space for one thought.

Suggested public positioning:

> InkBit is a calm, private reading reflection app for keeping the words, passages, and thoughts that stay with you.

Suggested hero copy:

- Brand/H1: `InkBit`
- Supporting line: `A quiet place to keep the words that stay with you.`
- Body: `Save excerpts, return to meaningful thoughts, and write small reflections in a private space shaped for reading and memory.`
- Primary CTA: `Get InkBit`
- Secondary CTA: `See how it works`

Tone rules:

- Use calm, plain, reflective language.
- Avoid hype, urgency, productivity framing, exclamation-heavy marketing, and phrases like `supercharge`, `boost productivity`, `crush your goals`, `unlock your potential`, and `never miss out`.
- Write for people who value reading, memory, privacy, and reflection.

## Visual Direction

The site should feel atmospheric and editorial, not like app chrome expanded onto a webpage.

Light mode:

- Mood: soft paper, morning light, warm ivory, gentle reflection.
- Avoid harsh white backgrounds.
- Use cream/paper surfaces and soft low-contrast borders.

Dark mode:

- Mood: moonlight, quiet night, deep charcoal-plum, private reflection.
- Avoid pure black.
- Use deep plum/charcoal backgrounds, muted lavender accents, and soft borders.

Color system:

```css
:root {
  --light-bg: #F6EDE9;
  --light-bg-soft: #F8F0EC;
  --light-surface: #FBF2EA;
  --light-surface-soft: #F8EEE7;
  --light-elevated: #FFF7F0;
  --light-text: #1F2633;
  --light-text-secondary: #5F6072;
  --light-text-muted: #878194;
  --light-accent: #9B8AB8;
  --light-accent-soft: #E6DDEC;
  --light-accent-muted: #B8A9C7;
  --light-border: #DDD0CA;
  --light-border-soft: #E9DEDA;
  --light-highlight: #D8C7D7;
  --light-highlight-soft: #EEE4EC;
  --light-success: #6F9274;
  --light-warning: #B48654;

  --dark-bg: #17151C;
  --dark-bg-soft: #1D1922;
  --dark-surface: #211D25;
  --dark-surface-soft: #25212A;
  --dark-elevated: #2D2631;
  --dark-text: #F4EDE4;
  --dark-text-secondary: #C9BFCE;
  --dark-text-muted: #938A9F;
  --dark-accent: #B7A6D8;
  --dark-accent-soft: #3A3148;
  --dark-accent-muted: #8E7EAD;
  --dark-border: #3F3745;
  --dark-border-soft: #332C38;
  --dark-highlight: #594B68;
  --dark-highlight-soft: #332B40;
  --dark-success: #93B18C;
  --dark-warning: #D1A46C;
}
```

Color guardrails:

- Do not overuse purple. Lavender belongs mostly in accents, selected states, highlights, and subtle glows.
- Do not use loud gradients, pure white, pure black, harsh borders, heavy shadows, or generic SaaS color treatments.
- Shadows should be soft and editorial, not Material-style elevation.

Typography:

- Use `Literata` or a close literary serif for display, hero copy, quotes, section titles, and reflective statements.
- Use `Work Sans` or a close clean sans-serif for body copy, navigation, labels, metadata, FAQ, and buttons.
- If using web fonts, load them responsibly with fallbacks and avoid blocking the page.

Approximate type scale:

- Hero display: 52-64px desktop, 38-44px mobile, calm line height.
- Section titles: 28-40px.
- Editorial/literary text: 18-24px.
- Body: 15-18px, generous line height.
- Metadata/labels: 12-14px, medium weight.
- Buttons/nav: 13-15px, semibold.

## Layout Principles

- Design mobile-first.
- Use generous whitespace and intentional center alignment.
- Use max-width containers instead of stretching text across wide screens:
  - Reading/content max width: about `640px`.
  - Wide marketing sections: about `980px` to `1120px`.
- Use full-width atmospheric section bands, not a single central panel.
- Default to cardless sections. Use cards only when they create a meaningful grouping.
- Do not copy mobile app chrome: no bottom navigation, app tabs, settings panels as page layout, or literal mobile cards as the whole website structure.
- Do not make the whole website a fake phone mockup.
- Use screenshots as supporting evidence, not as the structural design.

Suggested spacing:

- Small: `8px`.
- Medium: `16px`.
- Large: `24px` to `28px`.
- Section gaps: `64px` to `120px`, depending on viewport.

Suggested radii:

- Small UI elements: `8px` to `12px`.
- Meaningful cards/surfaces: `20px` to `30px`.
- Pills/buttons: `999px`.

## Phase 1: Foundation And Content Audit

Objective: prepare the static GitHub Pages site for a complete visual and content refurbishment.

Work:

- Confirm all durable facts before implementation: current app-store link, platform availability, support email, privacy claims, and whether the CTA should be `Get InkBit`, `Get it on Google Play`, or a waitlist/join link.
- Reuse factual content from the current site only when accurate.
- Keep the site static and dependency-light.
- Preserve relative links for GitHub Pages project-path compatibility.
- Keep the privacy policy page available and easy to reach.
- Add a small local/published QA checklist for GitHub Pages.

Acceptance criteria:

- The plan has a verified factual content set.
- No server-only feature is required.
- The website remains portable under `/inkbit-legal/`.

## Phase 2: Semantic SEO Page Architecture

Objective: turn the page into an indexable public website, not a visual-only brochure.

Recommended section order:

1. Header: InkBit brand/name, quiet nav, CTA.
2. Hero: brand, atmosphere, promise, one clear CTA, secondary anchor.
3. Product outcome: explain the emotional and practical outcome.
4. Features: calm feature blocks, not a dense dashboard grid.
5. Experience: describe the feeling of use without copying app UI.
6. Privacy: emotional and practical privacy message.
7. SEO content: natural search-oriented explanatory copy.
8. FAQ: accessible answers and optional FAQ schema.
9. Final CTA/footer: quiet conversion, support, privacy, copyright.

Header:

- Brand/name: `InkBit`.
- Minimal nav: `Features`, `Privacy`, `FAQ`, `Download` or `Join`.
- Keep it quiet; no heavy app-style navigation.

Acceptance criteria:

- One clear H1.
- Proper H2/H3 hierarchy.
- Main content is understandable from text alone.
- Search terms appear naturally, not as keyword stuffing.

## Phase 3: Editorial Hero And First Viewport

Objective: make the first viewport feel like InkBit's public brand world.

Work:

- Build an editorial hero around the brand and core line:
  - `InkBit`
  - `A quiet place to keep the words that stay with you.`
- Use atmospheric composition: soft paper field, literary text, one reflective excerpt, subtle lavender highlight, and one restrained CTA.
- If a product screenshot appears in the hero, make it secondary and tasteful. It should support the promise, not dominate the website.
- Avoid a SaaS split-screen dashboard composition.
- Avoid a hero made only from generic gradients or fake placeholder illustrations.
- Keep a hint of the next section visible below the fold.

Acceptance criteria:

- The first viewport clearly says what InkBit is.
- The page feels literary and private, not productivity-oriented.
- Primary CTA is visible without competing with multiple actions.

## Phase 4: Product Outcome And Feature Story

Objective: explain what InkBit does through outcomes first, then features.

Outcome themes:

- Keep meaningful words close.
- Reflect without pressure.
- Return to ideas over time.
- Build a private reading memory.

Feature blocks:

- Daily literary excerpts.
- Private reflections.
- Loved passages.
- Reading history.
- Highlights.
- Gentle insights.
- Quiet reminders.
- Personal library.

Work:

- Use calm, spacious feature blocks rather than dense grids.
- Pair each feature with a human benefit.
- Avoid streak pressure, habit tracker language, dashboards, productivity wins, or social mechanics.
- Use small literary details as motifs: marginal notes, passage fragments, quiet metadata, soft highlights, reading marks.

Acceptance criteria:

- A visitor understands the app without seeing every screenshot.
- Features feel reflective and human.
- No section implies social, productivity, or performance analytics.

## Phase 5: Screenshot And Imagery Strategy

Objective: use visual assets as proof while keeping the website editorial.

Work:

- Use real screenshots sparingly:
  - `assets/screens/light/reader.png` and `assets/screens/dark/reader.png` support focused reading.
  - `assets/screens/light/today.png` and `assets/screens/dark/today.png` support the daily reading and reflection ritual.
  - `assets/screens/light/journal.png` and `assets/screens/dark/journal.png` support private reflection over time.
  - `assets/screens/light/library_history.png` and `assets/screens/dark/library_history.png` support returning to saved literary passages.
- Keep the final public page to this four-pair screenshot set unless stronger light/dark captures are added later.
- Do not recreate the app's bottom nav, tabs, cards, or settings layout as webpage structure.
- Consider a dedicated editorial hero image later if screenshots feel too literal.
- Possible image direction: paper, ink, moonlight, soft reading, private notebooks, quiet rooms, literary atmosphere.
- Do not use fake placeholder boxes, crude CSS illustrations, or generic SaaS gradients.

Acceptance criteria:

- Screenshots are supporting product evidence, not the whole website.
- The site belongs to the same product family without looking identical to the app.
- Every image has descriptive alt text and responsive sizing.

## Phase 6: Privacy As Emotional Trust

Objective: make privacy a central part of the product feeling, not a legal afterthought.

Core copy direction:

> Your reflections are not performance data. They are private notes for your own return.

Work:

- Add a dedicated privacy section with calm, practical claims.
- Use only claims supported by the current privacy policy and app behavior.
- Highlight:
  - Works without accounts, if still true.
  - Journal entries and reflections stay on-device by default, if still true.
  - No social feed.
  - No pressure to perform.
  - Clear privacy policy.
- Avoid fear-based messaging.
- Keep the privacy policy link prominent but quiet.

Acceptance criteria:

- Privacy feels emotionally consistent with the brand.
- Claims are accurate and defensible.
- Users can quickly find the full privacy policy.

## Phase 7: SEO Content And FAQ

Objective: help people discover InkBit through search while preserving the calm voice.

Natural SEO topics:

- Private reading journal.
- Quote reflection app.
- Save meaningful quotes.
- Reading reflection app.
- Personal literary journal.
- Calm journaling app.
- Private thought journal.

Work:

- Add a concise explanatory SEO section written in natural prose.
- Avoid keyword stuffing.
- Include FAQ questions:
  - What is InkBit?
  - Is InkBit a journaling app?
  - Can I save quotes and passages?
  - Is my writing private?
  - Does InkBit use streaks or habit pressure?
  - Who is InkBit for?
- If FAQ uses expandable controls, implement them accessibly.
- Add FAQ schema if practical for the static page.

Acceptance criteria:

- The page has enough indexable copy to explain the product.
- FAQ answers are truthful, short, and calm.
- Interactive FAQ affordances work with keyboard and screen readers.

## Phase 8: Interaction And Responsiveness

Objective: keep interactions quiet, reliable, and appropriate for GitHub Pages.

Work:

- Header nav scrolls to sections.
- CTAs link to the correct download/waitlist/app destination.
- Optional theme behavior can respect system preference with `prefers-color-scheme`; add a manual toggle only if it is worth the extra state and QA.
- FAQ expansion works if implemented.
- Avoid visible interactive affordances that do nothing.
- Add subtle motion only if it supports atmosphere, and respect `prefers-reduced-motion`.

Acceptance criteria:

- All visible controls work.
- Mobile, tablet, and desktop layouts are polished.
- No JS dependency is required for core content access.

## Phase 9: Performance, Accessibility, And Metadata

Objective: ship a polished static site that performs well on GitHub Pages.

Work:

- Use semantic HTML: `header`, `main`, `section`, `footer`, and meaningful headings.
- Add meta title and description aligned with the new positioning.
- Update Open Graph and Twitter metadata.
- Consider creating a dedicated Open Graph image instead of relying only on the app icon.
- Use responsive images with `srcset` where useful.
- Generate WebP or AVIF versions of large screenshots while preserving PNG fallback if needed.
- Lazy-load below-the-fold screenshots.
- Give the hero visual stable dimensions to avoid layout shift.
- Validate contrast in both light and dark modes.
- Add visible focus states.
- Use descriptive alt text.

Acceptance criteria:

- Good mobile performance.
- No major layout shift from image loading.
- Accessible keyboard navigation and readable contrast.
- Metadata previews communicate the product clearly.

## Phase 10: Implementation Sequence

Recommended build order:

1. Confirm factual CTA/link/platform details.
2. Refactor `index.html` into semantic sections.
3. Replace the visual token system with the new paper/plum color direction.
4. Add typography stack and responsible font loading.
5. Build the editorial hero.
6. Build product outcome and feature sections.
7. Add privacy and experience sections.
8. Add SEO content and FAQ.
9. Reintroduce screenshots selectively as supporting evidence.
10. Add responsive image optimization.
11. Update metadata, sitemap dates if desired, and Open Graph image.
12. QA locally and on the published GitHub Pages URL.

QA checklist:

- Test widths: 360px, 390px, 430px, 768px, 1280px, 1440px, 1728px.
- Check home, privacy page, sitemap, robots, favicon, screenshots, and CTA links.
- Check published URL under `/inkbit-legal/`, not just local files.
- Check keyboard navigation.
- Check reduced-motion behavior if motion is added.
- Check contrast in light and dark modes.
- Check page without JavaScript.
- Run Lighthouse or equivalent for performance, accessibility, SEO, and best-practices regressions.

## Decisions To Confirm Before Implementation

- Is the current CTA Android-only Google Play, a broader `Get InkBit`, or a waitlist/join link?
- Should the first implementation include dark mode automatically via system preference, or should dark mode wait until the light landing page is polished?
- Are the current six screenshots still accurate enough to use as supporting product evidence?
- Should we create a new dedicated Open Graph image during implementation?
- Is `Works without accounts` still accurate?
- Is `journal entries and reflections stay on your device by default` still accurate?

## Definition Of Success

The finished site should feel like the public, editorial expression of InkBit's new brand direction. It should be search-friendly, quiet, premium, literary, and emotionally warm. It should clearly belong to the same product family as the app without cloning the app UI, and it should work perfectly as a static GitHub Pages site.
