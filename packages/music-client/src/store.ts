import { create } from "zustand";

interface AppState {
  currentSong: Song | null;
  isPlayListExpanded: boolean;
  playlist: Song[];
}

interface Action {
  setCurrentSong: (song: Song) => void;
  togglePlayList: () => void;
  addToPlaylist: (song: Song) => void;
  removeFromPlaylist: (song: Song) => void;
}
export const useAppStore = create<AppState & Action>()((set) => ({
  currentSong: null,
  isPlayListExpanded: false,
  playlist: [],
  setCurrentSong: (song: Song) => set({ currentSong: song }),
  togglePlayList: () =>
    set((state) => ({ isPlayListExpanded: !state.isPlayListExpanded })),
  addToPlaylist: (song: Song) =>
    set((state) => ({ playlist: [...state.playlist, song] })),
  removeFromPlaylist: (song: Song) =>
    set((state) => ({
      playlist: state.playlist.filter((s) => s.id !== song.id),
    })),
}));
