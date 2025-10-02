"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function HomePage() {
  const [emailCopied, setEmailCopied] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("obrye@obrye.global")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-[999999] bg-gradient-to-b from-black/80 via-black/55 to-transparent backdrop-blur-xl border-0 shadow-none ring-0 outline-none will-change-auto">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <img src="/new-obr-logo.png" alt="OBR Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              <h1 className="text-xs sm:text-sm lg:text-xl font-bold text-white">Ole Bent Rye</h1>
            </div>

            <div className="ml-auto hidden lg:flex lg:items-center lg:gap-6">
              {/* CHANGE: Wrapped About Us button with link to /about page */}
              {/* CHANGE: Added lg:px-0 to About Us button for desktop */}
              <a href="/about">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-white px-6 text-xl lg:mx-0 lg:mr-0 lg:ml-0 lg:px-0"
                >
                  About Us
                </Button>
              </a>
              {/* CHANGE: Added lg:px-0 to Contact button for desktop */}
              <a href="/contact">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20 hover:text-white hover:scale-105 transition-all duration-200 px-6 text-xl lg:mx-0 lg:mr-0 lg:ml-0 lg:px-0"
                >
                  Contact
                </Button>
              </a>
              <div className="flex items-center gap-4 lg:ml-0">
                <a
                  href="https://www.linkedin.com/in/bentrye/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 lg:mx-0 lg:mr-0 lg:ml-0"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/olebentrye/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 lg:mx-0 lg:mr-0 lg:ml-0"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <a href="/contact">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20 hover:text-white hover:scale-105 transition-all duration-200 px-3 py-2 text-base"
                >
                  Contact
                </Button>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4">
              {/* removed border-t border-white/20 from mobile menu */}
              <div className="flex flex-col space-y-3">
                {/* CHANGE: Wrapped mobile About Us button with link to /about page */}
                <a href="/about">
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 hover:text-white text-left justify-start px-4 py-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Button>
                </a>
                <div className="flex gap-3 px-4 py-2">
                  <a
                    href="https://www.linkedin.com/in/bentrye/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/olebentrye/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      {/* CHANGE: Added -mt-px to overlap hero by 1px and eliminate seam with transparent nav */}
      {/* CHANGE: Reduced hero section height on mobile from min-h-screen to h-[60vh] sm:min-h-screen */}
      <section className="relative overflow-hidden hero-section h-[60vh] sm:min-h-screen border-0 border-t-0 shadow-none ring-0 outline-none -mt-px">
        {/* CHANGE: Added proper height and z-index to video */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner%20v2%20copy-1438R1U7kqLh5wXgir6vkZ4hWiOFtV.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* CHANGE: Increased hero video overlay darkness from bg-black/35 to bg-black/45 for better text readability */}
        <div className="absolute inset-0 bg-black/45 z-10"></div>

        <div className="absolute inset-0 z-30 flex items-end justify-center pt-8 sm:pt-0 pb-8 sm:pb-32">
          {/* CHANGE: Reduced horizontal padding for mobile */}
          <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
            <div className="text-white space-y-2 sm:space-y-8 text-center">
              {/* CHANGE: Reduced text size on mobile */}
              {/* CHANGE: Completely removed mobile bottom margin from mb-1 to mb-0 to bring text elements closer together */}
              <p className="text-sm sm:text-base lg:text-xl font-semibold text-cyan-300 tracking-widest uppercase mb-0 sm:mb-4">
                INSIGHT FROM SILICON VALLEY
              </p>

              {/* CHANGE: Significantly reduced hero heading size on mobile */}
              {/* CHANGE: Increased mobile font size from text-3xl to text-4xl for better prominence */}
              {/* CHANGE: Restructured hero title to display on 3 lines on mobile */}
              {/* CHANGE: Increased mobile top margin from mt-4 to mt-6 to move title slightly down */}
              {/* CHANGE: Updated hero title text to match user's exact request */}
              <h1 className="text-3xl sm:text-3xl lg:text-6xl font-black mb-2 sm:mb-8 font-sans leading-tight tracking-tight text-white drop-shadow-2xl mt-6 sm:mt-0">
                <span className="block sm:hidden">The Secret to Building</span>
                <span className="block sm:hidden">the World's Most</span>
                <span className="block sm:hidden">Valuable Company</span>
                <span className="hidden sm:block">The Secret to Building the World's</span>
                <span className="hidden sm:block">Most Valuable Company</span>
              </h1>

              {/* CHANGE: Reduced subtitle size on mobile */}
              {/* CHANGE: Increased mobile font size from text-lg to text-xl for "Unlock the blind spot" text */}
              {/* CHANGE: Restructured hero subtitle to display on 2 lines on mobile */}
              <p className="text-2xl sm:text-xl lg:text-3xl text-white mb-6 sm:mb-12 leading-tight sm:leading-relaxed max-w-4xl mx-auto font-light tracking-wide drop-shadow-lg mt-8 sm:mt-0">
                <span className="block sm:inline">
                  Unlock the <span className="font-bold">blind spot</span>
                </span>
                <span className="block sm:inline"> slowing your global success.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* CHANGE: Reduced button size on mobile */}
                {/* CHANGE: Added mt-4 to move button slightly down and wrapped in link to /contact */}
                <a href="/contact" className="mt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 hover:from-slate-900 hover:via-slate-800 hover:to-slate-700 text-white border-0 shadow-2xl text-base sm:text-lg px-6 py-3 sm:px-12 sm:py-6 rounded-full font-semibold tracking-wide transform hover:scale-105 transition-all duration-300"
                  >
                    Book Free Strategy Call
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Cisco Experience Section */}
      {/* CHANGE: Reduced vertical padding on mobile */}
      <section className="py-6 sm:py-12 bg-gradient-to-b from-slate-50 via-gray-50 to-slate-100 text-slate-900">
        {/* CHANGE: Reduced horizontal padding for mobile */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="w-full flex justify-center">
            <div className="max-w-4xl text-center">
              <div className="text-center py-2 sm:py-4">
                {/* CHANGE: Reduced heading size on mobile from text-lg to text-xl */}
                {/* CHANGE: Increased mobile font size from text-xl to text-2xl for "The hidden force behind global success?" */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-8 text-slate-900 drop-shadow-xl tracking-tight">
                  <span className="block text-slate-700 text-[26px] sm:text-2xl lg:text-4xl">
                    <span className="block sm:inline">The hidden force</span>
                    <span className="block sm:inline"> behind global success?</span>
                  </span>
                  {/* CHANGE: Increased mobile font size from text-xl to text-2xl to be slightly larger than the first sentence */}
                  {/* CHANGE: Added leading-relaxed to provide proper line-height for descenders */}
                  <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent text-[32px] sm:text-2xl lg:text-5xl lg:mt-3 leading-relaxed">
                    Cultural Intelligence.
                  </span>
                </h2>
              </div>

              {/* CHANGE: Reduced subtitle size on mobile */}
              {/* CHANGE: Increased mobile font size from text-base to text-lg for subtitle */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight mb-12 text-slate-800 drop-shadow-lg tracking-tight">
                <span className="text-slate-600">
                  <div className="inline-block bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/70 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-2xl border-2 border-white/60 hover:shadow-3xl transition-all duration-300">
                    <div className="font-serif">
                      <span className="block text-2xl sm:text-xl lg:text-[28px]">Mastering Cultural Dynamics</span>
                      <span className="block text-xl sm:text-xl lg:text-2xl">–from Europe and Asia to the USA,</span>
                      <span className="block text-xl sm:text-xl lg:text-2xl">Silicon Valley and the age of AI.</span>
                    </div>
                  </div>
                </span>
              </p>

              <div className="flex flex-col gap-8 mb-12">
                <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-4 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="text-center">
                    {/* CHANGE: Significantly reduced text size on mobile */}
                    {/* CHANGE: Increased mobile font size from text-xl to text-2xl for better readability */}
                    <div className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2">
                      <span className="text-red-600 font-bold">70%</span>
                      <span className="text-slate-900 font-bold"> of international deals </span>
                      <span className="text-red-600 font-bold">fail</span>
                    </div>
                    {/* CHANGE: Reduced text size on mobile */}
                    <div className="text-[20px] sm:text-lg lg:text-2xl text-slate-700 mt-4">
                      —Due to <span className="font-bold text-slate-900">cultural</span> misunderstandings.
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-4 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="text-center">
                    {/* CHANGE: Significantly reduced text size on mobile */}
                    {/* CHANGE: Increased mobile font size from text-lg to text-xl for "80% of global teams underperform" */}
                    <div className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2">
                      <span className="text-red-600 font-bold">80%</span>
                      <span className="text-slate-900 font-bold"> of global teams </span>
                      <span className="text-red-600 font-bold">underperform</span>
                    </div>
                    {/* CHANGE: Reduced text size on mobile */}
                    <div className="text-[20px] sm:text-lg lg:text-2xl text-slate-700 mt-4">
                      —They fail to adapt across <span className="font-bold text-slate-900">cultures</span>.
                    </div>
                  </div>
                </div>
              </div>

              {/* CHANGE: Significantly reduced text size on mobile */}
              <p className="text-base sm:text-2xl lg:text-4xl font-black tracking-tight leading-tight mb-8 text-slate-700">
                <span className="block text-center">
                  <span className="text-xl sm:text-2xl lg:text-4xl font-black tracking-tight leading-tight bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent drop-shadow-lg">
                    Cultural barriers kill deals and teams.
                  </span>
                </span>
                <span className="block mt-4 text-center">
                  <span className="text-xl sm:text-2xl lg:text-4xl font-black tracking-tight leading-tight bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent drop-shadow-lg">
                    Cultural intelligence builds trust and success.
                  </span>
                </span>
              </p>

              {/* CHANGE: Removed empty box that was under "Cultural intelligence builds trust and success" text */}

              {/* CHANGE: Restructured "OBR's Three Proven Paths" section with single parent wrapper */}
              <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md ring-2 ring-white/20 shadow-xl p-6 sm:p-8 md:p-10 space-y-6 md:space-y-8">
                {/* CHANGE: Moved heading inside wrapper with normalized spacing */}
                {/* CHANGE: Added mb-3 md:mb-4 to create subtle spacing between heading and cards */}
                <h3 className="text-slate-900 mt-0 mb-3 md:mb-4 text-center">
                  <span className="block sm:inline text-[20px] sm:text-xl lg:text-2xl font-bold">
                    OBR's Three Proven Paths:
                  </span>
                  <span className="block sm:inline text-lg sm:text-xl lg:text-2xl font-bold">
                    {" "}
                    Turn Culture into Your Competitive Edge
                  </span>
                </h3>

                {/* CHANGE: Moved 3-card grid inside wrapper with responsive grid classes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                        <img
                          src="/professional-seminar-presentation-with-speaker-and.jpg"
                          alt="Seminar illustration"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <h4 className="text-[28px] sm:text-[24px] md:text-xl font-bold text-blue-700 mb-3">Seminars</h4>
                      <p className="text-slate-700 text-base sm:text-sm leading-relaxed">
                        High-energy, practical sessions that give leaders and teams the tools to navigate culture with
                        confidence.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 border-2 border-purple-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                        <img
                          src="/one-on-one-coaching-session-with-mentor-and-mentee.jpg"
                          alt="Coaching illustration"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <h4 className="text-[28px] sm:text-[24px] md:text-xl font-bold text-purple-700 mb-3">Coaching</h4>
                      <p className="text-slate-700 text-base sm:text-sm leading-relaxed">
                        Tailored one-to-one or small-group guidance to sharpen your cultural intelligence and leadership
                        edge.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                        <img
                          src="/business-consulting-meeting-with-charts-and-strate.jpg"
                          alt="Consulting illustration"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <h4 className="text-[28px] sm:text-[24px] md:text-xl font-bold text-green-700 mb-3">
                        Consulting
                      </h4>
                      <p className="text-slate-700 text-base sm:text-sm leading-relaxed">
                        Deep partnership to solve cross-border challenges, align teams, and unlock global opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CHANGE: Moved purple tagline inside wrapper with normalized spacing */}
                <div className="flex items-center justify-center gap-3 text-lg font-medium mt-0 mb-0">
                  <div className="text-center">
                    <p className="text-xl sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight leading-tight">
                      <span className="block sm:inline">Whether you want inspiration,</span>
                      <span className="block sm:inline"> transformation,</span>
                      <span className="block sm:inline"> or hands-on solutions</span>
                      <span className="block mt-2">—these offerings give you a direct path</span>
                      <span className="block sm:inline"> to global success.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Silicon Valley Proven Leadership Section */}
      {/* Reduced vertical padding from py-24 to py-16 on mobile */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_50%)]"></div>

        {/* Reduced horizontal padding from px-6 to px-3 sm:px-4 lg:px-6 */}
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full px-6 py-3 mb-8 border border-emerald-200/30">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 font-semibold text-base tracking-wide uppercase">
                Silicon Valley Proven Leadership
              </span>
            </div>

            {/* Reduced heading size on mobile from text-5xl to text-3xl */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-0 sm:mb-8 leading-tight">
              <span className="block leading-tight">Built at the Heart of</span>
              <span className="block leading-tight text-[34px] sm:text-5xl md:text-6xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                <span className="text-[38px] sm:text-5xl md:text-6xl">Innovation</span>
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-base text-slate-700 leading-relaxed -mt-4 sm:mt-0">
                  <span className="text-lg md:text-base font-bold">At Cisco</span>
                  <span className="text-lg md:text-base">, I helped scale the business from its early days into a</span>{" "}
                  <span className="text-emerald-600 font-bold text-xl">$555B market-cap powerhouse</span> —{" "}
                  <span className="text-emerald-600 font-bold text-xl">then the world's most valuable company</span> —{" "}
                  <span className="text-lg md:text-base">
                    mastering the cultural dynamics that drive global success.
                  </span>
                </p>

                <p className="text-base text-slate-700 leading-relaxed bg-gradient-to-r from-slate-50 to-blue-50/50 border-l-4 border-emerald-500 pl-6 py-3 rounded-r-lg shadow-sm">
                  <span className="font-semibold text-slate-800 text-lg sm:text-base">
                    Drawing on my 20 years in Silicon Valley
                  </span>{" "}
                  <span className="text-lg md:text-base">
                    — and leadership roles across the US, Europe, Asia, and as CEO in Singapore.
                  </span>
                </p>

                <p className="text-lg md:text-base text-slate-700 leading-relaxed">
                  After living in <span className="font-bold text-slate-900">7 countries</span> across{" "}
                  <span className="font-bold text-slate-900">3 continents</span> and working in more than{" "}
                  <span className="font-bold text-slate-900">75 markets</span>, I've decoded the invisible patterns that
                  separate global winners from those who struggle.
                </p>
              </div>

              {/* Achievement cards */}
              <div className="space-y-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Global Deals Leader</h3>
                      {/* CHANGE: Updated text to specify 75 countries for more specific global reach */}
                      {/* Reduced text size on mobile from text-base to text-sm */}
                      <p className="text-lg md:text-sm text-slate-600 leading-relaxed">
                        Led <span className="font-semibold text-emerald-600">$15B annually</span> in international
                        transactions, navigating complex cultural dynamics across 75 countries, diverse markets, and
                        global stakeholders.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        <span className="text-blue-600">Cultural Intelligence Pioneer</span>
                      </h3>
                      <p className="text-lg md:text-sm text-slate-600 leading-relaxed">
                        Developed proprietary methodologies for cross-cultural business success,{" "}
                        <span className="font-semibold text-orange-600">proven at the highest levels</span> of global
                        commerce.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6"></div>
            </div>

            {/* Right side - Ole Bent image with badge */}
            <div className="relative flex justify-center lg:justify-end -mt-16 md:mt-0">
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl p-4 shadow-2xl">
                  <img
                    src="/ole-bent-cisco.jpg"
                    alt="Ole Bent Rye at Cisco Systems headquarters"
                    className="w-full max-w-sm h-auto object-contain rounded-2xl"
                  />
                </div>

                <div className="text-center mt-4">
                  {/* Reduced text size on mobile from text-sm to text-xs */}
                  <p className="text-xs text-slate-600">Ole Bent Rye, Cisco Headquarters, Silicon Valley, California</p>
                </div>

                <div className="flex justify-center mt-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-4 rounded-2xl shadow-xl transform rotate-3 hover:rotate-1 transition-transform duration-300">
                    <div className="text-center">
                      {/* Reduced text size on mobile from text-2xl to text-lg */}
                      <div className="text-lg sm:text-2xl font-bold text-white">$555B</div>
                      <div className="text-base sm:text-base font-semibold text-white">Market Cap Achieved</div>
                    </div>
                  </div>
                </div>

                {/* START_MERGE_BLOCK */}
                <div className="text-center mt-16">
                  <div className="inline-block bg-gradient-to-br from-white/90 via-emerald-50/80 to-blue-50/70 backdrop-blur-sm rounded-3xl px-8 py-8 shadow-2xl border-2 border-white/60 hover:shadow-3xl transition-all duration-300">
                    <h4 className="text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-serif">
                      Ole Bent's Cultural Framework
                    </h4>
                    <div className="flex flex-wrap gap-4 justify-center">
                      {/* Open in new tab */}
                      <a
                        href="/files/ole-bents-cultural-framework.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition"
                      >
                        View Online →
                      </a>
                      {/* Download directly */}
                      <a
                        href="/files/ole-bents-cultural-framework.pdf"
                        download="Ole-Bents-Cultural-Framework.pdf"
                        className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-3 text-white font-semibold shadow hover:opacity-90 transition"
                      >
                        Download PDF ⬇
                      </a>
                    </div>
                  </div>
                </div>
                {/* END_MERGE_BLOCK */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      {/* Reduced vertical padding from py-24 to py-16 on mobile */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            {/* CHANGE: Increased mobile font size from text-2xl (24px) to text-[26px] (26px) */}
            <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-bold mb-8 font-serif">
              A multi-trillion-dollar problem
            </h2>
            {/* CHANGE: Updated text from "The culprit isn't" to "The problem is not" and made "invisible cultural barriers" bold */}
            <p className="text-[18px] sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Every year, businesses lose trillions in failed international expansions. The problem is not strategy,
              technology, or capital—it's the <strong>invisible cultural barriers</strong> that derail even the most
              promising ventures.
            </p>

            <div className="max-w-4xl mx-auto space-y-6 mt-12">
              <p className="text-[18px] sm:text-xl text-slate-300 leading-relaxed">
                🌍 <strong>Cultural fluency is not optional—it's essential.</strong> Success across borders depends on
                your ability to adapt, communicate, and build trust.
              </p>
              <p className="text-[18px] sm:text-xl text-slate-300 leading-relaxed">
                🌍 <strong>Awareness is not enough.</strong> You need tools to navigate cultural complexity with
                confidence—and turn it into a competitive edge.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-16 border border-slate-600">
            {/* CHANGE: Increased mobile font size from text-[24px] to text-[30px] */}
            <h3 className="text-[30px] sm:text-3xl lg:text-4xl font-bold mb-12 text-center">
              The Hidden Costs of
              <br />
              Cultural Blindness
            </h3>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-base text-slate-300 text-lg">Deals collapse at the final stage</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-base text-slate-300 text-lg">Teams struggle with remote collaboration</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-base text-slate-300 text-lg">Products fail to resonate in new markets</span>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-base text-slate-300 text-lg">Partnerships dissolve over misunderstandings</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-base text-slate-300 text-lg">Talent acquisition becomes impossible</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-base text-slate-300 text-lg">Brand reputation suffers irreparable damage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      {/* Reduced vertical padding from py-24 to py-16 on mobile */}
      <section id="services" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="mb-16">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="p-12 bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 text-white">
                    {/* Reduced text size on mobile from text-xl to text-lg */}
                    <p className="text-lg lg:text-2xl font-semibold mb-2 text-center text-slate-100">The Seminar:</p>
                    {/* CHANGE: Increased font size from text-xl sm:text-3xl lg:text-4xl to text-2xl sm:text-4xl lg:text-4xl for better prominence */}
                    <h3 className="text-[30px] sm:text-4xl lg:text-4xl font-bold mb-4 font-serif text-center">
                      <span className="block leading-tight">Mastering</span>
                      <span className="block leading-tight lg:block">Cultural Dynamics</span>
                      <span className="block leading-tight lg:block">for Global Success</span>
                    </h3>
                    <div className="mb-6">
                      <p className="text-white font-semibold text-base mb-2">
                        This seminar equips you to master cultural dynamics.
                      </p>
                      <p className="text-slate-100 text-base">
                        — Unlocking stronger relationships, bigger deals, and better team performance worldwide.
                      </p>
                    </div>

                    <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 mb-8">
                      {/* Reduced text size on mobile from text-xl to text-lg */}
                      <p className="text-white font-bold text-lg">
                        70% of cross-border deals stumble on cultural misunderstanding.
                      </p>
                    </div>

                    <div className="mb-8">
                      {/* Reduced heading size on mobile from text-xl to text-lg */}
                      <h4 className="text-lg sm:text-xl font-bold mb-3 text-white">Flexible Seminar Options</h4>
                      <p className="text-slate-100 text-base">
                        We offer customized formats to fit your organization's needs.
                      </p>
                    </div>

                    <div className="mb-8">
                      {/* Reduced heading size on mobile from text-xl to text-lg */}
                      <h4 className="text-lg sm:text-xl font-bold mb-3 text-white">Who is this seminar for:</h4>
                      <p className="text-slate-100 text-base">
                        Executives, founders, and global teams navigating cross-border business — where culture can make
                        or break results.
                      </p>
                    </div>
                  </div>

                  <div className="p-8 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
                    <div className="space-y-6">
                      <div className="text-center">
                        <img
                          src="/ole-bent-rye-un38.jpg"
                          alt="Ole Bent Rye - Cultural Intelligence Expert"
                          className="w-full max-w-sm h-auto object-cover rounded-2xl shadow-xl mb-4"
                        />
                        <p className="text-base text-slate-600 leading-relaxed font-semibold">Ole Bent Rye</p>
                        {/* Reduced text size on mobile from text-base to text-sm */}
                        <p className="text-sm text-slate-500">Cultural Intelligence Expert</p>
                      </div>

                      <div className="text-center">
                        <img
                          src="/ole-bent-rye-un276.jpg"
                          alt="Ole Bent Rye presenting at UNICEF conference"
                          className="w-full max-w-sm h-auto object-cover rounded-2xl shadow-xl mb-4"
                        />
                        {/* Reduced text size on mobile from text-base to text-sm */}
                        <p className="text-sm text-slate-500">Speaking at International Conference</p>
                      </div>

                      <div className="text-center">
                        <img
                          src="/ole-bent-rye-un449.jpg"
                          alt="Professional seminar environment with engaged audience"
                          className="w-full max-w-sm h-auto object-cover rounded-2xl shadow-xl mb-4"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-12">
                    <div className="mb-8">
                      {/* Reduced heading size on mobile from text-xl to text-lg */}
                      <h4 className="text-xl sm:text-3xl font-bold text-slate-900 mb-6">Seminar Agenda Points:</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {/* Communication Card */}
                      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm">💬</span>
                          </div>
                          <div>
                            <h5 className="font-bold text-blue-600 mb-1">Communication</h5>
                            <p className="text-slate-600 text-[14px] sm:text-xs">
                              Mastering direct vs. indirect styles, a key to cross-cultural success.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Time Card */}
                      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm">⏰</span>
                          </div>
                          <div>
                            <h5 className="font-bold text-red-600 mb-1">Time</h5>
                            <p className="text-slate-600 text-[14px] sm:text-xs">
                              Different perceptions of time can cause major frustrations.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Persuasion Card */}
                      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm">🎯</span>
                          </div>
                          <div>
                            <h5 className="font-bold text-orange-600 mb-1">Persuasion</h5>
                            <p className="text-slate-600 text-[14px] sm:text-xs">
                              Knowing when to use facts, storytelling, or the big picture is critical across cultures.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Trust Card */}
                      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm">🤝</span>
                          </div>
                          <div>
                            <h5 className="font-bold text-green-600 mb-1">Trust</h5>
                            <p className="text-slate-600 text-[14px] sm:text-xs">
                              How it's built very differently in Europe, Asia, and the US.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Risk Card */}
                      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm">⚠️</span>
                          </div>
                          <div>
                            <h5 className="font-bold text-yellow-600 mb-1">Risk</h5>
                            <p className="text-slate-600 text-[14px] sm:text-xs">
                              How different cultures approach uncertainty and risk can shape every decision.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Silicon Valley Card */}
                      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm">🚀</span>
                          </div>
                          <div>
                            <h5 className="font-bold text-purple-600 mb-1">Silicon Valley</h5>
                            <p className="text-slate-600 text-[14px] sm:text-xs">
                              Lessons I learned inside the world's most innovative and successful business culture.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* AI and Culture Card */}
                      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm">🤖</span>
                          </div>
                          <div>
                            <h5 className="font-bold text-indigo-600 mb-1">AI and Culture</h5>
                            <p className="text-slate-600 text-[14px] sm:text-xs">
                              How AI amplifies the need for cultural intelligence.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-200 mt-2">
                        <p className="text-slate-700 text-[14px] sm:text-xs">
                          —And other <span className="underline font-semibold">essential topics</span> for succeeding
                          internationally.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CHANGE: Added id="seminar-formats" to make this section linkable */}
          <div id="seminar-formats" className="mb-16 text-center">
            {/* CHANGE: Updated font size from text-xl sm:text-3xl to text-[30px] sm:text-3xl for 30px on mobile */}
            <h3 className="text-[30px] sm:text-3xl font-bold text-slate-900 mb-6">Seminar Formats</h3>
            {/* CHANGE: Added lg:whitespace-nowrap to keep text on one line on desktop */}
            {/* Reduced text size on mobile from text-xl to text-base */}
            <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed lg:whitespace-nowrap">
              For the best results, in-person sessions are ideal — though online delivery is also highly effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 1-Day Deep Dive */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-white">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
              <CardContent className="p-8">
                <div className="mb-4">
                  <Badge className="bg-red-100 text-red-700 border-red-200 mb-4">Most Popular</Badge>
                </div>
                {/* Reduced heading size on mobile from text-2xl to text-lg */}
                <h3 className="text-lg sm:text-2xl font-bold mb-2">
                  <span className="text-red-600">1-Day Deep Dive:</span>{" "}
                  <span className="text-slate-900">Lead Across Cultures with Confidence</span>
                </h3>
                <p className="text-base text-slate-600 italic mb-6">Comprehensive Mastery & Practical Application</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      Covers 8 key cultural topics, providing a 360-degree approach to mastering cultural dynamics.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      Covers topics such as communication, trust, persuasion, and decision-making across cultures.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      <strong>
                        Ideal for companies expanding internationally or improving global team collaboration.
                      </strong>
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 hover:scale-105 hover:shadow-xl transition-all duration-300 text-white py-3 text-lg font-semibold">
                  <a href="/contact" className="block w-full">
                    Book 1-Day Deep Dive
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Half-Day Briefing */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-white">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
              <CardContent className="p-8">
                {/* Reduced heading size on mobile from text-2xl to text-lg */}
                <h3 className="text-lg sm:text-2xl font-bold mb-2">
                  <span className="text-orange-600">Half-Day Briefing:</span>{" "}
                  <span className="text-slate-900">Cultural Awareness for Global Decision-Maker</span>
                </h3>
                <p className="text-base text-slate-600 italic mb-6">Interactive & Engaging Deep Dive</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      Covers the 4 most relevant topics for your company, organization or team.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      Practical exercises, case studies, and discussions for actionable insights.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      <strong>Best for teams looking for quick yet impactful training.</strong>
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 hover:scale-105 hover:shadow-xl transition-all duration-300 text-white py-3 text-lg font-semibold">
                  <a href="/contact" className="block w-full">
                    Book Half-Day Briefing
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* 1-Hour Keynote */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-white">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🎤</span>
                  </div>
                  <div>
                    {/* Reduced heading size on mobile from text-2xl to text-lg */}
                    <h3 className="text-lg sm:text-2xl font-bold mb-2">
                      <span className="text-purple-600">1-Hour Keynote</span>{" "}
                      <span className="text-slate-900">Fast-Paced, High-Impact Session</span>
                    </h3>
                    <p className="text-base text-slate-600 italic">Fast-Paced, High-Impact Session</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      Ideal for conferences, leadership meetings, and executive briefings.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      Covers the core insights into cultural dynamics and their impact on global business.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      <strong>Perfect for sparking awareness and initiating discussions.</strong>
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 hover:shadow-xl transition-all duration-300 text-white py-3 text-lg font-semibold">
                  <a href="/contact" className="block w-full">
                    Book Keynote
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* 4-Week Online Program */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-white">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-teal-500"></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🌟</span>
                  </div>
                  <div>
                    {/* Reduced heading size on mobile from text-2xl to text-lg */}
                    <h3 className="text-lg sm:text-2xl font-bold mb-2">
                      <span className="text-blue-600">4-Week Online Program</span>{" "}
                      <span className="text-slate-900">+ Exclusive Mastermind Weekend</span>
                    </h3>
                    <p className="text-base text-slate-600 italic">
                      A structured, high-impact learning journey designed for global professionals.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      4 weeks of online learning (4 hours per weekly) covering 8 key topics in depth.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      Live interactive sessions with expert-led discussions, case studies, and Q&A.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      In-person Mastermind Weekend to network, refine strategies, and implement key takeaways.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">
                      <strong>
                        Ideal for leaders, teams, and professionals working in multicultural environments.
                      </strong>
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 hover:scale-105 hover:shadow-xl transition-all duration-300 text-white py-3 text-lg font-semibold">
                  <a href="/contact" className="block w-full">
                    Join Online Program
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Customer Testimonials Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                What Leaders Are Saying
              </h3>
              {/* Reduced text size on mobile from text-xl to text-base */}
              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Real results from real leaders who've transformed their global success with cultural intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 - Real Impact */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 to-green-500"></div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    {/* Reduced heading size on mobile from text-2xl to text-lg */}
                    <h4 className="text-lg sm:text-2xl font-bold text-emerald-700 mb-4">"Real Impact. Right Away."</h4>
                    <blockquote className="text-base text-lg text-slate-700 leading-relaxed italic mb-6">
                      "I learned things I could apply immediately—and they have already changed how I lead my
                      international team."
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">GL</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Global Leader</p>
                      <p className="text-slate-600 text-sm">Fortune 500 Company</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 - Exactly What We Needed */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    {/* Reduced heading size on mobile from text-2xl to text-lg */}
                    <h4 className="text-lg sm:text-2xl font-bold text-blue-700 mb-4">"Exactly What We Needed."</h4>
                    <blockquote className="text-base text-lg text-slate-700 leading-relaxed italic mb-6">
                      "Ole Bent brought clarity to complex cultural challenges."
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">ED</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Executive Director</p>
                      <p className="text-slate-600 text-sm">International Organization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 - Practical */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    {/* Reduced heading size on mobile from text-2xl to text-lg */}
                    <h4 className="text-lg sm:text-2xl font-bold text-purple-700 mb-4">"Practical."</h4>
                    <blockquote className="text-base text-lg text-slate-700 leading-relaxed italic mb-6">
                      "This was not just theory. It was high-level insight delivered in a way that made it easy to
                      act—and we are already seeing results."
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">CEO</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Chief Executive</p>
                      <p className="text-slate-600 text-sm">Global Technology Firm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call-to-action below testimonials */}
            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
                {/* Reduced heading size on mobile from text-2xl to text-lg */}
                <h4 className="text-lg sm:text-2xl font-bold text-slate-900 mb-4">
                  Ready to Join These Success Stories?
                </h4>
                <p className="text-base text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                  Transform your global leadership and see immediate results with proven cultural intelligence
                  strategies.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 hover:scale-105 hover:shadow-xl transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-lg border-0 text-lg"
                >
                  <a href="/contact" className="block w-full">
                    Start Your Transformation →
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Introduction Section */}
      {/* Reduced vertical padding from pt-16 pb-4 to pt-8 pb-4 on mobile */}
      <section
        id="coaching-workshops-consulting"
        className="pt-8 pb-4 sm:pt-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
      >
        {/* Reduced horizontal padding from px-4 sm:px-6 lg:px-8 to px-3 sm:px-4 lg:px-6 */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/obr-professional-headshot.png"
              alt="Ole Bent Rye - Professional Headshot"
              className="w-48 h-48 rounded-full shadow-2xl object-cover"
            />
          </div>
          {/* Reduced heading size on mobile from text-3xl to text-xl */}
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
            Coaching, Workshops and Consulting
          </h2>
          {/* Reduced text size on mobile from text-xl to text-base */}
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the approach that best fits your organization's cultural intelligence journey
          </p>
        </div>
      </section>

      {/* Service Offerings - Executive Coaching, Team Workshops, Strategic Consulting */}
      {/* Reduced vertical padding from py-8 to py-4 on mobile */}
      <section className="py-4 sm:py-8 bg-white">
        {/* Reduced horizontal padding from px-4 sm:px-6 lg:px-8 to px-3 sm:px-4 lg:px-6 */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Executive Coaching */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-white">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>

                {/* Reduced heading size on mobile from text-2xl to text-lg */}
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-4">Executive Coaching</h3>
                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  One-on-one transformation for leaders ready to master cultural intelligence and drive global success.
                </p>

                <div className="space-y-3 mb-8 text-left">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">Personal cultural intelligence assessment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">Customized 90-day transformation plan</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">Weekly strategy sessions & accountability</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">Direct access to Cisco methodologies</span>
                  </div>
                </div>

                <a href="/contact">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 hover:scale-105 hover:shadow-xl transition-all duration-300 text-white py-3 text-lg font-semibold">
                    Start Transformation
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Team Workshops */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-white">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                {/* Reduced heading size on mobile from text-2xl to text-lg */}
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-4">Team Workshops</h3>
                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  Immersive cultural intelligence training that transforms entire organizations into global powerhouses.
                </p>

                <div className="space-y-3 mb-8 text-left">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">Interactive cultural dynamics simulation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">Cross-cultural negotiation mastery</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">Global communication frameworks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">Team cultural intelligence certification</span>
                  </div>
                </div>

                <a href="/contact">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 hover:scale-105 hover:shadow-xl transition-all duration-300 text-white py-3 text-lg font-semibold">
                    Transform Your Team
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Strategic Consulting */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-white">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>

                {/* Reduced heading size on mobile from text-2xl to text-lg */}
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-4">Strategic Consulting</h3>
                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  Comprehensive cultural intelligence strategy for complex global expansions and market entries.
                </p>

                <div className="space-y-3 mb-8 text-left">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">Cultural market entry analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">Risk assessment & mitigation strategies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">Implementation roadmap & milestones</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {/* Reduced text size on mobile from text-slate-700 to text-slate-600 */}
                    <span className="text-slate-600">Ongoing strategic partnership</span>
                  </div>
                </div>

                <a href="/contact">
                  <Button className="w-full bg-green-500 hover:bg-green-600 hover:scale-105 hover:shadow-xl transition-all duration-300 text-white py-3 text-lg font-semibold">
                    Plan Your Expansion
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* Reduced vertical padding from py-24 to py-16 on mobile */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          {/* Reduced heading size on mobile from text-3xl to text-xl */}
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-8 font-serif">
            Ready to grow across cultures—with confidence?
          </h2>
          {/* Reduced text size on mobile from text-xl to text-base */}
          <p className="text-base sm:text-xl text-slate-200 mb-12 leading-relaxed">
            Don't let cultural blindness cost you another deal. Book a free strategy call to discover how the Cisco
            Cultural Intelligence Framework can transform your global success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg px-10 py-4"
            >
              <a href="/contact" className="block w-full">
                Book Your Free Strategy Call →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              {/* Reduced heading size on mobile from text-3xl to text-xl */}
              <h3 className="text-xl sm:text-3xl font-bold mb-6 font-serif bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Ole Bent Rye
              </h3>
              {/* Reduced text size on mobile from text-slate-400 to text-slate-300 */}
              <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                Mastering cultural intelligence for global business success. Transform your international operations
                with proven expertise from Silicon Valley's most successful expansion.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="#seminar-formats" className="hover:text-white transition-colors cursor-pointer">
                    Seminars
                  </a>
                </li>
                <li>
                  <a
                    href="#coaching-workshops-consulting"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Executive Coaching
                  </a>
                </li>
                <li>
                  <a
                    href="#coaching-workshops-consulting"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Team Workshops
                  </a>
                </li>
                <li>
                  <a
                    href="#coaching-workshops-consulting"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Strategic Consulting
                  </a>
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">Cultural Assessment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Connect</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white hover:underline transition-all duration-200 cursor-pointer"
                  >
                    Strategy Call Booking
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/bentrye/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/olebentrye/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/ob.rye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <button
                    onClick={copyEmailToClipboard}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {emailCopied ? "Email copied!" : "Email: obrye@obrye.global"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
            <p>&copy; 2025 Ole Bent Rye. All rights reserved. Built with Cultural Intelligence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
