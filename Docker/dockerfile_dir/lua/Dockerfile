FROM ubuntu:24.04 as base
RUN apt update && apt install -y lua5.4 luarocks
CMD luarocks --version
COPY main.lua .
ENTRYPOINT ["lua5.4","main.lua"]