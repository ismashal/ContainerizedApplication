provider "aws" {
  region = var.default_region
}

terraform {
  backend "s3" {
    bucket = "node-app-tf-state"
    key    = "terraform.tfstate"
    region = var.default_region
  }

  required_version = ">= 0.12"
}




data "aws_caller_identity" "current" {}