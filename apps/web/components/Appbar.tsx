"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
// import { Credits } from "./navbar/Credits";
import Link from "next/link";
import { motion } from "framer-motion";

export function Appbar() {
  return (
    <div className="bg-black">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full p-2"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 backdrop-blur-xl rounded-2xl bg-background/50 border border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="flex items-center space-x-2 transition-opacity hover:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
                <span className="hidden font-bold font-mono text-xl sm:inline-block">
                  100xPhoto
                </span>
              </Link>
            </motion.div>

            {/* Auth & Pricing */}
            <div className="flex items-center gap-4">
              <SignedIn>
                <Button
                  variant="ghost"
                  size="sm"
                  className="dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                  asChild
                >
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                {/* <Credits /> */}
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox:
                        "h-8 w-8 rounded-full ring-2 ring-primary/10 transition-all hover:ring-primary/30",
                      userButtonPopover: "right-0 mt-2",
                    },
                  }}
                />
              </SignedIn>
              <SignedOut>
                <Button
                  variant="ghost"
                  size="sm"
                  className="dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                  asChild
                >
                  <Link href="/pricing">Pricing</Link>
                </Button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="default"
                    size="sm"
                    className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white dark:from-gray-700 dark:to-gray-800 border border-gray-600 dark:border-gray-700 rounded-lg shadow-md shadow-gray-800/20 dark:shadow-black/30 px-4 py-2 font-medium tracking-wide transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:from-gray-700 hover:to-gray-900 dark:hover:from-gray-600 dark:hover:to-gray-750"
                    asChild
                  >
                    <SignInButton mode="modal">
                      <span>Sign In</span>
                    </SignInButton>
                  </Button>
                </motion.div>
              </SignedOut>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </div>
  );
}