#!/usr/bin/env bash

cd ./web-api
npm test
cd ..

cd ./user-api
./gradlew test
cd ..

