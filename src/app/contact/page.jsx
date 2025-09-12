'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './contact.css';
import insta from '../../../public/instagram.webp';
import fb from '../../../public/facebook.webp';
import wtsp from '../../../public/whatsapp.webp';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage({id}) {
  const rootRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);

  useLayoutEffect(() => {
    let ctx;
    // Wait for fonts so ScrollTrigger gets correct measurements (avoids jump)
    const startGSAP = () => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
            // markers: true,
          },
        });

        // We use fromTo to guarantee stable start/end values (no inference flicker)
        tl.fromTo(
          h1Ref.current,
          { xPercent: -100, autoAlpha: 0, force3D: true },
          { xPercent: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' }
        )
          .fromTo(
            h2Ref.current,
            { xPercent: 100, autoAlpha: 0, force3D: true },
            { xPercent: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.6'
          )
          .fromTo(
            gsap.utils.toArray<HTMLAnchorElement>('.socials a'),
            { autoAlpha: 0, y: 40, scale: 0.8, force3D: true },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.15,
              ease: 'back.out(1.7)',
              clearProps: 'transform',
            },
            '-=0.4'
          );
      }, rootRef);

      // Extra safety: refresh after everything laid out
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    // If font loading is supported, wait; otherwise start immediately.
    if (document?.fonts?.ready) {
      document.fonts.ready.then(startGSAP);
    } else {
      startGSAP();
    }

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <div className="contact_root" ref={rootRef} id={id}>
      <div className="contact_title_wrapper">
        <h1 className="contact_h1" ref={h1Ref}>
          CONTACT
        </h1>
        <h1 className="contact_h2" ref={h2Ref}>
          US
        </h1>
      </div>

      <div className="socials">
        <a
          href="https://wa.me/919746768412"
          target="_blank"
          rel="noopener noreferrer"
          className="wtsp"
        >
          <Image src={wtsp} alt="WhatsApp" loading="lazy" width={25} height={25} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fb"
        >
          <Image src={fb} alt="Facebook" loading="lazy" width={25} height={25} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="insta"
        >
          <Image src={insta} alt="Instagram" loading="lazy" width={30} height={30} />
        </a>
      </div>
    </div>
  );
}
