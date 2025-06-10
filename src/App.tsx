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
        
        {/* Open App Button */}
        {/* <div className="flex justify-center mt-1 mb-6">
          <a 
            href="https://app.splito.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#c01040] hover:bg-[#ff235e] text-white px-6 py-3 rounded-lg font-semibold 
              transition-all duration-300 ease-out
              shadow-[0_0_30px_rgba(255,0,82,0.15)]
              hover:shadow-[0_0_40px_rgba(255,0,82,0.35)]
              hover:scale-105
              hover:translate-y-[-2px]
              active:scale-95
              flex items-center gap-2"
          >
            <span>Open Our App</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div> */}
        
        <FeatureCards />
        <FAQ />
        <div className="text-center text-zinc-400 text-sm">© 2025 Splito</div>
      </div>
    </div>
  );
}

export default App;
