import { exec } from "node:child_process";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const nextCli = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");

const child = spawn(process.execPath, [nextCli, "dev"], {
  stdio: ["inherit", "pipe", "pipe"],
  shell: false,
  cwd: projectRoot,
});

let browserOpened = false;

function openBrowser(url) {
  if (browserOpened) {
    return;
  }

  browserOpened = true;

  const opener =
    process.platform === "win32"
      ? `start "" "${url}"`
      : process.platform === "darwin"
        ? `open "${url}"`
        : `xdg-open "${url}"`;

  exec(opener, (error) => {
    if (error) {
      console.error(`Could not open browser automatically for ${url}.`);
    }
  });
}

function handleOutput(chunk, stream) {
  const text = chunk.toString();
  stream.write(text);

  const localLineMatch = text.match(/Local:\s+(https?:\/\/[^\s]+)/);
  if (localLineMatch) {
    openBrowser(localLineMatch[1]);
    return;
  }

  const fallbackMatch = text.match(/(https?:\/\/localhost:\d+)/);
  if (fallbackMatch) {
    openBrowser(fallbackMatch[1]);
  }
}

child.stdout.on("data", (chunk) => handleOutput(chunk, process.stdout));
child.stderr.on("data", (chunk) => handleOutput(chunk, process.stderr));

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
