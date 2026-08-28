# Portfolio — Sujan Kundu (Senior QA Engineer)

A single-page portfolio site, built as static HTML/CSS/JS — no build step,
free to host on GitHub Pages. Designed to match a blue/white "QA-professional"
pattern: pill badges, a floating profile card, a timeline experience section,
tag-based skills, and card-based projects/achievements. Includes a working
dark mode toggle and a scroll-spy nav.

## Project structure

```
portfolio2/
├── index.html              # page structure only — rarely needs editing
├── css/
│   └── style.css           # all styling, incl. light + dark theme tokens
├── js/
│   ├── icons.js            # inline SVG icon library used across the page
│   └── main.js              # renders data/content.js into the page + all interactions
├── data/
│   └── content.js            # ← EDIT THIS to update your info
├── assets/
│   ├── resume/
│   │   └── (put resume.pdf here)
│   └── images/                 # optional images (real photo, etc.)
└── README.md
```

## How to update your content

Everything you'll want to change — name, bio, jobs, projects, skills,
achievements, links — lives in one file:

```
data/content.js
```

Open it and edit the values; each field is commented. You do **not** need
to touch `index.html`, `css/style.css`, or `js/main.js` for normal updates.

Before publishing:

1. Update every field in `data/content.js` with your real info (most of it
   is already filled in from your details — check `links.resume`,
   `links.email`, `links.github`, `links.linkedin` in particular).
2. Add your résumé PDF at `assets/resume/resume.pdf` (or update
   `links.resume` if you name it differently).
3. If you'd like a real headshot instead of the "SK" initials avatar, add
   an image to `assets/images/` and swap the `.photo-avatar` /
   `.about-photo-inner` divs in `index.html` for an `<img>` tag — see the
   comment-free markup around `id="heroPhotoInitials"` and
   `id="aboutPhotoInitials"`.
4. The contact form is currently a demo (it shows a message but doesn't
   send anywhere). To make it functional without a backend, the easiest
   options are:
   - [Formspree](https://formspree.io) — add their form endpoint as the
     form's `action` and set `method="POST"`.
   - [EmailJS](https://www.emailjs.com) — send straight from JavaScript.

## Running it locally

This is a static site — open `index.html` directly, or for the smoothest
experience serve it with a simple local server:

```bash
# from inside the portfolio2/ folder
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. (Or use the VS Code "Live Server"
extension — right-click `index.html` → "Open with Live Server".)

## Publishing to GitHub Pages

1. Create a new GitHub repository (public).
   - `your-username.github.io` gives you a root domain.
   - Any other name works too, served at
     `https://your-username.github.io/repo-name`.
2. Push this folder's contents, with `index.html` at the repo root:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a
   branch," pick `main` and `/ (root)`, then save.
5. GitHub gives you a live URL after a minute or two — that's what goes
   on your CV and LinkedIn.

## Making future updates

```bash
# edit data/content.js (or add a new project/job/skill/etc.)
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Pages redeploys automatically within a minute or two of each push.

## Features

- **Dark mode** — toggle in the nav, remembers your choice (localStorage),
  and respects the visitor's OS-level preference on first visit.
- **Scroll-spy navigation** — the active nav link highlights as you scroll.
- **Animated role text** — cycles through the roles listed in
  `profile.roles` in `data/content.js`.
- **Scroll-reveal animations** — cards fade/slide in as they enter the
  viewport.
- **Mobile nav** — collapses into a hamburger menu below ~980px width.
- Respects `prefers-reduced-motion` throughout.

## Design notes

- Font: Inter, loaded from Google Fonts.
- All color tokens (including dark mode) are CSS variables at the top of
  `css/style.css` under `:root` and `[data-theme="dark"]` — change the
  `--primary` variable to re-theme the whole site to a different accent
  color.
