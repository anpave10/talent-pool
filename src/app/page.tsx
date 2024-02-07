import FilterBar from "@/components/FilterBar/FilterBar";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FilterBar />
      <h1>Dashboard content</h1>
    </div>
  );
}
