import { execSync } from "node:child_process";

/**
 * Real last-modified date for a file, from git history. Falls back to the
 * build time if git isn't available or the file has no history in this
 * checkout (e.g. a shallow clone), so this never breaks the build.
 */
export function getLastModifiedDate(relativePath: string): Date {
  try {
    const output = execSync(`git log -1 --format=%aI -- "${relativePath}"`, {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"]
    })
      .toString()
      .trim();
    if (output) {
      return new Date(output);
    }
  } catch {
    // Fall through to build time below.
  }
  return new Date();
}
