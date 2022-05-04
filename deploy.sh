git pull origin master
# npm install
npm run build
cd ./build
aws s3 cp . s3://zorp-docs --recursive
aws cloudfront create-invalidation --distribution-id E34YHHGSVHH0HY --paths "/*"
cd ..
