/**
 * Strips Next.js's built-in polyfill-module.js for modern-browser builds.
 *
 * Next.js ships polyfill-module.js as a pre-compiled file that gets bundled
 * directly into every page's JS chunk. It adds ~13.6 KiB of polyfills for
 * features already native in Chrome 95+/Safari 15.4+ (our target).
 *
 * Module alias tricks (turbopack.resolveAlias / webpack.resolve.alias) do NOT
 * work here because Next.js registers this file as a Turbopack entry point by
 * absolute path — not via a resolvable module specifier.
 *
 * This script replaces the file content with a no-op comment after every
 * `npm install`, so it survives dependency updates automatically.
 *
 * Run after install: add "postinstall": "node scripts/strip-nextjs-polyfills.js"
 * to package.json scripts.
 */

const fs = require('fs');
const path = require('path');

const target = path.join(
  __dirname, '..', 'node_modules', 'next', 'dist', 'build', 'polyfills', 'polyfill-module.js'
);

const noop = `/* polyfill-module.js stripped by strip-nextjs-polyfills.js
 * These polyfills are unnecessary for Chrome 95+ / Safari 15.4+.
 * Saves ~13.6 KiB of wasted JavaScript per page load. */
`;

if (!fs.existsSync(target)) {
  console.log('[strip-polyfills] polyfill-module.js not found, skipping.');
  process.exit(0);
}

const current = fs.readFileSync(target, 'utf8');
if (current.startsWith('/* polyfill-module.js stripped')) {
  console.log('[strip-polyfills] Already stripped, no changes needed.');
  process.exit(0);
}

fs.writeFileSync(target, noop, 'utf8');
console.log('[strip-polyfills] Stripped polyfill-module.js successfully.');
