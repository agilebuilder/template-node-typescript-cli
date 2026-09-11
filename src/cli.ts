#!/usr/bin/env node
import { Command } from "commander";
import { registerHelloCommand } from "./commands/hello";

const program = new Command();

program
  .name("<%= cliName %>")
  .description("<%= description %>")
  .version("0.1.0");

registerHelloCommand(program);

program.parse(process.argv);
