# Home-Service Organic Acquisition, SEO/GEO, and Conversion Design

## Status and authorization boundary

This design was approved section by section on 2026-07-21. It defines the
first acquisition-focused release for Efficient Technologies after the V11
qualification effort ended.

Committing this document authorizes only:

1. user review of this written specification; and
2. after the user accepts the written specification, creation of a detailed
   implementation plan.

It does not yet authorize website implementation, a crawler-policy change,
Cloudflare configuration, Git push, publication, deployment, Search Console
submission, Bing Webmaster Tools submission, or any other live-system change.

V11 remains terminal. This design does not repair, resume, retry, or extend
V11, and it must not reuse V11's lock-first qualification architecture. The
new validation lane stays editable during development and freezes evidence
only after the candidate has passed.

## Fixed authority and current state

- Publish checkout:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`
- Branch: `agent/performance-without-motion-loss`
- Design base HEAD: `d5d042b301076f9f53989a10c65fea935e96c9c2`
- Remote: `https://github.com/tarik-ux/efficient-technologies-site.git`
- Public repository: `tarik-ux/efficient-technologies-site`
- Live origin: `https://efficientautomate.com/`
- Deployment target: Cloudflare Pages
- Product architecture: plain static HTML, CSS, and JavaScript with no
  `package.json` and no build step

At the design base, Git status is clean. The branch is 36 commits ahead of its
configured upstream. The design-document commit must remain isolated from
future product implementation.

The current site already contains:

- the homepage, About page, blog index, 404 page, sitemap, and robots file;
- five published articles covering CRM automation, small-business process
  automation, after-hours booking, review automation, and consulting versus
  in-house implementation;
- three public packages named Launch, Growth, and Systems;
- a Cal.com booking path at `https://cal.com/efficientautomate`;
- an Organization/Service/WebSite structured-data graph;
- a nationwide `areaServed` value;
- a founder identity and byline for Tarik Kizildere; and
- the PageCraftory project as recent web-design work.

The current site does not have a verified home-service automation testimonial,
case study, or customer outcome dataset. None may be invented.

## Problem

The site is broad enough to describe automation work, but too general to own a
clear commercial search category. "Local businesses" could mean almost any
small company, while competitors that surface for relevant searches tend to
specialize by trade, workflow, or geography. Efficient Technologies is not
trying to sell enterprise transformation and should not present itself as an
enterprise consultancy.

The business needs one coherent acquisition system that:

1. attracts owners and operators of local-serving home-service businesses
   anywhere in the United States;
2. establishes relevance for HVAC, plumbing, and electrical contractors;
3. converts that traffic into qualified automation-audit bookings;
4. makes the brand understandable and citable to search and answer engines;
5. remains truthful while the company builds its first home-service evidence;
   and
6. improves delivery performance without changing the site's visible motion
   experience.

Crawler access is necessary but not sufficient. Allowing a crawler makes the
site eligible for discovery or training; it does not create ranking, citation,
or recommendation authority by itself.

## Goals

### Primary business goal

Generate qualified organic audit bookings from United States home-service
businesses that need practical, small-to-medium automation systems rather than
enterprise-scale programs.

### Primary search goal

Build a focused commercial topic cluster around home-service lead recovery,
booking, and review automation, beginning with HVAC, plumbing, and electrical
contractors.

### Primary GEO goal

Make Efficient Technologies a clear, retrievable, citation-friendly entity for
AI search and answer systems. The site should state who the company serves,
what it builds, how each system works, and where the service is available in
plain, internally consistent language.

### Primary conversion goal

Route every commercial page to one low-friction action: **Book a Free
Automation Audit**.

### Performance goal

Improve at least one material delivery metric while preventing meaningful
regressions in the others and preserving all approved video, scene, zoom, and
animation behavior.

## Non-goals

This release will not:

- target enterprise automation buyers;
- create city, state, or near-me landing pages;
- imply offices or physical local presence that Efficient Technologies does
  not have;
- create more trade pages than HVAC, plumbing, and electrical;
- manufacture testimonials, logos, client counts, revenue lifts, response
  rates, or case-study metrics;
- promise first place in Google, inclusion in an AI answer, or an AI
  recommendation;
- replace the existing visual identity, video, motion system, or page
  personality;
- add a framework, content-management system, package manager, or build step;
- rebuild shared site architecture merely to remove static HTML duplication;
- publish an empty case-studies section;
- add mass-produced articles for keyword coverage;
- treat `llms.txt` as a ranking mechanism; or
- repair or rerun V11.

