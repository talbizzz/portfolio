"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";
import type { RoadmapNode } from "@/lib/types";
import { Character } from "@/components/roadmap/Character";
import { ContactEnvironment } from "@/components/roadmap/environments/ContactEnvironment";
import { keyboardMap } from "@/components/roadmap/controls";
import { useProximity } from "@/lib/useProximity";

function ProximityWatcher({
  characterPositionRef,
  nodes,
  onChange,
}: {
  characterPositionRef: React.RefObject<Vector3>;
  nodes: RoadmapNode[];
  onChange: (node: RoadmapNode | null) => void;
}) {
  const active = useProximity(characterPositionRef, nodes);
  useEffect(() => {
    onChange(active);
  }, [active, onChange]);
  return null;
}

export function RoadmapCanvas({
  characterColor,
  nodes,
  onActiveNodeChange,
}: {
  characterColor: string;
  nodes: RoadmapNode[];
  onActiveNodeChange: (node: RoadmapNode | null) => void;
}) {
  const characterPositionRef = useRef(new Vector3(0, 0, 6));

  return (
    <KeyboardControls map={keyboardMap}>
      <Canvas shadows camera={{ position: [0, 6, 14], fov: 50 }}>
        <color attach="background" args={["#87ceeb"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1} castShadow />
        <ContactEnvironment nodePosition={nodes[0]?.position ?? [0, 0, 0]} />
        <Character positionRef={characterPositionRef} color={characterColor} />
        <ProximityWatcher
          characterPositionRef={characterPositionRef}
          nodes={nodes}
          onChange={onActiveNodeChange}
        />
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 2.1} />
      </Canvas>
    </KeyboardControls>
  );
}
