"use client";

import { useState } from "react";
import Link from "next/link";
import { CharacterSelect } from "@/components/roadmap/CharacterSelect";
import { NodeOverlay } from "@/components/roadmap/NodeOverlay";
import { RoadmapCanvas } from "@/components/roadmap/RoadmapCanvas";
import { VersionToggle } from "@/components/shared/VersionToggle";
import { nodes } from "@/content/nodes";
import type { RoadmapNode } from "@/lib/types";
import { hasWebGL } from "@/lib/webgl";

export function RoadmapExperience() {
  const [webglChecked] = useState(() => hasWebGL());
  const [characterColor, setCharacterColor] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<RoadmapNode | null>(null);

  if (!webglChecked) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-neutral-950 px-6 text-center text-white">
        <h1 className="text-2xl font-semibold">3D not supported here</h1>
        <p className="max-w-sm text-neutral-400">
          Your browser or device doesn&apos;t support WebGL, so the 3D career
          roadmap can&apos;t run here. Head back to the classic version
          instead — everything is there too.
        </p>
        <Link
          href="/"
          className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-950"
        >
          Go to classic version
        </Link>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-neutral-900">
      {!characterColor && <CharacterSelect onSelect={setCharacterColor} />}
      {characterColor && (
        <RoadmapCanvas
          characterColor={characterColor}
          nodes={nodes}
          onActiveNodeChange={setActiveNode}
        />
      )}
      <VersionToggle />
      {activeNode && (
        <NodeOverlay node={activeNode} onClose={() => setActiveNode(null)} />
      )}
    </div>
  );
}
