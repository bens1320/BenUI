rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'init' &&
git remote add origin https://github.com/bens1320/BenUI-web.git &&
git branch -M main &&
git push -f -u origin main &&
cd -
echo https://bens1320.github.io/BenUI-web/index.html
