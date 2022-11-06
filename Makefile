
.PHONEY:

terraform:
	pushd ./tf && op run --env-file=.env -- terraform apply -auto-approve