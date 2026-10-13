# Case study — Zecki Portfolio

## Contexto

Projeto da **Semana 12** do roadmap Angular + Supabase. É a **vitrine dos 12 cases**: um app que
reúne, em um só lugar, os 12 projetos do roadmap com screenshot, métricas e a narrativa técnica
("o que aprendi") de cada um. Pilar **Todos** · milestone `m1-portfolio` · teste unitário em Vitest.

## Desafio

Comunicar **impacto** em entrevista: não basta ter 12 repositórios — é preciso uma peça que mostre,
em segundos, o que cada projeto resolve, quais métricas ele atingiu e quais decisões técnicas foram
tomadas. O desafio foi montar uma base navegável e estática (sem cold start, sempre online) que
também servisse de **shell reutilizável** para as telas de cases.

## Solução

- **Shell Angular 22 standalone + zoneless**, com rotas públicas:
  - `/` → redireciona para `/cases` (home do portfólio)
  - `/cases` → vitrine dos 12 cases
  - `**` → redireciona para `/cases` (deep links caem na vitrine)
- **Supabase compartilhado** (projeto `jlvqrfewiuqhduvbufqe`, slug `portfolio`) com **RLS**; a
  *anon key* é pública, a *service_role* nunca entra no front. O app mostra um **health-check**
  ("Testar conexão") em `/cases`.
- **Modo demo automático:** sem `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY`, o app sobe sem backend e
  exibe o aviso — o build e os testes nunca dependem de segredo.
- **Codegen de ambiente:** `scripts/gerar-ambiente.mjs` transforma o `.env` em
  `src/environments/ambiente.local.ts` (gitignored) nos hooks `postinstall`/`prestart`/`prebuild`/`pretest`.
- **Acessibilidade desde a base:** skip-link, hierarquia de títulos, foco visível, `role="status"` nos
  avisos e `prefers-reduced-motion`.

## Métricas

| Métrica | Resultado |
|---------|-----------|
| Unit tests (Vitest) | 3/3 passando (2 arquivos) |
| Cobertura | 73,5% statements · 73,3% branches · 74,4% lines |
| E2E (Playwright) | 6/6 passando (smoke + a11y + screenshots) |
| Acessibilidade (axe) | 0 violações graves/críticas |
| ESLint | 0 erros |
| Bundle inicial | 462,7 kB raw (≈114,8 kB transfer) |

## O que aprendi

- **Base primeiro, feature depois:** deixar o shell roteado, o codegen de ambiente e o modo demo
  funcionando torna cada tela de case um incremento isolado e testável.
- **Testar sem backend é possível** quando o app degrada para um estado demo explícito — os specs
  rodam em CI sem nenhuma chave.
- **Acessibilidade não é etapa final:** skip-link, foco visível e contraste definidos no CSS base
  fizeram a varredura do axe passar de primeira.

## Links

- Demo: https://zecki1.github.io/angular-portfolio/
- Repo: https://github.com/zecki1/angular-portfolio
