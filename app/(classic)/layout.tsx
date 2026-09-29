import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import { VersionToggle } from "@/components/shared/VersionToggle";

export default function ClassicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <VersionToggle />
    </div>
  );
}
