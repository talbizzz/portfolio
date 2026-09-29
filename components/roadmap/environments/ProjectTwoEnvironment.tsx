"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import { Zone } from "@/components/roadmap/environments/Zone";

export function ProjectTwoEnvironment({
  position,
}: {
  position: [number, number, number];
}) {
  const cubeRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.6;
      cubeRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group position={position}>
      <Zone color="#e2e8f0" />
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.9, 0.9, 0.6, 24]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      <mesh ref={cubeRef} position={[0, 1.8, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#7c3aed" wireframe />
      </mesh>
    </group>
  );
}
