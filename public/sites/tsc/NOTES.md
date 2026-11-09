# Portfolio static build: notes

A static HTML/CSS rebuild of a retired CodeIgniter careers site, made as a portfolio piece. Every page shows a visible **"Portfolio demo, not accepting applications"** banner and has `<meta name="robots" content="noindex, nofollow">`.

The PHP views were only read as text. Nothing was executed, served or linted, and the original files are unchanged.

**This build is not claimed to be WCAG 2.2 AA compliant.** It was checked with scripts and headless Chrome, but it has not been tested with a screen reader. The manual VoiceOver checklist is at the end of this file.

---

## 1. Pages built (27)

| Output file | Source view | Title prefix |
|---|---|---|
| index.html | pages/home.php | Careers Home |
| about.html | pages/about/about.php | About TSC |
| history.html | pages/about/history.php | Our History |
| growth.html | pages/about/growth.php | Growth |
| sustainability.html | pages/about/sustainability.php | Stewardship |
| success_stories-hidden.html | pages/about/success_stories-hidden.php | Success Stories |
| de_and_i.html | pages/about/de_and_i.php | Diversity, Equity and Inclusion |
| nh_heritage.html | pages/about/nh_heritage.php | National Hispanic Heritage Month |
| aapi_heritage.html | pages/whoweare/aapi_heritage.php | Asian Pacific Islander Heritage Month |
| veterans_day.html | pages/about/veterans_day.php | Veterans Day |
| bh_month.html | pages/about/bh_month.php | Black History Month |
| wh_month.html | pages/about/wh_month.php | Women's History Month |
| benefits.html | pages/benefits/benefits.php | Our Benefits |
| whoweare-benefits.html | pages/whoweare/benefits.php | Our Benefits (Earlier Version) |
| health.html | pages/benefits/health.php | Health Benefits |
| wealth.html | pages/benefits/wealth.php | Financial Benefits |
| support.html | pages/benefits/support.php | Support Benefits |
| store.html | pages/careers/store.php | Store Careers |
| store_support.html | pages/careers/store_support.php | Store Support Center Careers |
| distribution.html | pages/careers/distribution.php | Distribution Center Careers |
| supply_chain.html | pages/careers/supply_chain.php | Supply Chain Careers |
| human_resources.html | pages/careers/human_resources.php | Human Resources Careers |
| internship-program.html | pages/careers/internship-program.php | Internship Program |
| culture.html | pages/whoweare/culture.php | Our Culture |
| our_people.html | pages/whoweare/our_people.php | Our People |
| community.html | pages/whoweare/community.php | Community |
| our_recruiters.html | pages/whoweare/our_recruiters.php | Meet the Recruiters |

Every page title ends with "| TSC Careers (portfolio demo)", so all titles are unique.

**Two views both claim the `benefits` route.** `pages/benefits/benefits.php` is the newer one, with the 2021 infographic, so it became `benefits.html` and receives every `benefits` link. `pages/whoweare/benefits.php` became `whoweare-benefits.html`.

**Pages that nothing links to.** These were already unlinked on the original site:
- whoweare-benefits.html
- success_stories-hidden.html (its links were commented out)
- human_resources.html (an unfinished lorem-ipsum template in the original)
- our_recruiters.html (its nav link was commented out in the header)

Some other pages are reachable from only one place:
- community.html and our_people.html link to each other but not from elsewhere (culture.html has an empty subnav in the source).
- supply_chain.html and internship-program.html are linked only from dialogs on store_support.html.

**Login and admin pages left out.** The folder contains no login or admin views; `sass/admin.scss` exists, but no admin page uses it. The header linked to two external iCIMS login pages, "Store Login" and "Current Team Member Login". Both links were removed.

---

## 2. What's fake

| Item | Where | What was done |
|---|---|---|
| Copyright year (was PHP `date("Y")`) | footer, every page | `©20XX` plus "(sample year)" |
| Testimonial names, roles and quotes | bh_month, nh_heritage, wh_month, veterans_day, aapi_heritage | Names like "Jordan Example". Roles are generic and tagged "(sample)". Quotes and Q&A answers are labelled placeholder text. |
| "Meet our team" (3 people) | supply_chain | "Sample Person A–C", sample roles and answers |
| Intern testimonials (4) | internship-program | "Intern Sample A–D", sample answers |
| Recruiter names (16) | our_recruiters | Fake names such as "Alex Example". Region lists kept. LinkedIn buttons removed. |
| Career-path names (8) | success_stories-hidden | "Sample A." to "Sample H.". The job-title paths are kept and now marked up as lists. |
| All photos of individual people | pages above | Replaced with the source folder's own `placeholder-profile.jpg`, `alt=""`. The original files are not copied, because their filenames contain real names. |
| Distribution Center street addresses and ZIPs (8) | distribution dialogs | "123 Example Parkway (sample address)", ZIP 00000. City and state kept. |
| Women's History Month calendar | wh_month | The image contained a real guest's name and a real email address. It is replaced by a text list of sample events. |
| Founder and executive names | history and about slide captions, history "Our Beginning" | Replaced with roles such as "the founder" and "the Chairman and CEO" |
| Demo status message | apply and search buttons | "Portfolio demo: job search and applications are turned off." |

