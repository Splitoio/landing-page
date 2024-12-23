export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-24 px-4">
      <div className="bg-[#111111] rounded-[24px] p-6 md:p-8 min-h-[220px] flex flex-col md:flex-row border border-zinc-800 overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col mb-6 md:mb-0">
          <h3 className="text-[24px] md:text-[28px] font-medium tracking-tight mb-2 text-zinc-300">
            Crypto Integration
          </h3>
          <p className="text-[#666666] text-[14px] md:text-[15px] leading-relaxed mt-10">
            Seamless cryptocurrency support for fast, secure transactions.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-end relative">
          <div className="grid grid-cols-3 gap-4 md:gap-6 w-fit translate-x-8 md:translate-x-4">
            <img
              src="/stellar.png"
              alt="Stellar"
              className="h-12 w-12 md:h-14 md:w-14 rotate-12 brightness-125"
            />
            <img
              src="/ethereum.avif"
              alt="Ethereum"
              className="h-12 w-12 md:h-14 md:w-14 -rotate-12 brightness-125"
            />
            <img
              src="/btc.svg"
              alt="Bitcoin"
              className="h-12 w-12 md:h-14 md:w-14 rotate-12 brightness-125"
            />
            <img
              src="/usdc.avif"
              alt="USDC"
              className="h-12 w-12 md:h-14 md:w-14 -rotate-12 brightness-125 md:translate-x-8"
            />
            <img
              src="/sol.svg"
              alt="Solana"
              className="h-12 w-12 md:h-14 md:w-14 rotate-12 brightness-125 md:translate-x-8"
            />
            <img
              src="/usdt.png"
              alt="USDT"
              className="h-12 w-12 md:h-14 md:w-14 -rotate-12 brightness-125 md:translate-x-8"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#111111] rounded-[24px] p-6 md:p-8 min-h-[220px] flex flex-col md:flex-row border border-zinc-800">
        <div className="w-full md:w-1/2 flex flex-col mb-6 md:mb-0">
          <h3 className="text-[24px] md:text-[28px] font-medium tracking-tight mb-2 text-zinc-300">
            Split & Track Expenditure
          </h3>
          <p className="text-[#666666] text-[14px] md:text-[15px] leading-relaxed">
            Seamlessly add your friends, split, and track your expenses.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="flex -space-x-4 md:-space-x-8">
            {[
              { src: "/pfp1.avif", name: "Alex" },
              { src: "/pfp2.avif", name: "Sam" },
              { src: "/pfp1.avif", name: "Rexi" },
            ].map((profile, index) => (
              <div key={index} className="group relative">
                <div
                  className={`
                  w-16 h-16 md:w-20 md:h-20 
                  rounded-full bg-white 
                  shadow-lg transform translate-z-0 
                  relative ${
                    index === 0 ? "z-30" : index === 1 ? "z-20" : "z-10"
                  }
                  ${index === 2 ? "opacity-20" : ""}
                `}
                >
                  <div className="absolute inset-[3px] rounded-full bg-black"></div>
                  <div className="absolute inset-[7px] rounded-full overflow-hidden">
                    <img
                      src={profile.src}
                      className="w-full h-full object-cover"
                      alt={`Profile ${profile.name}`}
                    />
                  </div>
                </div>

                {/* Tooltip */}
                <div
                  className="
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                  absolute -bottom-8 left-1/2 -translate-x-1/2
                  bg-[#838383] text-white
                  px-2 py-1 rounded-md text-sm
                  whitespace-nowrap
                "
                >
                  {profile.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
