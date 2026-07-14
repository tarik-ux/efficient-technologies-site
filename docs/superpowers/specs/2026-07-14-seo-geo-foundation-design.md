# Efficient Technologies SEO/GEO Foundation Design

**Date:** 2026-07-14

## Goal

Improve the production site's eligibility, clarity, and citation quality across conventional search and grounded AI search without adding speculative GEO files, thin pages, invented proof, or unsupported business claims.

## Current State

- The deployable site is plain static HTML/CSS/JS at the repository root.
- The homepage already has canonical metadata, Open Graph metadata, and an Organization/ProfessionalService/WebSite JSON-LD graph.
- The five articles already have unique titles, descriptions, canonicals, and minimal Article JSON-LD.
- The blog index title is double-escaped as `&amp;amp;`.
- Blog pages have no `og:image` or complete Twitter metadata.
- Article markup has no representative image, `dateModified`, stable author URL, or organization IDs.
- `blog-preview.html` is publicly deployed as duplicate preview content.
- There is no top-level `404.html`, so Cloudflare Pages serves the homepage with `200 OK` for unknown routes.
- The checked-in `robots.txt` allows all crawlers. Cloudflare currently prepends a managed policy that allows search/reference use and blocks GPTBot and other training crawlers. OAI-SearchBot is not blocked.
- The checked-in site matches `tarik-ux/efficient-technologies-site@main` for the sampled production files.

## Evidence-Based Direction

Google's current generative-search guidance says foundational SEO, useful non-commodity content, crawlability, clear technical structure, and accurate entity information remain the relevant work. Google explicitly says it ignores `llms.txt` and does not require special GEO markup. OpenAI documents OAI-SearchBot for ChatGPT search separately from GPTBot for model training. The implementation therefore improves the real site and preserves those crawler boundaries instead of adding an unsupported AI-text-file layer.

## Scope

### 1. Correct routing and duplicate-content behavior

- Create a branded top-level `404.html` with `noindex, follow` and a clear route back to the homepage and blog.
- Add `_redirects` rules:

  ```text
  /blog-preview /blog/ 301
  /blog-preview.html /blog/ 301
  ```

- Delete `blog-preview.html` from the deploy root.
- Verify an unknown production URL returns HTTP `404`, while both preview URLs return a permanent redirect to `/blog/`.

### 2. Complete page metadata

- Fix the blog title and Open Graph title to use one encoded ampersand.
- Add these tags to every indexable page: the homepage, About page, blog index, and every article:
  - `og:image`
  - `og:image:alt`
  - `twitter:title`
  - `twitter:description`
  - `twitter:image`
  - `twitter:image:alt`
- Use `https://efficientautomate.com/assets/og.png` as the stable social preview image.
- Keep one absolute canonical URL per indexable page with trailing-slash consistency.
- Use one robots directive containing `max-image-preview:large` on indexable pages so search systems can use representative imagery.

### 3. Establish a verifiable entity and author page

- Create `/about/index.html` using only facts already public on the current site and booking profile:
  - Efficient Technologies LLC is an automation studio for local businesses.
  - Tarik Kizildere is the founder.
  - The studio builds booking, follow-up, CRM, review, lead-capture, and workflow automations.
  - The public contact email is `tarik@efficientautomate.com`.
  - The current Wyoming address is presented as a mailing address, not a storefront claim.
- Reuse the existing header, footer, type, colors, spacing, and assets. Do not introduce a new visual system.
- Link the page from article bylines and the site footer so it is both human-discoverable and crawlable.
- Do not add credentials, client counts, performance claims, social profiles, testimonials, or case studies that are not already verified.

### 4. Improve visible article trust signals

- On each article, render semantic publication and update dates with `<time datetime="...">`.
- Add a visible author link to `/about/` for Tarik Kizildere.
- Add one existing representative image immediately below the article heading:
  - CRM automation: `/assets/art/tower.webp`
  - Business process automation: `/assets/art/street.webp`
  - Booking automation: `/assets/art/dawn.webp`
  - Review automation: `/assets/og.png`
  - Software consulting: `/assets/art/tower.webp`
- Preserve the existing article copy. This change must not manufacture examples, evidence, or results.

### 5. Normalize structured data

The homepage JSON-LD graph will use stable IDs and accurate relationships:

- `Organization` at `https://efficientautomate.com/#organization`
  - `name`, `legalName`, `url`, `email`, `logo`, `description`, `address`, `founder`, and `knowsAbout`
