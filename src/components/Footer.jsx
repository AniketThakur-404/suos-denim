import React from "react"
import { Globe } from "lucide-react" 

export default function Footer() {
  
  // This is the dark charcoal background color from your image
  const darkBackgroundColor = 'black';

  return (
    <footer 
      style={{ backgroundColor: darkBackgroundColor }} 
      // MODIFICATION: Removed 'font-mono'
      // The default sans-serif font will look much cleaner with the 'Impact' logo.
      className="text-white uppercase text-xs tracking-wider"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        
        {/* Top Section: Logo and Links */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-12">
          
          {/* Logo - Uses the "SUOS" Impact font style from your code */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3 group">
              <h2 
                className="text-2xl font-bold tracking-wider text-white group-hover:opacity-80 transition-opacity"
                // This font-family is from your SUOS code snippet
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                SUOS
              </h2>
            </a>
          </div>

          {/* Links */}
          <div className="flex gap-12 lg:gap-24">
            
            {/* Policy Links */}
            <ul className="space-y-3 text-gray-300">
              <li><a href="/returns" className="hover:text-white transition-colors">Returns Policy</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/warranty" className="hover:text-white transition-colors">Warranty</a></li>
              <li><a href="/imprint" className="hover:text-white transition-colors">Imprint</a></li>
            </ul>
            
            {/* Social Links */}
            <ul className="space-y-3 text-gray-300">
              <li><a href="https://instagram.com" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://youtube.com" className="hover:text-white transition-colors">Youtube</a></li>
              <li><a href="https://patreon.com" className="hover:text-white transition-colors">Patreon</a></li>
              <li><a href="https://discord.com" className="hover:text-white transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: International and Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-24 lg:mt-32">
          
          {/* Left Side */}
          <div className="space-y-4">
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Globe size={16} />
              <span>International</span>
              <span className="text-xs">▼</span>
            </button>
            {/* 'Find what's on your mind' should not be uppercase to match the image */}
            <div className="text-gray-500 normal-case">
              Find what's on your mind
            </div>
          </div>

          {/* Right Side (Copyright) - Updated with your brand data */}
          <div className="mt-8 lg:mt-0 text-gray-500">
            © 2025 SUOS
          </div>
        </div>

      </div>
    </footer>
  )
}