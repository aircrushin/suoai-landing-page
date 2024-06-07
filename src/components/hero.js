import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-hero-bg bg-cover bg-center">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <img className="h-6 w-auto" src="/logo.svg" alt="Suo AI" />
          <span className="sr-only">Suo AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="https://www.safebition.com/chat"
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-600"
            prefetch={false}
            target="_blank"
          >
            立即体验
          </Link>
        </nav>
      </header>
      <section className="w-full py-24 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <p className="-mt-12 mb-16 text-gray-400">
                  索飞 AI 是基于 6 百亿 MoE
                  模型底座的工程安全认知大模型，致力于实现类人智慧的通用工程智能
                </p>
                <h1 className="text-4xl font-bold tracking-wide sm:text-6xl xl:text-6xl/none text-blue-500 text-center pb-4">
                  索飞 AI 专家系统
                </h1>
                <p className="text-gray-800 md:text-2xl lg:text-3xl text-xl font-semibold text-center lg:pb-16 pb-10">
                  全新体验，无限可能
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                <Link
                  href="https://www.safebition.com/chat"
                  className="md:p-8 p-6 bg-[#FDFEFE] rounded-xl transition-transform transform hover:scale-105 shadow-sm md:w-1/2 w-4/5 opacity-80"
                >
                  <div>
                    <h2 className="lg:text-2xl text-xl font-semibold text-blue-500 mb-4">
                      立即体验
                    </h2>
                    <p className="text-gray-500 mb-2">免费使用，信息一触即达</p>
                  </div>
                </Link>
                <div className="md:p-8 p-6 bg-[#FDFEFE] rounded-xl transition-transform transform hover:scale-105 shadow-sm md:w-1/2 w-4/5 opacity-80">
                  <h2 className="lg:text-2xl text-xl font-semibold text-blue-500 mb-4">
                    接入API
                  </h2>
                  <p className="text-gray-500 mb-2">
                    注册获百万 tokens，敬请期待
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