**Real people still appear in some images.** Banner and hero photos show real employees, and the history slider images show historical names printed in the artwork. Image pixels were not edited. The text alternatives and captions don't repeat those names.

---

## 3. Links that couldn't be matched to a view

There is no routes file. Each link was matched to a view by filename.

| Original target | Where | Result |
|---|---|---|
| `jobs/search`, `/jobs/search#/main?cat=…`, `tractorsupply.jobs/jobs/search…` | Header "Job Search", home, store, store_support, distribution, supply_chain, internship, aapi | No view exists. These are now disabled demo buttons. |
| `tractorsupply.careers…` (the new careers site) | Header, home, distribution dialogs and "Apply Today" | Disabled demo buttons, except where a local view exists (next row). |
| Header and home "Store Support (HQ)" and "Distribution Center" | Header, home | Originally pointed to external careers sites. Now point to store_support.html and distribution.html, since those views exist. |
| `careers/internship` | store_support "Internship Program" dialog | Inferred as **internship-program.html** (the filename isn't an exact match) |
| `success_stories` | Commented-out code only | Would map to success_stories-hidden.html. No live link. |
| `www4.icims.com/jobseekerhelp` ("Additional FAQs") | distribution | Disabled demo button |
| `urldefense.com/…` wrapped job-search URL ("See IT Jobs") | home | Disabled demo button |
| iCIMS "Store Login" and "Current Team Member Login" | Header | Removed (login pages) |
| 16 LinkedIn profile URLs | our_recruiters | Removed (real people) |
| `data-target="#human-resources"` (8 buttons) | human_resources | The target dialog doesn't exist in the source. Shown as plain text labels. |
| Home banner image link to job search | home | Link removed, so it's now an image only. The "Search for Jobs" button drawn inside the artwork does nothing. |
| Footer logo link to tractorsupply.com | footer | Removed. The logo is a plain image. |

**Dialogs with no trigger in the source** were dropped:
- index: "store support center", "Distribution center"
- store: "Store Manager in Training"
- store_support: "Nashville, TN"
- distribution: "Supervisor in Training", "Assistant General Manager"
- human_resources: "Team Member / Material Handler"

**External links kept.** There are 12 informational links: investor relations, the Neighbor's Club page, Great Place to Work, U.S. News, Forbes, the Nashville Chamber, PayScale, and Brentwood and Williamson County government sites. They open in the same tab, and `utm_*` and `cm_sp` tracking parameters were removed.

---

## 4. Colours: TSC palette and contrast

Every red, green and blue the site renders now uses the TSC brand palette. This covers `app.css`, `overrides.css` and inline styles. Checked in headless Chrome on all 27 pages at 1280px and 375px, with dialogs open, FAQ items expanded, and hover/focus forced on links and nav controls.

| Role | TSC colour | White text on it | On #ebebeb |
|---|---|---|---|
| All reds (was #b92c21, #a81a1a, #910002, #7f1616, #680d0c, #ed1846, #b92c22) | Red #A02817 | 7.47:1 | 6.27:1 |
| Red hover states (was #8d1910, #4e0001) | Bright Red #DA3832 | 4.57:1 | |
| All greens (was #5b8812, #4d7a14, #3f600d, #406308, FAQ bar at 74% green) | Green #576446 | 6.33:1 | 5.31:1 |
| `.number-circle` (64px text, was #799e42) | Bright Green #7D9C29 | 3.15:1 (large text) | |
| All blues (was #739fba, #638da8, #4e6f84, #4a7590, #527590, #1aabcf, #0b6f88, #23527c link hover, inline `blue`) | Blue #4B7582 | 5.04:1 | 4.23:1 (fails for small text) |

- **Modal gradients** are now solid TSC colours. There is no second shade of each TSC colour that keeps white text at 4.5:1.
- **FAQ question bars** on distribution were white on 74% green, which works out to 3.8:1 because an `app.css` rule beat the override. They are now solid TSC Green (6.33:1).
- **Exception: store_support "Nashville rankings" section.** Its links are TSC Blue, and no TSC blue reaches 4.5:1 on the #ebebeb grey. That section's background is now TSC Gray #F9F6F2, where Blue is 4.68:1.
- Stock Bootstrap component colours that no page uses (alerts, `.btn-primary`, labels and so on) are left as shipped.

**Navigation states (WCAG 2.2 AA, lowest measured):**
- Top-level items: #333 on #ebebeb, 10.6:1.
- Hover and open items: #000 on #e0e0e0, 15.9:1.
- Mobile menu: #333 on #b3b3b3, 6.03:1.
- Dropdown items: #333 on white, 12.6:1. On hover or focus they are white on #313131, 13.0:1, on desktop and mobile.
- Section subnav: #595959 on white, 7:1. Hover is #000.

**Mobile dropdown fix.** The open mobile dropdown showed white text on white. An `app.css` rule with higher specificity than the override set the text white. Fixed in `overrides.css`.

**White text on photos.** Affected areas: `.sustain-sec*`, `.board-section`, `.red-board`, `.wood-img-bg`, `.grey-img-bg`, `.red-img-bg`, and the home "WHO WE ARE" banner. A 55–65% black scrim sits behind the text, so contrast no longer depends on the photo. Those areas look darker than before.

**Other text fixes kept from the earlier pass:**
- Navbar links: #333 / #555.
- `.darker-grey` sections: #444 on #ccc, 6.06:1.
- `.btn-default`: rgba(0,0,0,.65).

---

## 5. Other changes worth knowing

- **Bootstrap and jQuery.** `app.css` is the original compiled Sass with Bootstrap 3.3.7 inside. Its only edits are the colour remapping in section 4. `assets/js/bootstrap.js` and `bootstrap.min.js` are Bootstrap 3.3.7, and pages load `bootstrap.min.js`. `assets/js/jquery-3.7.1.min.js` comes from code.jquery.com and matches its official SRI hash (`sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=`). It is the newest jQuery that Bootstrap 3.3.7's version check accepts. `assets/js/site.js` handles the navbar collapse toggle, dialogs, the carousel and the disabled apply buttons.
- **Removed:**
  - a `console.log` of `$_SERVER['REQUEST_URI']`
  - the Paradox "Olivia" chat widget and its key
  - `pixel-targeting.js` (not copied)
  - `bundle-jobs.js` and `search.js` (the job-search app; not used)
  - YouTube and Vimeo embeds (now labelled "Video removed" placeholders)
  - the "Pardon our dust" migration banner and its two dialogs
  - `?nocache=time()` and the IE8 shims
- **Maps.** The only map is distribution's `map.jpg`. It was already a static image; its `usemap` pointed to a `<map>` that doesn't exist. It's kept as a static image, with alt text listing all 8 locations.
- **Landmarks and navigation.** A skip link, `header`, `nav` labelled "Main", a section `nav` labelled with `aria-current="page"`, `main`, and `footer`.
- **Headings.** Each page has exactly one h1 and no skipped levels, checked by script. Demoted headings keep their original look through Bootstrap's `.h1`/`.h3` classes. Text that wasn't really a heading became `<p>`: "#76", "Opened 2015", sq ft lines, subtitles.
- **Navbar.** Dropdowns use Bootstrap 3.3.7's own dropdown plugin (`data-toggle="dropdown"` on `<button>` toggles, which also carry `aria-expanded` and `aria-controls`). Bootstrap handles:
  - toggling `aria-expanded`
  - closing other open menus
  - closing on an outside click
  - Escape closing and returning focus to the toggle
  - Space and Arrow-down opening the menu
  - Arrow up/down moving between items

  Unlike the earlier custom script, Bootstrap does not close a menu when focus tabs out of it. A `<noscript>` fallback shows all menu links.
- **Dialogs.** Bootstrap modals are now native `<dialog>` elements opened with `showModal()`. This gives a focus trap, Escape to close and an inert background. Each has a unique `aria-labelledby` (the original reused `id="myModalLabel"`). Focus returns to the opener.
- **Carousel.** The history and about carousel used to autoplay. It now has a visible Pause/Play button, Previous/Next buttons and year buttons (`aria-current`). Rotation stops when keyboard focus enters, and it never autoplays under `prefers-reduced-motion`. Each slide is an image of a paragraph, so that paragraph is now real text in a caption under the image.
- **FAQ.** The Bootstrap accordion is now native `<details>`/`<summary>`.
- **Focus.** A two-tone focus ring (white plus black) stays visible on light and dark backgrounds.
- **Target size.** Buttons are at least 44px tall, `.btn-xs` at least 32px, and the dialog close button 44×44. Text links inside sentences are exempt under 2.5.8.
- **Sticky content.** Nothing is sticky or fixed: the demo banner scrolls with the page. Native dialogs sit on the top layer and trap focus, so they can't hide focused content (2.4.11).
- **Reflow.** Tested at 320px in headless Chrome: no page scrolls horizontally. Fixes were needed for the home award logos and some overlaid banner text.
- **Reduced motion.** `prefers-reduced-motion` disables transitions, animations and carousel autoplay.
- **Typos fixed:** "Coporate", "improvment", "manged", "Recorces", "Opperations", and the home banner alt "Our Here" → "Out Here".

---

## 6. Verification run

- **Internal references:** 959 checked (href/src, CSS `url()`, fragments, `data-dialog`, `aria-controls`, `aria-labelledby`). All resolve except 5 `url()` references in the unedited `app.css` (section01.jpg ×2, section02.jpg, spacer.png, dark-fence03.jpg). Those files aren't in the source folder either, and the classes that use them (`.section02`–`.section04`, `.red-spacer`, plus a commented-out `.section01` rule) aren't used by any page.
- **Duplicate IDs:** none.
- **Real names:** no source names remain in the HTML, checked by script.
- **Behaviour (headless Chrome):** these all pass:
  - Bootstrap dropdown: click, outside click, one menu open at a time, Enter, Space, arrow keys, Escape and focus return, at 1280px and 375px
  - mobile toggle
  - dialog open, close and focus return
  - carousel pause and next
  - demo apply message
- **Secret scan** (`grep -rIilE … portfolio-static --exclude='*.min.*'`) matched 2 files:
  - `about.html`: pattern `secret`
  - `distribution.html`: pattern `password`

  Neither is a credential. The first is the "secret sauce" line in the page copy; the second is the FAQ text about resetting a forgotten password.

---

## 7. VoiceOver checklist (manual)

Use Safari with VoiceOver (Cmd+F5). VO = Ctrl+Option.

**Every page (check once, then spot-check):**
1. Press Tab once. "Skip to main content" should appear visibly. Activate it, and VO should land in the main landmark.
2. Open the Rotor (VO+U), then:
   - Headings: exactly one heading level 1, matching the page purpose, with no jumps.
   - Landmarks: banner, Main navigation, a section navigation where present, main, contentinfo.
3. Check the title read on load ends with "TSC Careers (portfolio demo)".
4. The demo banner is read before the nav.
5. Main nav:
   - "Careers" and "Who we are" announce as collapsed buttons.
   - Activating one announces expanded.
   - Tab reaches the links.
   - Escape closes the menu and returns focus to the button.
   - The current page link is announced as "current page".
6. "Job search" button: activating it announces the demo message.
7. At narrow zoom (400%, or a 320px-wide window): the "Menu" button announces expanded or collapsed state.
8. Tab through everything: the focus ring is always visible, and nothing is hidden behind other content.

**Page-specific:**
- **index:**
  - "Store" opens a dialog: it's announced as a dialog with its title, and focus starts on Close.
  - Tab stays inside the dialog; Escape closes it and returns focus to "Store".
  - The EEO policy button does the same.
  - "Search All Jobs" and "See IT Jobs" announce the demo message.
  - Award logos read their names.
- **history / about:**
  - The carousel is announced as "carousel" with slides "1 of 8: 1938".
  - Pause/Play changes its label.
  - Once paused, Next/Previous announce the new slide caption through the live region.
  - Year buttons announce "current" on the active year.
  - Focusing inside the carousel stops rotation.
- **growth, sustainability:** the subnav current page is announced. "#76" reads as text, not a heading.
- **de_and_i:** the 7 group buttons each open a dialog named after the group. Logos are silent, because the button carries the name.
- **store, store_support, distribution:**
  - Position and location buttons open dialogs.
  - "Join…" and "Apply" buttons announce the demo message.
  - The video placeholder reads "Video removed in this demo".
- **distribution:**
  - FAQ items announce as collapsed and expanded disclosure buttons.
  - The map image reads all 8 locations.
- **bh_month, nh_heritage, wh_month, veterans_day, aapi_heritage:**
  - Each person is a heading with a sample name.
  - Photos are silent.
  - Quotes are read as block quotes (VO announces "quote").
  - wh_month: the event list announces as a list of 5 items.
- **success_stories-hidden:** each career path announces as a list.
- **supply_chain, internship-program:** team and intern headings sit under the section heading, and question headings sit under each person.
- **our_recruiters:** 3 section headings with person headings under them, and no LinkedIn links.
- **benefits, whoweare-benefits:** the infographic alt reads the full benefit list.
- **health, wealth, support:** icons are silent. Each benefit is read once, from its text.
- **culture:** the Mission and Values images read their full text in the alt (long). Consider whether VO users would prefer this as visible text.
- **human_resources:** the position labels read as plain text and are not presented as buttons. The page is lorem ipsum in the source.

---

## 8. Rebuilding

The converter, CSS overrides and JS source live outside this folder in the session scratchpad (`convert.py`, `overrides.css`, `site.js`). Re-running the converter deletes and regenerates `portfolio-static/`, including this file. If you edit `assets/` or this file by hand, those edits will be lost on a rebuild.
