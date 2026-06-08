import { COLORS } from "../constants";

export const Beat: React.FC<{
  eyebrow?: string;
  children: React.ReactNode;
  caption?: React.ReactNode;
}> = ({ eyebrow, children, caption }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 80px",
      }}
    >
      {eyebrow && (
        <div
          style={{
            fontFamily: "JetBrains Mono, ui-monospace, monospace",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: COLORS.ash,
            marginBottom: 40,
          }}
        >
          {eyebrow}
        </div>
      )}
      {children}
      {caption && (
        <div
          style={{
            marginTop: 40,
            fontFamily: "JetBrains Mono, ui-monospace, monospace",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: COLORS.ash,
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
};
