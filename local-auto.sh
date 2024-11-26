SERVICE_NAME="mosque"
DOCKER_IMAGE="dexterquazi/digitalmosque"
LOCAL_DIR="/home/ec2-user/DigitalMosque"

    docker rm -f $(docker ps -aq)

    # Build and push the Docker image
    docker build -t "$DOCKER_IMAGE" --no-cache .
    # docker push "$DOCKER_IMAGE"

    # Run the Docker container
    docker run -d --name "$SERVICE_NAME" -p 80:80 -p 443:443 "$DOCKER_IMAGE"

    ifconfig|grep 192