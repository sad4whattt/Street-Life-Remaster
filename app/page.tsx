"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Zap, Trophy, Shield, Target, Crown, Play, ExternalLink, Menu, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-red-900/10"></div>
        <div
          className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <header className="relative z-50 border-b border-red-900/20 bg-black/80 backdrop-blur-xl sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25 group-hover:shadow-red-500/50 transition-all duration-300">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                Street Life Remastered
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {["Features", "Gameplay", "Community"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-6 py-2 rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 font-semibold">
                <Play className="w-4 h-4 mr-2" />
                Play Now
              </Button>
            </nav>

            <button className="md:hidden p-2 hover:bg-red-900/20 rounded-xl transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative z-10 py-32 px-6 text-center">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 inline-block animate-bounce">
            <Badge className="bg-gradient-to-r from-red-600/20 to-red-500/20 text-red-300 border border-red-500/30 px-6 py-3 text-sm font-bold rounded-full backdrop-blur-sm shadow-lg shadow-red-500/10">
              <Star className="w-4 h-4 mr-2 animate-spin" />
              #1 Hood Game on Roblox
            </Badge>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              RULE THE
            </span>
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl text-shadow-red">
              STREETS
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Experience the most <span className="text-red-400 font-semibold">intense turf wars</span>, build your
            empire, and dominate the hood in the ultimate Roblox street experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:via-red-400 hover:to-red-500 text-white px-12 py-6 rounded-2xl shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-500 hover:scale-110 text-xl font-bold border border-red-400/50"
            >
              <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              START DOMINATING
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-500/50 text-red-300 hover:bg-red-500/10 hover:text-white px-12 py-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 text-xl font-semibold hover:border-red-400"
            >
              <ExternalLink className="w-6 h-6 mr-3" />
              View on Roblox
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "24m+", label: "Total Visits", color: "from-red-400 to-red-600" },
              { number: "24/7", label: "Servers Online", color: "from-red-500 to-red-700" },
              { number: "4.9★", label: "Player Rating", color: "from-red-300 to-red-500" },
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
                <div
                  className={`text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent drop-shadow-lg`}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                DOMINATE WITH
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                SUPERIOR FEATURES
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Advanced Combat",
                description: "Military-grade gunplay with realistic ballistics and weapon customization.",
              },
              {
                icon: Users,
                title: "Gang Warfare",
                description: "Command up to 50 players per server in epic turf wars across multiple districts.",
              },
              {
                icon: Zap,
                title: "Custom Weapons",
                description: "Unlock over 100 unique weapons with custom skins and modifications.",
              },
              {
                icon: Shield,
                title: "Anti-Cheat Security",
                description: "Advanced AI-powered systems ensure fair gameplay for all players.",
              },
              {
                icon: Trophy,
                title: "Ranking System",
                description: "Climb from street thug to crime lord with exclusive rewards.",
              },
              {
                icon: Crown,
                title: "VIP Access",
                description: "Premium memberships unlock exclusive weapons and private servers.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-black/40 border border-red-500/20 hover:border-red-400/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 rounded-xl"
              >
                <CardHeader className="p-6">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl font-bold mb-3">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400 leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="relative z-10 py-24 px-6 bg-gray-950/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join The Community</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Connect with thousands of players and stay updated with the latest developments
          </p>

          <Card className="bg-black/40 border border-gray-700 hover:border-gray-600 backdrop-blur-sm transition-all duration-300 rounded-xl max-w-md mx-auto">
            <CardHeader className="p-8 text-center">
              <CardTitle className="text-white text-2xl font-bold mb-4">Discord Server</CardTitle>
              <CardDescription className="text-gray-400 mb-8 text-lg">
                Join 7k+ elite players in our exclusive Discord community
              </CardDescription>
              <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 font-semibold text-lg">
                Join Discord
              </Button>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-5xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              YOUR EMPIRE AWAITS
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">The streets are calling. Will you answer?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-12 py-4 rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 text-lg font-bold"
          >
            <Play className="w-6 h-6 mr-3" />
            START PLAYING NOW
          </Button>
        </div>
      </section>

      <footer className="relative z-10 border-t border-red-900/30 py-16 px-6 bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                  Street Life Remastered
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed font-medium">
                The ultimate hood experience on Roblox. Where legends are born and empires are built.
              </p>
            </div>

            {[
              {
                title: "Game",
                links: ["Play Now", "Features", "Updates", "Leaderboards"],
              },
              {
                title: "Community",
                links: ["Discord", "YouTube", "Twitter", "Reddit"],
              },
              {
                title: "Support",
                links: ["Help Center", "Report Bug", "Contact Us", "Terms"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-bold mb-6 text-lg">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-red-400 transition-colors duration-200 font-medium hover:translate-x-1 inline-block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-red-900/30 mt-12 pt-8 text-center">
            <p className="text-gray-500 font-medium">
              &copy; 2024 Street Life Remaster. Not affiliated with Roblox Corporation. Built for legends.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
