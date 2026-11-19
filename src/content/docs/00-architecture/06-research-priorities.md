---
title: "Deliverable 6: Research Priorities"
description: Strategic triage of all Atlas domains into Deep Primary Research, Rapid Technical Synthesis, and High-Moat Specialist Domains, plus verification protocols.
---

> **Mandate Reference:** `ATLAS_MASTER_PROMPT.md` — Part 2, Part 32 (Deliverable 6), and Mandatory Addendum D.

---

## 1. Research Priority Classification Matrix

To maintain encyclopedic rigor across 20 Volumes without diluting depth, all research topics are triaged into three execution tiers:

### Tier 1 — Topics Requiring the Deepest Empirical & Financial Research
*Why: High source divergence, opaque private-company financials, rapidly shifting AI economics, or fragmented national data.*

| Topic Area | Target Volumes | Key Research Challenges | Authoritative Grounding Sources |
| :--- | :--- | :--- | :--- |
| **1. Market Sizing & Definition Reconciliation** | Vol 1 (Ch 1.1, 1.6), Vol 2 (Ch 2.1) | Reconciling Nimdzi ($70B+ services/tech), CSA Research, Slator LSPI, and generalist market reports that conflate NLP API spend with LSP revenue. | Nimdzi 100 reports, Slator LSPI & Pro Data, CSA Research market studies, ELIS annual surveys, public filings (RWS, Teleperformance, Keywords/EQT, Honyaku Center). |
| **2. 50+ Country-Level Market Profiles & Proxies** | Vol 2 (Ch 2.2–2.7) | Most countries lack official GDP accounts for language services; requires cross-referencing national associations (ATC UK, JTF Japan, ATA USA, EUATC), LSP registry counts, and employment stats. | ELIS, JTF (Japan Translation Federation), Yano Research Institute, US BLS (Interpreters & Translators 27-3091), Eurostat NACE M74.30 (Translation and interpretation activities). |
| **3. Supply Chain Value Distribution & Unit Economics** | Vol 13 (Ch 13.3), Vol 14 (Ch 14.1–14.3) | Tracing exact gross margins across multi-tier subcontracting (Enterprise paying $0.22/word → MLV taking 45% → SLV taking 25% → Freelancer receiving $0.06/word) and quantifying AI MTPE margin shifts. | Public LSP annual report gross-margin disclosures, ELIS freelancer/LSP rate surveys, Proz/ATA/CIOL rate benchmarks, BMS unit-economics models. |
| **4. Multilingual AI Data, RLHF & AgenticQE Benchmarks** | Vol 15 (Ch 15.1–15.3), Addendum A | Separating vendor marketing hype from empirical WMT / COMET / MQM benchmarks across high-, medium-, and low-resource language corridors. | WMT Shared Task Findings (ACL), TAUS DeMT / QE reports, Unbabel COMET research, Scale/Appen/RWS TrainAI disclosures, AI4Bharat / Masakhane papers. |
| **5. M&A, Private Equity Roll-Ups & Valuation Multiples** | Vol 1 (Ch 1.6), Vol 13 (Ch 13.4) | Tracking EV/EBITDA and EV/Revenue multiples across tech-enabled LSPs vs. pure-play CAT/TMS SaaS vs. AI voice/translation unicorns. | Slator M&A reports, EQT/Keywords acquisition prospectus, RWS-SDL filings, TransPerfect/Lionbridge/LanguageLine deal disclosures. |

---

### Tier 2 — Topics Requiring Specialist Regulatory & Technical Engineering Precision
*Why: Zero tolerance for factual error; practitioners rely on exact standards, code syntax, and statutory compliance.*

| Topic Area | Target Volumes | Specialist Knowledge Required | Authoritative Grounding Sources |
| :--- | :--- | :--- | :--- |
| **1. Clinical Trials, Linguistic Validation & MedTech Compliance** | Vol 5 (Ch 5.7), Vol 6 (Ch 6.4), Vol 12 (Ch 12.1–12.2) | Exact ISPOR 10-step dual-forward/reconciliation/back-translation/cognitive debriefing flow; EU MDR (2017/745) & IVDR (2017/746) 24-language IFU rules; ISO 13485 QMS traceability. | ISPOR Task Force publications (Wild et al., 2005), FDA PRO Guidance, EMA Product Information linguistic review templates, EU MDR Annex I–III. |
| **2. Internationalization (i18n) & Character Encoding Architecture** | Vol 9 (Ch 9.1–9.3) | UTF-8 vs. UTF-16 surrogate pairs, grapheme cluster segmentation (UAX #29), Unicode normalization (`NFC`/`NFD`), BiDi algorithm (UAX #9), BCP 47, CLDR plural rules, ICU MessageFormat ASTs. | The Unicode Standard v15/16, W3C Internationalization specs, IETF RFC 5646 (BCP 47), Unicode CLDR release tables. |
| **3. File Format Internals & Parser Mechanics** | Vol 8 (Ch 8.1–8.5) | Valid XML/JSON schemas, inline placeholder handling (`<g>`, `<x/>`, `<ph>`), segment status state machines, and frame-rate timecode math (`23.976` vs. `24` vs. `29.97` drop-frame). | OASIS XLIFF 1.2 & 2.1 specs, ISO 30042 (TBX), GALA TMX 1.4b, W3C TTML/IMSC1, Adobe IDML Cookbook, SMPTE ST 2067 (IMF). |
| **4. Legal Localization, Patents & Official Authentication** | Vol 12 (Ch 12.3–12.4), Vol 17 (Ch 17.1–17.2) | Common-law vs. civil-law conceptual gaps, WIPO PCT patent claim dependency rules, sworn court translation regimes vs. notarized Certificates of Accuracy, 1961 Hague Apostille Convention. | WIPO PCT Applicant's Guide, Hague Conference (HCCH) Apostille Handbook, national court translator statutes, GDPR / HIPAA / SAG-AFTRA AI voice clauses. |

---

### Tier 3 — Topics That Can Be Structured & Synthesized Rapidly via Templates
*Why: Well-established workflows and repeatable commercial patterns once Tier 1 and Tier 2 foundations are locked.*

- **Standard Commercial Verticals (Vol 5):** Applying the 22-point operational template consistently across travel, hospitality, corporate HR, e-learning, and retail once core web/DTP/CMS mechanics are established.
- **Software Product Catalogs (Vol 7):** Documenting feature sets, pricing models, and file compatibility matrices across CAT tools, Cloud TMS platforms, and BMS tools.
- **Open-Source Lab Specs (Vol 19 Ch 19.2):** Scoping the 100 solo-buildable developer projects around concrete file format, i18n, QA, and API pain points uncovered in Volumes 6–12.

---

## 2. Mandatory Citation & Verification Protocol (Part 2)

Every research session writing a new Volume or Chapter MUST verify all claims against this checklist before committing:

1. **Statistical Completeness:** Does every market size, growth rate, or salary number state `(Year, Currency, Market Definition, Geography, Source, Methodology, Confidence Level, Limitations)`?
2. **Epistemic Labeling:** Are estimates, proxies (e.g., Eurostat NACE M74.30 company counts), and forecasts explicitly distinguished from audited facts?
3. **Addendum A & B Compliance:** Does the chapter include the 20-field **AI Impact & Opportunity Brief**, the 11 mandatory chapter-closing items, and the **5-Expert Gap Analysis Report**?
