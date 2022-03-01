provider "aws" {
  region = var.default_region
}

terraform {
  backend "s3" {
    bucket = "serverlessapplicationstatefile"
    key    = "terraform.tfstate"
    region = "us-east-1"
  }

  required_version = ">= 0.12"
}




data "aws_caller_identity" "current" {}