import Link from "next/link"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Ability from "@/components/ability"
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-white to-blue-200">
      <main className="flex-1">
        <Hero />
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
        <Ability></Ability>
        <Contact></Contact>
      </main>
      <Footer></Footer>
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