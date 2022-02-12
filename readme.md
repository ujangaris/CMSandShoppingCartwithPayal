## Node.js Express Project - CMS and Shopping Cart with Paypal
### 03. Project setup 
    npm init -y
    create database mongodb compass
        database: cmscart
        collection: pages

    install module:
    npm i --save express ejs
    
### 04. Server setup
    
    jalankan server : nodemon app.js
    pada browser: http://localhost:3000


### 05. Connecting to mongoDB

    install mongoDB : npm i --save mongoose
    Documentation : https://mongoosejs.com/docs/4.x/docs/index.html  

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js

### 06. Templates

    Documentation : https://getbootstrap.com/docs/3.3/examples/starter-template/

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000

### 07. Routes setup

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: 
    page front => http://localhost:3000
    page admin => http://localhost:3000/admin/pages

### 08. Getting more packages

    install body-parser : npm i --save body-parser
    Documentation : https://github.com/expressjs/body-parser

    install express-session : npm i --save express-session
    Documentation : https://github.com/expressjs/session

    install express-validator : npm install express-validator@5.3.0

    ┌──────────────────────────────────────────────────────────────────────────────┐
    │     install express-messages : npm i --save express-messages                 │
    │     install express-messages : npm i --save connect-flash                    │
    │     Documentation : https://github.com/visionmedia/express-messages          │
    └──────────────────────────────────────────────────────────────────────────────┘

### 09. creating the page model

### 10. Get add page

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/pages/add-page

### 11. Post add page | message alert-error

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/pages/add-page
    kemudian coba klik buttom submit tampa input data
    jika muncul alert error berarti, setup yang kita lakukan berhasil

### 12. Post add page | Create data

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/pages/add-page
    kemudian coba input data 
    jika di redirect ke halaman http://localhost:3000/admin/pages, berarti setup yang kita lakukan berhasil