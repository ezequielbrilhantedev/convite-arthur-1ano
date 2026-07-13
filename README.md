# Convite de aniversário do Arthur 🤠🚀

Landing page de convite para a festa de **1 aninho do Arthur** — tema brinquedos
vintage estilo cowboy + ranger espacial, mobile-first (a maioria dos convidados
abre pelo WhatsApp).

**Data:** 12 de setembro de 2026, às 16h.

## Seções

- **Hero** — céu animado (sol, estrelinhas piscando, nuvens), título "Arthur" em
  letreiro de brinquedo, contagem regressiva ao vivo, foguete + planeta com anel e
  um boneco caubói de brinquedo com o rostinho do Arthur.
- **Quando & Onde** — data/horário e local, com botão "Ver localização" que abre o
  Google Maps.
- **Confirme sua presença** — formulário de RSVP (nome + acompanhantes) com confete
  e tela de sucesso ao confirmar.
- **Sugestão de presente** — cartão de PIX e cartão de lista de presentes.
- **Footer** — "Com carinho, a família do Arthur".

## Stack

React + TypeScript + Tailwind CSS (Vite). Sem backend — o RSVP usa estado local
(pode ser integrado ao Supabase depois para salvar as confirmações).

## Como rodar

```bash
cd site
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção em site/dist
```

## Preencher antes de publicar

Alguns campos estão marcados com colchetes e precisam dos valores reais:

- Nome e endereço do local (e o link do Google Maps em `src/components/WhenWhere.tsx`)
- Chave PIX (`src/components/GiftSuggestion.tsx`)
- Link da lista de presentes (`src/components/GiftSuggestion.tsx`)

## Sobre o design original

Este projeto foi implementado a partir de um handoff do Claude Design — os
transcritos e protótipos originais estão em `chats/` e `project/`, e as instruções
do handoff em [`HANDOFF.md`](./HANDOFF.md). O boneco caubói é uma **ilustração
original** (não reproduz personagens registrados), com a foto do Arthur no rosto.