No `llms.txt` file is included in the initial release. It can be reconsidered
only when a supported consumer or measurable operational use is identified.

## Chosen strategy

The approved strategy is a hybrid authority-and-conversion structure:

- The homepage is the nationwide home-service automation authority page.
- Lead Recovery is the flagship commercial system.
- Booking and Review Automation are supporting commercial systems.
- HVAC, plumbing, and electrical pages supply trade-specific relevance.
- Existing articles support those commercial pages rather than competing with
  them.
- All commercial routes use one audit CTA and one offer hierarchy.
- Three founding-client implementations create the first legitimate outcome
  evidence.

This is stronger than a generic small-business site because it concentrates
relevance. It is stronger than a single-service site because the three systems
represent a coherent customer journey. It avoids the weakness of city-page
SEO because the company serves a national market and does not have a physical
office in every target location.

## Audience and positioning

### Core audience

The buyer is an owner, operator, or small management team at a local-serving
home-service business in the United States. The first trades are:

1. HVAC;
2. plumbing; and
3. electrical contracting.

The business may operate in one town, several service areas, or a regional
territory. "Local" describes the customer's operating model, not proximity to
Efficient Technologies.

### Core problems

The site focuses on operational leakage that a small team recognizes:

- missed calls and unhandled web leads;
- slow follow-up;
- after-hours inquiries;
- inconsistent scheduling and reminders;
- no-show recovery;
- disconnected lead records; and
- inconsistent post-job review requests.

### Core promise

Efficient Technologies builds practical automation systems that help a
home-service business respond, book, follow up, and request reviews more
consistently, using the tools the business already has where feasible.

The copy must sell operational outcomes and workflow clarity. "AI" can appear
when it describes a real implementation component, but it must not replace the
business explanation with generic AI-transformation language.

### Homepage hero direction

The approved primary headline is:

> Turn missed calls and slow follow-up into booked jobs.

The supporting copy must identify the audience and the three systems. Its
meaning is fixed even if line wrapping or minor editing is needed:

> We build lead recovery, booking, and review systems for HVAC, plumbing,
> electrical, and other home-service businesses across the United States.

The primary CTA label is **Book a Free Automation Audit**. The only secondary
hero action is **See How It Works**, which scrolls to the on-page process
section and does not introduce a second conversion destination.

## Offer architecture

### Flagship: Lead Recovery System

The Lead Recovery System receives the strongest homepage and navigation
emphasis. It covers the workflow from an unanswered call or new inquiry to an
acknowledged, routed, and followed-up opportunity. It does not promise that
every lead becomes a job.

### Supporting system: Booking Automation

Booking Automation covers self-scheduling, after-hours booking, reminders,
rescheduling, and no-show follow-up where the customer's existing tools and
operating rules support those actions.

### Supporting system: Review Automation

Review Automation covers post-job requests, reminders, and status tracking.
It must not use review gating, suppress customers predicted to leave negative
feedback, or offer incentives in exchange for positive reviews.

### Public packages

The approved three-package structure remains:

- **Launch:** `$997` one-time;
- **Growth:** `$1,997` build plus `$497/month`; and
- **Systems:** custom pricing.

The Growth card retains its featured appearance. Its badge changes from
**Most popular** to **Best value**. The site must not claim popularity without
sales evidence.

Package copy may be narrowed to the new positioning, but the displayed prices,
one-time versus recurring distinction, cancellation language, and included
scope must remain internally consistent across visible copy and structured
data.

### Founding-client program

The first evidence-building program consists of three discounted,
tightly-scoped implementations. The discount amount is quoted privately; the
public site does not state a percentage or dollar discount.

Participation requires written permission to document:

- the initial workflow and baseline;
- the agreed implementation;
- the measurement method;
- the observed result; and
- an accurate customer quotation if the customer voluntarily approves it.

The site may describe the three-slot program. It must not show a remaining-slot
count unless someone has manually verified and updated that count. Completed
founding-client work becomes a case study only after the evidence is reviewed
for accuracy and publication permission.

### Implementation guarantee

The current statement, "Works in 30 days, or we rebuild it free," is too vague
to be enforceable or credible. It is replaced with this meaning:

> If the agreed automation workflow is not operating as scoped within 30
> calendar days after Efficient Technologies receives all required access,
> content, decisions, and approvals, Efficient Technologies will continue the
> implementation work without additional implementation fees until the agreed
> workflow operates as scoped.

