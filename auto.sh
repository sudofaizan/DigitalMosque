if ls /etc/systemd/system/mosque.service
then
echo "daemon present"
else
cd /home/ec2-user/DigitalMosque
cp mosque.service /etc/systemd/system/mosque.service
sudo systemctl daemon-reload
sudo systemctl start mosque
sudo systemctl enable mosque
fi
if git pull |grep changed
then
docker rm -f $(docker ps -aq)
docker build -t dexterquazi/digitalmosque  --no-cache .
docker push dexterquazi/digitalmosque
docker run -itd --name mosque -p 80:80 -p 443:443 dexterquazi/digitalmosque
fi

