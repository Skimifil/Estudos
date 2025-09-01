# 1. Usar uma imagem base oficial e leve do Python.
FROM python:3.11-slim-bullseye

# 2. Definir o diretório de trabalho.
WORKDIR /app

# 3. Criar um usuário não-root para rodar a aplicação por segurança.
RUN useradd -m -u 1001 streamlit
USER streamlit

# 4. Copiar apenas o arquivo de dependências primeiro para aproveitar o cache do Docker.
COPY --chown=streamlit:streamlit requirements.txt .

# 5. Instalar as dependências. --no-cache-dir reduz o tamanho da imagem.
RUN pip install --no-cache-dir -r requirements.txt

# 6. Copiar o resto do código da aplicação.
COPY --chown=streamlit:streamlit . .

# 7. Expor a porta padrão do Streamlit.
EXPOSE 8501

# 8. Adicionar um healthcheck para verificar se a aplicação está saudável.
HEALTHCHECK CMD curl --fail http://localhost:8501/_stcore/health

# 9. O comando para iniciar a aplicação.
ENTRYPOINT ["streamlit", "run"]
CMD ["app.py"]