The guarantee does not cover:

- new or expanded scope;
- third-party subscription, messaging, telephony, or usage fees;
- a third-party outage or platform restriction;
- revoked or delayed customer access;
- missing customer content or approvals; or
- operation outside the agreed acceptance criteria.

The final public wording can be shorter, but it must link to or sit beside
language that preserves these boundaries.

## Information architecture

The initial commercial route set is fixed:

| Route | Role | Primary search intent |
|---|---|---|
| `/` | Nationwide authority and conversion hub | home-service business automation |
| `/solutions/lead-recovery-automation/` | Flagship solution | lead recovery automation, missed-call follow-up |
| `/solutions/booking-automation/` | Supporting solution | booking and scheduling automation |
| `/solutions/review-automation/` | Supporting solution | review-request automation |
| `/industries/hvac-automation/` | Trade page | HVAC automation |
| `/industries/plumbing-automation/` | Trade page | plumbing business automation |
| `/industries/electrical-automation/` | Trade page | electrical contractor automation |

Existing routes remain stable:

- `/about/`
- `/blog/`
- `/blog/crm-automation-local-business/`
- `/blog/business-process-automation-small-business/`
- `/blog/booking-automation-after-hours/`
- `/blog/review-automation-local-seo/`
- `/blog/software-consulting-vs-in-house/`

The initial release does not create redirect aliases for speculative URL
variants because these seven commercial routes are new. Every new route uses a
folder with an `index.html`, matching the current static-site pattern.

### Commercial page content contract

Every commercial page must have:

- one unique title, meta description, canonical URL, H1, and page purpose;
- a direct answer near the beginning that explains the system or trade use;
- a concrete workflow with triggers, steps, outputs, and human handoff points;
- realistic examples clearly labeled as examples rather than customer results;
- integration boundaries and prerequisites;
- an implementation/process section;
- page-specific FAQs written for actual buyer questions;
- relevant internal links to the hub, solution pages, industry pages, and
  supporting articles; and
- the same primary audit CTA.

There is no minimum word-count target. A page passes when its information is
useful, distinct, and complete. It fails when it is a template whose trade or
service nouns can be swapped without materially changing the guidance.

### Solution-page differentiation

The Lead Recovery page must explain missed-call and form-lead intake,
acknowledgment, routing, follow-up timing, status capture, escalation, and
human takeover.

The Booking page must explain availability rules, after-hours booking,
confirmation, reminders, rescheduling, no-show recovery, and calendar or CRM
boundaries.

The Review page must explain the job-complete trigger, request timing,
reminders, status handling, human exception handling, and the prohibition on
review gating.

### Industry-page differentiation

The HVAC page must address seasonal demand, service versus estimate requests,
after-hours or emergency inquiries, and technician/office handoff.

The plumbing page must address urgent calls, service-area qualification,
dispatch or scheduling handoff, and quote follow-up.

The electrical page must address job-type qualification, residential versus
commercial inquiry routing where relevant, estimate follow-up, and scheduling.

These are workflow contexts, not claims that Efficient Technologies has
already delivered verified results in each trade.

### Existing content cluster

The five existing articles remain published and receive targeted edits only
where needed for truthfulness, relevance, and internal linking:

- CRM automation supports Lead Recovery.
- Small-business process automation supports the homepage and all solutions.
- After-hours booking supports Booking Automation.
- Review automation supports Review Automation.
- Consulting versus in-house supports the process, pricing, and objection
  journey.

No additional article is required for the initial release. The next article is
chosen from Search Console query evidence or recurring sales questions rather
than a prebuilt keyword quota.

## Conversion architecture

### Single conversion path

Every primary commercial CTA uses the label **Book a Free Automation Audit**
and leads to the existing Cal.com booking experience. On the homepage, the CTA
may scroll to the existing booking embed. On secondary pages, it may link
directly to the same Cal.com event.

Email remains a fallback contact method, not a competing primary CTA.

### Homepage persuasion sequence

The homepage uses this semantic sequence while reusing the current visual
system:

1. outcome and audience;
2. recognizable operational leakage;
3. flagship Lead Recovery System;
4. supporting Booking and Review Systems;
5. HVAC, plumbing, and electrical relevance;
6. implementation process;
7. truthful proof and founding-client program;
8. packages and guarantee;
9. objections and FAQs; and
10. the booking section.

