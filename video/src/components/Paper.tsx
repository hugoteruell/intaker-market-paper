import { AbsoluteFill } from "remotion";
import { COLORS } from "../constants";

export const Paper: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.paper }}>
      {children}
      {/* Subtle paper grain */}
      <AbsoluteFill
        style={{
          opacity: 0.05,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
        }}
      />
      {/* Top hairline */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: 80,
          right: 80,
          height: 1,
          background: COLORS.ruleStrong,
        }}
      />
      {/* Bottom hairline */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 80,
          right: 80,
          height: 1,
          background: COLORS.ruleStrong,
        }}
      />
    </AbsoluteFill>
  );
};
