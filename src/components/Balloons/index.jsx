import { Float, useGLTF } from "@react-three/drei";
import { useTransform } from "framer-motion";

export const Balloons = () => {
    const { nodes } = useGLTF("/violet-visual/medias/abc-balloon.glb");
    debugger;
    return (
    <>
        <group>
            <Float floatIntensity={1}>
                <Mesh node={nodes.letterA} />
            </Float>
            <Float>
                <Mesh node={nodes.letterN} />
            </Float>
            <Float>
                <Mesh node={nodes.letterC} />
            </Float>
        </group>
    </>
)
}

function Mesh({node, mouse}) {
    const {
        castShadow,
        receiveShadow,
        geometry,
        material,
        position,
        rotation,
        scale,
    } = node;

    // const texture = useTexture("/medias/bubblegum-texture.jpg");
    // const texture = useTexture("/medias/texture.jpg");
    // const rotationZ = useTransform(
    //     mouse.x,
    //     [0, 1],
    //     [rotation.z + 0.2, rotation.z - 0.2],
    // );
    // const rotationX = useTransform(
    //     mouse.y,
    //     [0, 1],
    //     [rotation.x - 0.2, rotation.x + 0.2],
    // );

    return (
        <mesh
            castShadow={castShadow}
            receiveShadow={receiveShadow}
            geometry={geometry}
            position={position}
            rotation={rotation}
            material={material}
            scale={scale}
            // rotation-z={rotationZ}
            // rotation-x={rotationX}
        >
            {/* <meshStandardMaterial map={texture} /> */}
        </mesh>
    );
}