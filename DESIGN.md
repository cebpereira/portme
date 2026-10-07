# Fluxo + Schema

A direção visual da página, para quem for mexer nela depois.

## De onde vem

1. **O schema relacional.** Carlos é back-end. O trabalho dele é estrutura bem
   definida, e a página apresenta a informação do mesmo jeito: pares
   chave→valor alinhados, período à esquerda, registro à direita. A experiência é
   uma razão, não uma fileira de cards.
2. **O fluxo de produção.** A ilustração do hero desenha um fluxo real do trabalho
   dele: um webhook chega na API, vira job na fila, o worker processa e grava no
   PostgreSQL. Nomes de rota, fila e job vêm do código de verdade, não de exemplo.
3. **A paleta do azulejo baiano.** Cobalto sobre cal, herdada da primeira versão da
   página. Ele mora e trabalha em Jequié.

## Tokens

Definidos em `web/src/index.css`, com contraparte no modo escuro.

| Token | Claro | Papel |
| --- | --- | --- |
| `--chalk` | `#e9ebe6` | Fundo. Cinza-esverdeado de reboco, deliberadamente não o creme quente. |
| `--cobalt` | `#1d4595` | Cor da marca: títulos de seção, empresas, blocos da ilustração. |
| `--brand-block` | `#1d4595` | Fundo do bloco de contato. Fica no cobalto profundo também no escuro, onde `--cobalt` clareia e o texto perderia contraste. |
| `--ink` | `#141a2b` | Texto. Preto com fundo azul, coerente com o cobalto. |
| `--slate` | `#5a6275` | Texto secundário. |
| `--tile` | `#c3cfe6` | Fundo dos tokens de stack. |
| `--ochre` | `#d8a31a` | Acento. Usado com avareza: foco, sublinhado de link, ponto de posição atual, pacotes da ilustração. |

Raio de canto é 2px, não 10px.

## Tipografia

- **Bricolage Grotesque** no display, com o eixo de largura em 86% (`.font-display`).
  A condensação é escolha, não acaso: dá densidade às linhas do hero.
- **IBM Plex Sans** no texto corrido.
- **IBM Plex Mono** apenas onde há dado de verdade — períodos, anos, tokens de stack,
  saída de terminal. Não é decoração de rótulo.

## Regras

1. **Dois momentos altos, só.** A ilustração no hero e o bloco de cobalto do contato.
   Tudo entre eles é cal e tinta, quieto de propósito.
2. **Um recurso estrutural por vez.** A régua superior de `Section` separa registros.
   Não há eyebrow em caixa alta, numeração `01 / 02`, moldura ou sombra.
3. **O movimento vive na ilustração.** Pacotes em ocre percorrem as conexões e o
   cursor do terminal pisca. Nada anima ao rolar, nada levita no hover.
   `prefers-reduced-motion` desliga tudo.
4. **Contraste AA nos dois temas.** Texto sobre fundo de marca fica acima de 4.5:1 —
   foi por isso que o contato ganhou `--brand-block`.

## A ilustração

`web/src/components/HeroIllustration.tsx`. SVG desenhado à mão numa caixa 400×372,
com as cores do tema via variáveis CSS, então acompanha claro e escuro sem código extra.

O fluxo segue o `arbus-app`: `POST /webhooks/moskit` → fila `webhooks` →
`ProcessMoskitWebhookJob` no worker → PostgreSQL. A fila entra pela direita e sai pela
esquerda; o quadrado cheio é o próximo job. As conexões não se cruzam — ao mexer na
posição de um bloco, refaça os traços (`TRACE_*`) junto.

A mesma ilustração aparece em `web/public/og-image.png`, a imagem de preview dos links,
e o favicon é o prompt do terminal.
