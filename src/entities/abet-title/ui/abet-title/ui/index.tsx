import { abetTitleStore } from "entities/abet-title/model";
import { observer } from "mobx-react-lite";
import { useCallback, useState } from "react";
import abetMusic from "shared/assets/music/abet.mp3";
import useAudio from "shared/model/useAudio";
import { Letter } from "./letter";

export const AbetTitle = observer(() => {
  const [, toggle] = useAudio(abetMusic, true);
  const [musicState, setMusicState] = useState(false);

  const handleChangeMusicState = useCallback(() => {
    toggle();
    setMusicState(!musicState);
  }, [musicState, toggle]);

  return (
    <div
      className={`${
        abetTitleStore.isStartScreen
          ? "top-1/2 -translate-y-1/2"
          : "md:top-4 md:scale-[0.08] sm:top-0 sm:scale-[0.15] -top-4 scale-[0.25]"
      } z-[1000] fixed left-1/2 -translate-x-1/2 transition-all duration-700 origin-top`}
    >
      <button
        className="flex h-[450px] items-center -translate-y-8"
        onClick={handleChangeMusicState}
      >
        <Letter letter="А" delay={0.3} active={musicState} />
        <Letter letter="Б" delay={0.1} active={musicState} />
        <Letter letter="Е" delay={0.7} active={musicState} />
        <Letter letter="Т" delay={0.5} active={musicState} />
      </button>
    </div>
  );
});
