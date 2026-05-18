#!/bin/zsh

for files in *.jsx do
    mv "$file" "${files%.jsx}.tsx"
done