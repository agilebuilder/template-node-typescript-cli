import type { Command } from "commander";
import { greet } from "../lib/greet";

export function registerHelloCommand(program: Command): void {
  program
    .command("hello")
    .description("Print a greeting")
    .argument("[name]", "name to greet", "world")
    .option("-u, --uppercase", "convert the greeting to uppercase", false)
    .action((name: string, options: { uppercase: boolean }) => {
      const message = greet(name);
      console.log(options.uppercase ? message.toUpperCase() : message);
    });
}
