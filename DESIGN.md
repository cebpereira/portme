# Conversa

A direção visual da página, para quem for mexer nela depois.

## A ideia

A página é escrita para quem recruta, não para quem programa. Ela abre como uma
conversa: Carlos se apresenta, e as perguntas que um recrutador costuma fazer viram
botões. Cada resposta aparece como mensagem, em linguagem simples, com link para a
seção que aprofunda o assunto. Quem prefere passar os olhos rola a página normalmente.

As respostas são escritas à mão em `web/src/content/{pt,en}.ts` (`hero.questions`).
Não há IA nem chamada externa: a conversa é roteiro, e cada fato vem do currículo.

As perguntas e respostas ficam numa caixa de altura máxima (`min(26rem, 55vh)`) com
rolagem própria. A página não cresce a cada pergunta, e a caixa rola sozinha até a
pergunta mais recente.

O status do topo diz que Carlos está aberto a novas oportunidades, e o modelo de
contratação fica para a conversa. Nenhum contratante atual aparece em destaque: a
Rhopen e as outras empresas ficam só no histórico de experiência.

## Imagens

- `web/public/avatar.webp`: recorte quadrado de `profile_pic.png` (256px), usado no topo e
  nos balões das respostas.
- `web/public/projects/fizanota-*.webp`: telas do Fiz a Nota capturadas no ambiente local,
  com a conta fictícia `ana.mei@dev.fizanota.test`. Nada de dado real.
- `web/public/og-image.png`: preview dos links, 1200×630.
- `web/public/curriculo-carlos-elandro.pdf`: currículo para ATS, mantido por Carlos.

## Tokens

Definidos em `web/src/index.css`. O tema escuro é o padrão. O claro só aparece se a
pessoa escolher.

| Token | Escuro | Claro | Papel |
| --- | --- | --- | --- |
| `--background` | `#0f1c24` | `#edf2f4` | Fundo petróleo. |
| `--foreground` | `#e6edf1` | `#0f1c24` | Texto. |
| `--brand` | `#3fb8c4` | `#0b7480` | Ciano da marca: balão do visitante, links, empresas. |
| `--warm` | `#f29e5c` | `#b5561a` | Manga. Acento raro: foco, ponto de posição atual. |
| `--warm-block` | `#f29e5c` | `#f29e5c` | Manga sobre o bloco de contato, que é escuro nos dois temas. |
| `--ok` | `#7bd389` | `#23824a` | Verde do status de disponibilidade. |
| `--chip` | `#163a45` | `#d3e6ea` | Fundo dos tokens de stack. |
| `--brand-block` | `#0b3a44` | `#0b3a44` | Fundo do bloco de contato. |

O canto padrão é 10px. Balões de conversa usam 18px, com o canto do lado de quem fala
quase reto.

## Tipografia

- **Bricolage Grotesque** no display, com largura em 86% (`.font-display`).
- **IBM Plex Sans** no texto corrido.
- **IBM Plex Mono** só onde há dado: períodos, anos, tokens de stack.

## Movimento

Os componentes de animação vêm do [React Bits](https://reactbits.dev), instalados
pelo registro do shadcn (`npx shadcn add @react-bits/<Nome>-TS-TW`). Usamos só os que
dependem de `motion` ou de nada, sem gsap nem WebGL.

| Onde | Componente | O que faz |
| --- | --- | --- |
| Fundo da página | `DotGrid` (`Backdrop.tsx`) | Grade de pontos fixa, que acende perto do cursor. Esmaece em direção ao canto inferior esquerdo. |
| Topo | `ScrollProgress.tsx` | Barra fina, de ciano para manga, que mostra quanto da página já foi lida. |
| Saudação | `BlurText` | Palavras entrando em foco uma a uma. |
| Títulos de seção | `motion` | Repetem o gesto da saudação, uma vez, ao entrar na tela. |
| Experiência | `motion` | Linha do tempo que se desenha conforme a rolagem; cada item desliza ao aparecer. |
| Projetos | `SpotlightCard` | Cards com luz que segue o cursor. |

Na conversa, o balão do visitante entra pela direita, aparecem os três pontos de
"digitando" e a resposta entra em foco.

`prefers-reduced-motion` desliga tudo: as respostas aparecem na hora, sem digitação.

## Regras

1. **Contraste AA nos dois temas.** Texto sobre o bloco de contato usa `--warm-block`
   e `--mist`, porque o bloco é escuro nos dois temas.
2. **Fatos, não marketing.** Toda resposta da conversa precisa estar no
   currículo. Se mudar o currículo, revise `hero.questions`.
3. **Títulos de seção falam como gente** ("Por onde passei"), e a navegação continua
   curta ("Experiência").
