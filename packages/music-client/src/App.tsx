import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import useGetSongs from "./hooks/useGetSongs";
import ErrorFallback from "./presentationals/common/ErrorFallback";
import RootLayout from "./presentationals/common/RootLayout";
import SliderPanel from "./presentationals/common/SliderPanel";
import SectionPanel from "./presentationals/home/SectionPanel";
import PlayerWrapper from "./presentationals/player/PlayerWrapper";

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
   <SectionPanel  songs={data ?? []} moreLink="/" title="패캠을 위한 믹스 & 추천"/>
  );
}

export default App;
