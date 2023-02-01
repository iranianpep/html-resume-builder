import { parse } from "https://deno.land/std@0.174.0/flags/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import Helper from "./Helper.ts";
import ResumeBuilder from "./ResumeBuilder.ts";

type Args = {
  data: string;
  template: string;
};

try {
  const parsedArgs: Args = parse(Deno.args, {
    string: ["data", "template"],
    default: { data: "", template: Helper.getDefaultTemplatePath() },
  });

  const dataFilePath = parsedArgs.data;
  const templatePath = parsedArgs.template;

  if (!dataFilePath || dataFilePath.trim() === "") {
    throw new Error("Data file path is missing");
  }

  if (!templatePath || templatePath.trim() === "") {
    throw new Error("Template file path is missing");
  }

  const resumeBuilder = new ResumeBuilder(path.resolve(templatePath));
  const outputPath = Helper.getOutputPath();

  if (await resumeBuilder.build(dataFilePath, outputPath)) {
    console.info(`Successfully built the resume in ${outputPath}`);
  } else {
    throw new Error("Something went wrong!");
  }
} catch (e) {
  console.error(e);
  Deno.exit(1);
}
