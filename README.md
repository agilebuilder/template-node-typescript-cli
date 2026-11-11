# <%= projectName %>

<%= description %>

## Tech Stack

- Node.js <%= nodeVersion %>+ / TypeScript
- [Commander](https://github.com/tj/commander.js): CLI arguments and subcommand organization
- [Vitest](https://vitest.dev/): unit testing
- [ESLint](https://eslint.org/) (flat config): linting
- tsc: builds to `dist/`; the `bin` entry `dist/cli.js` carries a shebang

## Project Structure

```
.
├── src/
│   ├── cli.ts            # Commander entry (shebang; bin points to the compiled output)
│   ├── commands/
│   │   └── hello.ts      # Example command with argument, option and output
│   └── lib/
│       └── greet.ts      # Example utility function
├── tests/
│   └── greet.test.ts     # Vitest example tests
├── eslint.config.mjs     # ESLint flat config
├── tsconfig.json         # tsc build config
└── vitest.config.ts      # Vitest config
```

## Quick Start

Generate a project from this template with AgileBuilder:

```bash
ag create --git-url <template-repo-url> --target <directory>
```

After generation, install dependencies and verify:

```bash
cd <directory>
npm install
npm run build
node dist/cli.js --help
node dist/cli.js hello AgileBuilder -u
```

## Template Variables

| Variable | Description | Default |
| --- | --- | --- |
| projectName | Project name (package.json `name`) | demo-cli |
| cliName | Command name (package.json `bin` name; the command users install) | demo-cli |
| description | Project description | A command-line tool |
| author | Author | (empty) |
| nodeVersion | Target Node.js major version (written to engines; 22 / 24) | 24 |

## Common Commands

```bash
npm run dev        # tsc watch mode
npm run build      # compile to dist/
npm start          # run the compiled output (equivalent to node dist/cli.js)
npm test           # run Vitest tests
npm run test:watch # test watch mode
npm run lint       # ESLint check
npm run typecheck  # type check only
```

Once published to npm, users can install it with `npm i -g <%= projectName %>` and run the `<%= cliName %>` command directly.

## License

MIT
