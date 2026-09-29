"use client";

export function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[90, 90]} />
      <meshStandardMaterial color="#d4d4d4" />
    </mesh>
  );
}
