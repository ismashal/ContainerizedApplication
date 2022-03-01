# Containerized Application using Terraform

![Alt text](image-ecs.png?raw=true "ECS")


<br />

## Preparation

To follow this tutorial you will need:
-   An AWS account
-   AWS CLI installed and configured
-   Terraform 12.30 CLI installed

First of all, download the source code
```
$ git clone https://github.com/ismashal/ContainerizedApplication.git

```
For sake of simplicity you can use credentials with administrative access to your AWS account. Once you have the credentials, you will need to create the environment variables as shown below:
```
$ export AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY"
$ export AWS_SECRET_ACCESS_KEY="YOUR_SECRETY_ACCESS_KEY"
$ export AWS_DEFAULT_REGION="us-east-1"
```

<br />

- Create a Github project, and generate a personal access token (see doc here)

- Create an S3 bucket to store Terraform state. Populate bucket name in main.tf


Terraform will use the above environment variables to authenticate with AWS for deploying resources. We are using the **us-east-1** region If you want to work with a different region, make the below changes in the downloaded source code.

```
# In terraform.tfvars file add the region of your choice
region = "<YOUR_REGION>"

# In .py files inside the 'zip_files' folder, update the region variable
region = '<YOUR_REGION>'
```
We will be using remote backend for our configuration. If you open the ```config.tf``` file, you will find the below configuration block:
```
provider "aws" {
  region  = var.region
  version = ">= 3.0"
}

terraform {
  backend "s3" {
    bucket = "serverlessapplicationstatefile"
    key    = "terraform.tfstate" 
    region = "us-east-1"
  }

  required_version = ">= 0.12"
}
```
Make sure you have a bucket named **serverlessapplicationstatefile** in **us-east-1** region.

<br />

## Execution

Once the setup is complete run the below commands in the downloaded folder:
```
$ cd deploy

$ terraform init

$ terraform apply -auto-approve
```
Output : aws_lb_dns_name

<br />


## Testing




<br />
