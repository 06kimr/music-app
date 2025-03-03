import useAudioPlayer from "@/hooks/player/useAudioPlayer";
import PlayButton from "@/presentationals/player/PlayButton";
import ProgressBar from "./ProgressBar";
import VolumeController from "./VolumeController";
import PlayListButton from "@/presentationals/player/PlayListButton";
import { useAppStore } from "@/store";

interface Props {
  src?: string;
}

export default function AudioContainer({ src }: Props) {
  const {
    audioRef,
    play,
    pause,
    status,
    duration,
    currentTime,
    volume,
    changeCurrentTime,
    changeVolume,
  } = useAudioPlayer();

  const { togglePlayList } = useAppStore();

  return (
    <div className="flex items-end justify-center pt-18 pb-22">
      <div className="flex flex-col gap-y-16">
        <div className="flex gap-x-20 w-[464px] justify-center">
          <button>shuffle</button>
          <button>previos</button>
          <PlayButton
            status={status}
            onToggle={status === "playing" ? pause : play}
          />
          <button>next</button>
          <button>repeat</button>
        </div>
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onChange={(seconds) => changeCurrentTime(seconds)}
        />
      </div>
      <div className="flex ml-61">
        <PlayListButton className="mr-10" onClick={() => togglePlayList()} />
        <VolumeController volume={volume} onChange={(v) => changeVolume(v)} />
      </div>
      <audio ref={audioRef} src={src} />
    </div>
  );
}
