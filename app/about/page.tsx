"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[999999] bg-gradient-to-b from-black/80 via-black/55 to-transparent backdrop-blur-xl border-0 shadow-none">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 sm:gap-4">
              <img src="/new-obr-logo.png" alt="OBR Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              <h1 className="text-xs sm:text-sm lg:text-xl font-bold text-white">Ole Bent Rye</h1>
            </a>

            <div className="ml-auto hidden lg:flex lg:items-center lg:gap-6">
              <a href="/about">
                <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white px-6 text-xl">
                  About Us
                </Button>
              </a>
              <a href="/contact">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20 hover:text-white hover:scale-105 transition-all duration-200 px-6 text-xl"
                >
                  Contact
                </Button>
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/bentrye/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/olebentrye/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition duration-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2505-JEdwBXx2Uzp1Zbl77wiAQZftfVAYvM.jpg"
                  alt="Ole Bent Rye at Cisco Headquarters"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                  <p className="text-white text-lg font-bold">Ole Bent Rye</p>
                  <p className="text-cyan-300 text-base font-medium">Cisco Headquarters, Silicon Valley, California</p>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="text-white space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">
                  From Europe to the USA,
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-red-300">
                  Silicon Valley and Asia
                </span>
              </h1>

              <div className="space-y-3">
                <div className="flex items-center gap-3 group">
                  <div className="w-1 h-12 bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full group-hover:h-16 transition-all duration-300"></div>
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    Global Leadership.
                  </p>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1 h-12 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full group-hover:h-16 transition-all duration-300"></div>
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Grounded in Culture.
                  </p>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1 h-12 bg-gradient-to-b from-orange-400 to-red-400 rounded-full group-hover:h-16 transition-all duration-300"></div>
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Proven at Scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Experience Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, rgb(100 116 139) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="border-0 shadow-2xl bg-white overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <CardContent className="p-12">
              <h2 className="text-4xl font-black text-slate-900 mb-8 text-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Lived and worked across the world
                </span>
              </h2>

              <div className="flex justify-center items-center gap-8 mb-12">
                <img
                  src="/globe-usa.png"
                  alt="USA Globe"
                  className="w-24 h-24 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <img
                  src="/globe-europe.png"
                  alt="Europe Globe"
                  className="w-24 h-24 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <img
                  src="/globe-asia.png"
                  alt="Asia Globe"
                  className="w-24 h-24 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-white text-4xl font-black">20</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent mb-2">
                    Years in the U.S.
                  </h3>
                  <p className="text-slate-600 text-lg">Leading innovation from Silicon Valley</p>
                </div>

                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-white text-4xl font-black">15</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                    Years in Europe
                  </h3>
                  <p className="text-slate-600 text-lg">Building bridges across cultures</p>
                </div>

                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-white text-4xl font-black">10</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">
                    Years in Asia
                  </h3>
                  <p className="text-slate-600 text-lg">Mastering Eastern business dynamics</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <p className="text-2xl sm:text-3xl font-black leading-relaxed relative z-10 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
                  Real-world business and cultural insight to help you lead and succeed across borders.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-black text-slate-900 mb-4 text-center mt-12">
            <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              OVERVIEW
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-16 rounded-full"></div>

          <div className="space-y-16">
            {/* Leadership at Scale */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <CardContent className="p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-blue-700 mb-4">Leadership at Scale</h3>
                  </div>
                </div>

                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p>
                    <span className="font-bold text-slate-900">Cisco executive for two decades</span>, leading global
                    organizations from Silicon Valley.
                  </p>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <p className="font-bold text-slate-900 mb-4">Helped scale Cisco from early-stage:</p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span>
                          Grew revenue to <span className="font-bold text-blue-600">$50 billion</span>
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span>
                          Scaled to <span className="font-bold text-blue-600">50,000 employees</span>
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span>
                          Reached <span className="font-bold text-blue-600">$555 billion in market cap</span>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6 border-l-4 border-blue-600">
                    For over a decade I was leading Cisco's global major deals organization responsible for{" "}
                    <span className="font-bold text-blue-700">$15 billion annually</span>.
                  </p>

                  <p className="text-xl font-bold text-center text-slate-900 bg-yellow-100 rounded-xl p-6">
                    At the time, Cisco was the world's most valuable company.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Entrepreneur & Innovator */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <CardContent className="p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-purple-700 mb-4">Entrepreneur & Innovator</h3>
                  </div>
                </div>

                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <p className="font-bold text-purple-700 mb-2">CEO of Singapore-based Temasys Communications</p>
                    <p>Led the company for 5 years, driving innovation in real-time communications technology.</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <p className="font-bold text-purple-700 mb-2">Co-founder and Board Member of SynapC (Norway)</p>
                    <p>
                      An AI-powered platform for document intelligence, revolutionizing how organizations process and
                      understand information.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Culture & Insight */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-green-50 overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-600"></div>
              <CardContent className="p-12">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-emerald-700 mb-4">Culture & Insight</h3>
                  </div>
                </div>

                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p className="bg-white rounded-xl p-6 shadow-md text-xl font-black bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent leading-relaxed">
                    A lifelong adventurer, passionate about building trust across cultures through real-world leadership
                    and deep curiosity.
                  </p>

                  <p className="text-xl font-bold text-center text-emerald-700 bg-white rounded-xl p-6 shadow-md">
                    Driven by people, cultures, and places.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* OBR Team Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-black text-white mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              OBR TEAM
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-16 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Jonas */}
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden group hover:shadow-cyan-500/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src="/jonas-rye.png"
                    alt="Jonas Kalve Rye"
                    className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Jonas Kalve Rye</h3>
                  <p className="text-lg font-bold text-cyan-600 mb-6">Social Media Marketing Expert</p>
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p>
                      Jonas is a self-taught social media marketing expert with a natural talent for creativity and
                      storytelling. A visionary in the digital space, he has built a successful presence on Instagram,
                      captivating audiences with his engaging multi-media presentations.
                    </p>
                    <p>
                      His content is more than just visually striking—it's infused with meaning, depth, and a unique
                      spiritual essence that resonates with his followers. Through innovative strategies and an
                      intuitive understanding of online engagement, Jonas has transformed his passion into a powerful
                      personal brand, inspiring others to harness the power of social media for authentic connection and
                      impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Joy */}
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden group hover:shadow-purple-500/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400"></div>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src="/joy-wichai.jpg"
                    alt="Joy Wichai"
                    className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Joy Wichai</h3>
                  <p className="text-lg font-bold text-purple-600 mb-6">Event Bookings & Seminar Delivery</p>
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p>
                      Joy manages event bookings and seminar delivery. With twenty years of experience in accounting and
                      logistics at a major corporation, she brings precision, efficiency, and a deep understanding of
                      customer needs.
                    </p>
                    <p>
                      Her expertise in coordination and finance, combined with her dedication to excellent customer
                      service, ensures the delivery of top-quality experiences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Norway Heritage Section */}
      <section className="relative overflow-hidden">
        {/* Full-width Image with Heading Overlay */}
        <div className="relative h-[40vh] lg:h-[70vh] min-h-[300px] lg:min-h-[500px]">
          {/* Mobile Image */}
          <img
            src="/norway-mountains-mobile.jpg"
            alt="Norway's West Coast Mountains"
            className="lg:hidden w-full h-full object-cover object-[70%_center]"
          />
          {/* Desktop Image */}
          <img
            src="/norway-mountains-updated.jpg"
            alt="Norway's West Coast Mountains"
            className="hidden lg:block w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-black text-white leading-tight text-balance">
                Ole Bent grew up among the mountains of Norway's wild and beautiful West Coast.
              </h2>
            </div>
          </div>
        </div>

        {/* Text Content Below Image */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8 text-xl sm:text-2xl leading-relaxed">
              <p className="text-slate-700">
                As a young man from Norway, I set out to explore the world, curious about{" "}
                <span className="font-black text-2xl sm:text-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  "what lay beyond our mountains, waterfalls, and glaciers."
                </span>
              </p>

              <p className="text-slate-700">
                Years later, in meeting rooms across Europe, Silicon Valley and the U.S., and throughout Asia,{" "}
                <span className="font-black text-2xl sm:text-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  "I realized I was still that same adventurer—only now the landscapes were human cultures."
                </span>
              </p>

              <p className="text-slate-700">
                That curiosity has fueled everything from closing deals worth hundreds of millions of dollars to{" "}
                <span className="font-black text-2xl sm:text-3xl bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                  "my passion for mentoring leaders today."
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-balance">Ready to Transform Your Global Success?</h2>
          <p className="text-xl text-slate-200 mb-12 leading-relaxed text-pretty">
            Let's discuss how cultural intelligence can unlock your organization's full potential across borders.
          </p>
          <a href="/contact">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg px-12 py-6 font-bold"
            >
              Get in Touch →
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-6 font-serif bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Ole Bent Rye
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                Mastering cultural intelligence for global business success. Transform your international operations
                with proven expertise from Silicon Valley's most successful expansion.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Connect</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a
                    href="https://www.linkedin.com/in/bentrye/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/olebentrye/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
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
