import * as eta from "https://deno.land/x/eta@v1.12.3/mod.ts";
import { ensureFileSync } from "https://deno.land/std@0.174.0/fs/mod.ts";

export default class ResumeBuilder {
  constructor(public templatePath: string) {}

  async build(
    dataFilePath: string,
    outputPath: string,
  ): Promise<boolean> {
    const data = this.getFileData(dataFilePath);
    const renderedTemplate = await eta.renderFile(this.templatePath, {
      data: data,
    });

    if (!renderedTemplate) {
      return false;
    }

    ensureFileSync(outputPath);

    await Deno.writeTextFile(outputPath, renderedTemplate);

    return true;
  }

  private getFileData(path: string): any {
    const decoder = new TextDecoder("utf-8");
    const content = decoder.decode(Deno.readFileSync(path));

    return JSON.parse(content);
  }
}
