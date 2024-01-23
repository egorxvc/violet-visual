import {Environment, Float, useGLTF, useScroll} from "@react-three/drei";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import {useRef, useState} from "react";
import * as THREE from "three";
const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
    (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

export const Balloons = ({ mouse }) => {
  const { nodes } = useGLTF("/violet-visual/medias/abc-balloon.glb");
  const scroll = useScroll();
  const [environmentValue, setEnvironmentValue] = useState('apartment');
  const environmentRef = useRef();
  useFrame(() => {
    if (scroll.range(3/7, 4/7, -0.02) > 0) {
      setEnvironmentValue('night');
    }  else if (scroll.range(3/7, 0 ) > 0)  {
      setEnvironmentValue('apartment');
    }

    if (scroll.range(5/7, 1, -0.010) > 0) {
      setEnvironmentValue('apartment');
    }
  })
  return (
    <>
      <Environment preset={environmentValue} />
      <group>
          <Mesh node={nodes.letterA} letter={'A'} mouse={mouse} />
          <Mesh node={nodes.letterN} letter={'N'} mouse={mouse} />
          <Mesh node={nodes.letterC} letter={'C'} mouse={mouse} />
      </group>
    </>
  );
};



function Mesh({ node, letter, mouse }) {
  const {
    castShadow,
    receiveShadow,
    geometry,
    material,
    position,
    rotation,
    scale,
  } = node;

  const mesh = useRef();
  const floatRef = useRef();

  const scroll = useScroll();
  const {width, height} = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    const pages = 7;
    const rAll = scroll.range(0, 1);
    const r0 = scroll.range(0, 0);
    const r1 = scroll.range(1/pages, 1/pages);
    const r2 = scroll.range(2/pages, 2/pages);
    const r3 = scroll.range(3/pages, 3/pages);
    const r4 = scroll.range(4/pages, 3/pages);
    const r5 = scroll.range(5/pages, 5/pages);
    const r6 = scroll.range(6/pages, 6/pages);
    const r7 = scroll.range(7/pages, 7/pages);
    if(letter === 'A') {
      letterAAnimation(mesh, rAll, delta);
    }

    if(letter === 'N') {
      letterNAnimation(mesh, rAll, delta);
    }

    if(letter === 'C') {
      letterCAnimation(mesh, rAll, delta);
    }

    floatRef.floatIntensity = THREE.MathUtils.damp(
        floatRef.floatIntensity,
        25 * rAll,
        4,
        delta
    );

    floatRef.rotationIntensity = THREE.MathUtils.damp(
        floatRef.rotationIntensity,
        15 * rAll,
        4,
        delta
    );
    floatRef.speed = THREE.MathUtils.damp(
        floatRef.speed,
        2 * rAll,
        4,
        delta
    );
  })

  const groupRef = useRef();

  const rotationZ = useTransform(
      mouse.x,
      [0, 1],
      [rotation.z + 0.2, rotation.z - 0.2],
  );
  const rotationX = useTransform(
      mouse.y,
      [0, 1],
      [rotation.x - 0.2, rotation.x + 0.2],
  );

  return (
    <group ref={mesh}>
      <Float ref={floatRef} >
        <motion.mesh
            castShadow={castShadow}
            receiveShadow={receiveShadow}
            geometry={geometry}
            position={position}
            rotation={rotation}
            material={material}
            scale={scale}
            rotation-x={rotationX} rotateZ={rotationZ}
        ></motion.mesh>
      </Float>
    </group>
  );

  function letterCAnimation(mesh, rAll, delta) {
    mesh.current.rotation.y = THREE.MathUtils.damp(
        mesh.current.rotation.y,
        5 * rAll,
        4,
        delta,
    );

    mesh.current.position.y = THREE.MathUtils.damp(
        mesh.current.position.y,
        2 * rAll,
        4,
        delta,
    );

    mesh.current.rotation.z = THREE.MathUtils.damp(
        mesh.current.rotation.z,
        Math.PI * rAll,
        4,
        delta,
    );

    mesh.current.position.x = THREE.MathUtils.damp(
        mesh.current.position.x,
        -width/3 * rAll,
        4,
        delta,
    );
  }

  function letterAAnimation(mesh, rAll, delta) {
    mesh.current.rotation.y = THREE.MathUtils.damp(
        mesh.current.rotation.y,
        -10 * rAll,
        4,
        delta,
    );

    mesh.current.position.y = THREE.MathUtils.damp(
        mesh.current.position.y,
        2 * rAll,
        4,
        delta,
    );

    mesh.current.rotation.z = THREE.MathUtils.damp(
        mesh.current.rotation.z,
        -Math.PI * rAll,
        4,
        delta,
    );

    mesh.current.position.x = THREE.MathUtils.damp(
        mesh.current.position.x,
        -2 * rAll,
        4,
        delta,
    );
  }

  function letterNAnimation(mesh, rAll, delta) {
    mesh.current.rotation.y = THREE.MathUtils.damp(
        mesh.current.rotation.y,
        10 * rAll,
        4,
        delta,
    );

    mesh.current.rotation.z = THREE.MathUtils.damp(
        mesh.current.rotation.z,
        Math.PI * rAll,
        4,
        delta,
    );

    mesh.current.position.x = THREE.MathUtils.damp(
        mesh.current.position.x,
        width/3 * rAll,
        4,
        delta,
    );
  }
}