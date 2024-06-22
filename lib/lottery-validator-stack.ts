import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import { aws_transfer as transfer } from "aws-cdk-lib";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as route53 from "aws-cdk-lib/aws-route53";

import { LotteryValidator } from "./lottery-validator";

export class LotteryValidatorStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const bucket = new s3.Bucket(this, "bucket", {
      bucketName: "testlotterybucket2",
      accessControl: s3.BucketAccessControl.PRIVATE,
      encryption: s3.BucketEncryption.S3_MANAGED,
      versioned: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      autoDeleteObjects: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    const sftpDomainName = "sftp.housingbayarea.mtc.ca.gov";
    const zoneName = "housingbayarea.mtc.ca.gov";
    const zoneId = "Z01682742VM0KIXZ4Y3W5";
    const hostedZone = route53.HostedZone.fromHostedZoneAttributes(
      this,
      "HostedZone",
      {
        hostedZoneId: zoneId,
        zoneName: zoneName,
      }
    );
    const cnameRecord = new route53.CnameRecord(this, "PaperAppSftpServer", {
      recordName: "sftp",
      zone: hostedZone,
      domainName: sftpDomainName,
    });
  }
}
