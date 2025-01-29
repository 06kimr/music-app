import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useGetSongs from "./hooks/useGetSongs";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./presentationals/common/ErrorFallback";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-full bg-red-100">
        <h1>Hello WOrld</h1>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TemComponent />
        </ErrorBoundary>
      </div>
    </QueryClientProvider>
  );
}

function TemComponent() {
  const { data } = useGetSongs();
  return <div>{data ? JSON.stringify(data) : "loading..."}</div>;
}

export default App;
