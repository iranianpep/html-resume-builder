import Constant from "./Constants.ts";

export default class Helper {
  static getDefaultTemplatePath(): string {
    return `${Deno.cwd()}/${Constant.DEFAULT_TEMPLATE_NAME}`;
  }

  static getOutputPath(): string {
    return `${Deno.cwd()}/build/${Constant.DEFAULT_OUTPUT_NAME}`;
  }
}
