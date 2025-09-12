'use client'

import React, { useEffect, useState } from "react";
import './nav.css';
import Image from "next/image";
import arw from '../../public/arw.png';
import Link from 'next/link'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav ${isScrolled ? "glass" : ""}`}>
      <div className="logo"><a href="#home">KeraSec</a></div>
      <div className="links">
        <div className="link1">
          <a href="#home">HOME</a>
        </div>
        <div className="link2">
          <a href="#contact">CONTACT</a>
        </div>
        <div className="link3">
          <Link href="/shop">SHOP</Link>
          <Image src={arw} alt="arrow"/>
        </div>
      </div>
    </div>
  );
}
