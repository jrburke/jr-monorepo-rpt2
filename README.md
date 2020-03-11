# jr-monorepo-rpts

A Lerna-based monorepo to test rollup-plugin-typescript2 in watch mode.

## Setup

```
(clone this repo)
npm ci && npm run setup
cd packages/jr-player
npm run start
```

The `npm run start` will start rollup in watch mode.

Now edit `packages/jr-lib/src/util.ts`.

The watch will re-run the rollup build, but it fails with:

```
rollup v1.31.1
bundles src/index.ts → dist/jr-player.js...
[!] (plugin rpt2) Error: Could not find source file: '/Users/x/git/jr-monorepo-rpt2/packages/jr-auth/src/index.ts'.
Error: Could not find source file: '/Users/x/git/jr-monorepo-rpt2/packages/jr-auth/src/index.ts'.
    at getValidSourceFile (/Users/x/git/jr-monorepo-rpt2/packages/jr-player/node_modules/typescript/lib/typescript.js:135637:29)
    at Object.getSyntacticDiagnostics (/Users/x/git/jr-monorepo-rpt2/packages/jr-player/node_modules/typescript/lib/typescript.js:135851:52)
    at cache.getSyntacticDiagnostics (/Users/x/git/jr-monorepo-rpt2/packages/jr-player/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:29089:40)
    at TsCache.getDiagnostics (/Users/x/git/jr-monorepo-rpt2/packages/jr-player/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:24916:55)
    at TsCache.getSyntacticDiagnostics (/Users/x/git/jr-monorepo-rpt2/packages/jr-player/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:24876:21)
    at cache.walkTree (/Users/x/git/jr-monorepo-rpt2/packages/jr-player/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:29088:59)
    at lodash_3 (/Users/x/git/jr-monorepo-rpt2/packages/jr-player/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:24837:71)
    at arrayEach (/Users/x/git/jr-monorepo-rpt2/packages/jr-player/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:534:11)
    at forEach (/Users/x/git/jr-monorepo-rpt2/packages/jr-player/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:9360:14)
    at TsCache.walkTree (/Users/x/git/jr-monorepo-rpt2/packages/jr-player/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:24837:13)
```

## Notes

I do not want to use `preserveSymlinks` because in my real project, it results in duplicates of modules in the final built project, since multiple packages in the repo share common dependencies. I have tried a version using `preserveSymlinks`, and so as a last resort I could configure a dev setup that uses `preserveSymlinks`, but standalone/first time builds work without it, and I would like to keep the watch setup the same as the production builds.
