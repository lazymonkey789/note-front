import Approute from "./component/Approute";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

function App() {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Approute />
            </QueryClientProvider>
        </div>
    );
}

export default App;
