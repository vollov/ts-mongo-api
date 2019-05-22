https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/
https://developer.okta.com/blog/2018/11/15/node-express-typescript

swagger
https://itnext.io/wiring-up-an-api-server-with-express-and-swagger-9bffe0a0d6bd
https://blog.cloudboost.io/adding-swagger-to-existing-node-js-project-92a6624b855b

mongodb

redis
https://thisdavej.com/guides/redis-node/node/simple-values.html

jest
https://basarat.gitbooks.io/typescript/docs/testing/jest.html

nginx
https://medium.com/@ThomasTan/installing-nginx-in-mac-os-x-maverick-with-homebrew-d8867b7e8a5a

sudo nginx
/usr/local/etc/nginx/nginx.conf
sudo nginx -s stop

sudo brew services restart nginx

server {
listen 80;
server_name localhost;

#access_log logs/host.access.log main;

location / {
root /Users/to/www;
index index.html index.htm;
}
