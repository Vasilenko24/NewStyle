"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function header () {
  const [showDropDown, setShowDropDown] = useState(false)
    return (
            <header className="flex items-center justify-between px-6 py-4">
              <Link href="/">
                <Image 
                  src="logo/logo.svg"
                  alt="ProToning NYC Logo"
                  width={140}
                  height={40}
                  priority
                  className="rounded-full"
                />
              </Link>
        
              <nav className="flex gap-6 relative">
                <Link href="/">Home</Link>

          <div className="relative group">
          <button className="hover:underline flex items-center gap-1 mb-2">
            Our services
            <span className="text-xs">▼</span>
          </button>

          <div className="absolute left-0  bg-white text-black rounded shadow-md z-10 hidden group-hover:flex flex-col min-w-[200px]">
            <Link href="/auto-tinting" className="block px-4 py-2 hover:bg-gray-200">
              Auto Window Tinting
            </Link>
            <Link href="/residential-tinting" className="block px-4 py-2 hover:bg-gray-200">
              Residential Window Tinting
            </Link>
            <Link href="/commercial-tinting" className="block px-4 py-2 hover:bg-gray-200">
              Commercial Window Tinting
            </Link>
          </div>
        </div>
                <Link href="/">Maybe somth else</Link>
                <Link href="/">Contact us</Link>
              </nav>
            </header>
    )
}