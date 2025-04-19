import Link from "next/link"
import { Upload, User, Info, LogOut } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 md:px-12 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/profile"
            className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <User className="w-5 h-5" />
            <span className="font-medium">Profile</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <Info className="w-5 h-5" />
              <span className="font-medium">About</span>
            </Link>

            <form action="/logout" method="post" className="inline-block">
              {/* This would be replaced with the actual CSRF token in a template */}
              <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />
              <button
                type="submit"
                className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors duration-300"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-20 md:py-32">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200">
            Share Your Vision
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Upload and transform your images with our powerful platform
          </p>
        </div>

        <Link
          href="/upload_image"
          className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-400 text-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-r from-yellow-300 to-yellow-500 group-hover:opacity-100"></span>
          <span className="relative flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Upload Image
          </span>
        </Link>

        {/* Feature highlights */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-indigo-400/30 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">High Quality</h3>
            <p className="text-white/70">Maintain the highest image quality with our advanced processing.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-purple-400/30 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
            <p className="text-white/70">Your images are encrypted and stored with the highest security standards.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-pink-400/30 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Sharing</h3>
            <p className="text-white/70">Share your images instantly with friends and colleagues.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto py-6 text-center text-white/60 text-sm">
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} ImageShare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
