import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24"> {/* was pt-20 */}
        <Home />
      </main>
    </div>
  );
}
