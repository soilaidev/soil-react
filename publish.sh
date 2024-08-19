#!/bin/bash

message="$1"

if [ -z "$message" ]; then
    echo "No message provided. Exiting..."
    exit 1
fi

yarn build

git add .

git commit -m "$message"

npm version patch

npm publish