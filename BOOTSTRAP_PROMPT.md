# Antigravity CLI Bootstrap Kit — `language.shashwat.wtf`

Use these prompts sequentially in **Antigravity CLI** (`agy`) inside a fresh local project folder (e.g., `mkdir language-industry-atlas && cd language-industry-atlas`).

---

## Step 1 — Save the Master Prompt into Your Repo

Before running Prompt 1, copy the full Master Prompt (`complete_language_industry_atlas_prompt.md`) into your new folder as:
- `ATLAS_MASTER_PROMPT.md`

---

## Step 2 — Prompt 1: Scaffold the Repo, Astro Site, `GEMINI.md`, and VPS Deploy

Paste this into Antigravity CLI first:

```text
You are setting up the repository for "The Complete Language Industry Atlas", a public, non-commercial research website authored by Shashwat and hosted at https://language.shashwat.wtf.

Read ATLAS_MASTER_PROMPT.md in this directory to understand the full scope, then complete ONLY the following infrastructure and scaffolding tasks (do NOT write research chapters yet):

1. Initialize a clean GitHub-ready Astro + Starlight project in this directory:
   - Configure `astro.config.mjs` with `site: 'https://language.shashwat.wtf'` (root domain, no base subpath).
   - Enable Pagefind full-text search (Starlight built-in or `@astrojs/starlight` + `pagefind`).
   - Enable Mermaid.js diagram rendering in Markdown/MDX (e.g., `astro-mermaid` or rehype/remark mermaid plugin).
   - Configure a clean, readable sidebar organized around:
     - `00-architecture/` (Master Atlas, Coverage Matrix, Learning Roadmap, Knowledge Graph, Master Glossary, Research Priorities, Gap Register)
     - `01-volumes/` through `20-volumes/` (20 volume folders matching Part 30 of `ATLAS_MASTER_PROMPT.md`, each with an `index.mdx` stub)
     - `databases/` (pages rendering structured tables from `src/data/*.json`)

2. Create `src/data/` JSON schema starter files for the 10 relational databases in Part 29:
   - `segments.json`, `companies.json`, `tools.json`, `file_formats.json`, `countries.json`, `language_pairs.json`, `workflows.json`, `standards.json`, `careers.json`, `opportunities.json`
   - Also create `src/data/sources.json` pre-populated with the 15 organizations and 12 academic disciplines from Addendum D.

3. Create `GEMINI.md` in the repository root with strict operating rules for all future Antigravity sessions:
   - Reference `ATLAS_MASTER_PROMPT.md` as the source of truth for research rules, 20-point service analysis, 22-point vertical template, 17-point file format spec, 11-item chapter endings, AI Impact & Opportunity Briefs, and 5-Expert / 10-Expert Gap Audits.
   - Work on ONLY ONE requested volume, chapter, or database per session—never modify unrelated folders.
   - Always cite real sources with URLs and clearly label estimates vs. verified facts.
   - Run `npm run build` after edits to verify zero broken links or Astro schema errors before finishing.

4. Create deployment config files:
   - `.github/workflows/deploy.yml`: On push to `main`, run `npm ci && npm run build`, then `rsync -avz --delete dist/ ${{ secrets.VPS_USER }}@${{ secrets.VPS_HOST }}:/var/www/language-atlas/` using `secrets.VPS_SSH_KEY`.
   - `deploy/Caddyfile.snippet`: A clean Caddy block for `language.shashwat.wtf` serving `/var/www/language-atlas` with `encode zstd gzip`, `file_server`, and standard security headers.

5. Run `npm run build` to verify the entire site compiles cleanly with zero errors, then summarize the exact GitHub Secrets and DNS/VPS commands I need to run once.
```

---

## Step 3 — Prompt 2: Generate Deliverables 1–6 (Architecture & Roadmap)

Once Prompt 1 builds cleanly and you've pushed it to GitHub, run this in a fresh 5-hour session:

```text
Follow GEMINI.md and ATLAS_MASTER_PROMPT.md. Work ONLY inside `src/content/docs/00-architecture/` and `src/data/`.

Produce Deliverables 1 through 6 from Part 32 as separate, well-structured Markdown pages:
1. `01-master-atlas.md` — Complete hierarchical Master Industry Atlas (incorporating all 6 ecosystem sectors and 18 domains from Addendum C).
2. `02-coverage-matrix.md` — Full Coverage Matrix table (`Domain | Topics | Subtopics | Planned chapters | Research status | Coverage status`).
3. `03-learning-roadmap.md` — Beginner-to-expert Learning Roadmap (30-day, 90-day, 6-month, 12-month tracks).
4. `04-knowledge-graph.md` — Visual Industry Knowledge Graph using Mermaid.js diagrams showing how buyers, suppliers, workflows, tools, file formats, languages, QA, and AI connect.
5. `05-master-glossary.md` — Initial Master Glossary (50+ core terms, expandable).
6. `06-research-priorities.md` — Research Priorities and an initial `07-gap-register.md` template.

Run `npm run build` at the end to verify zero errors and commit nothing outside `00-architecture/`.
```

---

## Step 4 — Reusable Prompt for Each Volume / Chapter

Use this lightweight template for every subsequent session (1–2 chapters per 5-hour window):

```text
Follow GEMINI.md and ATLAS_MASTER_PROMPT.md. Work ONLY inside `src/content/docs/01-volumes/` (replace with target volume folder).

Research and write **Volume 1, Chapter 1** ([Chapter Title]) with full depth:
- Apply Part 2 Research Rules (cite Nimdzi, Slator, CSA, ELIS, GALA, ISO, etc. with exact URLs and methodology notes).
- Include Mermaid workflow/architecture diagrams and structured Markdown tables where helpful.
- End with the 11 mandatory chapter-closing items (Part 32) AND the 20-field AI Impact & Opportunity Brief (Addendum A).
- Run the 5-Expert Gap Analysis (Addendum B) and merge the improvements directly into the chapter, ending with a brief Gap Analysis Report.
- Update `02-coverage-matrix.md` status for this chapter, then run `npm run build` to verify.
```
