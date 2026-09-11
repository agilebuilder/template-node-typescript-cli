import type { Command } from "commander";
import { greet } from "../lib/greet";

export function registerHelloCommand(program: Command): void {
  program
    .command("hello")
    .description("输出一条问候语")
    .argument("[name]", "要问候的名字", "world")
    .option("-u, --uppercase", "将问候语转为大写", false)
    .action((name: string, options: { uppercase: boolean }) => {
      const message = greet(name);
      console.log(options.uppercase ? message.toUpperCase() : message);
    });
}
