"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const StarBackground = () => {
  const ref = useRef<THREE.Points>(null);

  const [positions] = useState(() => {
    const count = 1600;
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 1.2 * Math.cbrt(Math.random());
      const angle = Math.random() * Math.PI * 2;
      const z = Math.random() * 2 - 1;
      const spread = Math.sqrt(1 - z * z);

      values[i * 3] = radius * spread * Math.cos(angle);
      values[i * 3 + 1] = radius * spread * Math.sin(angle);
      values[i * 3 + 2] = radius * z;
    }

    return values;
  });

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;