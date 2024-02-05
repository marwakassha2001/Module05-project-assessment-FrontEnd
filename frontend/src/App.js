import "./App.css";
import ProductCard from "./Component/ProductCard/ProductCard";
import Footer from "./Layouts/Footer/Footer";
import Navbar from "./Layouts/Navbar/Navbar";
import Products from "./Pages/Products/Products";
import AppRouter from "./Routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
        <QueryClientProvider client={queryClient}>
         <Navbar/>
        <Products/>
         <Footer/>
        </QueryClientProvider>
    </div>
  );
}

export default App;
