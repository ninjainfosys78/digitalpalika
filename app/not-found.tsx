import Link from 'next/link';
import { Header } from '@/components/header';
import Footer from '@/components/footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-24 bg-white">
        <p className="text-sm font-semibold text-[#003893] mb-2">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">Page not found</h1>
        <p className="text-gray-600 max-w-md mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded bg-[#003893] px-6 py-3 text-white font-medium hover:bg-[#002a6e] transition-colors"
        >
          Back to homepage
        </Link>
      </main>
      <Footer />
    </>
  );
}
