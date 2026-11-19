---
title: "Deliverable 2: The Coverage Matrix"
description: Master tracking table mapping all 18 Mandatory Domains and 20 Volumes across Topics, Subtopics, Planned Chapters, Research Status, and Coverage Status.
---

> **Mandate Reference:** `ATLAS_MASTER_PROMPT.md` — Part 31 (Rule 20), Part 32 (Deliverable 2), and Mandatory Addendum C.
>
> **Allowed Status Values:** `Not started` | `Mapped` | `Researching` | `Drafted` | `Verified` | `Completed`

---

## 1. Architecture & Relational Databases Status

| Deliverable / Artifact | Path | Topics & Scope | Research Status | Coverage Status |
| :--- | :--- | :--- | :--- | :--- |
| **Deliverable 1: Master Industry Atlas** | `00-architecture/01-master-atlas.md` | 4 Layers, 6 Ecosystem Sectors, 18 Domains, 20-Volume TOC | Verified | **Completed** |
| **Deliverable 2: Coverage Matrix** | `00-architecture/02-coverage-matrix.md` | Domain-by-domain & volume-by-volume tracking matrix | Verified | **Completed** |
| **Deliverable 3: Learning Roadmap** | `00-architecture/03-learning-roadmap.md` | 5 Proficiency Stages; 30-day, 90-day, 6-month, 12-month curricula | Verified | **Completed** |
| **Deliverable 4: Industry Knowledge Graph** | `00-architecture/04-knowledge-graph.md` | Mermaid architecture diagrams connecting buyers, suppliers, tools, files, QA, AI | Verified | **Completed** |
| **Deliverable 5: Master Glossary** | `00-architecture/05-master-glossary.md` | 65+ core technical, commercial, regulatory, and AI localization terms | Verified | **Completed** |
| **Deliverable 6: Research Priorities** | `00-architecture/06-research-priorities.md` | Deep-research vs. fast-acquisition vs. specialist-domain matrix | Verified | **Completed** |
| **Addendum C.8: Unknown-Unknowns Gap Register** | `00-architecture/07-gap-register.md` | 10-Expert coverage audit and active gap register | Verified | **Completed** |
| **Part 29 & Addendum D: 11 JSON Databases** | `src/data/*.json` & `/databases/` | Segments, Companies, Tools, File Formats, Countries, Pairs, Workflows, Standards, Careers, Opportunities, Sources | Verified | **Completed (Seed v1.0)** |

---

## 2. Domain & Volume Master Coverage Matrix

