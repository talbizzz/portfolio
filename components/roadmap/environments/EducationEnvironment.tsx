"use client";

import { Zone } from "@/components/roadmap/environments/Zone";

export function EducationEnvironment({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      <Zone color="#fde68a" />
      <mesh position={[0, 1.5, 0]} castShadow>
        <boxGeometry args={[2.4, 3, 2]} />
        <meshStandardMaterial color="#b45309" />
      </mesh>
      <mesh position={[0, 3.4, 0]} castShadow>
        <coneGeometry args={[1.9, 1.2, 4]} />
        <meshStandardMaterial color="#7c2d12" />
      </mesh>
      <mesh position={[1.6, 1.5, 1.05]}>
        <cylinderGeometry args={[0.05, 0.05, 3.4]} />
        <meshStandardMaterial color="#44403c" />
      </mesh>
      <mesh position={[1.75, 2.8, 1.05]}>
        <boxGeometry args={[0.5, 0.35, 0.02]} />
        <meshStandardMaterial color="#1d4ed8" />
      </mesh>
    </group>
  );
}
