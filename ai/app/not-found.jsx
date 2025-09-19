
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-slate-900/60 flex items-center justify-center overflow-hidden px-6 py-12">
      {/* Decorative blurred blobs */}
      <div className="absolute -left-20 -top-20 w-72 h-72 bg-gradient-to-tr from-indigo-500 via-pink-500 to-emerald-400 rounded-full blur-3xl opacity-30 transform rotate-12" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-gradient-to-br from-rose-400 via-yellow-400 to-indigo-500 rounded-full blur-3xl opacity-25" />

      <motion.section
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 text-center"
        aria-labelledby="notfound-heading"
      >
        <motion.div
          animate={{ rotate: [0, 4, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          className="inline-block mb-6"
        >
          {/* Playful icon */}
          <svg width="84" height="84" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="6" fill="url(#g)" />
            <path d="M9 9.5c.75-1 2.25-1 3 0" stroke="rgba(255,255,255,0.95)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.2 13.2c.9.9 2.1.9 3 0" stroke="rgba(255,255,255,0.95)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#7c3aed" />
                <stop offset="1" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <h1 id="notfound-heading" className="text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-rose-200">
          404
        </h1>

        <p className="mt-3 text-lg md:text-xl text-slate-200">We can't find the page you're looking for.</p>

        <p className="mt-4 text-sm text-slate-400 max-w-[28rem] mx-auto">It might have been removed, had its name changed, or is temporarily unavailable. Try going back to the homepage.</p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="inline-block">
            <Button asChild>
              <a>
                <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-2">
                  Return Home
                </motion.span>
              </a>
            </Button>
          </Link>

          <Link href="/" className="inline-block">
            <Button variant="ghost" className="text-slate-200/90 border border-white/6">
              Contact Support
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-xs text-slate-400"
        >
          Tip: Try checking the URL for typos or head back to the dashboard.
        </motion.div>
      </motion.section>

      {/* Small floating shapes */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-12 top-1/3 w-6 h-6 rounded-full bg-white/10 blur-sm"
      />

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-12 bottom-1/3 w-4 h-4 rounded-full bg-white/8 blur-sm"
      />
    </div>
  );
}
