terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.13.0"
    }
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}


provider "docker" {}

variable "do_token" {}
provider "digitalocean" {
    token = var.do_token
}

resource "digitalocean_app" "site" {
    spec {
        name = "personal-site-timbrook-tech"
        region = "sfo"

        static_site {
            name          = "static"
            build_command = "npm run build"
            output_dir    = "/build"

            git {
                repo_clone_url = "https://github.com/7imbrook/timbrook.tech"
                branch         = "main"
            }
        }
    }
}

# resource "docker_image" "nginx" {
#   name         = "nginx:latest"
#   keep_locally = false
# }

# resource "docker_container" "nginx" {
#   image = docker_image.nginx.latest
#   name  = "tutorial"
#   ports {
#     internal = 80
#     external = 8000
#   }
# }
