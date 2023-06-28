import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { test } from "vitest";
import { CdkStack } from "../";

test("Stack has no resources", () => {
  const stack = new CdkStack(new App(), "CdkStack");

  const template = Template.fromStack(stack);

  template.templateMatches({});
});
