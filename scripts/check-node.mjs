import process from "node:process";

function parse(v) {
  const m = String(v).trim().match(/^v?(\d+)\.(\d+)\.(\d+)/);
  if (!m) return null;
  return { major: Number(m[1]), minor: Number(m[2]), patch: Number(m[3]) };
}

function lt(a, b) {
  if (a.major !== b.major) return a.major < b.major;
  if (a.minor !== b.minor) return a.minor < b.minor;
  return a.patch < b.patch;
}

const current = parse(process.version);
if (!current) {
  console.warn(`[check-node] Unable to parse Node version: ${process.version}`);
  process.exit(0);
}

// Next.js 14.2.x is known to be problematic on Node 22.11.x on Windows.
// Keep this conservative to match upstream "supported" engines.
const minNode20 = { major: 20, minor: 19, patch: 0 };
const minNode22 = { major: 22, minor: 12, patch: 0 };

const isNode20 = current.major === 20 && !lt(current, minNode20);
const isNode22 = current.major === 22 && !lt(current, minNode22);
const isNode24Plus = current.major >= 24;

if (!(isNode20 || isNode22 || isNode24Plus)) {
  console.error(
    [
      "",
      "[check-node] Your Node.js version is not compatible with this setup:",
      `  current: ${process.version}`,
      "",
      "Required (pick one):",
      "  - Node 20.19.0+",
      "  - Node 22.12.0+",
      "  - Node 24+",
      "",
      "This commonly causes Next.js 14 dev server to hang on \"Starting...\" on Windows.",
      "",
    ].join("\n")
  );
  process.exit(1);
}

