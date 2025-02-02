import { Router } from "express";
import { getMusicRecommendations } from "../openai";

const musicRouter = Router();

musicRouter.get("/recommendations", async (req, res) => {
  const tags = req.query.tags as string;
  const recommendations: { artist: string; title: string; album: string }[] =
    await getMusicRecommendations(tags);
  const songs = recommendations.map((song, index) => ({
    id: index,
    title: song.title,
    album: {
      title: song.album,
      artist: {
        name: song.artist,
      },
      thumbnail: "https://picsum.photos/id/239/200/300",
    },
    genres: [],
    path: "http://localhost:4000/audio/nodens-field-song-6041.mp3",
  }));
  res.json(songs);
});

export default musicRouter;
