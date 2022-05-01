# Docker

#### Observação
--
## Por que aprender?

A ideia agora é me profissionalizar em programação, irei utilizar o Docker para subir ambientes que suportem meus códigos e aprendizado, além de utilizar a ferramenta para otimizar coisas do meu trabalho.

## O que espero aprender?

Espero ter total conhecimento em como utilizar a ferramenta, ter noções de como subir ambientes de forma rápida e saber como criar *dockerfile*s sem dificuldades.

# Docker

Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

A vantagem de se usar containers é que você sempre vai levar os pré-requisitos da sua aplicação com você, se sua aplicação usa um determinado S.O., um pacote, etc... sua imagem de container sempre terá tudo o que você precisa para executa-la.

O Docker faz isso usando uma ideia antiga pelo LXC (Linux Cotainer), que usa por de baixo dos panos algumas funcionalidades do Kernel.

- chroot - Repensável por mapear os diretórios do S.O. e criar o ponto de montagem (/, /etc, /dev, /proc entre outros).
- cgroup - Repensável por controlar os recursos por processo. Com ele podemos por exemplo limitar o uso de memória e/ou processador para um processo específico.
- kernel namespace - Com ele podemos isolar processos, ponto de montagem entre outras coisas. Com esse isolamento, conseguimos a sensação de estar usando uma máquina diferente da máquina host. Pois enxergamos somente o ponto de montagem especifico e processos específicos, inclusive nossos processos começam com PID baixo.
    1. PID - Provê isolamento dos processos rodando dentro do container.
    1. NET - Provê isolamento das interfaces de rede.
    1. IPC - Provê isolamento da comunicação entre processos e memória compartilhada.
    1. MNT - Provê isolamento dos sistema de arquivos / pontos de montagem
    1. UTS - Provê isolamento do Kernel. Age como se o container fosse outro host.
- kernel capabilities - Entre outras coisas, conseguimos rodar alguns comandos de forma privilegiada.

---

## Iniciando com o Docker e Docker Swarm
O sistema de containers utiliza "imagens", que são como ISOs de um S.O., essa imagem contem tudo o que sua aplicação precisa. Essa imagem pode ser criado por você ou você pode pegar da comunidade ou até mesmo, de um repositório do Docker, que é o [Docker Hub](https://hub.docker.com/). Esse repositório possui uma variedade de imagens prontas que podem ser usadas para dar suporte a sua aplicação.

Quando pedimos ao Docker para subir um container, a primeira coisa que ele faz é validar se a imagem que você quer tem na sua máquina, caso não, ele vai até o Docker Hub e faz o download dessa imagem e inicia o container.

Então se você quer subir uma aplicação que usa o NGINX, o que você pode fazer é:
```bash
    $ docker run nginx
```

Com isso vocês vai ter a seguinte saída:
```bash
    $ docker run nginx
    Unable to find image 'nginx:latest' locally
    latest: Pulling from library/nginx
    1fe172e4850f: Pull complete 
    35c195f487df: Pull complete 
    213b9b16f495: Pull complete 
    a8172d9e19b9: Pull complete 
    f5eee2cb2150: Pull complete 
    93e404ba8667: Pull complete 
    Digest: sha256:859ab6768a6f26a79bc42b231664111317d095a4f04e4b6fe79ce37b3d199097
    Status: Downloaded newer image for nginx:latest
    /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
    /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
    /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
    10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
    10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
    /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
    /docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
    /docker-entrypoint.sh: Configuration complete; ready for start up
    2022/05/01 14:37:32 [notice] 1#1: using the "epoll" event method
    2022/05/01 14:37:32 [notice] 1#1: nginx/1.21.6
    2022/05/01 14:37:32 [notice] 1#1: built by gcc 10.2.1 20210110 (Debian 10.2.1-6) 
    2022/05/01 14:37:32 [notice] 1#1: OS: Linux 5.13.0-40-generic
    2022/05/01 14:37:32 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
    2022/05/01 14:37:32 [notice] 1#1: start worker processes
    2022/05/01 14:37:32 [notice] 1#1: start worker process 31
    2022/05/01 14:37:32 [notice] 1#1: start worker process 32
    2022/05/01 14:37:32 [notice] 1#1: start worker process 33
    2022/05/01 14:37:32 [notice] 1#1: start worker process 34
    2022/05/01 14:37:38 [notice] 1#1: signal 28 (SIGWINCH) received
    2022/05/01 14:37:38 [notice] 1#1: signal 28 (SIGWINCH) received
    2022/05/01 14:37:38 [notice] 1#1: signal 28 (SIGWINCH) received

```

Conseguimos validar a execução dos containers utilizando o comando:
```bash
    $ docker container ls
```
Utilizando o parâmetro "-a" ele te mostra todos os containers, mesmo os que estão parados.

Lembrando que o container precisa de um processo sendo executado dentro dele para continuar em execução, exemplo:
Quando executamos o comando "docker run ubuntu", ele vai validar se a imagem existe na sua máquina e caso não, ele vai baixar do repositório do Docker hub e subir seu container, mas por padrão, a imagem do Ubuntu, executa apenas um comando "bash", com isso o Docker sobe o container, executa o comando e para ele. O que é diferente do NGINX visto acima, quando subi o NGINX, o processo continuou em execução e se você bater na porta do container pelo navegador, você vai conseguir ver o log da sua requisição.
```bash
    $ docker rum ubuntu
```
Saída:
```bash
    $ docker run ubuntu
    Unable to find image 'ubuntu:latest' locally
    latest: Pulling from library/ubuntu
    125a6e411906: Pull complete 
    Digest: sha256:26c68657ccce2cb0a31b330cb0be2b5e108d467f641c62e13ab40cbec258c68d
    Status: Downloaded newer image for ubuntu:latest
```

Validando os containers:
```bash
    $ docker container ls -a
```
Saída:
```bash
    CONTAINER ID   IMAGE     COMMAND   CREATED              STATUS                      PORTS     NAMES
    7224910c35d6   ubuntu    "bash"    About a minute ago   Exited (0) 58 seconds ago             wonderful_zhukovsky
```
Repare que na coluna de comando, a execução foi "bash", e após executado isso, o container *"morreu"*.