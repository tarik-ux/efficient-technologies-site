# Responsive picture poster layer design

- Date: 2026-07-16 (Europe/Berlin)
- Status: approved by user; implementation plan written and awaiting execution choice
- Repository: `tarik-ux/efficient-technologies-site`
- Draft pull request: #2
- Approved implementation base: `b416b8113315c95c32d4674aa54769d90c562abd`

## Goal

Improve portrait-mobile poster delivery without changing the visible interface or the shipped video experience.

The following behavior is immutable:

- the world video and every chapter video;
- scroll-driven zooming and scene changes;
- animation ownership, constants, timing, and easing;
- preloader behavior;
- reduced-motion, Save Data, 2G, and low-power behavior;
- video activation and failure handling;
- content, layout, overlay geometry, and branding; and
- desktop and landscape composition.

The only new component is a responsive still-image layer underneath the existing world video. It is visible before video takeover and whenever video is intentionally disabled or fails. Once the video is ready, the video fully covers it and the surface must remain visually indistinguishable from the current experience.

## Evidence and rejected predecessor

The first portrait-mobile candidate moved poster delivery from the HTML `poster` attribute to a CSS `background-image` on `video.world-video`.

That candidate proved:

- the 385x768 AVIF decodes in Chrome and Edge;
- the exact mobile media condition selects only the AVIF;
- wider portrait, landscape, and desktop cases retain the WebP;
- natural low-power and normal video branches remain functional; and
- the selected AVIF is 38,457 bytes with the required source quality.

It also proved that the delivery strategy is invalid. Chrome requested the AVIF and reported the intended computed CSS, but the replaced `<video>` element did not paint that background as its poster surface.

At 412x823:

- baseline poster screenshot: 347,405 bytes;
- candidate screenshot: 4,467 bytes and visibly blank;
- rendered SSIM: `0.472421`, below the `0.98` floor; and
- average PSNR: `14.267630 dB`, below the `35 dB` floor.

That experiment remains a terminal `REJECT` under:

`output/performance/2026-07-16/poster-mobile-crop-v2`

It must not be overwritten, rerun, reclassified, or promoted.

This design supersedes only the rejected CSS-on-video delivery mechanism and
its browser contract. The locked crop, selected AVIF bytes, source-quality
measurements, and request-selection evidence remain valid inputs. The prior
experiment's terminal `REJECT` remains unchanged.

## Considered approaches

### 1. Responsive `<picture>` behind the video — selected

Add a fixed, non-interactive `<picture>` immediately before `video.world-video`. The `<picture>` selects the portrait AVIF under the exact geometric media condition and otherwise renders the current WebP.

The existing `body.video-on` signal reveals the video only after the unchanged runtime reaches its current ready boundary.

Benefits:

- native responsive-image and format fallback behavior;
- exactly one selected poster request;
- reliable paint on a normal image element;
- no JavaScript, MP4, animation, or timing changes;
- automatic fallback if video playback rejects; and
- a persistent still surface behind chapter and world video layers.

Trade-off:

- adds one decorative `<picture>` and one `<img>` to the homepage.

### 2. Non-replaced CSS background `<div>` — not selected

A fixed `<div>` would paint more reliably than a video background and require less markup. Typed `image-set()` fallback behavior is less explicit than `<picture>`, and the previous failure makes native image selection preferable.

### 3. JavaScript-selected video `poster` attribute — rejected

Script could change the poster attribute after evaluating media and format support. That would add runtime branching, resize handling, and a new failure surface to code that currently owns video and scroll behavior. It conflicts with the requirement to keep the runtime byte-exact.

## Assets

The existing full poster remains byte-exact:

- path: `assets/city-poster-v20260714.webp`;
- dimensions: 1376x768;
- pixel format: yuv420p; and
- role: desktop, landscape, wider portrait, unsupported AVIF, and general fallback.

The previously qualified portrait asset is reused byte-exact:

- path: `assets/city-poster-mobile-v20260716.avif`;
- dimensions: 385x768;
- bytes: 38,457;
- pixel format: yuv420p;
- source crop: `crop=385:768:991:0`;
- source-crop SSIM: `0.990950`; and
- source-crop average PSNR: `44.597879 dB`.

No new encoding ladder is run. The selected AVIF is copied from the locked prior evidence and revalidated by bytes, SHA-256, structure, metadata, and decode behavior.

## Homepage markup

