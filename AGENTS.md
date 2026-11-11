# AGENTS.md — Navigation Guide for AI Coding Agents

## Project Overview

<%= projectName %>: <%= description %>. A command-line tool built on Node.js <%= nodeVersion %>+ and TypeScript. Commander organizes commands, tsc compiles to `dist/`, Vitest runs unit tests, and ESLint checks code style.

## Project Structure

- `src/cli.ts`: CLI entry (shebang at the top of the file); creates the `Command` instance and registers subcommands.
- `src/commands/`: one file per subcommand, each exporting a `registerXxxCommand(program)` function registered in `cli.ts`.
- `src/lib/`: pure logic and utilities decoupled from commands, easy to test and reuse.
- `tests/`: Vitest tests named `*.test.ts`, importing source directly from `src/` (no build step needed).
- `dist/`: tsc output directory (gitignored); `package.json` `bin` points to `dist/cli.js`.

## Conventions

- New command: create a file under `src/commands/` exporting a registration function, then register it in `src/cli.ts`; command descriptions are written in English.
- Put business logic in `src/lib/`; command files only parse arguments and print output, keeping them testable.
- TypeScript `strict` is enabled; do not introduce dependencies not declared in package.json.
- When changing functions in `src/lib/`, update the corresponding tests under `tests/`.
- After adding a command, minimally verify the `bin` behavior with `node dist/cli.js <command> --help`.

## Common Commands

```bash
npm install        # install dependencies
npm run build      # compile to dist/
npm test           # run tests
npm run lint       # lint
npm run typecheck  # type check
node dist/cli.js --help  # run the compiled output
```
