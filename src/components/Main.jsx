import { Canvas } from "@react-three/fiber";
import { Environment, Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./Interface/index.jsx";
import { Balloons } from "./Balloons/index.jsx";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Main() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 20, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 20, mass: 3 }),
  };

  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;

    const x = clientX / innerWidth;
    const y = clientY / innerHeight;

    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mouse", manageMouseMove);
  }, []);
  return (
    <>
      <Canvas orthographic camera={{ position: [0, 0, 50], zoom: 75 }}>
        {/*<color args={['rgba(0,0,0,1)']}/>*/}
        <ScrollControls pages={7} damping={0.3} distance={0.8}>
          <Balloons mouse={smoothMouse} />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
        <Environment preset="apartment" />
      </Canvas>
    </>
  );
}
