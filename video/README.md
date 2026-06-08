# Intaker Teaser · Remotion

Teaser vertical de 30 segundos (1080×1920) baseado no Intaker Market Paper.
Reproduz a mesma direção editorial do site: paleta paper/ink, Newsreader
serif, Inter Tight sans, JetBrains Mono. Motion mínimo, kinetic typography
sóbria, hairlines como transições.

## Estrutura

```
video/
  src/
    Root.tsx              Registro da Composition
    Composition.tsx       Os 7 beats do teaser
    constants.ts          Timings, cores
    components/
      Paper.tsx           Fundo cream + grain + hairlines
      Chrome.tsx           Masthead, barra de progresso, meta inferior
      Beat.tsx             Frame compartilhado por beat
      CountUp.tsx          Número animado tabular-nums
      Reveal.tsx           Fade + Y in genérico
  public/audio/
    narration.mp3         (drop aqui após gerar — ver narration.md)
  narration.md            Roteiro + instruções de TTS
```

## Beats (30s @ 30fps)

| Tempo  | Frames    | Conteúdo                                             |
| ------ | --------- | ---------------------------------------------------- |
| 0-4s   | 0-120     | Opener: "Mais candidatos do que nunca."              |
| 4-8s   | 120-240   | 400 aplicações por candidato                         |
| 8-12s  | 240-360   | 36 candidatos por vaga (+22% YoY)                    |
| 12-16s | 360-480   | 22% Gen Z já abandonou um emprego                    |
| 16-21s | 480-630   | 33% turnover no primeiro ano (3× a meta)             |
| 21-26s | 630-780   | Diagnóstico: "O problema não é... é falta de sinal." |
| 26-30s | 780-900   | Closing: Intaker + tagline + URL                     |

## Comandos

```bash
cd video
npm install

# Studio interativo (preview ao vivo, scrub timeline)
npm run dev

# Render final em MP4
npm run build
# Saída: video/out/intaker-teaser.mp4

# Frame still (poster)
npm run still
# Saída: video/out/poster.png
```

## Narração

Veja `narration.md` para roteiro completo e três opções de gravação
(ElevenLabs recomendado, macOS `say` para rascunho, ou gravação própria).

Após gerar o áudio, salve como `public/audio/narration.mp3` e renderize
de novo. O componente `<Audio>` é incluído condicionalmente: o vídeo
funciona com ou sem áudio.

## Tom

A direção é **paper-like, não cinematográfica**. Se algum frame começar a
parecer trailer de startup ou pitch deck, está errado. Referências
corretas: Stripe Press videos, FT Visual Journalism, NYT The Daily intros.
