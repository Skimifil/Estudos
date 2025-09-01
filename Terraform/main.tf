terraform {
  required_version = ">= 1.0.0"
}


data "archive_file" "app_source" {
  type        = "zip"
  source_dir  = var.app_source_path
  output_path = "${path.tmp}/app_source.zip"
}

resource "null_resource" "docker_deploy" {

  triggers = {
    source_code_hash = data.archive_file.app_source.output_sha
  }

  connection {
    type        = "ssh"
    user        = var.docker_host_user
    private_key = file(var.docker_host_private_key_path)
    host        = var.docker_host
  }

  provisioner "file" {
    source      = var.app_source_path
    destination = "/tmp/${var.app_name}"
  }

  provisioner "remote-exec" {
    inline = [
      "docker build -t ${var.app_name} /tmp/${var.app_name}",
      "docker stop ${var.app_name}-container || true",
      "docker rm ${var.app_name}-container || true",
      "docker run -d --name ${var.app_name}-container --restart always -p ${var.host_port}:${var.container_port} ${var.app_name}",
      "rm -rf /tmp/${var.app_name}"
    ]
  }
}