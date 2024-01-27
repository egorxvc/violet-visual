import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./Interface/index.jsx";
import {Experience} from "./Experience/index.jsx";

export default function Main() {
  return (
    <>
      <Canvas orthographic camera={{ position: [0, 0, 50], zoom: 75 }}>
        <ScrollControls pages={7} damping={0.3} distance={0.8}>
          <Experience/>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
