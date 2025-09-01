variable "docker_host" {
  type        = string
  description = "IP da máquina que esta o Docker."
  default     = "192.168.15.21"
}

variable "docker_host_user" {
  type        = string
  description = "User pra fazer a conexão SSH. Exemplo: \"ubuntu\""
}

variable "docker_host_private_key_path" {
  type        = string
  description = "Caminho pra chave SSH. Exemplo: \"~/.ssh/id_rsa\""
  sensitive   = true
}

variable "app_name" {
  type        = string
  description = "Nome do sistema."
  default     = "my-node-app"
}

variable "app_source_path" {
  type        = string
  description = "Caminho do Dockerfile e os scripts."
  default     = "."
}

variable "host_port" {
  type        = number
  description = "Porta do Servidor."
  default     = 8080
}

variable "container_port" {
  type        = number
  description = "Porta do Container."
  default     = 6000
}