Insert this decorative layer immediately before the existing world video:

```html
<picture id="world-poster" class="world-poster" aria-hidden="true">
  <source
    media="(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)"
    type="image/avif"
    srcset="assets/city-poster-mobile-v20260716.avif">
  <img
    src="assets/city-poster-v20260714.webp"
    alt=""
    fetchpriority="high">
</picture>
<video id="world-video" class="world-video" muted loop playsinline preload="none"
  data-src="assets/video/city-loop-v20260714.mp4" aria-hidden="true"></video>
```

Requirements:

- `picture.world-poster` is decorative and absent from the accessibility tree.
- The fallback image has an empty alt value.
- The current `poster` attribute is removed from `video.world-video`.
- Every other video attribute remains byte-identical.
- The picture occurs before the video so equal stacking levels place the video above it.
- Image dimensions remain CSS-owned because the portrait source and fallback
  source have different intrinsic aspect ratios; the fixed layer supplies
  layout geometry and must add zero CLS.
- No hidden copy, metadata, analytics, script, or interaction is added.

## CSS and stacking

The external stylesheet and homepage inline critical CSS receive equivalent normalized rules:

```css
.world-poster{
  position:fixed;
  inset:0;
  z-index:0;
  display:block;
  overflow:hidden;
  pointer-events:none;
  background:var(--et-void);
}
.world-poster>img{
  width:100%;
  height:100%;
  display:block;
  object-fit:cover;
  object-position:center right;
  filter:saturate(1.05);
}
.world-video{
  position:fixed;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center right;
  z-index:0;
  pointer-events:none;
  filter:saturate(1.05);
  opacity:0;
}
body.video-on .world-video{opacity:1;}
```

There is no opacity transition. The design must not introduce a new fade or alter the visible takeover timing.

Stacking order remains:

1. `picture.world-poster`;
2. `video.world-video`;
3. `div.chapter-layer` and its chapter videos;
4. navigation, main content, and footer at `z-index:1`; and
5. the existing preloader at its current top layer.

The picture remains mounted behind the video. It does not consume pointer events and is invisible whenever an opaque video frame is displayed.

## Runtime data flow

`js/ambient.js` remains byte-exact.

The existing runtime already:

1. determines reduced-motion and low-power policy;
2. leaves video without a network-bearing source when media is disabled;
3. waits for the world video to reach the current ready boundary;
4. adds `body.video-on`;
5. attempts playback; and
6. removes `body.video-on` if playback rejects.

The new CSS consumes that existing signal:

- before `video-on`: picture visible, world video transparent;
- after `video-on`: ready world video visible over the picture;
- playback rejection: `video-on` removed and picture visible again;
- media-disabled mode: `video-on` never added and picture remains visible; and
- chapter mode: the unchanged chapter layer paints above both picture and world video.

No script chooses the poster asset. No script hides, removes, or replaces the picture.

## Fallback matrix

| State | Poster request | MP4 request | Visible surface |
|---|---|---:|---|
| 412x823 portrait, AVIF support | mobile AVIF only | 0 | portrait picture |
| 390x844 portrait, AVIF support | mobile AVIF only | 0 | portrait picture |
| 375x667 wider portrait | legacy WebP only | 0 | legacy picture |
| 844x390 landscape | legacy WebP only | existing eligibility policy | legacy picture, then video if eligible |
| 1440x900 desktop | legacy WebP only | normal world MP4 | legacy picture, then unchanged video |
| AVIF unsupported | legacy WebP only | existing eligibility policy | legacy picture, then video if eligible |
| JavaScript disabled | selected picture only | 0 | selected picture |
| reduced motion | selected picture only | 0 | selected picture |
| Save Data | selected picture only | 0 | selected picture |
| 2G | selected picture only | 0 | selected picture |
| video play rejection | selected picture plus attempted video | attempted request allowed | selected picture restored |

The browser must never request both poster files for one viewport.

"Existing eligibility policy" means the unchanged reduced-motion, viewport,
Save Data, 2G, and runtime checks in `js/ambient.js`; this design adds no new
video-loading decision.

## Revision and delivery scope

Implementation starts from the frozen `b416b811` deploy tree in a new,
project-level evidence root outside the deploy repository:

`C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-v1`

The rejected `poster-mobile-crop-v2` root is read-only reference evidence.

The isolated candidate may change only:

