# nodejs-docker

1. Subir imagem
docker build -t dockernode-image .

2. Sobe container
docker run -p 3000:3000 -d dockernode-image

Rodar com docker compose
docker-compose up