The exact DOM may preserve existing section wrappers when that reduces visual
and motion risk, but the reading order and internal links must implement this
persuasion sequence.

### Proof policy

The site may use:

- documented process commitments;
- real workflow diagrams and demonstrations;
- accurate descriptions of supported tools and integration boundaries;
- PageCraftory as web-design work;
- founder identity and implementation approach; and
- future founding-client evidence after review and permission.

The site may not use:

- PageCraftory as proof of home-service automation ROI;
- unverified customer logos;
- invented testimonials;
- implied customer counts;
- fabricated response-time or revenue lifts; or
- generic stock statistics presented as Efficient Technologies results.

The existing `7+`, `72h`, `100%`, and `0` statistics are process statements,
not customer outcomes. They can remain only when their labels stay explicit:

- `7+` refers to documented audit categories;
- `72h` remains a target, not a guarantee;
- `100%` means customer approval before build; and
- `0` means no long-term contract or lock-in under the displayed terms.

If implementation cannot verify the underlying process or commercial term,
the affected number is removed rather than softened into an unsupported claim.

### Conversion measurement

The measurement vocabulary is:

- commercial landing-page view;
- primary CTA click;
- booking experience opened;
- completed audit booking;
- referring route;
- trade or solution page; and
- referrer family, including Google, Bing/Copilot, ChatGPT, Claude, Perplexity,
  Apple, DuckDuckGo, and direct traffic where available.

No heavyweight analytics library is added without an owner-controlled account
and measurement identifier. If an existing owner-controlled analytics property
is available, its script must load after critical rendering and record the
approved events. If it is not available, the initial release uses page-level
Cloudflare analytics plus source parameters passed to Cal.com, and Cal.com
booking records remain the completed-booking source of truth.

If the scheduler cannot preserve source parameters or expose reliable booking
completion without an account-side configuration, the site tracks outbound
booking actions and reports completed-booking attribution as unavailable. It
must not infer completions from clicks.

No numeric conversion-rate promise is an implementation acceptance criterion.
The release establishes a clean baseline; business performance is reviewed at
30, 60, and 90 days.

## SEO architecture

### Indexability and metadata

Every public page must:

- return a successful response;
- be reachable through internal navigation or contextual links;
- have one self-referencing absolute canonical URL;
- have one descriptive title and meta description;
- use `index, follow` unless the page has a documented reason not to;
- have internally consistent Open Graph and Twitter metadata;
- avoid duplicate H1s; and
- appear in the sitemap when it is intended for search discovery.

The sitemap must include accurate canonical URLs and accurate `lastmod` values.
It must not update every date merely because the sitemap file was regenerated.

No doorway, city, or state pages are created. No page claims a local office or
local team in a place where that presence does not exist.

### Structured data

The homepage uses a consistent graph containing:

- `Organization` for Efficient Technologies;
- `WebSite` for `efficientautomate.com`;
- `WebPage` for the homepage; and
- truthful `Service` or offer information for the systems actually sold.

Solution pages use `Service` and `WebPage` data where the visible page supports
the fields. Industry pages use `WebPage` plus relevant service relationships;
they do not pretend that each trade page represents a separate company or
office.

Blog posts retain `BlogPosting` or `Article` data with accurate author,
publisher, published date, and modified date. Dates change only when the
visible content receives a material update.

The initial release does not add `FAQPage` structured data. The visible FAQs
remain useful to visitors and answer engines without implying rich-result
eligibility that this commercial site may not have.

### Company address and service area

The Sheridan address is treated as a legal or mailing address, not proof of a
customer-facing local office. It can remain as an Organization postal address
if it is still accurate, but it must not be used to create Sheridan-focused
landing pages or local-presence claims.

The site does not use `LocalBusiness` or `ProfessionalService` markup unless a
future customer-facing operational location is verified. `areaServed` remains
the United States.

### Authorship and trust

The About page remains the canonical company-and-founder explanation. It must
clearly state:

- Efficient Technologies LLC's scope;
- Tarik Kizildere's founder role;
- the audit, build, approval, and support process;
- the practical limits of the service; and
- accurate contact details.

Only verified experience and credentials may be added. If a credential is not
available, the site explains the actual process and work rather than inventing
authority language.

## GEO and crawler policy

### Citation-friendly content

Commercial pages are written so a search or answer engine can extract a useful
answer without guessing. Each page uses:

