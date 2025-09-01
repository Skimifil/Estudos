FROM ubuntu:latest

ARG source_dir=/app/src
VOLUME ["$source_dir"]
RUN apt-get update && apt-get install -y python3 python3-pip
WORKDIR /app
COPY . .
RUN pip install streamlit
ENTRYPOINT ["streamlit", "run"]
CMD ["app.py"]

EXPOSE 80/tcp
EXPOSE 80/udp

LABEL description = 'Inicia o Streamlit para compartilhamento dos dados.'
LABEL application = 'Streamlit'
LABEL more_information = 'Aprendendo Dockerfile e Terraform.'