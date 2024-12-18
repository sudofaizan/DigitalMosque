cd /home/ec2-user/DigitalMosque
update(){
if git pull --rebase --force|grep Updating
then
docker rm -f mosque
docker rmi -f mosque
docker build -t mosque .
docker run -itd --name mosque -p 80:80 -p 443:443 mosque
update
else 
sleep 5
update
fi
}
update
