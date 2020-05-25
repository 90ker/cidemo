#! /bin/bash
git pull
mvn clean
mvn package
docker-compose down
docker-compose up -d