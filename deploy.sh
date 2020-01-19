#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd docs/.vuepress/dist

echo 'nasum.dev' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:nasum/nasum.github.io.git master

cd -