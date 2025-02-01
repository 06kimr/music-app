import { create } from "zustand";

interface AppState {
  currentSong: Song | null;
  isPlayListExpanded: boolean;
  playlist: Song[];
  likedSongs: Song[];
  playlists: Playlist[];
}

interface Action {
  setCurrentSong: (song: Song) => void;
  togglePlayList: () => void;
  addToPlaylist: (song: Song) => void;
  removeFromPlaylist: (song: Song) => void;
  setPlaylist: (playlist: Song[]) => void;
  likeSong: (song: Song) => void;
  unlikeSong: (song: Song) => void;
  addPlaylist: (song: Song) => void;
  addSongToPlaylist: (id: number, song: Song) => void;
}
export const useAppStore = create<AppState & Action>()((set) => ({
  currentSong: null,
  isPlayListExpanded: false,
  playlist: [],
  likedSongs: [],
  playlists: [],
  setCurrentSong: (song: Song) => set({ currentSong: song }),
  togglePlayList: () =>
    set((state) => ({ isPlayListExpanded: !state.isPlayListExpanded })),
  addToPlaylist: (song: Song) =>
    set((state) => ({ playlist: [...state.playlist, song] })),
  removeFromPlaylist: (song: Song) =>
    set((state) => ({
      playlist: state.playlist.filter((s) => s.id !== song.id),
    })),
  setPlaylist: (playlist: Song[]) => set({ playlist }),
  likeSong: (song: Song) =>
    set((state) => ({ likedSongs: [...state.likedSongs, song] })),
  unlikeSong: (song: Song) =>
    set((state) => ({
      likedSongs: state.likedSongs.filter((s) => s.id !== song.id),
    })),
  addPlaylist: (song: Song) =>
    set((state) => ({
      playlists: [
        ...state.playlists,
        { id: Date.now(), name: song.title, songs: [song] },
      ],
    })),
  addSongToPlaylist: (id: number, song: Song) =>
    set((state) => ({
      playlists: state.playlists.map((playlist) =>
        playlist.id === id
          ? {
              ...playlist,
              songs: [...playlist.songs, song],
            }
          : playlist
      ),
    })),
}));
