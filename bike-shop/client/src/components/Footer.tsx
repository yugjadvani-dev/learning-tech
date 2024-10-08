import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted text-muted-foreground">
        <p className="text-xs">&copy; 2024 Bike Shop. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link to="/exchange" className="text-xs hover:underline underline-offset-4">
        Exchange
          </Link>
          <Link to="/blog" className="text-xs hover:underline underline-offset-4">
          Blog
          </Link>
          <Link to="/review" className="text-xs hover:underline underline-offset-4">
          Review
          </Link>
          <Link to="/privacy-policy" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link to="/services" className="text-xs hover:underline underline-offset-4">
           Services
          </Link>
          <Link to="/contact-us" className="text-xs hover:underline underline-offset-4">
          Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default Footer