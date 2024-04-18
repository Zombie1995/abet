import { songStore } from "entities/song/model";
import { observer } from "mobx-react-lite";
import pauseCircle from "shared/assets/icons/pause_circle_outline.svg";
import playCircle from "shared/assets/icons/play_circle.svg";
import abetMusic from "shared/assets/music/abet.mp3";
import useAudio from "shared/model/useAudio/useAudio";

export const AbetSongButton = observer(() => {
  const [, toggle] = useAudio(abetMusic);
  return (
    <>
      <button
        className="rounded-full"
        onClick={() => {
          toggle();
          songStore.setAbetIsPlaying(!songStore.abetIsPlaying);
        }}
      >
        {songStore.abetIsPlaying ? (
          <img src={pauseCircle} width={80} height={80} />
        ) : (
          <img src={playCircle} width={80} height={80} />
        )}
      </button>
    </>
  );
});
