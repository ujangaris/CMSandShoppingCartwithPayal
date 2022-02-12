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

### 13. Admin pages index
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/pages

### 14. Admin pages sorting

    Documentation : https://releases.jquery.com/ui/
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/pages
    coba mengeser posisi antara about dan services (naik dan turun), 
    jika berhasil data  pada database mongodb akan berubah untuk sortingnya(bernilai 1 atau 2)

### 15. Get edit pages 
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/pages
    klik button edit , jika berhasil akan diarahkan kehalaman edit sesui dengan data yang pilih.

### 16. Post edit page 
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/pages
    klik button edit pada salah satu data
    kemudian coba lakukan edit data pada halaman form edit, jika berhasil akan ada alert message
    dan data akan ber ubah.

### 17. Wysiwig and delete page 

    CKEditor 
    Documentation : 
    https://ckeditor.com/
    https://cdn.ckeditor.com/
    https://ckeditor.com/docs/ckeditor5/latest/builds/guides/predefined-builds/quick-start.html
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/pages
    klik button delete pada salah satu data, jika berhasil akan ada alert message, jika di klik ok
    data akan tehapus, dan ada alert danger (Page deleted!)

### 18. Admin categories model and route setup
    
    ┌──────────────────────────────────────────────────────────────────────────────┐
    │ pada terminal coba lakukan insert data:                                      │
    │         mongo                                                                │
    │         show dbs                                                             │
    │         use cmscart                                                          │
    │         show collections                                                     │
    │         db.categories.insertOne({title:"food", slug:"food"})                 │
    │                                                                              │
    │         dan input satu lagi data:                                            │
    │         db.categories.insertOne({title:"drink", slug:"drink"})               │
    └──────────────────────────────────────────────────────────────────────────────┘ 

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/categories/

### 19. Categories index

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/categories

### 20. Add category
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/categories/add-category
    coba input data pada form category, jika berhasil maka data akan bertambah dan 
    akan diarahkan ke halaman http://localhost:3000/admin/categories

### 21. Edit category
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/categories
    coba klik button edit pada salah satu data, setelah masuk kehalaman edit
    lakukan edit, jika berhasil data akan berubah dan akan ada alert success.

### 22. Edit pages bux fix

    jika kita mencoba edit page, kemudian coba mengosongkan title dan slug,
    pada inspec element setelh submit tidak ada parameter yang sebelumnya.

    caranya dengan mengganti yang semula menggunakan parameter slug menjadi id


    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/pages
    coba klik button edit pada salah satu data, setelah masuk kehalaman edit
    lakukan edit, jika berhasil data akan berubah dan akan ada alert success.

### 23. Delete category
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/categories
    coba klik button delete pada salah satu data, jika muncul alert confirm,
    klik ok, jika berhasil maka data yang dipilih terhapus.

### 24. Products model , route and packages setup

    install package:
    npm i --save express-fileupload fs-extra mkdirp resize-img
    
### 25. Products index

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/products

### 26. Get add product
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/products/add-product
    pada form coba masukan gambar, jika gambar yang dipilih tampil berarti setup code kita berhasil

### 27. Post add product

    ┌──────────────────────────────────────────────────────────────────────────────┐
    │ untuk mengatasi error 'image' not property :                                 │
    │     if(!req.files){                                                          │
    │     imageFile = ''                                                           │
    │     }                                                                        │
    │     if(req.files){                                                           │
    │                                                                              │
    │         var imageFile =                                                      │
    │         typeof req.files.image !== 'undefined' ? req.files.image.name : '';  │
    │     }                                                                        │
    └──────────────────────────────────────────────────────────────────────────────┘ 
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/products/add-product
    pada form coba input form 2x , pertama dengan gambar yang kedua tidak dengan gambar
    jika berhasil data akan terimput dan yang di input tanpa gambar akan tampil gambar noimage secara otomatis