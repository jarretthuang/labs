import { Helmet } from "react-helmet-async";
import "./assets/css/Three.css";
import { Canvas } from "@react-three/fiber";
import Torus from "./shapes/Torus";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./shapes/Sphere";
import { useState } from "react";

function Three() {
  const shapeColor = "#EEEF78";
  const shapeColorOnHover = "#fff";
  const [clicked, click] = useState(false);

  const resolveSize = (originalSize: number) => {
    return clicked ? originalSize * 2 : originalSize;
  };

  return (
    <div className="Three">
      <Helmet>
        <title>Three - JH Labs</title>
      </Helmet>
      <div className="three-container">
        <Canvas
          style={{ height: "100%", width: "100%" }}
          onClick={() => click(!clicked)}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <Torus
            size={resolveSize(0.7)}
            color={shapeColor}
            colorOnHover={shapeColorOnHover}
            position={[0, 0, 0]}
            rotation={[90, 0, 0]}
          />
          <Torus
            size={resolveSize(0.9)}
            color={shapeColor}
            colorOnHover={shapeColorOnHover}
            position={[0, 0, 0]}
            rotation={[0, 90, 360]}
          />
          <Torus
            size={resolveSize(1)}
            color={shapeColor}
            colorOnHover={shapeColorOnHover}
            position={[0, 0, 0]}
            rotation={[0, 0, 180]}
          />
          <Torus
            size={resolveSize(1.2)}
            color={shapeColor}
            colorOnHover={shapeColorOnHover}
            position={[0, 0, 0]}
            rotation={[180, 0, 180]}
          />
          <Sphere
            size={0.4}
            color={shapeColor}
            colorOnHover={shapeColorOnHover}
            position={[0, 0, 0]}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default Three;
