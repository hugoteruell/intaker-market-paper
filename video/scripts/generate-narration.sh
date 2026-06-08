#!/usr/bin/env bash
# Gera narration.mp3 a partir do roteiro do teaser, via ElevenLabs HTTP API.
#
# Uso:
#   export ELEVENLABS_API_KEY="sk_..."
#   bash video/scripts/generate-narration.sh
#
# Voice ID padrao: Regi Piroli (PT-BR, middle-aged, conversational).
# Para trocar:
#   export ELEVENLABS_VOICE_ID="<voice_id>"
# Vozes PT-BR conhecidas no catalogo desta sessao:
#   QHXbC1UI61ujIZ9SUNGc  Regi Piroli (middle-aged, sobria) [recomendada]
#   RGymW84CSmfVugnA5tvA  Roberta - Smooth and Confident (young)
#   ohZOfA9iwlZ5nOsoY7LB  Roberta - Casual, Engaging and Clear (young)

set -euo pipefail

if [[ -z "${ELEVENLABS_API_KEY:-}" ]]; then
  echo "ERRO: ELEVENLABS_API_KEY nao definida."
  echo "  export ELEVENLABS_API_KEY=\"sk_...\""
  echo "Obtenha em https://elevenlabs.io/app/settings/api-keys"
  exit 1
fi

VOICE_ID="${ELEVENLABS_VOICE_ID:-QHXbC1UI61ujIZ9SUNGc}"
MODEL_ID="${ELEVENLABS_MODEL_ID:-eleven_multilingual_v2}"

OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/audio"
mkdir -p "$OUT_DIR"
OUT_FILE="$OUT_DIR/narration.mp3"

# Texto do roteiro. Mesmo conteudo do narration.md.
# Ritmo alvo: ~30s em paper-like sobrio, ~73 palavras.
read -r -d '' TEXT <<'EOF' || true
O processo americano de contratação para jovens talentos nunca recebeu tanto volume. E nunca produziu tão pouco sinal.

Cada candidato envia cerca de quatrocentas aplicações. Cada vaga entry-level recebe trinta e seis candidatos, alta de vinte e dois por cento em um ano.

Vinte e dois por cento da Gen Z já abandonou um emprego. Um terço de todo o turnover acontece nos primeiros doze meses. Três vezes a meta saudável.

O problema não é falta de candidatos. É falta de sinal.

Intaker. Decision intelligence comportamental para early-career hiring.
EOF

PAYLOAD=$(cat <<JSON
{
  "text": $(printf '%s' "$TEXT" | python3 -c 'import json,sys; print(json.dumps(sys.stdin.read()))'),
  "model_id": "$MODEL_ID",
  "voice_settings": {
    "stability": 0.55,
    "similarity_boost": 0.80,
    "style": 0.15,
    "use_speaker_boost": true
  }
}
JSON
)

echo "Gerando narracao..."
echo "  voice_id: $VOICE_ID"
echo "  model:    $MODEL_ID"
echo "  destino:  $OUT_FILE"
echo

HTTP_STATUS=$(curl -sS -o "$OUT_FILE" -w "%{http_code}" \
  -X POST "https://api.elevenlabs.io/v1/text-to-speech/$VOICE_ID" \
  -H "xi-api-key: $ELEVENLABS_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Accept: audio/mpeg" \
  --data-raw "$PAYLOAD")

if [[ "$HTTP_STATUS" != "200" ]]; then
  echo "ERRO: API retornou HTTP $HTTP_STATUS"
  echo "Resposta:"
  cat "$OUT_FILE"
  rm -f "$OUT_FILE"
  exit 1
fi

BYTES=$(wc -c < "$OUT_FILE" | tr -d ' ')
echo "OK. Narracao salva em $OUT_FILE ($BYTES bytes)."
echo
echo "Proximo passo:"
echo "  cd video && npm run build"
echo "  Saida: video/out/intaker-teaser.mp4"
