# Agent Configuration

## Build/Test Commands
- `cd cody && pnpm build` - Build the main Cody TypeScript project
- `cd cody && pnpm test` - Run all tests (vitest)  
- `cd cody && pnpm test:unit` - Run unit tests only
- `cd cody && pnpm check` - Run all checks (build, biome, css)
- `cd cody && pnpm biome` - Format and lint TypeScript/JavaScript
- `python -m unittest test_<filename>.py` - Run single Python test
- `python -m unittest discover -s . -p "test_*.py"` - Run all Python tests

## Architecture
- **Main project**: `cody/` - Sourcegraph Cody AI assistant (TypeScript/React)
  - `agent/` - Cody agent for IDE integration
  - `vscode/` - VS Code extension
  - `web/` - Web interface
  - `lib/` - Shared libraries
- **Root**: Mixed Python/Java scripts and individual test files
- Uses pnpm workspaces, vitest for testing, biome for formatting

## Code Style
- **TypeScript**: Use biome for formatting, avoid `as` type assertions (use `satisfies`), document APIs with `/**` comments
- **Python**: unittest framework, `test_*.py` naming, follow snake_case
- **Imports**: Use proper module resolution, avoid deprecated telemetry v1 imports
- **Error handling**: Use TypeScript type system, avoid manual type assertions
