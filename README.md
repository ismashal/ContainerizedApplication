# Containerized Application using Terraform

![Alt text](image-ecs.png?raw=true "ECS")


<br />

## Preparation

To follow this tutorial you will need:

-   An Github Account
-   An AWS account
-   AWS CLI installed and configured
-   Terraform 12.30 CLI installed
-   An DockerHub Account

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

- Create a Github project, and generate a personal access token.

- Create an S3 **applicationstatefiles** bucket to store Terraform state. replace the bucket name in main.tf 

```
aws s3 create-bucket --bucket applicationstatefiles --region us-east-1
```

- Create the Docker hub token.

- Github Repo should have code in main branch for pipeline tigger

Terraform will use the above environment variables to authenticate with AWS for deploying resources. We are using the **us-east-1** region If you want to work with a different region, make the below changes in the downloaded source code.

```
# In deploy/terraform.tfvars file replace the vairable values of your choice
region                = "<YOUR_REGION>"
docker_username       = "<DOCKER_HUB_USERNAME>"
github_username       = "<GITHUB_USERNAME>"
github_project_name   = "<GITHUB_PROJECT_NAME>"
github_token          = "<GITHUB_TOKEN>"

# In buildspec.ymal file update the $DOCKER_HUB_TOKEN variable with value
$DOCKER_HUB_TOKEN = "<DOCKER_HUB_TOKEN_VALUE>"
```
We will be using remote backend for our configuration. If you open the ```main.tf``` file, you will find the below configuration block:
```
provider "aws" {
  region  = var.region
  version = ">= 3.0"
}

terraform {
  backend "s3" {
    bucket = "applicationstatefiles"
    key    = "terraform.tfstate"
    region = "us-east-1"
  }

  required_version = ">= 0.12"
}

```

<br />

## Execution

Once the setup is complete run the below commands in the downloaded folder:
```
$ cd deploy

$ terraform init

$ terraform apply -auto-approve
```

Once sucessfully run the terraform apply command will get the 
Output : aws_lb_dns_name endpoint to test the application on borwser.

<br />


## Testing

1. Take the Endpoint of the aws_lb from terrafrom out and hit on the faviourte web browser to see the Factorial application running on port 80 

2. Input any number you want calculate the fatorical number and click on factorial button to calculate the number.

If you want push release new version code in the in farget then merge you new code into the github main branch. Github will tigger the action to start the code pipeline. 

Note: If you get github token issue in the codepipline job. Configure/edit the github action/URL/Repo manully from the aws console. Then click on relase button in the same to tigger new version pipeline.


<br />
