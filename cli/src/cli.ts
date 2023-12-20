import { program, Command } from "commander";
import { example } from "./commands/example";

/**
 * All commands need to be directly registered in this list.
 *
 * To add a new command to the CLI, create a file under src/commands that
 * exports a Command constant, then add it to the list below
 */
const commands: Command[] = [example];

/** Main entry point for CLI. */
export function startCLI(): void {
  program.name("genkit").description("Google GenKit CLI").version("0.0.1");

  for (const command of commands) program.addCommand(command);

  program.parse();
}