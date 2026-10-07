# Portfólio — Carlos Elandro

Single-page bilíngue (PT/EN) em React + Tailwind + shadcn/ui, com um serviço mínimo
só para o formulário de contato.

```
web/   Vite + React + TypeScript → build estático
api/   zod + Resend              → POST /api/contact
```

A regra do formulário vive em `api/src/contact.ts`, sem framework, e tem duas entradas:

- `api/src/worker.ts` — produção, num Cloudflare Worker que também serve o build do `web`.
- `api/src/index.ts` — Express, para rodar localmente com Docker.

Nos dois casos o browser fala só com a própria origem e a chave do Resend não chega ao bundle.

## Deploy na Cloudflare

O `wrangler.jsonc` publica o Worker `portme` com o `web/dist` como assets estáticos.
Rotas em `/api/*` passam pelo Worker; o resto é servido direto, com fallback de SPA.

Deploy automático a cada push no `main`, configurado uma vez no painel da Cloudflare
(**Workers & Pages → Create → Import a repository**):

| Campo | Valor |
| --- | --- |
| Build command | `npm ci && npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | `/` |

`CONTACT_TO` e `CONTACT_FROM` ficam em `vars` no `wrangler.jsonc`. A chave do Resend é
secret, cadastrada uma vez:

```bash
npx wrangler secret put RESEND_API_KEY
```

Para testar o Worker localmente, crie um `.dev.vars` com `RESEND_API_KEY=...` e rode:

```bash
npm install && npm run build && npx wrangler dev --ip 127.0.0.1
```

## Rodando com Docker

```bash
cp .env.example .env     # preencha RESEND_API_KEY e CONTACT_FROM
docker compose up --build
```

A página fica em <http://localhost:9090>. Se a 9090 já estiver ocupada no host,
troque com `WEB_PORT=8099 docker compose up --build`.

## Rodando em desenvolvimento

Dois terminais:

```bash
cd api && npm install && npm run dev     # porta 3001
cd web && npm install && npm run dev     # porta 5173
```

O dev server do Vite encaminha `/api` para `localhost:3001` removendo o prefixo,
igual ao nginx — o mesmo caminho relativo funciona nos dois ambientes.

O `api` em dev lê o `.env` da raiz, se existir. Sem ele, exporte as variáveis na mão.

## Variáveis de ambiente

| Variável | Obrigatória | Para quê |
| --- | --- | --- |
| `RESEND_API_KEY` | sim | Chave em <https://resend.com/api-keys>. |
| `CONTACT_TO` | sim | Caixa que recebe as mensagens do formulário. |
| `CONTACT_FROM` | sim | Remetente. Precisa ser de domínio verificado no Resend; sem domínio próprio use `onboarding@resend.dev`. |
| `ALLOWED_ORIGIN` | não | Origens do CORS, separadas por vírgula. Só vale em dev — em produção tudo é same-origin. Padrão: `http://localhost:5173`. |
| `PORT` | não | Porta da API. Padrão `3001`. |
| `WEB_PORT` | não | Porta publicada no host pelo `web`. Padrão `9090`. |

O processo da API valida a configuração no boot e morre se faltar alguma obrigatória,
em vez de falhar só na primeira mensagem enviada.

### Sobre o remetente

Com `onboarding@resend.dev` o Resend só entrega para o email da sua própria conta.
Como este formulário sempre envia para você, isso basta para começar. Para receber em
outro endereço ou usar remetente próprio, verifique um domínio no Resend e troque
`CONTACT_FROM`.

## Editando o conteúdo

Todo o texto vive em dois arquivos:

- `web/src/content/pt.ts`
- `web/src/content/en.ts`

Ambos são tipados contra `web/src/content/types.ts`, então esquecer uma chave em um
idioma quebra o build em vez de gerar um buraco na página.

A seção de projetos some quando `projects.items` fica vazio nos dois arquivos.

## Proteções do formulário

- Validação com o mesmo formato de schema nos dois lados (zod no browser e na API).
- Limite por IP: 2 envios por minuto na Cloudflare, 5 a cada 15 minutos no Express.
- Honeypot invisível: mensagens de bot recebem `200` e são descartadas sem envio.
- Erros do Resend ficam no log do servidor; o visitante vê só uma mensagem genérica.

## Design

A direção visual está registrada em [DESIGN.md](DESIGN.md).
