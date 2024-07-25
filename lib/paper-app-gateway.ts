import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import { Duration, SecretValue } from "aws-cdk-lib";

export class PaperAppGateway extends Construct {
  paperAppGWFunction: NodejsFunction;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.paperAppGWFunction = new NodejsFunction(this, "function", {
      bundling: {
        commandHooks: {
          afterBundling: (inputDir: string, outputDir: string): string[] => [
            `mkdir -p ${outputDir}/lib/handler-functions`,
            `cp -R ${inputDir}/lib/handler-functions/applicationSchema.json ${outputDir}/lib/handler-functions`,
          ],
          beforeBundling: (inputDir: string, outputDir: string): string[] => [],
          beforeInstall: (inputDir: string, outputDir: string): string[] => [],
        },
      },
      timeout: Duration.minutes(5),
    });
    const prodSecret = new Secret(this, "prodSecret", {
      secretName: "doorway-lambdas/prod/serviceaccount",
      secretObjectValue: {
        user: SecretValue.unsafePlainText("changeme"),
        password: SecretValue.unsafePlainText("changeme"),
      },
    });
    prodSecret.grantRead(this.paperAppGWFunction);
    const stagingSecret = new Secret(this, "stagingSecret", {
      secretName: "doorway-lambdas/staging/serviceaccount",
      secretObjectValue: {
        user: SecretValue.unsafePlainText("changeme"),
        password: SecretValue.unsafePlainText("changeme"),
      },
    });
    stagingSecret.grantRead(this.paperAppGWFunction);
  }
}
