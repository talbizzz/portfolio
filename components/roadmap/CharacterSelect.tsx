"use client";

const CHARACTERS = [
  { id: "explorer", label: "Explorer", color: "#2563eb" },
  { id: "innovator", label: "Innovator", color: "#16a34a" },
  { id: "builder", label: "Builder", color: "#ea580c" },
];

export function CharacterSelect({
  onSelect,
}: {
  onSelect: (color: string) => void;
}) {
  return (
    <div className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-neutral-950 px-6 text-white">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Choose your character</h1>
        <p className="mt-2 text-sm text-neutral-400">
          Use WASD / arrow keys to move, and drag to orbit the camera.
        </p>
      </div>
      <div className="flex gap-6">
        {CHARACTERS.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c.color)}
            className="flex flex-col items-center gap-3 rounded-lg border border-neutral-700 p-6 transition-colors hover:border-white"
          >
            <span
              className="h-16 w-16 rounded-full"
              style={{ backgroundColor: c.color }}
            />
            <span className="text-sm">{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
