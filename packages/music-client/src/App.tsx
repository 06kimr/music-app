import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import MixMakerContainer from "./containers/home/MixMakerContainer";
import PlaylistContainer from "./containers/home/PlaylistContainer";
import AudioContainer from "./containers/player/AudioContainer";
import useGetSongs from "./hooks/useGetSongs";
import ErrorFallback from "./presentationals/common/ErrorFallback";
import RootLayout from "./presentationals/common/RootLayout";
import SliderPanel from "./presentationals/common/SliderPanel";
import SectionPanel from "./presentationals/home/SectionPanel";
import PlayerWrapper from "./presentationals/player/PlayerWrapper";
import { useAppStore } from "./store";

const queryClient = new QueryClient();

function App() {
  const { currentSong, isPlayListExpanded } =
    useAppStore();

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TemComponent />
        <MixMakerContainer />
        </ErrorBoundary>
        <SliderPanel open={isPlayListExpanded}>
          <PlaylistContainer />
        </SliderPanel>
      </RootLayout>
      <PlayerWrapper>
        <AudioContainer src={currentSong?.path} />
      </PlayerWrapper>
    </QueryClientProvider>
  );
}

function TemComponent() {
  const { data } = useGetSongs();
  const { addToPlaylist } = useAppStore();
  return (
    <SectionPanel
      songs={data ?? []}
      moreLink="/"
      title="패캠을 위한 믹스 & 추천"
      onItemClick={(song) => addToPlaylist([song])}
    />
  );
}

export default App;
