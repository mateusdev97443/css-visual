# CSS Visual

Dicionário visual e interativo, em português do Brasil, para compreender CSS avançado por meio de explicações, código e diagramas educativos.

## Objetivo

O MVP oferece conteúdo indexável e rápido para estudantes e profissionais front-end. A arquitetura separa conteúdo tipado, apresentação e interação para crescer de cinco para vinte ou mais verbetes sem reconstrução.

## Tecnologias e decisão arquitetural

- **Astro + TypeScript estrito:** páginas estáticas por verbete, SEO nativo e quase nenhum JavaScript entregue ao cliente.
- **CSS e HTML/SVG:** identidade, responsividade e diagramas leves, sem biblioteca visual.
- **TypeScript no cliente:** apenas busca, filtros e tema.
- **Vitest e ESLint:** testes unitários das regras de consulta e qualidade estática.
- **Sitemap do Astro:** URLs indexáveis geradas no build.

Astro foi escolhido porque o produto é predominantemente editorial: pré-renderização reduz custo de execução, melhora a descoberta e mantém o deploy simples.

## Requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Instalação e execução local

```bash
npm ci
npm run dev
```

Acesse `http://localhost:4321`.

## Build, tipos, lint e testes

```bash
npm run check
npm run lint
npm test
npm run build
npm run preview
```

## Estrutura

```text
src/
├── components/       componentes visuais reutilizáveis
├── data/entries.ts   cinco verbetes, separados da interface
├── layouts/          metadados, tema e estrutura global
├── lib/              busca pura e testes unitários
├── pages/            início, catálogo, sobre, 404 e rotas estáticas
├── scripts/          interação mínima do catálogo
├── styles/           tokens e estilos mobile-first
└── types.ts          contrato DictionaryEntry
```

## Modelo de conteúdo

`DictionaryEntry`, em `src/types.ts`, valida identidade, classificação, palavras-chave, explicação, exemplos, decisões práticas, notas de acessibilidade/performance e relações. O array usa `satisfies DictionaryEntry[]`, preservando inferência e verificando todos os campos em build.

### Como adicionar um verbete

1. Adicione um objeto completo a `src/data/entries.ts`, com `slug` exclusivo.
2. Inclua rótulos do diagrama em `src/components/Diagram.astro` e, se necessário, uma variação CSS leve.
3. Relacione apenas títulos existentes em `relatedTerms` para obter links.
4. Rode `npm run check && npm run lint && npm test && npm run build`.

As rotas individuais e a navegação anterior/próxima são geradas automaticamente a partir do array.

## Verbetes disponíveis

- Stacking Context
- CSS Grid
- Container Queries
- `clamp()`
- Cascade Layers e `@layer`

## Acessibilidade

O projeto inclui semântica nativa, link de salto, hierarquia de títulos, campos rotulados, foco visível, alvos de toque, explicações textuais equivalentes para diagramas, contraste adaptado aos temas e respeito a `prefers-reduced-motion`. A ordem do DOM permanece lógica.

## Limitações do MVP

- Cinco verbetes; categorias sem conteúdo aparecem como filtros preparados para expansão.
- Diagramas ensinam o modelo mental, mas não são um editor de código.
- Compatibilidade dependente de versões deve ser confirmada em documentação oficial.
- Metas de Core Web Vitals são arquiteturais e precisam de medição em ambiente publicado representativo.
- URL canônica de exemplo (`cssvisual.dev`) deve ser substituída antes de uma publicação autorizada.

## Próximas etapas

- Adicionar quinze verbetes seguindo o contrato existente.
- Executar auditorias assistivas com usuários e testes E2E em navegadores reais.
- Medir Core Web Vitals em hospedagem homologada.
- Adicionar demonstrações manipuláveis apenas quando trouxerem ganho pedagógico.

Não há publicação ou merge automático para produção.
