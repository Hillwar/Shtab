'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

interface HeaderProps {
  navigation: {
    title: string
    path: string
  }[]
}

export function Header({ navigation }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="glass border-b border-white/[0.05]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/agsh-logo.png"
                  alt="АГШШ"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="font-semibold text-lg">АГШШ</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-2">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`nav-link ${pathname === item.path ? 'nav-link-active' : ''}`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-white/[0.05]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                      isOpen ? 'rotate-45 top-3' : 'top-1'
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-full bg-current top-3 transition-all duration-300 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                      isOpen ? '-rotate-45 top-3' : 'top-5'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-white/[0.05]"
              >
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`nav-link ${pathname === item.path ? 'nav-link-active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
      {/* Spacer для предотвращения перекрытия контента шапкой */}
      <div className="h-20" />
    </>
  )
}