- `Person` at `https://efficientautomate.com/about/#tarik-kizildere`
  - `name`, `url`, `jobTitle`, `worksFor`, and `knowsAbout`
- `Service` at `https://efficientautomate.com/#automation-service`
  - `name`, `serviceType`, `provider`, `areaServed`, `audience`, description, and the existing offer catalog
- `WebSite` at `https://efficientautomate.com/#website`
- `WebPage` at `https://efficientautomate.com/#webpage`

The current `ProfessionalService` node will be replaced with `Service`. The company sells a service across the United States; the markup must not imply that the Wyoming mailing address is a walk-in local storefront.

The About page will use an `AboutPage` graph connected to the same Organization, Person, and WebSite IDs.

The blog index will use `Blog` and `CollectionPage` semantics connected to the Organization and WebSite IDs.

Each article will use `BlogPosting` with:

- stable `@id` and `url`
- `headline` and `description`
- original `datePublished`
- `dateModified: 2026-07-14`
- a representative `image`
- `author` referencing the Person ID
- `publisher` referencing the Organization ID
- `isPartOf` referencing the blog
- `mainEntityOfPage` referencing the canonical page
- `inLanguage: en-US`

Visible page content and structured data must agree.

### 6. Preserve AI crawler intent

- Add an explicit OAI-SearchBot allow group to the checked-in `robots.txt`.
- Retain the general allow rule and sitemap declaration.
- Do not add a repository-level GPTBot allow rule that conflicts with Cloudflare's managed training block.
- Do not create `llms.txt`, `ai.txt`, special AI schema, or hidden AI-only copy.
- After deployment, verify the Cloudflare-managed live response still blocks GPTBot and still permits OAI-SearchBot.

### 7. Refresh sitemap signals

- Add `/about/` to `sitemap.xml`.
- Add accurate `lastmod` values:
  - `2026-07-14` for pages changed by this release.
  - Preserve original publication dates only as `datePublished` in article markup; sitemap `lastmod` reflects this release because the article documents are modified.
- Keep only canonical, indexable URLs in the sitemap.

## Validation Contract

No runtime dependency or package manager will be introduced.

Create a Node.js validation script using built-in modules only. It must fail before production edits and pass afterward. It will assert:

- every indexable HTML page has exactly one title, description, canonical, robots directive, Open Graph URL/image, and Twitter image
- canonical URLs are unique and match the sitemap
- all JSON-LD blocks parse as JSON
- the homepage graph contains Organization, Person, Service, WebSite, and WebPage IDs
- the About page exists and exposes matching Person/Organization IDs
- all five articles use BlogPosting, contain author/image/published/modified properties, and show matching visible author/date/image elements
- `blog-preview.html` is absent
- `_redirects` contains both permanent preview redirects
- `404.html` contains `noindex`
- `robots.txt` allows OAI-SearchBot and declares the sitemap
- sitemap URLs are absolute, canonical, unique, and contain `lastmod`
- no `llms.txt` or `ai.txt` is present

Additional verification:

1. Start a local static server and verify every page, link target, asset, and JSON-LD block.
2. Inspect desktop and mobile renders of the homepage, About page, blog index, one article, and 404 page.
3. Run `git diff --check` and inspect the complete intended diff.
4. Push `agent/seo-geo-foundation`, open a ready pull request, and use any available Cloudflare preview/deployment signal.
5. Merge to `main` only after the local contract and repository checks pass.
6. Poll production until `/about/` and the changed metadata are live.
7. Verify production status behavior, redirects, canonical metadata, sitemap, robots policy, and representative pages.

## Error and Rollback Behavior

- If GitHub auth, push, PR, merge, Cloudflare deployment, or live readback fails, stop at that boundary and report the exact successful and failed stages.
- Do not claim publication from a successful push alone.
- If production is visibly broken or routing is incorrect after merge, revert the merge commit and verify the previous production state.

## Non-Goals

- No new service or location landing-page farm.
- No FAQ schema or rich-result markup unsupported by visible content.
- No invented testimonials, customers, metrics, qualifications, or case studies.
- No booking-flow change; the Cal.com mismatch remains a separate conversion task.
- No mobile-navigation redesign or video-performance rewrite in this release.
- No Search Console, Bing Webmaster Tools, Google Business Profile, or analytics account changes without separate authenticated access and approval.
