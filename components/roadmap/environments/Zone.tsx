"use client";

export function Zone({ color }: { color: string }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
      <circleGeometry args={[7, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
