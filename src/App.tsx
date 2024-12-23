import Header from "./components/Header";
import WaitlistForm from "./components/WaitlistForm";
import FeatureCards from "./components/FeatureCards";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen bg-[#101012] text-white px-4 py-8 relative overflow-hidden">
      <div
        className="absolute -top-24 -right-72 w-[700px] h-[700px] pointer-events-none opacity-50"
        style={{
          backgroundImage: 'url("/bg.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        <Header />
        <WaitlistForm />
        <FeatureCards />
        <FAQ />
        <div className="text-center text-zinc-400 text-sm">© 2024 Splito</div>
      </div>
    </div>
  );
}

export default App;
