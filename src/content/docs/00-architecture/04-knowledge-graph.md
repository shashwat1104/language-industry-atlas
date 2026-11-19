---
title: "Deliverable 4: The Industry Knowledge Graph"
description: Visual Mermaid.js system maps illustrating how buyers, content, services, workflows, tools, file formats, language pairs, linguists, QA, AI agents, and revenue interconnect.
---

> **Mandate Reference:** `ATLAS_MASTER_PROMPT.md` — Part 32 (Deliverable 4), Part 18, and Mandatory Addendum A & C.

---

## 1. Master End-to-End Value & Production Knowledge Graph

This primary graph traces how an **Enterprise Buyer's business objective** flows through **content types, file formats, TMS/CAT technology, supply-chain tiers, AI/human workflows, and quality standards** to generate **global revenue**.

```mermaid
flowchart TD
    subgraph BUYER["1. Demand & Enterprise Buyer Layer"]
        B1["Multinational Enterprise / SMB / Studio / Gov"]
        B2["International Expansion / Regulatory Mandate / Product Launch"]
        B3["Budget Owner: Product · Marketing · Clinical · Legal · Ops"]
        B1 --> B2 --> B3
    end

    subgraph CONTENT["2. Source Content & Native Formats"]
        C1["Software & SaaS UI<br/>(.json, .arb, .strings, .po, .resx)"]
        C2["Docs, DTP & Technical<br/>(.indd/.idml, .dita, .docx, .pdf)"]
        C3["Audiovisual & Media<br/>(.mp4, .mxf, .wav, .srt, .ttml)"]
        C4["Regulated Clinical & Legal<br/>(eCOA XML, eCTD, Contracts, Patents)"]
        C5["Live Spoken / Signed Events<br/>(WebRTC Audio/Video, Booths)"]
        B3 --> C1 & C2 & C3 & C4 & C5
    end

    subgraph INGEST["3. i18n Engineering & Exchange Container Layer"]
        I1["File Filters / Okapi / Connectors / Git CI-CD"]
        I2["Bilingual Exchange Container<br/>(XLIFF 1.2/2.1, SDLXLIFF, MQXLIFF)"]
        I3["Linguistic Assets<br/>(TMX Translation Memory + TBX Termbase)"]
        C1 & C2 & C3 & C4 --> I1 --> I2
        I3 <--> I2
    end

    subgraph ROUTING["4. Supply Chain & AI/Human Orchestration Layer"]
        R1["Cloud TMS / BMS Orchestrator<br/>(Phrase, Smartling, Lokalise, Trados, XTRF)"]
        R2["AI / NMT / LLM Router<br/>(DeepL, Language Weaver, GPT-4o, Claude)"]
        R3["Automated Quality Estimation<br/>(MTQE / COMET / Deterministic Regex Check)"]
        R4["Human Specialist Supply Chain<br/>(Mega-LSP → Regional MLV/SLV → Native Domain Linguist)"]
        I2 --> R1
        R1 --> R2 --> R3
        R3 -- "Low Confidence / High Risk Tier" --> R4
        R1 -- "Transcreation / Clinical ISPOR / Sworn" --> R4
        C5 --> R5["RSI / OPI / VRI / On-Site Interpreter"]
    end

    subgraph QA_DELIVERY["5. Verification, Standards & Commercial Settlement"]
        Q1["Quality & Compliance Gates<br/>(ISO 17100, ISO 18587, ISO 5060, MQM, ISPOR, Netflix QC)"]
        Q2["Target Rebuild, In-Context LQA & DTP Layout Sign-Off"]
        Q3["Localized Product / Media / Filing Live in Target Locale"]
        Q4["Unit Economics & Settlement<br/>(Per-Word / TM Grid / Per-Minute / SaaS ARR → Gross Margin)"]
        R3 -- "High Confidence Auto-Pass" --> Q1
        R4 --> Q1
        R5 --> Q1
        Q1 --> Q2 --> Q3 --> Q4
    end
```

---

## 2. The 6-Sector Ecosystem Intersection Graph (Addendum C.1)

How the six macro-sectors of the global language economy feed data, talent, software, and revenue into one another:

```mermaid
flowchart LR
    S1["Sector 1: Language Services<br/>($65B–$73B+ LSPs, Interpreting, AVT)"]
    S2["Sector 2: Language Technology<br/>(CAT, TMS, NMT, LLM Routers, Speech AI)"]
    S3["Sector 3: Language Education & Assessment<br/>(CEFR, IELTS, JLPT, Apps, Corporate Training)"]
    S4["Sector 4: Language Data & AI Infrastructure<br/>(RLHF, Parallel Corpora, Speech Data, Benchmarks)"]
    S5["Sector 5: Language Content & Media<br/>(OTT Streaming, Publishing, Global Creators)"]
    S6["Sector 6: Research & Public Infrastructure<br/>(Unicode/CLDR, W3C, ISO, EU DGT, UNESCO)"]

    S6 -- "Standards (BCP 47, XLIFF, ISO) & Open Corpora" --> S2
    S6 -- "Regulatory Mandates (MDR, Title VI, EAA)" --> S1
    S2 -- "Productivity Platforms & MT/LLM Engines" --> S1
    S1 -- "Cleaned TMs, Termbases & Human Annotators" --> S4
    S4 -- "SFT/RLHF Training & Eval Data" --> S2
    S5 -- "High-Volume Subtitling, Dubbing & Adaptation Demand" --> S1
    S3 -- "Certified Bilingual Talent & Proficiency Standards" --> S1
    S2 -- "AI Tutors & Speech Scoring Engines" --> S3
```

---

## 3. Traditional vs. AI-Enabled Agentic Workflow Map (Addendum A.5)

Comparing the legacy linear cascade against the modern risk-tiered agentic localization architecture:

```mermaid
flowchart TB
    subgraph TRAD["A. Traditional Linear Cascade (High Latency, Manual Handoffs)"]
        T1["Client Email / Manual File Drop"] --> T2["LSP PM Manual Quote & File Prep"]
        T2 --> T3["TM Leverage + Static Generic MT"]
        T3 --> T4["Subcontracted SLV / Freelance Translator (T)"]
        T4 --> T5["Second Linguist Bilingual Revision (E)"]
        T5 --> T6["DTP / Proofreading (P) & Xbench Check"]
        T6 --> T7["PM Manual Delivery & 60-Day Invoice"]
    end

    subgraph AGENTIC["B. AI-Enabled Risk-Tiered Agentic Pipeline (Continuous, Context-Aware)"]
        A1["Git CI/CD / CMS Webhook / API Trigger"] --> A2["Ingestion & Risk Classification Agent<br/>(Tier 1 Regulated vs Tier 2 UI vs Tier 3 Long-Tail)"]
        A2 --> A3["Context Harvester & RAG Agent<br/>(Playwright UI Screenshots + Vector TM + TBX Glossary)"]
        A3 --> A4["Dynamic Model Router<br/>(Selects Best LLM/NMT per Language Pair & Domain)"]
        A4 --> A5["Deterministic Syntax/Tag Linter + COMET/LLM-MQM Judge"]
        A5 -- "Score >= Threshold & Tier 3" --> A7["Automated PR Merge / OTA Delivery"]
        A5 -- "Score < Threshold OR Tier 1/2" --> A6["Specialist Human Linguist-in-the-Loop<br/>(In-Context Visual Review)"]
        A6 --> A7
        A7 --> A8["Continuous Preference Loop<br/>(Human Edits Update TM & Fine-Tune Prompts)"]
        A8 -.-> A3
    end
```

---

## 4. Relational Entity Schema Graph (`src/data/*.json`)

How the 11 structured JSON databases in this repository link together:

```mermaid
erDiagram
    SEGMENTS ||--o{ WORKFLOWS : "executes"
    SEGMENTS ||--o{ COMPANIES : "operated_by"
    SEGMENTS ||--o{ STANDARDS : "governed_by"
    SEGMENTS ||--o{ OPPORTUNITIES : "generates"
    WORKFLOWS ||--o{ TOOLS : "orchestrated_with"
    WORKFLOWS ||--o{ FILE_FORMATS : "transforms"
    WORKFLOWS ||--o{ CAREERS : "staffed_by"
    TOOLS ||--o{ FILE_FORMATS : "parses_and_exports"
    COMPANIES }o--|| COUNTRIES : "headquartered_in"
    COUNTRIES ||--o{ LANGUAGE_PAIRS : "trades_across"
    SOURCES ||--o{ SEGMENTS : "validates_research_for"
```