- `index.html` for the picture markup, video poster removal, inline CSS, and style revision;
- `css/styles.css` for the picture/video visibility rules;
- the eight linked HTML routes for the stylesheet revision;
- `_headers` for the new immutable AVIF rule; and
- the added AVIF asset.

The public stylesheet revision advances from `3` to `4`. The token revision remains unchanged.

The following remain byte-exact:

- `js/main.js`;
- `js/ambient.js`;
- every MP4;
- the existing WebP;
- tokens, fonts, logos, copy, structured data, and route content;
- all animation values and keyframes; and
- all non-stylesheet URL revisions.

The authoritative `site/`, deploy files in the publish checkout, PR #2,
remote branch, and production remain untouched until the isolated experiment
returns `PROMOTE`. Local design and implementation-plan documentation may be
committed above the frozen deploy base.

## Static qualification

Before browser execution, a contract must prove:

- exact base reconstruction from `b416b811`;
- exact selected AVIF bytes and metadata;
- exactly one added asset and the allowlisted text transformations;
- exact `<picture>` markup and media condition;
- exact removal of only the world-video poster attribute;
- exact picture/video CSS and stacking;
- exact external/inline CSS equality;
- exact stylesheet revision changes;
- exact immutable cache rule;
- unchanged JavaScript, MP4, animation, copy, SEO/GEO, and brand artifacts; and
- no experiment-time mutation outside the new evidence root.

The contract begins RED before candidate construction and must turn GREEN after one deterministic build.

## Browser and visual qualification

The candidate must pass all of these gates:

1. Chrome and Edge decode the 385x768 AVIF.
2. The exact five-case no-script request matrix selects one poster and zero forbidden posters.
3. The selected picture element paints and covers the viewport.
4. The video is transparent before its existing ready signal and fully visible after takeover.
5. A failed playback attempt restores the picture without a blank interval.
6. Natural mobile low-power, reduced-motion, Save Data, and 2G cases request zero MP4 files.
7. Natural desktop video takeover requests the same MP4 and reaches a real frame.
8. Video attributes, chapter behavior, scroll zooming, scene changes, overlays, and element bounds match baseline.
9. Baseline/candidate rendered poster comparison reaches SSIM `>= 0.98` and average PSNR `>= 35 dB`.
10. Controller and independent reviewer inspect hash-bound native screenshots and find no blank frame, seam, stretch, tofu, overlay change, right-edge change, or altered controls.
11. The accepted 13-case/136-check behavior matrix remains green under an explicitly source-locked successor adaptation for the new picture contract.
12. All experiment-owned browsers, exact profiles, and ports clean up.

The browser run is one-shot. A failed terminal gate writes `REJECT` and stops before Lighthouse.

## Performance qualification

Only a browser-qualified candidate proceeds to paired Lighthouse 13.4.0.

Use three alternating first-run mobile baseline/candidate pairs with new servers, profiles, and debug ports. No retries, discarded reports, best-run substitution, or threshold changes are allowed.

Every candidate run must satisfy:

- simulated mobile LCP at most 2500 ms;
- performance score at least 0.90;
- CLS at most 0.02;
- exactly one mobile poster request;
- zero legacy poster requests in the selected portrait case; and
- expected transfer-byte reduction.

The candidate median simulated mobile LCP must also be at most 2500 ms.

Desktop control runs must preserve the current video, WebP, layout, behavior, and performance.

## Promotion and publication

Local evidence is not publication authority.

If and only if the isolated experiment returns `PROMOTE`:

1. add failing repository contract assertions;
2. apply the exact candidate transformations to authoritative `site/` and the publish checkout;
3. copy the AVIF byte-exactly;
4. verify source/publish parity;
5. run local static and browser gates again;
6. commit only the approved deploy changes and required contract updates;
7. push through the correct `tarik-ux` repository authority;
8. verify the immutable preview;
9. run the official preview browser and Lighthouse gates; and
10. merge/deploy only after every gate passes.

Any failure leaves PR #2 draft and production unchanged.

## Non-goals

This design does not:

- redesign the hero;
- change the visible video, chapter media, zooming, or scene sequence;
- add a fade or decorative animation;
- change copy, SEO/GEO content, navigation, forms, or routes;
- modify runtime JavaScript;
- re-encode video;
- rerun the AVIF ladder;
- weaken Lighthouse or visual thresholds; or
- reuse the rejected candidate as promotion evidence.
