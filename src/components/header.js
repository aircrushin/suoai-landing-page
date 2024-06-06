import Link from "next/link"
export default function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <img className="h-6 w-auto" src="/logo.svg" alt="Suo AI" />
          <span className="sr-only">Suo AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="https://www.safebition.com/chat" className="text-sm font-medium hover:underline underline-offset-4 text-gray-600" prefetch={false} target="_blank">
            立即体验
          </Link>
        </nav>
      </header>
    )
}