## Introduction

- Create an .env file and set up the local enviroments, for example:
  ```
  PORT=5000
  ENV=development
  
  DATABASE_URI=mongodb://localhost/radio-backend
  ```

- After downloading, get the dependencies from the package json.

  ```
  $ npm install
  ```

- Get the data of the radios and save it into a json file

  ```
  $ node bin/getJSON.js
  ```

- Save the data into the local database

  ```
  $ node bin/radio-seed.js
  ```
