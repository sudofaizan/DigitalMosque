git pull
docker rm -f $(docker ps -aq)
docker build -t dexterquazi/digitalmosque  --no-cache .
docker push dexterquazi/digitalmosque
docker run -itd --name mosque -p 80:80 -p 443:443 dexterquazi/digitalmosque