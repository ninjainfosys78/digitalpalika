import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ni-ink text-ni-paper flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-8xl sm:text-9xl font-heading font-bold mb-6 text-ni-accent">404</h1>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Page Not Found</h2>
        <p className="text-xl py-8 text-ni-paper/80 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ni-accent text-white text-base font-semibold rounded-lg hover:bg-ni-accent-2 transition-all hover:gap-3 group"
        >
          Back to home
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </main>
  )
}
