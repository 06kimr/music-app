import { graphql, HttpResponse } from "msw";

export const handlers = [
  graphql.query("GetSongs", () => {
    return HttpResponse.json({
      data: {
        songs: [{ id: 1, title: "Song 1", artist: "Artist 1", genre: "rock" },
          { id: 2, title: "Song 2", artist: "Artist 2", genre: "rock" }
        ],
      },
    });
    // return HttpResponse.json({
    //   errors: [{
    //     message: "server error"
    //   }]
    // })
  }),
];
