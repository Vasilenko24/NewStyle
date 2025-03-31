import Image from "next/image";
import Link from "next/link";

export default function header () {
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
        
              <nav className="flex gap-6">
                <Link href="/">Test</Link>
              </nav>
            </header>
    )
}