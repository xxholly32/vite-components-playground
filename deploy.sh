#!/usr/bin/env sh
set -e
yarn run build
cd dist

git init
git add -A
git commit -m 'deploy: 发布到 gh-pages'

git push -f https://github.com/xxholly32/vite-components-playground.git master:gh-pages

cd -