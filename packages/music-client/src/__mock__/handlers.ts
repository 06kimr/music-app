import { graphql, http, HttpResponse, passthrough } from "msw";

export const handlers = [
  graphql.query("GetSongs", () => {
    return HttpResponse.json<{ data: { songs: Song[] } }>({
      data: {
        songs: [
          {
            id: 1,
            title: "Song 1",
            album: {
              id: 1,
              title: "Album 1",
              artist: { id: 1, name: "Artist 1" },
              thumbnail: "https://picsum.photos/id/236/200/300",
            },
            genres: [{ id: 1, name: "rock" }],
            path: "http://localhost:4000/audio/nodens-field-song-6041.mp3",
          },
          {
            id: 2,
            title: "Song 2",
            album: {
              id: 2,
              title: "Album 2",
              artist: { id: 2, name: "Artist 2" },
              thumbnail: "https://picsum.photos/id/237/200/300",
            },
            genres: [{ id: 1, name: "rock" }],
            path: "http://localhost:4000/audio/nodens-field-song-6041.mp3",
          },
          {
            id: 3,
            title: "Song 3",
            album: {
              id: 3,
              title: "Album 3",
              artist: { id: 3, name: "Artist 3" },
              thumbnail: "https://picsum.photos/id/238/200/300",
            },
            genres: [{ id: 1, name: "rock" }],
            path: "http://localhost:4000/audio/nodens-field-song-6041.mp3",
          },
          {
            id: 4,
            title: "Song 4",
            album: {
              id: 4,
              title: "Album 4",
              artist: { id: 4, name: "Artist 4" },
              thumbnail: "https://picsum.photos/id/239/200/300",
            },
            genres: [{ id: 1, name: "rock" }],
            path: "http://localhost:4000/audio/nodens-field-song-6041.mp3",
          },
          {
            id: 5,
            title: "Song 5",
            album: {
              id: 5,
              title: "Album 5",
              artist: { id: 5, name: "Artist 5" },
              thumbnail: "https://picsum.photos/id/240/200/300",
            },
            genres: [{ id: 1, name: "rock" }],
            path: "http://localhost:4000/audio/nodens-field-song-6041.mp3",
          },
        ],
      },
    });
    // return HttpResponse.json({
    //   errors: [{
    //     message: "server error"
    //   }]
    // })
  }),
  http.get(/\/audio\/.*/, () => {
    return passthrough();
  }),
];
