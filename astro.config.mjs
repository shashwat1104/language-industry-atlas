import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://language.shashwat.wtf',
  integrations: [
    starlight({
      title: 'The Complete Language Industry Atlas',
      description: 'An exhaustive, research-grounded map of the global language industry, localization engineering, language economics, and AI transformation — by Shashwat.',
      pagefind: true,
      social: {
        github: 'https://github.com/shashwat1104/language-industry-atlas',
      },
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'script',
          attrs: {
            type: 'module',
          },
          content: `
            import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
            function renderMermaid() {
              const blocks = document.querySelectorAll('pre[data-language="mermaid"]');
              blocks.forEach((pre) => {
                const code = pre.querySelector('code');
                const source = code ? code.innerText : pre.innerText;
                const container = document.createElement('div');
                container.className = 'mermaid';
                container.textContent = source;
                const figure = pre.closest('figure.frame') || pre.parentElement;
                if (figure && figure.classList.contains('frame')) {
                  figure.replaceWith(container);
                } else {
                  pre.replaceWith(container);
                }
              });
              const isDark = document.documentElement.dataset.theme !== 'light';
              mermaid.initialize({
                startOnLoad: false,
                theme: isDark ? 'dark' : 'default',
                securityLevel: 'loose',
                fontFamily: 'inherit',
              });
              mermaid.run({ querySelector: '.mermaid' });
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', renderMermaid);
            } else {
              renderMermaid();
            }
          `,
        },
      ],
      sidebar: [
        {
          label: 'Interactive Bookshelf & Workbench',
          items: [
            { label: '← Back to 20-Volume Bookshelf & Live QE/OpenLoc Tools', link: '/' },
          ],
        },
        {
          label: '00 — Architecture & Roadmap',
          items: [
            { label: '01. Master Industry Atlas', slug: '00-architecture/01-master-atlas' },
            { label: '02. Coverage Matrix', slug: '00-architecture/02-coverage-matrix' },
            { label: '03. Learning Roadmap', slug: '00-architecture/03-learning-roadmap' },
            { label: '04. Industry Knowledge Graph', slug: '00-architecture/04-knowledge-graph' },
            { label: '05. Master Glossary', slug: '00-architecture/05-master-glossary' },
            { label: '06. Research Priorities', slug: '00-architecture/06-research-priorities' },
            { label: '07. Unknown-Unknowns Gap Register', slug: '00-architecture/07-gap-register' },
          ],
        },
        {
          label: 'Relational Databases',
          items: [
            { label: 'Databases Overview & Explorer', slug: 'databases' },
          ],
        },
        {
          label: '20 Volumes — Encyclopedia',
          items: [
            { label: 'Vol 01: The Industry', autogenerate: { directory: '01-volumes' }, collapsed: false },
            { label: 'Vol 02: Global Market', autogenerate: { directory: '02-volumes' }, collapsed: true },
            { label: 'Vol 03: Languages & Economics', autogenerate: { directory: '03-volumes' }, collapsed: true },
            { label: 'Vol 04: Core Language Services', autogenerate: { directory: '04-volumes' }, collapsed: true },
            { label: 'Vol 05: Localization Verticals', autogenerate: { directory: '05-volumes' }, collapsed: true },
            { label: 'Vol 06: Production Processes', autogenerate: { directory: '06-volumes' }, collapsed: true },
            { label: 'Vol 07: Software & Tools', autogenerate: { directory: '07-volumes' }, collapsed: true },
            { label: 'Vol 08: File Formats Encyclopedia', autogenerate: { directory: '08-volumes' }, collapsed: true },
            { label: 'Vol 09: Technology & i18n Stack', autogenerate: { directory: '09-volumes' }, collapsed: true },
            { label: 'Vol 10: Quality & Standards', autogenerate: { directory: '10-volumes' }, collapsed: true },
            { label: 'Vol 11: Media Localization', autogenerate: { directory: '11-volumes' }, collapsed: true },
            { label: 'Vol 12: Regulated Industries', autogenerate: { directory: '12-volumes' }, collapsed: true },
            { label: 'Vol 13: Business & Supply Chain', autogenerate: { directory: '13-volumes' }, collapsed: true },
            { label: 'Vol 14: Unit Economics & Pricing', autogenerate: { directory: '14-volumes' }, collapsed: true },
            { label: 'Vol 15: AI & Multilingual Data', autogenerate: { directory: '15-volumes' }, collapsed: true },
            { label: 'Vol 16: Career Map', autogenerate: { directory: '16-volumes' }, collapsed: true },
            { label: 'Vol 17: Regulations & Ethics', autogenerate: { directory: '17-volumes' }, collapsed: true },
            { label: 'Vol 18: Case Studies & Failure Modes', autogenerate: { directory: '18-volumes' }, collapsed: true },
            { label: 'Vol 19: Opportunity Radar & OS Lab', autogenerate: { directory: '19-volumes' }, collapsed: true },
            { label: 'Vol 20: The Future (2026–2035+)', autogenerate: { directory: '20-volumes' }, collapsed: true },
          ],
        },
      ],
    }),
  ],
});
