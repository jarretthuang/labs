import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { ShapeParams } from "./ShapeParams";

function Sphere(props: ShapeParams) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += delta));

  const size = props.size ?? 1;
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[size, undefined, undefined, undefined]} />
      <meshStandardMaterial
        color={hovered ? props.colorOnHover : props.color}
      />
    </mesh>
  );
}

export default Sphere;
