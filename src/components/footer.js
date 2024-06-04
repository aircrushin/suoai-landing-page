import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Safebition AI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            服务条款
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            隐私政策
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            联系我们
          </Link>
        </nav>
      </footer>
    )
}