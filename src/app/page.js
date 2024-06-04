/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Nnexy13bkMl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-white to-blue-200">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Suo AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="https://www.safebition.com/chat" className="text-sm font-medium hover:underline underline-offset-4 text-gray-600" prefetch={false} target="_blank">
            立即体验
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 md:py-24 lg:py-32 lg:min-h-[80vh]">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <RocketIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">行业专家</h3>
                  <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                    超百G安全、养护行业知识数据训练而成，生成答案可靠有保障
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <ShieldIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">数据保密</h3>
                  <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                    使用强大的安全按措施：模型不会收集您的信息，绝不泄露隐私
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <BoltIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">长上下文</h3>
                  <p className="max-w-[300px] text-gray-500 dark:text-gray-400">
                    245K长上下文，超100轮对话记忆，助您快速理解复杂问题
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 min-h-[80vh]">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  亮点功能
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI 赋能养护、工程安全领域</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  只需要一个指令即可完成复杂任务：索飞 AI 懂你所言，答你所问，创你所需，解你所难，学你所教，致力于实现类人智慧的通用工程智能。
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  联网搜索：快速找到相关新闻和政策，不用担心信息过时
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  海里知识库：海量知识数据，助您快速解决专业问题
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
              className="mx-auto aspect-video rounded-xl shadow-lg w-full h-auto sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Safebition. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BoltIcon(props) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ShieldIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
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
  )
}