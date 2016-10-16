#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

# config
git config --global user.email "dolan_miu@hotmail.com"
git config --global user.name "Dolan Miu"

# deploy
cd dist
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/${GITHUB_REPO}.git" master:gh-pages > /dev/null 2>&1