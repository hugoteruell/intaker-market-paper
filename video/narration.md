# Roteiro de Narração — Teaser Intaker (30s)

Tom: analítico, sóbrio, paper-like. Sem dramaticidade. Como uma voz de FT
Visual Journalism ou The Daily, não como trailer cinematográfico.

Ritmo: aproximadamente 145 palavras por minuto. O texto abaixo tem ~73
palavras, o que cabe confortavelmente em 30 segundos com respiros entre os
beats.

---

## Texto a gravar

> O processo americano de contratação para jovens talentos nunca recebeu
> tanto volume. E nunca produziu tão pouco sinal.
>
> Cada candidato envia cerca de quatrocentas aplicações. Cada vaga
> entry-level recebe trinta e seis candidatos, alta de vinte e dois por
> cento em um ano.
>
> Vinte e dois por cento da Gen Z já abandonou um emprego. Um terço de
> todo o turnover acontece nos primeiros doze meses. Três vezes a meta
> saudável.
>
> O problema não é falta de candidatos. É falta de sinal.
>
> Intaker. Decision intelligence comportamental para early-career hiring.

---

## Sincronia recomendada com os beats

| Tempo  | Beat                         | Linha                                                                  |
| ------ | ---------------------------- | ---------------------------------------------------------------------- |
| 0-4s   | Opener                       | "O processo americano… nunca produziu tão pouco sinal."                |
| 4-8s   | 400 aplicações               | "Cada candidato envia cerca de quatrocentas aplicações."               |
| 8-12s  | 36 candidatos por vaga       | "Cada vaga entry-level recebe trinta e seis candidatos, alta de 22%…" |
| 12-16s | 22% Gen Z                    | "Vinte e dois por cento da Gen Z já abandonou um emprego."             |
| 16-21s | 33% turnover                 | "Um terço de todo o turnover… Três vezes a meta saudável."             |
| 21-26s | Diagnóstico                  | "O problema não é falta de candidatos. É falta de sinal."              |
| 26-30s | Closing                      | "Intaker. Decision intelligence comportamental para early-career…"     |

---

## Como gerar a narração

### Opção A — ElevenLabs (mais profissional)

1. Vá em https://elevenlabs.io/app/speech-synthesis
2. Selecione uma voz brasileira sóbria (recomendadas: Antoni, Domi em PT-BR
   ou clones de voz neutra editorial).
3. Cole o "Texto a gravar" acima.
4. Configure: stability 0.55, similarity 0.8, style 0.15 (sóbrio).
5. Gere, baixe MP3 e salve em `video/public/audio/narration.mp3`.

### Opção B — macOS `say` (rascunho rápido)

```bash
say -v "Luciana" -o video/public/audio/narration.aiff -f video/narration.md
# converter para mp3:
ffmpeg -i video/public/audio/narration.aiff video/public/audio/narration.mp3
```

A voz é menos natural, mas serve para testar timing.

### Opção C — Gravar você mesmo

Use Audacity ou QuickTime. Tente respeitar os marcadores de tempo da
tabela acima para o áudio casar com a kinetic typography.
