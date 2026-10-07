# Azulejo + Schema

A direção visual da página, para quem for mexer nela depois.

## De onde vem

Duas fontes, as duas específicas desta pessoa e não de "um portfólio qualquer":

1. **O schema relacional.** Carlos é back-end. O trabalho dele é estrutura bem
   definida, e a página apresenta a informação do mesmo jeito: pares
   chave→valor alinhados, período à esquerda, registro à direita. A experiência é
   uma razão, não uma fileira de cards.
2. **O azulejo baiano.** Ele mora e trabalha em Jequié. Cobalto sobre cal, com a
   geometria da cerâmica aparecendo uma única vez, no painel do hero.

## Tokens

Definidos em `web/src/index.css`, com contraparte no modo escuro.

| Token | Claro | Papel |
| --- | --- | --- |
| `--chalk` | `#e9ebe6` | Fundo. Cinza-esverdeado de reboco, deliberadamente não o creme quente. |
| `--cobalt` | `#1d4595` | Cor da marca: títulos de seção, empresas, o bloco de contato. |
| `--ink` | `#141a2b` | Texto. Preto com fundo azul, coerente com o cobalto. |
| `--slate` | `#5a6275` | Texto secundário. |
| `--tile` | `#c3cfe6` | Fundo dos tokens de stack. |
| `--ochre` | `#d8a31a` | Acento. Usado com avareza: foco, sublinhado de link, ponto de posição atual. |

Raio de canto é 2px, não 10px. A cerâmica é cortada, não arredondada.

## Tipografia

- **Bricolage Grotesque** no display, com o eixo de largura em 86% (`.font-display`).
  A condensação é escolha, não acaso: dá densidade às linhas do hero.
- **IBM Plex Sans** no texto corrido.
- **IBM Plex Mono** apenas onde há dado de verdade — períodos, anos, tokens de stack.
  Não é decoração de rótulo.

## Regras

1. **Dois momentos altos, só.** O painel de azulejo no hero e o bloco de cobalto do
   contato. Tudo entre eles é cal e tinta, quieto de propósito. Acrescentar um
   terceiro destaque tira força dos dois.
2. **Um recurso estrutural por vez.** A régua superior de `Section` separa registros.
   Não há eyebrow em caixa alta, numeração `01 / 02`, moldura ou sombra.
3. **Um movimento só.** Os módulos do azulejo assentam escalonados no carregamento
   (`@keyframes tile-set`). Nada anima ao rolar, nada levita no hover.
   `prefers-reduced-motion` desliga duração e atraso.
4. **O lugar aparece uma vez.** O motivo de azulejo vive no hero e no favicon.
   Repeti-lo pela página vira fantasia, não identidade.

## O painel

`web/src/components/AzulejoPanel.tsx`. Grid 6×6 de módulos desenhados numa célula
0–100. Os arcos de quina têm raio 50 para encontrarem as bordas nos pontos médios,
de modo que os ladrilhos conversem entre si. O array `LAYOUT` é escolhido à mão,
não sorteado — os módulos cheios traçam uma diagonal frouxa da direita para a
esquerda. Mexer nele é recompor, então mexa olhando o resultado.
