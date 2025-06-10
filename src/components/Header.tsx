export default function Header() {
  return (
    <div className="text-center mb-10">
      <div className="flex justify-center mb-4">
        <img src="/logo.svg" alt="Splito" className="h-14 mt-5" />
      </div>

      <div className="inline-block bg-zinc-900/50 text-sm text-gray-300 px-2 rounded-full mb-6 border border-zinc-800 uppercase">
        <span className="inline-block w-2 h-2 rounded-full font-bold bg-red-700 mr-2 animate-glow" />
        Rolling out in 2025, Stay tuned
      </div>

      <h1 className="text-5xl  tracking-tight">Get early access</h1>
      <p className="text-zinc-500 text-l mt-2">
        Simplify shared expenses, settle on-chain effortlessly!
      </p>
    </div>
  );
}
