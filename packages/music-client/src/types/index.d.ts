type Cn<T = unknown> = T & { className?: string };

type AudioStatus = "playing" | "paused" | "stopped";

interface Song {
  id: number;
  title: string;
  genres: Genre[];
  path: string;
  album: Omit<Album, "songs">;
}

interface Album {
  id: number;
  title: string;
  artist: Omit<Artist, "albums">;
  songs: Song[];
  thumbnail: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Artist {
  id: number;
  name: string;
  albums: Omit<Album, "artist">[];
}

interface Playlist {
  id: number;
  name: string;
  songs: Song[];
}
