"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { Group, Vector3 } from "three";
import { Controls } from "@/components/roadmap/controls";

const SPEED = 4;

export function Character({
  positionRef,
  color,
}: {
  positionRef: React.RefObject<Vector3>;
  color: string;
}) {
  const meshRef = useRef<Group>(null);
  const [, get] = useKeyboardControls<Controls>();
  const direction = useRef(new Vector3());

  useFrame((_, delta) => {
    const { forward, backward, left, right } = get();
    direction.current.set(
      (right ? 1 : 0) - (left ? 1 : 0),
      0,
      (backward ? 1 : 0) - (forward ? 1 : 0),
    );

    if (direction.current.lengthSq() > 0) {
      direction.current.normalize();
      positionRef.current.addScaledVector(direction.current, SPEED * delta);
    }

    if (meshRef.current) {
      meshRef.current.position.copy(positionRef.current);
      if (direction.current.lengthSq() > 0) {
        meshRef.current.rotation.y = Math.atan2(
          direction.current.x,
          direction.current.z,
        );
      }
    }
  });

  return (
    <group ref={meshRef}>
      <mesh position={[0, 0.8, 0]} castShadow>
        <capsuleGeometry args={[0.35, 0.7, 4, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, 1.5, 0.15]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial color="#1c1917" />
      </mesh>
    </group>
  );
}
