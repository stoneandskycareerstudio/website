Stone and Sky Career Studio — static site

This folder contains a simple static site you can host on GitHub Pages at the path /stoneandskycareerstudio.

Files:
- index.html — main page (uses <base href="/stoneandskycareerstudio/">)
- styles.css — basic styling
- script.js — accordion + simple careerBot stub (client-only)

How to publish on your existing GitHub Pages site (www.strongwill.in):
1. Commit and push the `stoneandskycareerstudio/` folder to the `main` branch of the repository that currently hosts www.strongwill.in (or to the repository configured for your Pages site).
2. Because `index.html` includes a <base href="/stoneandskycareerstudio/"> tag, the site will work when served from https://www.strongwill.in/stoneandskycareerstudio/
3. If you use a separate repo for the main site, copy the folder to that repo's `docs/` folder (GitHub Pages serves /docs on `main`) or to the repository root depending on your Pages configuration.

Notes & next steps:
- The chatbot is a local stub only. For a full featured careerBot, implement a backend RAG pipeline and an /api/ask endpoint.
- To enable bookings, integrate Calendly or add a simple form + Stripe for paid sessions.
- Run Lighthouse and accessibility checks, and replace email mailto links with a proper contact form for better UX.

If you want, I can:
- Create a minimal Next.js version and RAG demo
- Add JSON data files for offerings/events/faqs to make content editable