- a concise definition;
- explicit company, audience, service, and country references;
- short answer-first passages followed by detail;
- named workflow steps;
- visible limitations and human handoffs;
- original examples or workflow diagrams;
- descriptive headings;
- stable canonical URLs; and
- sources for material third-party factual claims.

This structure improves retrievability and citation quality. It does not
guarantee selection by an AI system.

### Required search and assistant access

The site and Cloudflare security configuration must allow legitimate requests
from these discovery or user-fetch agents:

| Provider | Agent or control token | Direct purpose |
|---|---|---|
| OpenAI | `OAI-SearchBot`, `ChatGPT-User` | ChatGPT Search and user-directed retrieval |
| Anthropic | `Claude-SearchBot`, `Claude-User` | Claude search and user-directed retrieval |
| Google | `Googlebot` | Google Search indexing used across Google search experiences |
| Microsoft | `bingbot` | Bing indexing and Copilot discovery |
| Perplexity | `PerplexityBot`, `Perplexity-User` | Perplexity search and user-directed retrieval |
| Apple | `Applebot` | Siri, Safari, Spotlight, and Apple search experiences |
| DuckDuckGo | `DuckAssistBot` | DuckDuckGo AI-assisted answers |
| Amazon | `Amzn-SearchBot`, `Amzn-User` | Alexa search eligibility and user-directed retrieval |

User-directed fetchers may not always apply `robots.txt` in the same way as
automatic crawlers. They must still not be challenged or blocked by an
overbroad Cloudflare rule when the provider request can be verified.

Brave Search does not publish a differentiated crawler user agent. Under
Brave's published behavior, keeping the site crawlable to Googlebot also keeps
it eligible for Brave's independent search index and AI answers. No invented
`Bravebot` group is added to `robots.txt`.

### Approved strategic model access

Because this is public marketing content and the business prioritizes broad AI
visibility over restricting model ingestion, the initial policy also allows:

- `GPTBot`;
- `ClaudeBot`;
- `Google-Extended`; and
- `Applebot-Extended`.

`Google-Extended` is a control token, not a separate HTTP crawler. It covers
eligible Gemini training and grounding uses but does not affect Google Search
ranking. GPTBot, ClaudeBot, and Applebot-Extended likewise do not create direct
AI-search ranking gains; their potential value is longer-term model exposure.

### Lower-priority access kept blocked

The initial policy keeps these lower-priority agents blocked because they do
not have a sufficiently direct citation or qualified-referral path for this
release:

- `Amazonbot`;
- `Bytespider`;
- `CCBot`;
- `CloudflareBrowserRenderingCrawler`; and
- `meta-externalagent`.

`Meta-ExternalFetcher` remains eligible under the general allow rule for
user-directed retrieval. The block list can be revisited using Cloudflare AI
Crawl Control activity and referral evidence.

### Cloudflare and robots implementation

The current live `robots.txt` is Cloudflare-managed and explicitly blocks
GPTBot, ClaudeBot, Google-Extended, and Applebot-Extended. Editing only the
repository `robots.txt` cannot override those more specific managed groups.

Implementation therefore must:

1. disable Cloudflare's blanket managed training-block policy;
2. retain Cloudflare bot protection for unknown or malicious automation;
3. use the repository `robots.txt` as the explicit crawler policy;
4. ensure AI Crawl Control or WAF rules do not contradict the allowlist;
5. publish a discoverable sitemap line; and
6. verify the final live response rather than assuming dashboard state
   propagated.

The custom content signal is:

```text
Content-Signal: search=yes, ai-input=yes, use=reference
```

The global signal intentionally omits `ai-train`. Omission neither grants nor
restricts training through that experimental signal; per-agent access is
expressed through the approved robots groups. This avoids a global training
grant to agents that remain blocked while explicitly permitting AI grounding
and reference use.

## Static-site component boundaries

The product remains a static site.

- `index.html` owns the animated homepage document and its existing inline
  critical styles and loader logic.
- `css/styles.css` owns shared secondary-page styling.
- `js/main.js` and `js/ambient.js` own the existing interaction and ambient
  motion behavior.
- New solution and industry folders own their static page documents.
- `sitemap.xml` owns the canonical discovery inventory.
- `robots.txt` owns the origin crawler policy after the managed Cloudflare
  policy is disabled.
- `_headers` and `_redirects` retain their current deployment roles.

This release does not introduce a template generator. Header, footer, CTA,
metadata, and schema consistency across static documents is enforced by
validation. Shared CSS and JavaScript are preferred, but the homepage's inline
critical path is not broadly refactored.

