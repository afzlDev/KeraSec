'use client'


import { Providers } from "./provider";
import { ParallaxProvider } from "react-scroll-parallax";
import styles from './page.module.css'
import Nav from "./nav";
import Home from "./home/page";
import ContactPage from "./contact/page";
import AboutUs from "./aboutus/page";



export default function Page() {
  return (
    <Providers>
      <ParallaxProvider>
        <div className={styles.root}>
          <Nav />
          <Home id='home' />
          <ContactPage id="contact" />
          <AboutUs />
        </div>
      </ParallaxProvider>
    </Providers>
  );
}