| Domain | Topics | Subtopics | Planned Chapters | Research Status | Coverage Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **D01. Language Services & Industry Foundations** | Definition, history, value chain, participants, 45+ services taxonomy | GILT, written translation, editing, revision, MTPE, transcreation, interpreting (OPI/VRI/RSI/conference/court/medical/ASL), AVT, DTP, linguistic validation | **Vol 1 (Ch 1.1–1.7)**, **Vol 4 (Ch 4.1–4.6)** | **Vol 1 Ch 1.1 Verified**; Ch 1.2–1.7 & Vol 4 Mapped | **Vol 1 Ch 1.1 Completed**; remaining Mapped |
| **D02. Global Market & Geographies** | Market sizing reconciliation, 50+ country profiles, 4-perspective matrix, rankings | Nimdzi vs. Slator vs. CSA definitions; North America, Europe, APAC, LATAM, MENA, Africa; onshore/nearshore/offshore hubs | **Vol 2 (Ch 2.1–2.7)** | Mapped & seeded in `countries.json` | Mapped |
| **D03. Languages, Linguistics & Corridor Economics** | 15 linguistic branches, resource tiers, speaker vs. GDP economics, 14+ language pairs | Phonetics, morphology, syntax, pragmatics, terminology science; `EN<->JA`, `EN<->DE`, `EN<->ES`, `EN<->AR`, `EN<->HI`, `EN<->ZH`, `EN<->KO` | **Vol 3 (Ch 3.1–3.6)** | Mapped & seeded in `language_pairs.json` | Mapped |
| **D04. 100 Localization Verticals** | All 100 verticals analyzed with the 22-point operational template | Software/SaaS (1–4), Gaming (5–9), Media/OTT (10–15), Marketing/SEO (16–21), E-comm/Luxury (22–25, 73–76), Industrial/Auto/Aero (26–35), Life Sciences (36–42), Legal/Gov (43–50), Finance (51–57), Ed/Pub (58–67), Travel/NGO/HR (68–88), AI/Accessibility/UX (89–100) | **Vol 5 (Ch 5.1–5.12)** | Mapped & seeded in `segments.json` | Mapped |
| **D05. Production Processes & Workflows** | All 12 core industry production workflows (A through L) | TEP, Localization, Software CI/CD, Web/SEO, Game LQA, Media/AVT, Clinical ISPOR, Legal/Apostille, Marketing/Transcreation, DTP, Interpreting, Agentic AI | **Vol 6 (Ch 6.1–6.5)** | Mapped & seeded in `workflows.json` | Mapped |
| **D06. Localization Software Ecosystem** | 13 software categories & product comparisons | CAT tools, Cloud TMS, TM engines, Termbases, NMT, LLM routers, Engineering/CI-CD, DTP, Media/AVT, Automated QA, Interpreting platforms, Data annotation, BMS/ERP | **Vol 7 (Ch 7.1–7.5)** | Mapped & seeded in `tools.json` | Mapped |
| **D07. File Format Encyclopedia** | 60+ file formats across 10 categories (17-point spec + compatibility matrix) | Exchange (`XLIFF`, `TMX`, `TBX`, `SDLXLIFF`), Software (`JSON`, `ARB`, `PO`, `RESX`, `STRINGS`), Web (`HTML`, `MDX`), Subtitles (`SRT`, `VTT`, `TTML/IMSC1`), Audio/Video (`WAV`, `MXF`), DTP (`INDD`, `IDML`), Docs (`DITA`, `DOCX`, `PDF`), AI (`JSONL`, `Parquet`) | **Vol 8 (Ch 8.1–8.5)** | Mapped & seeded in `file_formats.json` | Mapped |
| **D08. Internationalization (i18n) & Tech Stack** | Encoding, locales, CLDR, ICU, BiDi/RTL, 8 reference technology stacks | UTF-8/UTF-16, grapheme clusters, NFC/NFD, BCP 47, CLDR plurals/gender, RTL mirroring, CJK kinsoku shori, font fallback, LSP/Enterprise/Startup tech stacks | **Vol 9 (Ch 9.1–9.4)** | Mapped | Mapped |
| **D09. Quality, Standards & Compliance** | 10 quality dimensions, ISO/ASTM standards, MQM/DQF, automated QE | `ISO 17100`, `ISO 18587`, `ISO 5060:2024`, `ISO 13485`, `ISO 27001`, `ASTM F2575/F3614`, MQM error typologies, LQA sampling, Reviewer calibration, COMET/MetricX | **Vol 10 (Ch 10.1–10.4)** | Mapped & seeded in `standards.json` | Mapped |
| **D10. Media Localization & AVT** | End-to-end subtitling, dubbing, voiceover, accessibility & OTT specs | Spotting, CPS/WPM, frame rates, shot changes, pivot templates, lip-sync ADR, audio description, SDH, Netflix/Disney/Amazon/IMF delivery rules | **Vol 11 (Ch 11.1–11.4)** | Mapped | Mapped |
| **D11. Regulated Industries (Clinical, Legal, Finance)** | Life sciences linguistic validation, MedTech EU MDR, Legal & IP/Patents | Clinical protocols, ICFs, eCOA/ePRO, cognitive debriefing, FDA/EMA/PMDA, Common vs. Civil law, WIPO/PCT patents, sworn/notarized/Apostille workflows | **Vol 12 (Ch 12.1–12.4)** | Mapped | Mapped |
| **D12. Business Operations, Buyers & Supply Chain** | 20 LSP departments, enterprise buyer org charts, procurement, vendor cascade, sales | Intake to billing, enterprise localization maturity, RFP tendering, multi-tier subcontracting (MLV/SLV/freelancer), vendor qualification, M&A/PE roll-ups | **Vol 13 (Ch 13.1–13.4)** | Mapped & seeded in `companies.json` | Mapped |
| **D13. Pricing, Finance & Unit Economics** | Pricing models, 12 business category unit economics, worked P&L simulations | Per-word/char/hour/min/page, TM match grids, MTPE discounts, gross vs. contribution margin, utilization, DSO, cross-border taxation, CAC/LTV, valuation multiples | **Vol 14 (Ch 14.1–14.3)** | Mapped | Mapped |
| **D14. AI Transformation & Multilingual Data** | 24 AI use cases, agentic workflows, RLHF/SFT data infrastructure, Addendum A lens | RAG over TM/TB, dynamic model routing, LLM-as-a-Judge QE, human-in-the-loop economics, speech-to-speech, cultural safety red-teaming, synthetic data | **Vol 15 (Ch 15.1–15.3)** & **Addendum A boxes** | Mapped | Mapped |
| **D15. Career Map, Education & Assessment** | 25 industry roles, language learning/testing market, zero-to-expert curriculum | Role responsibilities, salary bands, AI task survival analysis; CEFR, IELTS, TOEFL, JLPT, corporate training, AI tutors; 30d/90d/6m/12m learning tracks | **Vol 16 (Ch 16.1–16.3)** | Mapped & seeded in `careers.json` | Mapped |
| **D16. Regulations, Ethics, IP & Language Policy** | Data privacy, copyright, voice rights, geopolitics, indigenous preservation | GDPR, HIPAA, data residency, TM ownership, AI voice cloning consent (SAG-AFTRA), language rights (Bill 96, Title VI, EU 24 languages), UNESCO IDIL | **Vol 17 (Ch 17.1–17.3)** | Mapped | Mapped |
| **D17. Failure Modes & 30 Case Studies** | 25 localization failure modes + 30 realistic end-to-end project case studies | Broken placeholders, encoding corruption, UI overflow, clinical mistranslation, AI hallucinations; 30 multi-vertical project breakdowns with budgets & lessons | **Vol 18 (Ch 18.1–18.3)** | Mapped | Mapped |
| **D18. Opportunity Radar, Open-Source Lab & Future** | Startup/SaaS blueprints, 100 open-source project specs, 2026–2035+ forecast | 18-point opportunity evaluations, 100 solo-buildable OS tools across 15 categories, Jevons paradox, multimodal real-time translation horizons | **Vol 19 (Ch 19.1–19.2)**, **Vol 20 (Ch 20.1–20.2)** | Mapped & seeded in `opportunities.json` | Mapped |