## Visitor and crawler data flows

### Visitor flow

```text
Search or AI citation
  -> homepage, solution page, industry page, or article
  -> relevant workflow and proof
  -> Book a Free Automation Audit
  -> homepage booking embed or Cal.com event
  -> confirmed audit booking
  -> manual qualification and follow-up
```

There is no hidden lead-routing service added in this release. Cal.com remains
the booking system of record.

### Crawler flow

```text
Verified crawler
  -> Cloudflare bot/WAF decision
  -> live robots.txt policy
  -> sitemap and internal links
  -> canonical HTML and structured data
  -> provider index or retrieval system
```

Crawler eligibility is verified at both the robots and Cloudflare enforcement
layers. A correct repository file with a blocking WAF rule is a failed state.

## Performance and motion-preservation contract

### Frozen video assets

The seven current video assets remain byte-identical:

| Asset | SHA-256 |
|---|---|
| `assets/video/city-loop-v20260714.mp4` | `63a1b06128c146346a558a0b61f818d068d29679352e2d4118b1d8fb1cc02078` |
| `assets/video/t1-v20260714.mp4` | `a9fcb30e40497d2326c21f2ffefff74a701503389e2f2cacdf447181e950f1e2` |
| `assets/video/t1r-v20260714.mp4` | `63689abed09831f05b5303cf459eefc17383e64fd130ed6e69ab55f6d9162aaa` |
| `assets/video/t2-v20260714.mp4` | `200d22bceeb744dfcc16e762e79adfb1c640eaaac5263cc4336b6f3592b6f150` |
| `assets/video/t2r-v20260714.mp4` | `33d8e4f47ed70f4defb50ec7016032d683841990cad950894d0ad52808b656da` |
| `assets/video/t3-v20260714.mp4` | `f8c8f0a610cda8f522911c6c533a206aaa977722b6c7c5b86ee19602f15e988a` |
| `assets/video/t3r-v20260714.mp4` | `52bb9bc7520f33af555b39864136394a458ecbf42d9d52e13be7747727af3e6a` |

No video is replaced, re-encoded, shortened, recolored, cropped into a new
asset, or reordered in this release.

### Frozen visible behavior

The candidate must preserve:

- the fixed full-viewport world video;
- the existing poster behavior before video playback;
- the chapter-layer composition;
- the `t1`, `t1r`, `t2`, `t2r`, `t3`, and `t3r` source order;
- scroll-driven chapter entry and reversal;
- zoom-in and zoom-out behavior;
- scene-change thresholds;
- animation durations and easings;
- loader behavior;
- Lenis/GSAP/ScrollTrigger behavior;
- cursor and ambient effects;
- reduced-motion behavior;
- mobile and desktop object positioning; and
- the absence of a permanently visible poster layer behind the playing video.

`js/main.js`, `js/ambient.js`, the homepage runtime loader, and the homepage
preloader/reveal logic should remain byte-identical wherever possible. If an
implementation step believes one of those units must change, that change is
out of the default path and requires a separate motion-contract justification
in the implementation plan before editing.

### Allowed performance changes

Performance work may:

- defer non-critical analytics or support scripts;
- lazy-load below-the-fold images;
- add explicit dimensions to non-video media;
- reduce duplicated non-motion CSS or JavaScript when the change is local and
  behavior-preserving;
- improve font loading without changing the approved typefaces;
- improve compression or cache headers for non-video assets;
- remove unnecessary requests;
- use `decoding="async"` where appropriate; and
- keep new secondary pages lightweight and free of homepage-only runtime code.

Performance work may not use a visual substitution, altered animation,
removed effect, changed video, persistent poster, or delayed interaction that
a normal visitor can perceive as the improvement mechanism.

### Performance acceptance

Baseline and candidate are measured in the same browser, machine, viewport,
network profile, and cache state. Each primary viewport receives at least
three bounded cold-cache runs, and medians are compared for:

- Largest Contentful Paint;
- Cumulative Layout Shift;
- Total Blocking Time;
- critical request count; and
- transferred bytes before the page becomes usable.

The performance candidate passes only when:

1. the motion-preservation contract passes;
2. no primary median regresses by more than 10 percent;
3. Cumulative Layout Shift does not exceed `0.1` and does not materially worsen
   from a better baseline; and
4. at least one targeted median improves by more than 10 percent, or critical
   request/byte cost falls measurably without a primary-metric regression.

