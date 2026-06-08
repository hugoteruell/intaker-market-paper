import { interpolate, useCurrentFrame } from "remotion";

type Props = {
  delay?: number;
  duration?: number;
  yFrom?: number;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
};

export const Reveal: React.FC<Props> = ({
  delay = 0,
  duration = 24,
  yFrom = 30,
  children,
  as = "div",
  style,
}) => {
  const frame = useCurrentFrame();
  const local = Math.max(0, frame - delay);
  const t = interpolate(local, [0, duration], [0, 1], {
    extrapolateRight: "clamp",
    easing: (x) => 1 - Math.pow(1 - x, 3),
  });
  const opacity = t;
  const y = interpolate(t, [0, 1], [yFrom, 0]);

  const Tag = as as any;
  return (
    <Tag
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};
