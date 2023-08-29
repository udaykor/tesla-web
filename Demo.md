# Containers

### Build 
docker build -t tesla-web:0.0.1 .


### Tag & Push
docker tag tesla-web:0.0.1 ucrew/tesla-web:0.0.1
docker tag ucrew/tesla-web:0.0.1 ucrew/tesla-web:latest
docker push ucrew/tesla-web:0.0.1
docker push ucrew/tesla-web:latest

### Run
docker run -d -p 3000:3000 tesla-web:0.0.1

### Scan with Snyk CLI
snyk container test ucrew/tesla-web:0.0.1 --file=Dockerfile 
