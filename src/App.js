import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query'
import { router } from "./router/router";
import "./App.css";
const queryClient = new QueryClient()

function App() {
  return ( <QueryClientProvider client={queryClient}><RouterProvider router={router} /></QueryClientProvider>);
}

export default App;
