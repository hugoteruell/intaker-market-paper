import { Composition } from "remotion";
import { Teaser } from "./Composition";
import { DURATION, FPS, HEIGHT, WIDTH } from "./constants";

export const Root: React.FC = () => {
  return (
    <Composition
      id="Teaser"
      component={Teaser}
      durationInFrames={DURATION}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
