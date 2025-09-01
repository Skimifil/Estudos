output "application_url" {
  value       = "http://${var.docker_host}:${var.host_port}"
  description = "URL que poderei acessar o sistema."
}