import {
  assertExists,
  assertStringIncludes,
} from "https://deno.land/std@0.174.0/testing/asserts.ts";
import Helper from "../Helper.ts";
import Constant from "../Constants.ts";

Deno.test("getDefaultTemplatePath: template path is not empty", () => {
  const path = Helper.getDefaultTemplatePath();

  assertExists(path);
});

Deno.test("getDefaultTemplatePath: template path has the phrase '/src/templates/'", () => {
  const path = Helper.getDefaultTemplatePath();

  assertStringIncludes(path, Constant.DEFAULT_TEMPLATE_NAME);
});

Deno.test("getOutputPath: output path is not empty", () => {
  const path = Helper.getOutputPath();

  assertExists(path);
});

Deno.test("getOutputPath: output path has the word '/build/'", () => {
  const path = Helper.getOutputPath();

  assertStringIncludes(path, "/build/");
});
