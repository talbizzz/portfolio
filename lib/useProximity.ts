import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import type { RoadmapNode } from "@/lib/types";

const ENTER_RADIUS = 2.5;
const EXIT_RADIUS = 3.5;

/**
 * Tracks which node (if any) the character currently stands inside, using
 * separate enter/exit radii (hysteresis) so the overlay doesn't flicker
 * open/closed right at the boundary.
 */
export function useProximity(
  characterPosition: React.RefObject<Vector3>,
  nodes: RoadmapNode[],
) {
  const [activeNode, setActiveNode] = useState<RoadmapNode | null>(null);
  const activeNodeRef = useRef<RoadmapNode | null>(null);

  useFrame(() => {
    const pos = characterPosition.current;
    if (!pos) return;

    const current = activeNodeRef.current;
    if (current) {
      const [x, , z] = current.position;
      const distance = Math.hypot(pos.x - x, pos.z - z);
      if (distance > EXIT_RADIUS) {
        activeNodeRef.current = null;
        setActiveNode(null);
      }
      return;
    }

    for (const node of nodes) {
      const [x, , z] = node.position;
      const distance = Math.hypot(pos.x - x, pos.z - z);
      if (distance < ENTER_RADIUS) {
        activeNodeRef.current = node;
        setActiveNode(node);
        break;
      }
    }
  });

  return activeNode;
}
