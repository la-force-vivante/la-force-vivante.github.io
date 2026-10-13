/**
 * Runs `fn` once the page's HTML is ready.
 * forum.js is loaded asynchronously, so the page may or may not be ready yet.
 */
export function onReady(fn: () => void): void {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    fn();
  }
}
