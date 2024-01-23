import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function createExampleApp(defineRoutes) {
  console.log(path.join(__dirname, "app"));
  return defineRoutes((route) =>
    route(
      "example",
      // This works, but has issues with dependency resolution.
      path.join("../node_modules/example_app", "app/routes", "example.tsx")
    )
  );
}
