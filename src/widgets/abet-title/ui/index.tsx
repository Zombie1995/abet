import React, { useCallback, useState } from "react";
import abetMusic from "shared/assets/music/abet.mp3";
import useAudio from "shared/model/useAudio/useAudio";
import { Letter } from "./letter";

export const AbetTitle = React.memo(() => {
  const [, toggle] = useAudio(abetMusic, true);
  const [musicState, setMusicState] = useState(false);

  const handleChangeMusicState = useCallback(() => {
    toggle();
    setMusicState(!musicState);
  }, [musicState, toggle]);

  return (
    <button
      className="flex h-[450px] items-center -translate-y-8"
      onClick={handleChangeMusicState}
    >
      {musicState ? (
        <>
          <Letter letter="А" delay={0.3} />
          <Letter letter="Б" delay={0.1} />
          <Letter letter="Е" delay={0.7} />
          <Letter letter="Т" delay={0.5} />
        </>
      ) : (
        <p className="lg:text-[500px] md:text-[300px] sm:text-[200px] text-[100px] font-medium tracking-wider">
          АБЕТ
        </p>
      )}
    </button>
  );
});
