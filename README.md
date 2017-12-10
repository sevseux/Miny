# What is Miny ?

Miny is a minimalist web chat using WebSocket.

## Installation

### Node.js

`Miny` is available on github :

```sh
$ git clone https://github.com/sevseux/MinyJS.git
```

To install it, type:

```sh
$ npm install
```

The server need a MySQL database. The `miny.sql` default database is given in `/public/files/miny.sql`.

To install it, type:

```sh
$ mysql < miny.sql
```

You can set the config informations at in `/config/index.js` using the object : 

    host: '127.0.0.1',
    port: 3306,
    protocol: 'mysql',
    user: '<USERNAME>',
    password: '<PASSWORD>',
    database: 'miny'

Finally, to launch to server, type:

```sh
$ npm start
```

With default config, the web application is accessible at : 

```url
localhost:3000
```