If measurement cannot distinguish a proposed optimization from run variance,
that optimization is not claimed as a performance win. It can be omitted from
the release.

## Error and fallback behavior

- The existing booking fallback remains usable if the Cal.com embed fails.
- Email remains visible when booking is unavailable.
- If an optional analytics script fails, content, motion, navigation, and
  booking must continue working.
- If GSAP, Lenis, or another homepage runtime dependency fails, existing
  runtime-loader fallback behavior must not be weakened.
- If JavaScript is unavailable, core content and direct links remain readable
  and actionable.
- Missing structured-data enhancement must not hide visible content.
- A crawler-policy dashboard change that fails while the repository deploys is
  reported as a partial result, not a completed GEO release.
- Missing Search Console, Bing, analytics, Cal.com, Cloudflare, or GitHub
  authority is reported with the exact blocked step. No placeholder token,
  fabricated verification, or completion claim is allowed.
- A broken internal link, missing canonical page, invalid JSON-LD document,
  absent sitemap entry, or unexpected `noindex` is release-blocking.

## Validation architecture

Validation tooling remains separate from deployable product bytes and editable
until the candidate passes. The implementation plan must choose a local tooling
location that Cloudflare Pages does not publish.

The validation sequence is:

1. **Preflight**
   - authenticate branch, HEAD, remote, clean Git state, and absence of an
     index lock;
   - record the baseline video hashes and motion contract;
   - record current local and live page behavior;
   - confirm required runtimes and browser availability.

2. **Static contract checks**
   - required routes and files exist;
   - titles, descriptions, H1s, canonicals, and index directives are present
     and unique where required;
   - JSON-LD parses and uses allowed types;
   - internal links resolve;
   - sitemap URLs match canonical pages;
   - crawler groups match the approved policy;
   - no placeholder copy, unsupported metric, or fake proof is present;
   - the Growth badge is exactly `Best value`.

3. **Content checks**
   - each solution and industry page satisfies its differentiation contract;
   - claims are supported or qualified;
   - the address is not used as a false local-presence signal;
   - every commercial page uses the single primary CTA.

4. **Browser checks**
   - desktop and mobile navigation;
   - every primary CTA and fallback;
   - full homepage scroll in both directions;
   - scene and zoom parity;
   - reduced-motion behavior;
   - secondary-page rendering without homepage runtime errors;
   - 404 behavior.

5. **Performance comparison**
   - bounded baseline and candidate runs;
   - median comparison under the acceptance rules;
   - no claim based on one favorable run.

6. **Disposable deployment dry run**
   - validate the exact product candidate in a non-production context when the
     current Cloudflare/GitHub configuration supports one;
   - use parent and phase deadlines;
   - clean only tool-owned temporary state;
   - do not use immutable evidence as an execution workspace.

7. **Final evidence freeze**
   - freeze only the accepted candidate identity, test outputs, and live
     verification checklist;
   - do not reopen or mutate frozen evidence;
   - a failed frozen candidate requires a new candidate, not evidence repair.

This sequence deliberately replaces the previous lock-first architecture.
Passing unit or static checks is necessary but not sufficient; browser, motion,
performance, deploy, and live checks remain required for their respective
completion claims.

## Publishing and live verification

After written-spec review, implementation-plan approval, implementation, and
all local gates pass, publishing proceeds through the authorized GitHub and
Cloudflare Pages path.

The release sequence is:

1. commit scoped product changes;
2. re-run the complete local gate on the committed candidate;
3. push through the `tarik-ux/efficient-technologies-site` remote;
4. confirm Cloudflare Pages selected the intended commit;
5. apply the approved crawler settings in Cloudflare;
6. wait for propagation within a bounded window;
7. verify every new live route, canonical, CTA, schema document, sitemap entry,
   and robots group;
8. verify the live homepage motion and video contract on desktop and mobile;
9. compare post-deploy performance to the accepted candidate;
10. submit or refresh the sitemap in owner-controlled Google Search Console and
    Bing Webmaster Tools when access exists; and
11. record the exact commit and live verification result.

Routine in-scope edits, tests, commits, push, deployment, and verification do
not require repeated conversational approval after the written specification
and implementation plan are approved. A new approval is required only for a
material scope change, destructive action, new paid service, unapproved
credential path, or external action outside the authorized website release.

