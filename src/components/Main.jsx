import {Canvas} from "@react-three/fiber";
import {Environment, Scroll, ScrollControls} from "@react-three/drei";
import {Interface} from "./Interface/index.jsx";

export default function Main() {
    return (
        <>
            <Canvas
                orthographic
                camera={{ position: [0, 0, 50], zoom: 75 }}
            >
                {/*<color args={['rgba(0,0,0,1)']}/>*/}
                <ScrollControls pages={7} damping={0.3} distance={0.8}>
                    {/*<Model mouse={smoothMouse} />*/}
                    <Scroll html>
                        <Interface />
                    </Scroll>
                </ScrollControls>
                <Environment preset="apartment" />
            </Canvas>
        </>
    );
}