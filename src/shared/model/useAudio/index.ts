import { useEffect, useMemo, useState } from "react";

const useAudio = (url: string, loop: boolean = false) => {
  const audio = useMemo(() => new Audio(url), [url]);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    audio.loop = loop;
    playing ? audio.play() : audio.pause();
  }, [audio, loop, playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle] as const;
};

export default useAudio;
