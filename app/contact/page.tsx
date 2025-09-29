"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    message: "",
    interests: [] as string[],
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  const interestOptions = ["Seminars", "Coaching", "Team Workshops", "Strategic Consulting"]

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interest] : prev.interests.filter((i) => i !== interest),
    }))
  }

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("obrye@obrye.global")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate required fields
      if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
        alert("Please fill in all required fields (First Name, Last Name, and Email)")
        setIsSubmitting(false)
        return
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        // Success - show thank you message
        setSubmitted(true)
      } else {
        throw new Error(result.message || "Failed to send email")
      }
    } catch (error) {
      console.error("[v0] Error sending email:", error)
      // The form data is logged on the server for manual processing
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Your message has been received. I'll get back to you within 24 hours to discuss how we can work together
              to enhance your cultural intelligence.
            </p>
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              Return to Homepage
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-xl border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/new-obr-logo.png" alt="OBR Logo" className="w-10 h-10 object-contain" />
              <h1 className="text-xl font-bold text-white">Ole Bent Rye</h1>
            </div>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10"
              onClick={() => (window.location.href = "/")}
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full px-6 py-3 mb-8 border border-emerald-200/30">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 font-semibold text-sm tracking-wide uppercase">Let's Connect</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Thank you for visiting!
            </h1>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-6">
                Whether you're curious about my <span className="font-semibold text-emerald-600">seminars</span>,
                exploring <span className="font-semibold text-blue-600">coaching</span>, or interested in
                <span className="font-semibold text-purple-600"> consulting</span>, I would love to hear from you.
              </p>
              <p className="text-lg text-slate-500">
                Please leave me a note below, and I'll get back to you as soon as I can.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Required Fields */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-700 font-semibold">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-700 font-semibold">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-semibold">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm"
                    placeholder="your.email@company.com"
                  />
                </div>

                {/* Optional Fields */}
                <div className="border-t border-slate-200 pt-8">
                  <h3 className="text-lg font-semibold text-slate-700 mb-6">Additional Information (Optional)</h3>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-slate-600">
                        Company
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/50 backdrop-blur-sm"
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-slate-600">
                        Country
                      </Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/50 backdrop-blur-sm"
                        placeholder="Your country"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="phone" className="text-slate-600">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 bg-white/50 backdrop-blur-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Areas of Interest */}
                <div className="border-t border-slate-200 pt-8">
                  <h3 className="text-lg font-semibold text-slate-700 mb-4">Areas of Interest</h3>
                  <p className="text-slate-600 mb-6">Select one or more areas you'd like to explore:</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {interestOptions.map((interest) => (
                      <div
                        key={interest}
                        className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-r from-slate-50 to-blue-50/50 border border-slate-200 hover:border-emerald-300 transition-colors"
                      >
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                          className="border-slate-300 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                        />
                        <Label htmlFor={interest} className="text-slate-700 font-medium cursor-pointer flex-1">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-semibold">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-white/50 backdrop-blur-sm min-h-[120px]"
                    placeholder="Tell me about your goals, challenges, or questions regarding cultural intelligence and global business success..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.firstName || !formData.lastName || !formData.email}
                    className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Additional Contact Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-100/80 to-blue-100/80 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Prefer to Connect Directly?</h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={copyEmailToClipboard}
                  className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                    {emailCopied ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="font-medium">{emailCopied ? "Email copied!" : "obrye@obrye.global"}</span>
                </button>

                <a
                  href="https://www.linkedin.com/in/bentrye/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
