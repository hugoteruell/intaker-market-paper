export const FPS = 30;
export const DURATION = 30 * FPS; // 900 frames
export const WIDTH = 1080;
export const HEIGHT = 1920;

export const COLORS = {
  paper: "#f3efe6",
  ink: "#15130f",
  ash: "#6b6760",
  rule: "rgba(21, 19, 15, 0.14)",
  ruleStrong: "rgba(21, 19, 15, 0.32)",
  accent: "#a8412a",
};

// Beat timings in frames. 30fps.
// Beat 1: 0-120 (0-4s)    opener
// Beat 2: 120-240 (4-8s)  400 applications
// Beat 3: 240-360 (8-12s) 36 candidatos
// Beat 4: 360-480 (12-16s) 22% Gen Z
// Beat 5: 480-630 (16-21s) 33% turnover
// Beat 6: 630-780 (21-26s) diagnostico
// Beat 7: 780-900 (26-30s) closing INTAKER
export const BEATS = {
  opener: { from: 0, duration: 120 },
  apps: { from: 120, duration: 120 },
  apo: { from: 240, duration: 120 },
  genz: { from: 360, duration: 120 },
  turnover: { from: 480, duration: 150 },
  diagnose: { from: 630, duration: 150 },
  closing: { from: 780, duration: 120 },
} as const;
