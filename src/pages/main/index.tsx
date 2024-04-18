import { AbetSongButton } from "widgets/abet-song-button";
import { AbetTitle } from "widgets/abet-title";

export default function Main() {
  return (
    <div className="relative">
      <div className="absolute top-2 left-2">
        <AbetSongButton />
      </div>
      <AbetTitle />
    </div>
  );
}
