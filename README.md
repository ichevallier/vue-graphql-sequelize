# Simple Vue GraphQL project with sequelize and mysql

For the css we use semantic https://semantic-ui.com/
For the fake data we will use faker https://www.npmjs.com/package/faker

## Getting started

1. Into the server directory :
- Installing dependancies  and run
```
npm install
```
- Configure your sequelize setup into sever/db.js file
```
const Conn = new Sequelize(
  'your-database',
  'your-user-name',
  'your-password',
  {
    dialect:'mysql',
    host: 'localhost'
  }
);
```
- And then run 
```
npm run start
```
It will create table into your database surfers and add fake data from faker.

2. Into the client directory :
Open another bash.
For information, I begun the project with the vue-cli command. 
```
vue init webpack
```
Here are my choosing options :
Generate project in current directory > Y
Vue build > Runtime + compiler
Install vue-router > Y
Use Eslint > n
Set up unit tests > n
Setup e2e tests with Nightwatch > n
Yes, use NPM

OR you can just run
```
npm install
npm run start
```


You should see fake profiles. You could add many others.

## My future next steps
1. Add delete
2. Add update
 
