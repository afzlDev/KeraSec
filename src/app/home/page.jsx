'use client';

import React, { useRef } from "react";
import './home.css';
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import { Typewriter } from 'react-simple-typewriter';

function DomeCameraModel({ mouse }) {
  const { scene } = useGLTF("/bullet.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current && mouse.current) {
      // Smooth rotation effect
      modelRef.current.rotation.y += (mouse.current.x - modelRef.current.rotation.y) * 0.05;
      modelRef.current.rotation.x += (mouse.current.y - modelRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <Center>
      <primitive ref={modelRef} object={scene} scale={2.5} />
    </Center>
  );
}

export default function Home({id}) {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    // Normalize values between -0.5 and 0.5
    mouse.current.x = ((e.clientX / innerWidth) - 0.5) * Math.PI;
    mouse.current.y = ((e.clientY / innerHeight) - 0.5) * Math.PI;
  };

  return (
    <div className="home" onMouseMove={handleMouseMove} id={id}>
      <div className="hero_text">SECURING WHAT MATTERS</div>
      <div className="hero_canvas">
        <div className="canvas-wrapper">
          <Canvas camera={{ position: [0, 0, 7] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 2]} />
            <DomeCameraModel mouse={mouse} />
          </Canvas>
        </div>
      </div>
      <div className="hero_text2">
        <span style={{ color: '#fff', fontSize: '20px', fontWeight: 600 }}>
          <Typewriter
            words={['YOUR SECURITY OUR PRIORITY', 'SAFE. SMART. SECURED.']}
            loop={true}
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
    </div>
  );
}
