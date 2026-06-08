import {
  AbsoluteFill,
  Audio,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { loadFont as loadNewsreader } from "@remotion/google-fonts/Newsreader";
import { loadFont as loadInterTight } from "@remotion/google-fonts/InterTight";
import { loadFont as loadJetBrains } from "@remotion/google-fonts/JetBrainsMono";

import { Paper } from "./components/Paper";
import { Chrome } from "./components/Chrome";
import { Beat } from "./components/Beat";
import { Reveal } from "./components/Reveal";
import { CountUp } from "./components/CountUp";
import { BEATS, COLORS } from "./constants";

const { fontFamily: serif } = loadNewsreader();
const { fontFamily: sans } = loadInterTight();
const { fontFamily: mono } = loadJetBrains();

const styles = {
  display: {
    fontFamily: serif,
    fontWeight: 400,
    color: COLORS.ink,
    letterSpacing: "-0.025em",
    lineHeight: 0.95,
  } as React.CSSProperties,
  body: {
    fontFamily: sans,
    color: COLORS.ink,
    lineHeight: 1.3,
  } as React.CSSProperties,
  mono: {
    fontFamily: mono,
  } as React.CSSProperties,
};

// Opener (0-4s)
const Opener: React.FC = () => (
  <Beat
    eyebrow="§ 00 · Pesquisa de mercado"
    caption="Intaker Research · Maio 2026"
  >
    <Reveal delay={6} duration={28}>
      <div style={{ ...styles.display, fontSize: 110 }}>
        Mais candidatos
      </div>
    </Reveal>
    <Reveal delay={22} duration={28}>
      <div
        style={{
          ...styles.display,
          fontSize: 110,
          color: COLORS.ash,
          fontStyle: "italic",
        }}
      >
        do que nunca.
      </div>
    </Reveal>
    <Reveal delay={48} duration={24}>
      <div
        style={{
          ...styles.body,
          fontSize: 38,
          marginTop: 60,
          maxWidth: 800,
          color: COLORS.ink,
          opacity: 0.78,
        }}
      >
        Um paper sobre a perda de resolução na contratação early-career nos
        Estados Unidos.
      </div>
    </Reveal>
  </Beat>
);

// Beat 2 — 400 aplicações (4-8s)
const Apps: React.FC = () => (
  <Beat
    eyebrow="§ 01 · Lado do candidato"
    caption="Fontes: Indeed · LinkedIn"
  >
    <Reveal delay={2} duration={20}>
      <div style={{ ...styles.mono, fontSize: 22, letterSpacing: "0.22em", color: COLORS.ash, textTransform: "uppercase", marginBottom: 30 }}>
        Aplicações por busca
      </div>
    </Reveal>
    <div style={{ ...styles.display, fontSize: 380 }}>
      <CountUp to={400} delay={10} duration={45} />
    </div>
    <Reveal delay={60} duration={22}>
      <div style={{ ...styles.body, fontSize: 42, marginTop: 30, maxWidth: 850, opacity: 0.8 }}>
        Aplicações enviadas por candidato durante uma única busca de emprego.
      </div>
    </Reveal>
  </Beat>
);

// Beat 3 — 36 candidatos por vaga (8-12s)
const Apo: React.FC = () => (
  <Beat
    eyebrow="§ 02 · Lado da empresa"
    caption="Fonte: ZipRecruiter · Mai/2024"
  >
    <Reveal delay={2} duration={20}>
      <div style={{ ...styles.mono, fontSize: 22, letterSpacing: "0.22em", color: COLORS.ash, textTransform: "uppercase", marginBottom: 30 }}>
        Candidatos por vaga entry-level
      </div>
    </Reveal>
    <div style={{ display: "flex", alignItems: "baseline", gap: 40 }}>
      <div style={{ ...styles.display, fontSize: 380 }}>
        <CountUp to={36} delay={10} duration={36} />
      </div>
      <Reveal delay={50} duration={20}>
        <div style={{ ...styles.display, fontSize: 90, color: COLORS.accent, fontStyle: "italic" }}>
          +22%
        </div>
      </Reveal>
    </div>
    <Reveal delay={60} duration={22}>
      <div style={{ ...styles.body, fontSize: 42, marginTop: 30, maxWidth: 850, opacity: 0.8 }}>
        Em maio de 2024. Alta de 22% em relação ao ano anterior.
      </div>
    </Reveal>
  </Beat>
);

// Beat 4 — 22% Gen Z attrition (12-16s)
const GenZBeat: React.FC = () => (
  <Beat
    eyebrow="§ 03 · Gen Z"
    caption="Fonte: Deloitte 2026 · Mercer"
  >
    <Reveal delay={2} duration={20}>
      <div style={{ ...styles.mono, fontSize: 22, letterSpacing: "0.22em", color: COLORS.ash, textTransform: "uppercase", marginBottom: 30 }}>
        Já abandonaram um emprego
      </div>
    </Reveal>
    <div style={{ ...styles.display, fontSize: 380 }}>
      <CountUp to={22} delay={10} duration={36} suffix="%" />
    </div>
    <Reveal delay={50} duration={22}>
      <div style={{ ...styles.body, fontSize: 42, marginTop: 30, maxWidth: 850, opacity: 0.8 }}>
        Da Gen Z já abandonou um emprego. Quase o dobro da taxa millennial.
      </div>
    </Reveal>
  </Beat>
);

// Beat 5 — 33% turnover (16-21s)
const TurnoverBeat: React.FC = () => (
  <Beat
    eyebrow="§ 04 · Turnover"
    caption="Fonte: HR.com · BLS JOLTS"
  >
    <Reveal delay={2} duration={20}>
      <div style={{ ...styles.mono, fontSize: 22, letterSpacing: "0.22em", color: COLORS.ash, textTransform: "uppercase", marginBottom: 30 }}>
        Turnover no primeiro ano
      </div>
    </Reveal>
    <div style={{ ...styles.display, fontSize: 380 }}>
      <CountUp to={33} delay={10} duration={40} suffix="%" />
    </div>
    <Reveal delay={56} duration={22}>
      <div style={{ ...styles.body, fontSize: 42, marginTop: 30, maxWidth: 850, opacity: 0.8 }}>
        De todo o turnover voluntário acontece nos primeiros doze meses.
      </div>
    </Reveal>
    <Reveal delay={80} duration={22}>
      <div style={{ ...styles.display, fontSize: 60, fontStyle: "italic", color: COLORS.ash, marginTop: 30 }}>
        Três vezes a meta saudável.
      </div>
    </Reveal>
  </Beat>
);

// Beat 6 — Diagnóstico (21-26s)
const Diagnose: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Beat eyebrow="§ 05 · Diagnóstico">
      <Reveal delay={4} duration={28}>
        <div style={{ ...styles.display, fontSize: 110 }}>
          O problema não é
        </div>
      </Reveal>
      <Reveal delay={22} duration={28}>
        <div style={{ ...styles.display, fontSize: 110, color: COLORS.ash, fontStyle: "italic" }}>
          falta de candidatos.
        </div>
      </Reveal>
      {/* Hairline divider draws */}
      <div
        style={{
          marginTop: 60,
          height: 1,
          background: COLORS.ink,
          width: `${interpolate(frame, [50, 90], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}%`,
          maxWidth: 900,
        }}
      />
      <Reveal delay={70} duration={32}>
        <div style={{ ...styles.display, fontSize: 130, marginTop: 60 }}>
          É falta de <em style={{ color: COLORS.accent, fontStyle: "italic" }}>sinal</em>.
        </div>
      </Reveal>
    </Beat>
  );
};

