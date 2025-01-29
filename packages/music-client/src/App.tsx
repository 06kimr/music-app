import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useGetSongs from "./hooks/useGetSongs";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TemComponent />
    </QueryClientProvider>
  );
}

function TemComponent() {
  const { data } = useGetSongs();
  return (
    <div className="flex w-full text-blue-500 bg-red-500">
      {data ? JSON.stringify(data) : "loading..."}
    </div>
  );
}

export default App;
