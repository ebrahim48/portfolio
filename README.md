# Ebrahim — Flutter Developer Portfolio

Next.js 16 + Tailwind CSS v4 single-page portfolio with a sidebar layout, one-section-at-a-time navigation (`/#about`, `/#portfolio`, …), dark/light themes, preloader, magic cursor, filterable portfolio with project modals and a working contact form.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Edit your content

**Everything lives in `src/data/portfolio.ts`** — profile, socials, skills, experience, projects, certifications, articles, education, stats and activity.

- `{{word}}` highlights a word in the primary colour, `[[word]]` makes it bold.
- Avatar: put a photo in `public/images/avatar.jpg` and set `profile.avatar = "/images/avatar.jpg"`.
- Project covers: set `image: "/images/project.png"` and optionally `screenshots: [...]` per project. Without them a generated mockup is shown.
- Resume: drop your CV at `public/resume.pdf`.
- Replace the `TODO` social links and sample certificates/awards with your real ones.

## Contact form

By default the form opens the visitor's email client with the message pre-filled.
To receive messages directly in your inbox, create a free key at https://web3forms.com and add it to `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your-key
```

## Structure

```
src/
  app/                 layout, page (+ /about & /contact redirect to the hash sections)
  components/
    app/               PortfolioApp (routing/state) + context (theme, toasts, cursor)
    layout/            Sidebar, MobileHeader, SectionShell, Preloader, Background, MagicCursor, Notifications
    sections/          About, Skills, Experience, Portfolio, Achievements, Articles, Education, Updates, Contact
    ui/                Avatar, Mockup, Typer, Counter, Modal, FilterTabs, Block
  data/portfolio.ts    ALL CONTENT
  lib/                 rich-text + date helpers
legacy/                previous version of the site (safe to delete)
```