// Beat 7 — Closing (26-30s)
const Closing: React.FC = () => (
  <Beat caption="intaker-market-paper.vercel.app">
    <Reveal delay={4} duration={26}>
      <div
        style={{
          ...styles.mono,
          fontSize: 28,
          letterSpacing: "0.32em",
          color: COLORS.ink,
          textTransform: "uppercase",
        }}
      >
        Intaker
      </div>
    </Reveal>
    <Reveal delay={20} duration={28}>
      <div style={{ ...styles.display, fontSize: 92, marginTop: 50, lineHeight: 1.05 }}>
        Decision intelligence
        <br />
        <em style={{ color: COLORS.ash, fontStyle: "italic" }}>
          comportamental
        </em>
        <br />
        para early-career hiring.
      </div>
    </Reveal>
    <Reveal delay={66} duration={20}>
      <div
        style={{
          ...styles.body,
          fontSize: 34,
          marginTop: 60,
          opacity: 0.72,
          maxWidth: 800,
        }}
      >
        Leia o paper completo.
      </div>
    </Reveal>
  </Beat>
);

export const Teaser: React.FC = () => {
  return (
    <AbsoluteFill>
      <Paper />
      <Chrome />

      {/* Optional narration. Drop your file at public/audio/narration.mp3 */}
      <NarrationIfPresent />

      <Sequence from={BEATS.opener.from} durationInFrames={BEATS.opener.duration}>
        <Opener />
      </Sequence>
      <Sequence from={BEATS.apps.from} durationInFrames={BEATS.apps.duration}>
        <Apps />
      </Sequence>
      <Sequence from={BEATS.apo.from} durationInFrames={BEATS.apo.duration}>
        <Apo />
      </Sequence>
      <Sequence from={BEATS.genz.from} durationInFrames={BEATS.genz.duration}>
        <GenZBeat />
      </Sequence>
      <Sequence from={BEATS.turnover.from} durationInFrames={BEATS.turnover.duration}>
        <TurnoverBeat />
      </Sequence>
      <Sequence from={BEATS.diagnose.from} durationInFrames={BEATS.diagnose.duration}>
        <Diagnose />
      </Sequence>
      <Sequence from={BEATS.closing.from} durationInFrames={BEATS.closing.duration}>
        <Closing />
      </Sequence>
    </AbsoluteFill>
  );
};

// Audio plays only if the file exists. Remotion would error otherwise on first run.
const NarrationIfPresent: React.FC = () => {
  try {
    const src = staticFile("audio/narration.mp3");
    return <Audio src={src} />;
  } catch {
    return null;
  }
};
