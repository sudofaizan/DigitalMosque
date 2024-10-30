#!/bin/bash

# Define paths for reusability
SERVICE_PATH="/etc/systemd/system/mosque.service"
SERVICE_NAME="mosque"
DOCKER_IMAGE="dexterquazi/digitalmosque"
LOCAL_DIR="/home/ec2-user/DigitalMosque"

# Check if the systemd service is present
if [[ -f $SERVICE_PATH ]]; then
    echo "Daemon present"
else
    # Copy service file and start the service
    cp "$LOCAL_DIR/$SERVICE_NAME.service" "$SERVICE_PATH"
    sudo systemctl daemon-reload
    sudo systemctl start "$SERVICE_NAME"
    sudo systemctl enable "$SERVICE_NAME"
fi

# Pull latest code and check for changes
cd "$LOCAL_DIR"
if git pull | grep -q "changed"; then
    # Remove all running containers
    docker rm -f $(docker ps -aq)

    # Build and push the Docker image
    docker build -t "$DOCKER_IMAGE" --no-cache .
    docker push "$DOCKER_IMAGE"

    # Run the Docker container
    docker run -d --name "$SERVICE_NAME" -p 80:80 -p 443:443 "$DOCKER_IMAGE"
else
    echo "No changes detected"
fi

# Delay before re-checking
sleep 600