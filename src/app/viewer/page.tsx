import { ViewerClient } from "./viewer-client";

export const metadata = {
  title: "Turbo Stream",
  description: "Transmisión en vivo de la operación",
};

/** Evita HTML estático en build con “0 cámaras” que confunde al hidratar. */
export const dynamic = "force-dynamic";

/**
 * Viewer público (marca Turbo Stream + Rappi).
 * Sin enlaces al admin.
 */
export default function ViewerPage() {
  return <ViewerClient />;
}
