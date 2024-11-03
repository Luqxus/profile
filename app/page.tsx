import HomeView from "./components/Home";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <main className="flex w-screen">
      <Sidebar />
        
      <HomeView />
      </main>
      
    </div>
  );
}
