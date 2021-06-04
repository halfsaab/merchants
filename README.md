# merchants
Pol Service Management Tech Assignment

Modules needed from docker:
mysql running in port 3406
redis running in port 7379
mongodb running in port 37017


Install below modules from the terminal in VBS:
/merchants npm install mongodb
/merchants npm install mongoose
/merchants npm install ioredis
/merchants npm install mysql2
/merchants npm install sequelize mysql2


For mysql:
docker run --name mysql -p 3406:3306 -e MYSQL_ROOT_PASSWORD=mypassword -d mysql

Database in redis has to be created under localhost 7379 and name NodeDatabase
Redis runs in http://localhost:8001/instance

Database must be created with connection name Node Databases and port 3306
Schema in mysql must be created under "merchants"
