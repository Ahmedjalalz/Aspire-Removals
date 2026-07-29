// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  plugins: [
    {
      name: "send-email-dev-route",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url?.startsWith("/api/send-email")) {
            const { handleSendEmailRequest } = await import("./src/lib/send-email-server.ts");

            // Buffer the Node stream into a string before constructing the Web Request
            const chunks: Buffer[] = [];
            for await (const chunk of req) {
              chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
            }
            const bodyText = Buffer.concat(chunks).toString("utf-8");

            const request = new Request(`http://localhost${req.url}`, {
              method: req.method,
              headers: req.headers as Record<string, string>,
              body: req.method !== "GET" && req.method !== "HEAD" ? bodyText : undefined,
            });

            const response = await handleSendEmailRequest(request);
            res.statusCode = response.status;
            response.headers.forEach((value, key) => res.setHeader(key, value));
            const body = await response.text();
            res.end(body);
            return;
          }
          next();
        });
      },
    },
  ],
});
