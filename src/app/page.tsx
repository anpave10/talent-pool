import FilterBar from "@/components/FilterBar/FilterBar";
import MainComponent from "@/components/MainComponent/MainComponent";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <FilterBar />
      <MainComponent />
    </div>
  );
}
