import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useGetHealthQuery } from "./features/api/apiSlice";

export default function App() {
  const { data } = useGetHealthQuery(); // ping backend
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">MiniShop</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <a className="hover:underline">Cart</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-4 text-sm text-gray-600">
          Backend status: {data ? " Connected" : "…"}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
