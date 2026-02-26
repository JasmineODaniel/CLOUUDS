import './globals.css';  
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header>
          <nav className="navbar">
            <img src="/Clouuds Logo.svg" alt="Clouuds logo" className="logo" />
            <a className="nav-link" href="features">Features</a>
            <a className="nav-link" href="pricing">Pricing</a>
            <a className="nav-link" href="about">About us</a>
            <a className="nav-link" href="blog">Blog</a>
            <a className="nav-link" href="contact">Contact</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}