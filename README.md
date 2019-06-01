# ts-mongo-api

typescript, mongoose, redis-erver, JWT, express

## mongodb

mongod --config /usr/local/etc/mongod.conf

mongodump --db duocun --out /Users/zhandus/d0/mongo/backups
mongorestore --db dcback /Users/zhandus/d0/mongo/backups/

mongorestore --db dcuat ./dc-backup

hui86.liu!ucK

103.52.217.163:/home/ubuntu/duocun-admin/
netstat -plnt

duocun
P2ker!
mongodb+srv://duocun:<password>@cluster0-hjpql.mongodb.net/test

mongodb://dusocun.com.cn/duocun
<username>:<password>@gettingstarted-7q2cs.mongodb.net/test
mongo "mongodb://mongodb0.example.com:27017"
mongo --host duocun.com.cn:27017

> du -sh /dir

tar -zcvf duocun-back.tar.gz /var/backups/mongo/duocun

## redis

redis-server

# jest

npm i jest @types/jest ts-jest -D

# gpql

http://localhost:5000/api/graphiql

# nodemon

https://medium.com/create-a-server-with-nodemon-express-typescript/create-a-server-with-nodemon-express-typescript-f7c88fb5ee71

# tree model

https://medium.com/@V_Voronenko/storing-tree-like-hierarchy-structures-with-mongodb-part-2-bf35ad1f25ef

"start": "node ./dist/boot.js",

====
{users {
id
username
}}
====
{info}
====
{user(id:"5cad50449687ac4a075e2f4a" ) {
id
username
address {
city
province
country
}
}}
====
mutation {
createRole(input: {name: "Bob"} ) {
name
}
}

===
5ce85846585cbf209cb6adf5

mutation {
createUser(input: {
username: "sanne"
email:"dommy@a.ca"
roles: ["5ce85846585cbf209cb6adf5", "5ce863cde8aa26453c769cf5"]

} ){
username
}
}

==

{user(id:"5ce860b8ef525939cf2cbf69" ) {
id
username
email
roles{
name
}
}}
====
mutation {
updateUser(id:"5ce860b8ef525939cf2cbf69", input:{
username: "sanne"
roles: ["5ce85846585cbf209cb6adf5", "5ce863cde8aa26453c769cf5"]

}){
username
roles{
name
}
}
}
