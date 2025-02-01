import PlaylistItem from "@/presentationals/home/PlaylistItem";
import { useAppStore } from "@/store";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

export default function PlaylistContainer() {
  const {
    playlist,
    playlists,
    setCurrentSong,
    removeFromPlaylist,
    addPlaylist,
    addSongToPlaylist,
    likeSong,
    setPlaylist,
  } = useAppStore();

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(playlist);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);

    setPlaylist(items);
  };

  return (
    <div className="flex flex-col h-full">
      <h1 className="py-20 font-medium px-30 text-gray200 text-24 w-[522px]">
        재생목록
      </h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="playlist_1">
          {(provided) => (
            <ul
              className="flex flex-col flex-1"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {playlist.length === 0 ? (
                <li className="flex items-center justify-center h-full">
                  재생목록이 없습니다.
                </li>
              ) : (
                playlist.map((song, index) => (
                  <Draggable
                    key={song.id}
                    draggableId={`${song.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <PlaylistItem
                          playlists={playlists}
                          key={song.id}
                          song={song}
                          onClick={(song) => {
                            setCurrentSong(song);
                          }}
                          onRemoveFromPlaylist={(song) =>
                            removeFromPlaylist(song)
                          }
                          onAddPlaylist={addPlaylist}
                          onAddSongToPlaylist={addSongToPlaylist}
                          onLikeSong={likeSong}
                        />
                      </li>
                    )}
                  </Draggable>
                ))
              )}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
