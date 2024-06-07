export default function Ability() {
  return (
    <div className="bg-hero-bg bg-cover bg-center">
      <section className="py-12 md:py-24 lg:py-32 items-center justify-center">
        <div className="px-6 md:px-12 lg:px-20 w-full">
        <h1 className="text-center md:text-5xl text-3xl text-[#28374F] mb-20 tracking-wider font-semibold">索飞AI的亮点功能</h1>
          <div className="max-w-7xl mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-[#AF5FFF] to-[#2B80E5] bg-clip-text text-transparent">
                    AI 赋能养护、工程安全领域
                  </h2>
                  <p className="max-w-[600px] text-[#4B5568] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    只需要一个指令即可完成复杂任务：索飞 AI
                    懂你所言，答你所问，创你所需，解你所难，学你所教，致力于实现类人智慧的通用工程智能。
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    联网搜索：快速找到相关新闻和政策，不用担心信息过时
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    海量知识库：海量知识数据，助您快速解决专业问题
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    方案生成：根据您的需求，智能生成解决方案，并输出为Word、Excel、PDF等格式
                  </li>
                </ul>
              </div>
              <img
                src="/Plan.png"
                alt="Image"
                className="rounded-xl shadow-lg w-full h-full lg:order-last object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
