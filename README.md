# <%= projectName %>

<%= description %>

## 技术栈

- Node.js <%= nodeVersion %>+ / TypeScript
- [Commander](https://github.com/tj/commander.js)：命令行参数与子命令组织
- [Vitest](https://vitest.dev/)：单元测试
- [ESLint](https://eslint.org/)（flat config）：代码检查
- tsc：构建输出到 `dist/`，`bin` 入口 `dist/cli.js` 带 shebang

## 目录结构

```
.
├── src/
│   ├── cli.ts            # Commander 入口（shebang，bin 指向编译产物）
│   ├── commands/
│   │   └── hello.ts      # 示例命令：带参数、选项与输出
│   └── lib/
│       └── greet.ts      # 示例工具函数
├── tests/
│   └── greet.test.ts     # Vitest 示例测试
├── eslint.config.js      # ESLint flat config
├── tsconfig.json         # tsc 构建配置
└── vitest.config.ts      # Vitest 配置
```

## 快速开始

使用 AgileBuilder 从模板生成项目：

```bash
ag create --git-url <模板仓库地址> --target <目标目录>
```

生成后安装依赖并验证：

```bash
cd <目标目录>
npm install
npm run build
node dist/cli.js --help
node dist/cli.js hello AgileBuilder -u
```

## 模板变量

| 变量名 | 说明 | 默认值 |
| --- | --- | --- |
| projectName | 项目名称（package.json 的 name） | demo-cli |
| cliName | 命令名（package.json 的 bin 名、帮助输出中的程序名） | demo-cli |
| description | 项目描述 | 一个命令行工具 |
| author | 作者 | （空） |
| nodeVersion | 目标 Node.js 大版本（写入 engines，可选 20 / 22） | 20 |

## 常用命令

```bash
npm run dev        # tsc 监听编译
npm run build      # 编译到 dist/
npm start          # 运行编译产物（等价于 node dist/cli.js）
npm test           # 运行 Vitest 测试
npm run test:watch # 测试监听模式
npm run lint       # ESLint 检查
npm run typecheck  # 仅做类型检查
```

发布到 npm 后，用户可通过 `npm i -g <%= projectName %>` 安装，并直接使用 `<%= cliName %>` 命令。
