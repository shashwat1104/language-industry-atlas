---
title: "Deliverable 5: The Master Glossary"
description: Continuously expandable, alphabetically organized encyclopedia of 65+ foundational technical, operational, financial, legal, and AI terms in the global language industry.
---

> **Mandate Reference:** `ATLAS_MASTER_PROMPT.md` — Part 31 (Rule 3) and Part 32 (Deliverable 5).

---

## A — C

1. **ADR (Automated Dialogue Replacement / Additional Dialogue Recording):** In film, TV, and video game dubbing, the studio process of re-recording spoken dialogue in synchronization with the original lip movements or timecode cues.
2. **Apostille:** An official certificate issued under the 1961 Hague Convention that authenticates the origin of a public document (such as a notarized or court-certified translation) so it is legally recognized in another signatory country without embassy legalization.
3. **ARB (Application Resource Bundle):** A JSON-based localization resource format (`.arb`) used primarily by Google's Flutter framework, pairing translatable keys with `@key` metadata objects defining descriptions and typed placeholders.
4. **Audio Description (AD):** Narrated spoken tracks inserted into natural pauses in audiovisual dialogue describing visual actions, facial expressions, and scene changes for blind and visually impaired audiences.
5. **Back-Translation:** An independent translation of a target-language text back into the original source language by a blind translator (who has never seen the original source) to detect conceptual errors; mandatory in ISPOR clinical trial linguistic validation.
6. **BCP 47 (Best Current Practice 47):** The IETF standard (RFC 5646 / RFC 4647) defining the syntax of language tags (`language-script-region`, e.g., `zh-Hans-CN`, `es-419`, `sr-Latn-RS`) used across HTTP headers, HTML, OS locales, and XLIFF.
7. **BiDi (Bidirectional Text):** Text containing both Right-to-Left (RTL) scripts (such as Arabic or Hebrew) and Left-to-Right (LTR) runs (such as Latin brand names, code snippets, or Hindu-Arabic numerals), governed by the Unicode Bidirectional Algorithm (UBA, UAX #9).
8. **BMS (Business Management System):** Specialized ERP platforms built for Language Service Providers (such as Plunet, XTRF, or Protemos) that automate quoting, TM fuzzy-match invoicing, vendor purchase orders, margin tracking, and ISO audit trails.
9. **CAT Tool (Computer-Assisted Translation Tool):** Specialized software workbench (e.g., Trados Studio, memoQ, OmegaT) that segments source files into bilingual units and assists human translators via Translation Memory (TM), Termbases (TB), inline tag protection, and MT plugins.
10. **CLDR (Common Locale Data Repository):** Maintained by the Unicode Consortium, the largest standardized XML/JSON repository of locale data worldwide—defining date/time/currency patterns, plural rules (`zero, one, two, few, many, other`), and collation rules for all major operating systems and browsers.
11. **Cognitive Debriefing:** In clinical and medical localization, structured in-country interviews conducted with 5–8 native patients matching a disease indication to verify that a translated Patient-Reported Outcome (PRO) questionnaire is understood exactly as intended.
12. **COMET (Crosslingual Optimized Metric for Evaluation of Translation):** A neural framework developed by Unbabel that evaluates MT/LLM translation quality using multilingual embeddings; includes reference-based (`wmt22-comet-da`) and reference-free Quality Estimation (`CometKiwi`) models.
13. **Concordance Search:** A sub-segment search inside a CAT tool's Translation Memory that allows a linguist to look up how a specific word or phrase was translated inside longer historical sentences even when the overall sentence has a low fuzzy-match score.
14. **Context Match (101% / 102% / ICE Match):** Also called an **In-Context Exact (ICE)** or **Perfect Match**; a segment that matches a stored Translation Memory entry 100% AND is surrounded by the exact same preceding and following segments (or identical document ID/key).
15. **Continuous Localization:** Integrating localization directly into agile software CI/CD pipelines so that new or modified UI strings pushed to Git automatically sync to a Cloud TMS, undergo translation/QA, and return via automated Pull Requests or Over-the-Air (OTA) mobile updates.
16. **CPS (Characters Per Second):** The primary reading-speed metric in subtitling (e.g., Netflix typically caps adult subtitles at 17 CPS for Latin scripts and 4 CPS for Japanese), ensuring viewers have time to read text AND watch the visual action.

---

## D — I

17. **DITA (Darwin Information Typing Architecture):** An OASIS XML standard for modular, topic-based technical authoring (`<concept>`, `<task>`, `<reference>` and `.ditamap`), widely used in industrial machinery, aerospace, and enterprise software documentation to minimize redundant translation costs.
18. **DQF (Dynamic Quality Framework):** Developed by TAUS and harmonized with MQM, a framework for benchmarking translation quality, productivity, and MT post-editing effort across content types.
19. **DTP (Multilingual Desktop Publishing):** The graphic and typographic layout adaptation of localized documents (in Adobe InDesign, FrameMaker, Illustrator, or AutoCAD) to handle text expansion/contraction, RTL page mirroring, CJK line-breaking rules, and localized font rendering.
20. **eCOA / ePRO (Electronic Clinical Outcome Assessment / Electronic Patient-Reported Outcome):** Digital questionnaires deployed on tablets or smartphones during clinical trials to measure patient symptoms; strictly regulated by the FDA and EMA and subject to rigorous linguistic validation and screenshot verification.
21. **Forced Narrative (FN):** A subtitle track displayed even when regular subtitles are turned off, translating only foreign-language dialogue spoken within a film (e.g., Elvish or Spanish dialogue inside an English movie) or critical plot-relevant on-screen signs.
22. **Fuzzy Match:** A Translation Memory match between 50% and 99% similarity based on Levenshtein character/token edit distance, typically billed at tiered commercial discounts according to a client's TM match grid.
23. **GILT (Globalization, Internationalization, Localization, Translation):** The canonical four-pillar industry acronym:
    - **Globalization (g11n):** Business strategy and organizational readiness to operate worldwide.
    - **Internationalization (i18n):** Upstream software architecture designing code so it supports any locale/script without engineering code changes.
    - **Localization (l10n):** Adapting a product, UI, media asset, and cultural experience for a specific target locale.
    - **Translation (t9n):** Converting written text from one language into another.
24. **Grapheme Cluster:** What a human reader perceives as a single visible character on screen, which in Unicode may actually be composed of multiple code points (such as a base letter + combining diacritics, a Devanagari conjunct, or a family emoji joined by Zero-Width Joiners `U+200D`).
25. **hreflang:** An HTML link attribute or XML sitemap annotation (`rel="alternate" hreflang="es-MX"`) telling search engines which localized and regional URL version of a webpage to serve to users in a given language and country.
26. **ICU MessageFormat:** The industry-standard syntax (part of International Components for Unicode) for handling complex grammatical pluralization, gender selection, and select ordinals inside software localization strings without string concatenation.
27. **IDML (InDesign Markup Language):** An XML-based ZIP package format exported from Adobe InDesign (`.indd`) that allows CAT tools and TMS platforms to parse text stories cleanly while preserving layout tags.
28. **IMSC1 (Internet Media Subtitles and Captions 1.0/1.1):** A W3C profile of TTML mandated by OTT streaming leaders (including Netflix) and SMPTE IMF delivery specs for frame-accurate XML timed text, Japanese ruby annotations, and forced narratives.
29. **ISO 17100:2015:** The primary international standard specifying requirements for human translation service processes, translator academic/professional qualifications, and mandatory independent bilingual revision ("four-eyes principle").
30. **ISO 18587:2017:** The international standard defining requirements for full and light human Post-Editing of Machine Translation output (MTPE) and post-editor competencies.
31. **ISO 5060:2024:** The international standard establishing harmonized guidance for evaluating translation output using analytic error typologies and severity weightings.
32. **ISPOR Principles:** The consensus guidelines published by the International Society for Pharmacoeconomics and Outcomes Research governing the dual-forward translation, reconciliation, blind back-translation, and cognitive debriefing of patient-reported outcomes.

---

## K — P

33. **Kinsoku Shori (禁則処理):** Japanese typographic line-breaking rules specifying which punctuation marks, small kana, or brackets are forbidden from appearing at the start (*gyōtō kinsoku*) or end (*gyōmatsu kinsoku*) of a text line.
34. **Leverage:** The percentage of a new localization project's word count that can be reused directly from existing Translation Memories (100%/Context matches and high fuzzy matches), directly reducing cost and turnaround time.
35. **Light Post-Editing (LPE) vs. Full Post-Editing (FPE):** Defined in ISO 18587—**Light Post-Editing** fixes only critical factual/comprehension errors to make MT output understandable ("good enough" for internal/support tickets), whereas **Full Post-Editing** edits MT output to reach human-equivalent publishable fluency and stylistic accuracy.
36. **Linguistic Validation:** The rigorous clinical research methodology verifying that a translated patient questionnaire is conceptually equivalent to the original source instrument and culturally comprehensible to target patients.
37. **Lip-Sync Dubbing:** Replacing the original actor's voice track with a target-language voice performance meticulously adapted so bilabial (`p, b, m`), labiodental (`f, v`), and open vowels align visually with the on-screen actor's mouth movements.
38. **Low-Resource Language:** A language that lacks large-scale digitized parallel corpora, clean web crawls, speech datasets, and computational linguistics tools (even if spoken by tens of millions of people, such as Oromo, Hausa, Bhojpuri, or Quechua).
39. **LQA (Linguistic Quality Assurance):** Post-translation quality verification combining analytical sample scoring (via MQM/LQA scorecards) AND in-context functional testing inside the live software build, video game, or typeset layout.
40. **LSP (Language Service Provider):** Any company—from a two-person boutique agency to a $1B+ mega-vendor—providing translation, localization, interpretation, or language data services.
41. **MLV (Multi-Language Vendor) vs. SLV (Single-Language Vendor):** An **MLV** manages global accounts across dozens of languages, frequently subcontracting specific regional languages to an in-country **SLV** specializing in one target language or region (e.g., a Tokyo SLV for Japanese or a Cairo SLV for Arabic).
42. **MQM (Multidimensional Quality Metrics):** An analytic translation quality evaluation framework (standardized under ASTM F3614) categorizing errors across 7 dimensions (Terminology, Accuracy, Linguistic Conventions, Style, Locale Conventions, Audience Appropriateness, Design & Markup) weighted by severity (Minor, Major, Critical).
43. **MTPE (Machine Translation Post-Editing):** The workflow where a machine translation or LLM engine generates a draft target segment that a qualified human linguist then edits and verifies inside a CAT tool.
44. **MTQE / QE (Machine Translation Quality Estimation):** Automated AI scoring (e.g., CometKiwi, Phrase MTQE, MetricX-QE) that predicts the quality of a machine-translated segment *without* needing a human reference translation, routing high-confidence segments straight through and flagging low-confidence segments for human editing.
45. **NFC vs. NFD (Unicode Normalization Forms):** **NFC** (Canonical Decomposition followed by Canonical Composition) stores accented characters as single precomposed code points (e.g., `é = U+00E9`), while **NFD** decomposes them into a base character plus combining mark (`e + ´ = U+0065 U+0301`); mismatches cause invisible string search, filename, and TM match failures.
46. **OPI (Over-the-Phone Interpreting):** Real-time audio-only remote interpreting (typically consecutive) connecting a caller, a non-native speaker, and an interpreter within seconds; dominant in hospital triage, 911 emergency dispatch, and banking customer support.
47. **Pivot Language / Pivot Template:** Using an intermediate high-resource language (usually English) as a bridge when translating between two non-English languages (e.g., Korean drama → English master subtitle pivot template → Brazilian Portuguese, Polish, and Arabic subtitles).
48. **Pseudo-Localization:** An automated software engineering test before real translation starts that replaces source characters with accented lookalikes (e.g., `[Ĥéļļö Ŵöŕļď!!! 12345]`), artificially expands string length by 30–40%, or simulates RTL mirroring to catch hardcoded strings and UI truncation bugs early.

---

## R — Z

49. **RAG for Localization (Retrieval-Augmented Generation):** Dynamically querying a project's Translation Memory (via vector/fuzzy similarity), approved TBX glossary terms, and brand style guide rules at inference time and injecting them into an LLM prompt to prevent terminology drift.
50. **Repetition:** A segment that appears multiple times within the *same* file or project batch before being committed to the master Translation Memory; CAT tools auto-propagate the first translation and LSPs typically discount repetitions by 70–90%.
51. **RSI (Remote Simultaneous Interpreting):** Cloud platforms (e.g., KUDO, Interprefy, Zoom Interpretation) that allow conference interpreters to deliver real-time simultaneous interpretation into virtual audio channels from remote ISO-compliant studios without physical on-site booths.
52. **Ruby / Furigana:** Small phonetic guide characters placed above or beside logographic CJK characters (such as Hiragana above Japanese Kanji or Bopomofo beside Traditional Chinese) to indicate pronunciation; supported in HTML (`<ruby><rt>`) and IMSC1 timed text.
53. **SDH (Subtitles for the Deaf and Hard of Hearing):** Subtitles in the same or translated language that include not only spoken dialogue but also speaker identification tags, sound effects (`[door slams]`), and musical mood cues (`[tense orchestral music]`).
54. **SDLXLIFF / MQXLIFF / MXLIFF:** Vendor-extended flavors of the OASIS XLIFF standard used natively by RWS Trados Studio (`.sdlxliff`), memoQ (`.mqxliff`), and Phrase TMS (`.mxliff`) to store proprietary match metadata, comments, and tracked changes.
55. **Segmentation & SRX (Segmentation Rules eXchange):** The algorithmic splitting of paragraphs into translatable sentence units inside a CAT tool based on punctuation and abbreviation rules defined in XML SRX files (preventing false splits on abbreviations like `Dr.`, `Inc.`, or `e.g.`).
56. **Simultaneous vs. Consecutive Interpreting:** In **Simultaneous Interpreting**, the interpreter speaks into a microphone with a 2–4 second decalage (lag) while the speaker continues talking; in **Consecutive Interpreting**, the speaker pauses after 1–5 minutes while the interpreter renders the passage from structured notes.
57. **Spotting (Cueing / Timing):** In subtitling, defining the exact frame-accurate in-time and out-time of each subtitle event so it respects audio onset, reading speed (CPS), minimum duration (~20 frames), and camera shot boundaries.
58. **Sworn Translation (Certified / Official Translation):** In civil-law jurisdictions (such as Germany, France, Spain, Brazil, Poland), a translation produced and stamped by a linguist officially appointed and sworn in before a regional court or ministry of justice; contrasted with common-law countries (USA/UK) where a signed Certificate of Accuracy suffices.
59. **TBX (TermBase eXchange — ISO 30042):** The open XML standard for exchanging concept-oriented terminology databases containing approved, preferred, and forbidden domain terms across CAT and TMS platforms.
60. **TEP (Translation, Editing, Proofreading):** The classic three-stage human production workflow standardized by EN 15038 and ISO 17100: initial translation by Linguist 1, full bilingual sentence-by-sentence revision by Linguist 2, and final target monolingual/layout proofing.
61. **Text Expansion / Contraction:** The physical change in character count and pixel width when translating between languages—for example, English to German, French, or Spanish routinely expands by **20% to 35%**, whereas English to Chinese or Japanese contracts in character count but requires taller vertical glyph line height.
62. **TM (Translation Memory):** A relational or vector database storing previously translated source-and-target segment pairs (Translation Units) so identical or similar future sentences are retrieved automatically.
63. **TMS (Translation Management System):** An enterprise software platform (e.g., Smartling, Phrase, Lokalise, Crowdin, Trados Enterprise) that automates content ingestion via connectors, workflow routing, central TM/TB hosting, MT/LLM orchestration, vendor assignment, and analytics.
64. **TMX (Translation Memory eXchange):** The vendor-neutral XML standard (`.tmx`) allowing Translation Memory databases to be exported from one CAT/TMS platform and imported into another without data loss.
65. **Transcreation:** Creative adaptation of high-visibility marketing headlines, slogans, advertising campaigns, and brand narratives where preserving emotional impact, cultural resonance, humor, and buyer conversion supersedes literal lexical fidelity.
66. **UN-Style Voiceover:** An audiovisual localization technique (common in documentaries, news interviews, and Eastern European television) where the original speaker's audio remains audible at a lowered volume for 1–2 seconds before a non-lip-synced translated voice track speaks over it.
67. **VRI (Video Remote Interpreting):** On-demand or scheduled two-way video interpreting used extensively in hospitals, courts, and Deaf/Hard-of-Hearing sign language (ASL/BSL) access where visual cues and facial expressions are indispensable.
68. **XLIFF (XML Localization Interchange File Format):** The OASIS open XML standard (`.xlf` / `.xliff`, versions 1.2, 2.0, and 2.1) designed to separate localizable text from native source file formatting so any conformant CAT tool can translate it safely.
