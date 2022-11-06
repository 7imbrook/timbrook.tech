terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

variable "do_token" {}
provider "digitalocean" {
  token = var.do_token
}

resource "digitalocean_app" "site" {
  spec {
    name   = "personal-site-timbrook-tech"
    region = "sfo"

    static_site {
      name              = "static"
      build_command     = "npm run build"
      output_dir        = "/build"
      catchall_document = "index.html"
      git {
        repo_clone_url = "https://github.com/7imbrook/timbrook.tech"
        branch         = "main"
      }
    }
  }
}

output "live_url" {
  value = digitalocean_app.site.live_url
}

