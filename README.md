# Portfólio — Carlos Elandro

Single-page bilíngue (PT/EN) em React + Tailwind + shadcn/ui, servido estático por
nginx, com um serviço mínimo em Node só para o formulário de contato.

```
web/   Vite + React + TypeScript → build estático → nginx
api/   Express + zod + Resend    → POST /contact
```

O browser fala apenas com a origem do `web`. O nginx encaminha `/api/` para o
contêiner `api`, que nunca é exposto ao host — a chave do Resend não chega ao bundle.

## Rodando com Docker

```bash
cp .env.example .env     # preencha RESEND_API_KEY e CONTACT_FROM
docker compose up --build
```

A página fica em <http://localhost:8080>. Se a 8080 já estiver ocupada no host,
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
| `WEB_PORT` | não | Porta publicada no host pelo `web`. Padrão `8080`. |

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
- Limite de 5 envios por IP a cada 15 minutos.
- Honeypot invisível: mensagens de bot recebem `200` e são descartadas sem envio.
- Erros do Resend ficam no log do servidor; o visitante vê só uma mensagem genérica.

## Design

A direção visual está registrada em [DESIGN.md](DESIGN.md).
