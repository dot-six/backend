# Source Directory
## Rules
 - `index.ts` - should export express `app` as `export app`
 - `db` - should be a file or directory that manages data structures and transaction to database
 - `utils` - should be a file or directory that contains helper functions and utilities
 - `api` - should contain files that is responsible for each scope and have `index.ts` that exports an Express `Router` called `api` as `export default api`
 - `template` - should contains template to be rendered by an engine (optional)
 - These only applies to DotSix
