export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h1 className="text-center md:text-5xl text-3xl text-[#28374F] mb-20 tracking-wider font-semibold">
          为什么选择索飞AI
        </h1>
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          <img
            src="/features/fea1.png"
            className="hover:scale-105 transition-transform transform w-full h-full object-cover"
          />
          <img
            src="/features/fea2.png"
            className="hover:scale-105 transition-transform transform w-full h-full object-cover"
          />
          <img
            src="/features/fea3.png"
            className="hover:scale-105 transition-transform transform w-full h-full object-cover"
          />
          <img
            src="/features/fea4.png"
            className="hover:scale-105 transition-transform transform w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
