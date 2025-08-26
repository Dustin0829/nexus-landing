"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Shield, Database, Wallet, Plus, Upload, ChevronRight, Zap, Globe } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function NexusLanding() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">


      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6 lg:px-8">
          <motion.span
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Nexus
          </motion.span>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <motion.a href="#features" className="transition-colors hover:text-primary" whileHover={{ scale: 1.05 }}>
              Features
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="transition-colors hover:text-primary"
              whileHover={{ scale: 1.05 }}
            >
              How It Works
            </motion.a>
            <motion.a href="#preview" className="transition-colors hover:text-primary" whileHover={{ scale: 1.05 }}>
              Preview
            </motion.a>
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="hidden sm:inline-flex bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-lg hover:shadow-red-500/25"
              >
                Launch App
                <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="relative py-20 sm:py-32 z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" />
        <div className="container relative max-w-screen-xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              Nexus | Own Your Data,{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Always</span>
            </motion.h1>
            <motion.p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl" variants={fadeInUp}>
              Securely store and share files onchain with Irys. Total privacy, pay-as-you-go, boundless control.
            </motion.p>
            <motion.div className="mt-10 flex items-center justify-center gap-x-6" variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="group px-8 py-3 text-base font-semibold transition-all bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-lg hover:shadow-red-500/25"
                >
                  Launch App
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-base bg-transparent border-red-500/20 hover:border-red-500/40 hover:bg-red-500/5"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="features"
        className="py-20 sm:py-32 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container max-w-screen-xl px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" variants={fadeInUp}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Nexus?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the future of file storage with uncompromising security and flexibility.
            </p>
          </motion.div>

          <motion.div className="mx-auto mt-16 max-w-4xl" variants={staggerContainer}>
            <div className="relative">
              {/* Centered vertical timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-orange-500 to-red-500 rounded-full transform -translate-x-1/2" />

              {/* Timeline items with alternating sides */}
              <div className="relative space-y-16">
                {/* Item 1 - Left side */}
                <motion.div
                  className="flex items-center gap-8"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-xl font-semibold mb-3">Ironclad Security</h3>
                    <p className="text-muted-foreground">
                      Client-side encryption ensures your files are protected before they leave your device. Zero
                      tracking, zero compromises.
                    </p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25 relative z-10">
                    <Shield className="h-8 w-8" />
                  </div>
                  <div className="flex-1 pl-8"></div>
                </motion.div>

                {/* Item 2 - Right side */}
                <motion.div
                  className="flex items-center gap-8"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="flex-1 pr-8"></div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25 relative z-10">
                    <Globe className="h-8 w-8" />
                  </div>
                  <div className="flex-1 text-left pl-8">
                    <h3 className="text-xl font-semibold mb-3">Forever Onchain</h3>
                    <p className="text-muted-foreground">
                      Irys blockchain technology ensures your files are permanently stored and tamper-proof for
                      generations.
                    </p>
                  </div>
                </motion.div>

                {/* Item 3 - Left side */}
                <motion.div
                  className="flex items-center gap-8"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="flex-1 text-right pr-8">
                    <h3 className="text-xl font-semibold mb-3">Flexible Payments</h3>
                    <p className="text-muted-foreground">
                      Start with 10GB free, then scale seamlessly with USDC or ETH. No subscriptions, no commitments.
                    </p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25 relative z-10">
                    <Zap className="h-8 w-8" />
                  </div>
                  <div className="flex-1 pl-8"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="how-it-works"
        className="py-20 sm:py-32 bg-muted/30 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container max-w-screen-xl px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" variants={fadeInUp}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">Get started with Nexus in three simple steps.</p>
          </motion.div>
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="border-2 border-red-500/20 h-full hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/10">
                <CardContent className="flex flex-col items-center p-12 text-center">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Wallet className="h-8 w-8" />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-semibold">1. Link Your Wallet</h3>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Connect your Ethereum (MetaMask) or Solana (Phantom) wallet to get started with secure,
                    decentralized storage.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="border-2 border-red-500/20 h-full hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/10">
                <CardContent className="flex flex-col items-center p-12 text-center">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Plus className="h-8 w-8" />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-semibold">2. Add Storage</h3>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Start with 10GB free, then easily top up with USDC or ETH as you need more space. Pay only for what
                    you use.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="border-2 border-red-500/20 h-full hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/10">
                <CardContent className="flex flex-col items-center p-12 text-center">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Upload className="h-8 w-8" />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-semibold">3. Store Effortlessly</h3>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Drag and drop your files for automatic encryption and permanent onchain storage. Organize, share,
                    and control with ease.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Preview Section */}
      <motion.section
        id="preview"
        className="py-20 sm:py-32 relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container max-w-screen-xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">See Nexus in Action</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Organize, share, and protect your files with unmatched ease.
            </p>
          </div>
          <div className="mt-16">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="mx-auto max-w-4xl overflow-hidden border-red-500/20 hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/10">
                <div className="aspect-video bg-gradient-to-br from-muted via-muted/50 to-background p-8">
                  <div className="h-full rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Database className="mx-auto h-12 w-12 text-muted-foreground/50" />
                      </motion.div>
                      <p className="mt-4 text-lg font-medium text-muted-foreground">Nexus Dashboard Preview</p>
                      <p className="mt-2 text-sm text-muted-foreground/75">
                        File grid • Sidebar navigation • Upload modal
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="relative py-20 sm:py-32 z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-red-500/5" />
        <div className="container relative max-w-screen-xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h2
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              Nexus | Secure Your{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Digital World
              </span>
            </motion.h2>
            <motion.p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl" variants={fadeInUp}>
              Onchain storage with total privacy and flexibility. Start now.
            </motion.p>
            <motion.div className="mt-10 flex items-center justify-center gap-x-6" variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="group px-8 py-3 text-base font-semibold transition-all bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-lg hover:shadow-red-500/25"
                >
                  Launch App
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 relative z-10">
        <div className="container max-w-screen-xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <motion.span
              className="font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Nexus
            </motion.span>
            <p className="text-sm text-muted-foreground">© 2024 Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
