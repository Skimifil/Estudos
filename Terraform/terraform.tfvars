docker_host_user="seu_usuario_no_ubuntu"
docker_host_private_key_path="C:/Users/seu_usuario/.ssh/id_rsa" # Caminho para sua chave privada no formato do seu sistema

/*
Permissão para o usuário: Para rodar comandos Docker sem sudo, adicione seu usuário ao grupo docker: sudo usermod -aG docker $USER. Importante: Você precisará fazer logout e login novamente para que essa alteração tenha efeito.?Servidor SSH ativo: O Ubuntu Server geralmente já vem com ele.

Chave SSH: Você precisa de um par de chaves SSH para se conectar sem senha. Se ainda não tiver, crie com ssh-keygen -t rsa -b 4096. Depois, copie a chave pública para a máquina Ubuntu com o comando ssh-copy-id seu_usuario@192.168.15.21.
 */