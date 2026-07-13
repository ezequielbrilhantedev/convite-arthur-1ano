# Convite do Arthur — app

Landing page do convite de 1 aninho do Arthur (React + TypeScript + Tailwind, via Vite).

## Rodar localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # pré-visualiza o build
```

## Confirmações de presença (RSVP → Google Sheets)

O formulário de "Confirme sua presença" envia cada confirmação para uma planilha
do Google, usando um Google Apps Script publicado como Web App. Não há backend —
o navegador faz um POST direto para o script.

> Se a variável `VITE_RSVP_ENDPOINT` não estiver configurada, o formulário
> continua funcionando (mostra a tela de sucesso), mas **não grava** as
> confirmações. Configure-a para começar a registrar.

### 1. Criar a planilha e publicar o script

1. Crie uma **Planilha Google** (Google Sheets) nova.
2. Nela, vá em **Extensões → Apps Script**.
3. Apague o conteúdo padrão e cole o arquivo [`../apps-script/Code.gs`](../apps-script/Code.gs).
4. Clique em **Implantar → Nova implantação**, escolha o tipo **App da Web** e configure:
   - **Executar como:** Eu (seu usuário)
   - **Quem tem acesso:** Qualquer pessoa
5. Autorize quando pedir e **copie a URL** da implantação (termina em `/exec`).

### 2. Ligar a URL no app

Crie um arquivo `.env` nesta pasta (`site/.env`) a partir do exemplo:

```bash
cp .env.example .env
```

E preencha com a URL copiada:

```
VITE_RSVP_ENDPOINT=https://script.google.com/macros/s/SEU_ID/exec
```

Reinicie o `npm run dev`. Ao confirmar presença, uma nova linha aparece na aba
**RSVPs** da planilha (Data/Hora, Nome, Acompanhantes, Total de pessoas).

### 3. Em produção (Vercel)

Adicione a mesma variável em **Project Settings → Environment Variables**:

- Key: `VITE_RSVP_ENDPOINT`
- Value: a URL `/exec`

Depois refaça o deploy para o valor entrar no build.

> Observação: se você atualizar o `Code.gs`, é preciso criar uma **nova
> implantação** (ou "Gerenciar implantações" → editar → nova versão) no Apps
> Script para as mudanças valerem.
