import About from "./components/About";
import HomeView from "./components/Home";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <main className="flex w-screen">
      <Sidebar />
        
      <div className="flex-1">
      <HomeView />
      <About /></div>
      </main>
      
    </div>
  );
}
