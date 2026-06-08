import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

type Props = {
  to: number;
  suffix?: string;
  decimals?: number;
  delay?: number;
  duration?: number;
  brComma?: boolean;
};

export const CountUp: React.FC<Props> = ({
  to,
  suffix = "",
  decimals = 0,
  delay = 0,
  duration = 36,
  brComma = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const local = Math.max(0, frame - delay);
  const t = interpolate(local, [0, duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: (x) => 1 - Math.pow(1 - x, 3),
  });

  const value = to * t;
  let formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  if (brComma) formatted = formatted.replace(".", ",");

  // Subtle settle on arrival
  const settle = spring({
    frame: local - duration,
    fps,
    config: { damping: 18, stiffness: 80, mass: 0.8 },
    durationInFrames: 30,
  });
  const scale = interpolate(settle, [0, 1], [1.02, 1]);

  return (
    <span style={{ display: "inline-block", transform: `scale(${scale})`, fontVariantNumeric: "tabular-nums" }}>
      {formatted}
      {suffix}
    </span>
  );
};
