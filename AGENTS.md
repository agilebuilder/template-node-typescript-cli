# AGENTS.md — AI 编码代理导航指南

## 项目简介

<%= projectName %>：<%= description %>。一个基于 Node.js <%= nodeVersion %>+ 与 TypeScript 的命令行工具，使用 Commander 组织命令，tsc 编译到 `dist/`，Vitest 做单元测试，ESLint 做代码检查。

## 目录结构

- `src/cli.ts`：CLI 入口（文件头 shebang），创建 `Command` 实例并注册子命令。
- `src/commands/`：每个子命令一个文件，导出 `registerXxxCommand(program)` 函数，在 `cli.ts` 中注册。
- `src/lib/`：与命令解耦的纯逻辑/工具函数，便于测试与复用。
- `tests/`：Vitest 测试，命名 `*.test.ts`，直接引用 `src/` 下的源码（无需先编译）。
- `dist/`：tsc 输出目录（已 gitignore），`package.json` 的 `bin` 指向 `dist/cli.js`。

## 约定

- 新增命令：在 `src/commands/` 新建文件并导出注册函数，再到 `src/cli.ts` 注册；命令描述用中文。
- 业务逻辑放进 `src/lib/`，命令文件只做参数解析与输出，保证可测试。
- 开启 TypeScript `strict`；不要引入未在 package.json 声明的依赖。
- 修改 `src/lib/` 中的函数时，同步更新 `tests/` 中的对应测试。
- 新增命令后为 `bin` 行为补充最小验证：`node dist/cli.js <命令> --help`。

## 常用命令

```bash
npm install        # 安装依赖
npm run build      # 编译到 dist/
npm test           # 运行测试
npm run lint       # 代码检查
npm run typecheck  # 类型检查
node dist/cli.js --help  # 运行编译产物
```
