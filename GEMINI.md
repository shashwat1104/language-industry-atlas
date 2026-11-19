# GEMINI.md — Operating Rules for The Complete Language Industry Atlas

> **Repository:** `shashwat1104/language-industry-atlas`  
> **Production URL:** `https://language.shashwat.wtf`  
> **Author:** Shashwat  
> **Master Specification:** [`ATLAS_MASTER_PROMPT.md`](./ATLAS_MASTER_PROMPT.md)

---

## 1. Source of Truth & Scope Mandate

`ATLAS_MASTER_PROMPT.md` is the authoritative specification for all research, structure, templates, and quality audits across this project. Every session MUST adhere to:

- **Part 2 — Research Rules:**
  - Always use current web research and ground claims in real organizations (Nimdzi Insights, Slator, CSA Research, ELIS, GALA, TAUS, FIT, Localization Institute, W3C, Unicode Consortium, ELRA, CLARIN, META-NET, UNESCO, NISO, ISO, ASTM, FDA, EMA, etc.).
  - Cite real sources with exact URLs.
  - For every market statistic, specify: **Year, Currency, Market definition, Geography, Source, Methodology, Confidence level, and Limitations**.
  - Never fabricate numbers to fill a table. Clearly state when data is unavailable and explain any proxies used.
  - Explicitly distinguish: **Verified facts, Estimates, Industry consensus, Opinions, Hypotheses, and Forecasts**.

- **Part 3A — 20-Point Core Service Analysis Template:**
  1. What it is | 2. What it is not | 3. Who buys it | 4. Who performs it | 5. Why it exists | 6. Typical use cases | 7. Workflow | 8. Tools | 9. Inputs | 10. Outputs | 11. File formats | 12. Pricing methods | 13. Quality requirements | 14. Risks | 15. Challenges | 16. Required skills | 17. Career opportunities | 18. Business opportunities | 19. AI impact | 20. Future outlook.

- **Part 3B — 22-Point Localization Vertical Template:**
  1. Definition | 2. Boundaries | 3. Customer types | 4. Buyer personas | 5. Use cases | 6. Industry value chain | 7. Complete workflow | 8. Human roles | 9. Tools | 10. Technology | 11. File formats | 12. Standards | 13. Quality | 14. QA | 15. Pricing | 16. Business economics | 17. Challenges | 18. AI transformation | 19. Opportunities | 20. Case study | 21. Learning resources | 22. Glossary.

- **Part 7 — 17-Point File Format Specification:**
  1. Full name | 2. What it is | 3. What it is used for | 4. Which industry uses it | 5. Which tools open it | 6. Whether it is editable | 7. Whether it is bilingual | 8. Whether it stores formatting | 9. Whether it stores metadata | 10. Whether it stores segmentation | 11. Whether it stores translation status | 12. Common workflow | 13. Common problems | 14. How to inspect it | 15. How to convert it | 16. Related formats | 17. Real-world example (with sample snippet).

- **Part 32 — 11 Mandatory Chapter-Closing Items:**
  Every chapter MUST end with:
  1. What I learned
  2. Important terminology
  3. Key companies
  4. Key tools
  5. Important files
  6. Industry insights
  7. Common misconceptions
  8. Practical exercise
  9. Quiz
  10. Questions that remain unanswered
  11. Topics requiring further research

- **Mandatory Addendum A — AI Impact & Opportunity Brief (20 Fields):**
  Every major chapter, company profile, profession, workflow, tool category, and vertical MUST include the 20-field **AI Impact & Opportunity Brief** (including the 1–10 AI Disruption Score, 10 evaluation dimensions, 2026–2027 / 2028–2030 / 2031–2035+ horizons, 1–10 AI Opportunity Score, and Top 3 buildable product/agent/open-source ideas).

- **Mandatory Addendum B & C.8 — 5-Expert Chapter Gap Analysis & 10-Expert Coverage Audits:**
  - After drafting any chapter, audit it through the **5 Expert Lenses** (20-Year Localization Industry Veteran, Localization Technology Architect, Localization Operations Director, Specialist Linguist, Localization Industry Researcher). Merge improvements directly into the chapter and append a concise **Gap Analysis Report**.
  - After major milestones, run the **10-Expert Unknown-Unknowns Audit** and update `src/content/docs/00-architecture/07-gap-register.md` and `02-coverage-matrix.md`.

---

## 2. Session Isolation & Discipline Rules

1. **Single-Target Focus:** Work on **ONLY ONE** requested volume, chapter, or database per session unless explicitly instructed otherwise. Never modify or overwrite unrelated folders.
2. **Visual & Structural Clarity:** Include Mermaid.js diagrams (`\`\`\`mermaid `) for workflows, value chains, and architectures, and use structured Markdown tables for comparisons.
3. **Database Sync:** When researching companies, tools, file formats, countries, language pairs, workflows, standards, careers, or opportunities, keep the relational JSON databases in `src/data/*.json` synchronized.
4. **Build Verification:** Always run `npm run build` after making edits to verify zero broken links, frontmatter schema errors, or MDX compilation issues before finishing a session.
