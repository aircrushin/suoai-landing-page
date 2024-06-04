import Link from "next/link"

export default function Hero() {
    return (
        <section className="w-full py-24 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="flex justify-center">
            <div className=" flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <p className="-mt-10 mb-12 text-gray-400">索飞 AI 是基于 6 百亿 MoE 模型底座的工程安全认知大模型，致力于实现类人智慧的通用工程智能</p>
                <h1 className="text-4xl font-bold tracking-wide sm:text-6xl xl:text-7xl/none text-blue-400">
                  索飞 AI 专家系统
                </h1>
                <p className="max-w-[600px] text-gray-800 md:text-2xl dark:text-gray-800 lg:text-3xl text-xl">
                  全新体验，无限可能
                </p>
              </div>
              <div className="flex flex-col">
                <Link
                  href="https://www.safebition.com/chat"
                  className="mt-12 inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-gray-100 to-blue-300 px-8 font-medium text-blue-400 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-900/90 hover:scale-110 transition-all duration-300"
                  prefetch={false}
                >
                  立即体验
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}