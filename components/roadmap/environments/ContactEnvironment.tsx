"use client";

export function ContactEnvironment({
  nodePosition,
}: {
  nodePosition: [number, number, number];
}) {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#d4d4d4" />
      </mesh>
      <group position={nodePosition}>
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
    </group>
  );
}
