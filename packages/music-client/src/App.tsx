import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useGetSongs from "./hooks/useGetSongs";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./presentationals/common/ErrorFallback";
import RootLayout from "./presentationals/common/RootLayout";
import PlayerWrapper from "./presentationals/player/PlayerWrapper";
import SongCard from "./presentationals/common/SongCard";
import SliderPanel from "./presentationals/common/SliderPanel";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <button onClick={handleOpen}>Open</button>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TemComponent />
        </ErrorBoundary>
        <SliderPanel open={open} onClose={handleClose}>
          <div className="w-[300px]">
              <h1>재생목록</h1>
          </div>
        </SliderPanel>
      </RootLayout>
      <PlayerWrapper />
    </QueryClientProvider>
  );
}

function TemComponent() {
  const { data } = useGetSongs();
  return (
    <div className="flex gap-x-20">
      {data?.map((song) => (
        <SongCard key={song.id} variant="vertical">
          <SongCard.Image
            src={"https://placehold.co/150"}
            alt={song.title}
          />
          <SongCard.Content>
            <SongCard.Title>{song.title}</SongCard.Title>
            <SongCard.Description>{song.artist}</SongCard.Description>
          </SongCard.Content>
        </SongCard>
      ))}
    </div>
  );
}

export default App;
