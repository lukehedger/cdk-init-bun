import { App, Stack, StackProps } from "aws-cdk-lib";

export class CdkStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
  }
}

new CdkStack(new App(), "CdkStack");
