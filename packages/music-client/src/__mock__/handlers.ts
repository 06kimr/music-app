import { graphql, http, HttpResponse, passthrough } from "msw";

export const handlers = [
  graphql.query("GetSongs", () => {
    return HttpResponse.json({
      data: {
        songs: [
          { id: 1, title: "Song 1", artist: "Artist 1", genre: "rock" },
          { id: 2, title: "Song 2", artist: "Artist 2", genre: "rock" },
          { id: 3, title: "Song 3", artist: "Artist 3", genre: "rock" },

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
  })
];
