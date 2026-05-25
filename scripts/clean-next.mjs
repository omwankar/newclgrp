import { rmSync } from "node:fs";

try {
  rmSync(".next", { recursive: true, force: true });
  console.log("Removed .next cache");
} catch {
  console.log("No .next cache to remove");
}