If GitHub, Cloudflare, Cal.com, Google, Bing, or analytics authentication
requires an interactive owner login, work continues through every independent
step and then reports the precise access-dependent remainder. Repository
success is not presented as live-provider success.

## Success measurement after launch

Technical release acceptance is immediate and deterministic. Business results
are observed over time.

### Immediate technical indicators

- all seven commercial routes are live and indexable;
- sitemap, canonicals, internal links, and schema are consistent;
- approved search and assistant agents are allowed;
- approved strategic model agents are no longer blocked;
- lower-priority agents remain blocked;
- the booking journey works;
- the motion contract is unchanged; and
- the performance acceptance gate passes.

### 30-day indicators

- Google and Bing discovery/index status;
- impressions for home-service, lead-recovery, booking, review, HVAC,
  plumbing, and electrical automation queries;
- crawler activity in Cloudflare AI Crawl Control;
- organic and AI referral sessions where available;
- audit CTA actions; and
- completed audit bookings by attributable source.

### 60- and 90-day indicators

- growth in qualified non-brand impressions and clicks;
- pages and queries producing audit bookings;
- AI citations or referrals from supported providers;
- sales objections or questions that should become content;
- founding-client implementation progress; and
- the first publishable evidence package.

The design sets no fabricated traffic, ranking, or conversion target before a
reliable baseline exists. After the first 30 days, targets can be set from
actual Search Console, Bing, Cloudflare, Cal.com, and sales data.

## Risks and controls

| Risk | Control |
|---|---|
| Broad positioning dilutes relevance | Home services are the homepage category; Lead Recovery is the flagship |
| Multiple pages become thin templates | Every route has a distinct workflow and content contract |
| Nationwide targeting turns into fake local SEO | No city pages, false offices, or LocalBusiness markup |
| No customer proof weakens conversion | Transparent process, founding-client program, and no fabricated outcomes |
| Package claims conflict with schema | Static validation compares visible offers and JSON-LD |
| Guarantee creates ambiguous liability | Scope, dependency, access, fee, and outage boundaries are explicit |
| Training access is mistaken for ranking | Search, grounding, user-fetch, and training agents are labeled separately |
| Cloudflare overrides repository robots | Managed policy is disabled and live output/WAF behavior is verified |
| More content slows the homepage | New content uses secondary routes; performance is a release gate |
| Performance work changes the experience | Video hashes and motion behavior are frozen |
| Static HTML copies drift | Cross-page validation enforces shared metadata, navigation, footer, and CTA contracts |
| Analytics harms performance or privacy | No tracker without an owner-controlled account; non-critical loading only |
| Qualification tooling stalls again | Editable tooling, explicit deadlines, disposable dry runs, freeze last |

## Official research basis

- Google people-first content guidance:
  `https://developers.google.com/search/docs/fundamentals/creating-helpful-content`
- Google spam policies:
  `https://developers.google.com/search/docs/essentials/spam-policies`
- Google Organization structured data:
  `https://developers.google.com/search/docs/appearance/structured-data/organization`
- Google LocalBusiness structured data:
  `https://developers.google.com/search/docs/appearance/structured-data/local-business`
- OpenAI crawler definitions:
  `https://developers.openai.com/api/docs/bots`
- Anthropic crawler definitions:
  `https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler`
- Google crawler and Google-Extended definitions:
  `https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers`
- Microsoft guidance for AI-search discovery, sitemaps, and IndexNow:
  `https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search`
- Perplexity crawler definitions:
  `https://docs.perplexity.ai/docs/resources/perplexity-crawlers`
- Applebot definitions:
  `https://support.apple.com/en-ie/119829`
- DuckAssistBot definition:
  `https://duckduckgo.com/duckduckgo-help-pages/results/duckassistbot`
- Amazon crawler definitions:
  `https://developer.amazon.com/en/amazonbot`
- Brave Search crawler behavior:
  `https://search.brave.com/help/brave-search-crawler`
- Cloudflare managed robots behavior:
  `https://developers.cloudflare.com/bots/additional-configurations/managed-robots-txt/`
- Cloudflare AI crawler categories and controls:
  `https://developers.cloudflare.com/ai-crawl-control/reference/bots/`

## Completion boundary

This design is complete when it is committed and the user has reviewed and
accepted the written file. The next permitted skill is `writing-plans`, which
must translate this specification into small implementation tasks, exact file
changes, tests, deployment gates, and rollback boundaries.

No website code or live configuration changes are permitted between this
design-document commit and the user's written-spec approval.
