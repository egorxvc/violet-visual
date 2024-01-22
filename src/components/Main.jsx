import {Canvas} from "@react-three/fiber";

export default function Main() {
    return (
        <>
            <Canvas
                orthographic
                camera={{ position: [0, 0, 50], zoom: 75 }}
            >
                <color args={['rgba(0,0,0,1)']}/>
            </Canvas>
        </>
    );
}