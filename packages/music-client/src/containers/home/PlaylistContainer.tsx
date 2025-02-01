import PlaylistItem from "@/presentationals/home/PlaylistItem";
import { useAppStore } from "@/store";

export default function PlaylistContainer() {
  const {
    playlist,
    playlists,
    setCurrentSong,
    removeFromPlaylist,
    addPlaylist,
    addSongToPlaylist,
    likeSong,
  } = useAppStore();

  return (
    <div className="flex flex-col h-full">
      <h1 className="py-20 font-medium px-30 text-gray200 text-24 w-[522px]">
        재생목록
      </h1>
      <ul className="flex flex-col flex-1">
        {playlist.length === 0 ? (
          <li className="flex items-center justify-center h-full">
            재생목록이 없습니다.
          </li>
        ) : (
          playlist.map((song) => (
            <PlaylistItem
              playlists={playlists}
              key={song.id}
              song={song}
              onClick={(song) => {
                setCurrentSong(song);
              }}
              onRemoveFromPlaylist={(song) => removeFromPlaylist(song)}
              onAddPlaylist={addPlaylist}
              onAddSongToPlaylist={addSongToPlaylist}
              onLikeSong={likeSong}
            />
          ))
        )}
      </ul>
    </div>
  );
}
