"use client";

import { Zone } from "@/components/roadmap/environments/Zone";

export function CurrentRoleEnvironment({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      <Zone color="#99f6e4" />
      <mesh position={[0, 1.25, 0]} castShadow>
        <boxGeometry args={[2.2, 2.5, 2]} />
        <meshStandardMaterial color="#0f766e" />
      </mesh>
      <group position={[0, 3, 1.02]}>
        <mesh>
          <boxGeometry args={[0.7, 0.22, 0.05]} />
          <meshStandardMaterial color="#f0fdfa" />
        </mesh>
        <mesh>
          <boxGeometry args={[0.22, 0.7, 0.05]} />
          <meshStandardMaterial color="#f0fdfa" />
        </mesh>
      </group>
    </group>
  );
}
