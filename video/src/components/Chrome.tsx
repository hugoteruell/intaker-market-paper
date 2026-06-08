import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, DURATION } from "../constants";

export const Chrome: React.FC = () => {
  const frame = useCurrentFrame();

  // Progress bar across the whole video
  const progress = interpolate(frame, [0, DURATION], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <>
      {/* Top masthead */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "JetBrains Mono, ui-monospace, monospace",
          fontSize: 18,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: COLORS.ash,
        }}
      >
        <span style={{ color: COLORS.ink }}>Intaker</span>
        <span>Market Paper · 2026</span>
      </div>

      {/* Bottom meta */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "JetBrains Mono, ui-monospace, monospace",
          fontSize: 16,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: COLORS.ash,
        }}
      >
        <span>USA · Early-Career Hiring</span>
        <span>Vol. 01</span>
      </div>

      {/* Progress bar at top */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 80,
          right: 80,
          height: 1,
          background: COLORS.rule,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress * 100}%`,
            background: COLORS.ink,
          }}
        />
      </div>
    </>
  );
};
