import useGetRecommendations from "@/hooks/useGetRecommendations";
import SectionPanel from "@/presentationals/home/SectionPanel";
import { useAppStore } from "@/store";

export default function RecommendationsContainer() {
  const { playlist, addToPlaylist } = useAppStore();
  const tags = playlist
    .map((song) => [
      ...song.genres.map((genre) => genre.name),
      ...song.tags?.map((tag) => tag.name) ?? [],
    ])
    .flat();
  const { data } = useGetRecommendations(tags);

  return data &&(
    <SectionPanel
          songs={data}
          moreLink="/"
          title="패캠을 위한 추천"
          onItemClick={(song) => addToPlaylist([song])}
        />
  )
}
