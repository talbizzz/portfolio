"use client";

import { Zone } from "@/components/roadmap/environments/Zone";

export function ContactEnvironment({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      <Zone color="#bae6fd" />
      <mesh position={[0, 0.7, 0]} castShadow>
        <boxGeometry args={[1, 1.4, 0.8]} />
        <meshStandardMaterial color="#0ea5e9" />
      </mesh>
      <mesh position={[0, 1.9, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#facc15"
          emissive="#facc15"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}
