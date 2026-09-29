"use client";

import { Zone } from "@/components/roadmap/environments/Zone";

const WHEEL_POSITIONS: [number, number, number][] = [
  [0.9, 0.35, 0.9],
  [0.9, 0.35, -0.9],
  [-0.9, 0.35, 0.9],
  [-0.9, 0.35, -0.9],
];

export function ProjectOneEnvironment({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      <Zone color="#334155" />
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[2.6, 0.6, 1.3]} />
        <meshStandardMaterial color="#e2e8f0" />
      </mesh>
      <mesh position={[0, 1.05, 0]} castShadow>
        <boxGeometry args={[1.4, 0.5, 1.2]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      {WHEEL_POSITIONS.map((wheelPosition) => (
        <mesh
          key={wheelPosition.join(",")}
          position={wheelPosition}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.35, 0.35, 0.3, 16]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
      ))}
    </group>
  );
}
