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

### 28. Get edit product

### 29. Edit product view

    Menggunakan Dropzone untuk memasukan gambar/filde dengan mendragnya. 
    Documentation: https://cdnjs.com/libraries/dropzone/5.1.1

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/products
    coba klik button edit pada salah satu data, jika berhasil
    akan diarahkan ke halaman edit product sesui dengan data yang di klik.

### 30. Post edit product
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/products
    coba klik button edit pada salah satu data, 
    akan diarahkan ke halaman edit product sesui dengan data yang di klik.
    kemudian coba edit data , bisa inputan atau gambar , jika berhasil data akan berubah.

    pada tahap ini belum menggunakan funsi dari dropzone.

### 31. Upload gallery images part 1

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/products
    coba klik button edit pada salah satu data, 
    akan diarahkan ke halaman edit product sesui dengan data yang di klik.
    kemudian coba klik bagian drop image, dan pilih beberapa gambar.
    jika pada gambar terdapat tanda checklist itu tandanya gambar berhasil tersimpan .
    untuk lebih memastikan lihat pada pbuli/product_imag/<id+namagambar yang kita pilih>/gallery/thumbs akan ada file gambar yang td kita drop

### 31. Upload gallery images part 2
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/products
    coba klik button edit pada salah satu data, 
    akan diarahkan ke halaman edit product sesui dengan data yang di klik.
    kemudian coba klik bagian drop image, dan pilih beberapa gambar.
    jika pada gambar terdapat tanda checklist itu tandanya gambar berhasil tersimpan .
    dan pada halaman gambar juga berhasil muncul.
    untuk lebih memastikan lihat pada pbuli/product_imag/<id+namagambar yang kita pilih>/gallery/thumbs akan ada file gambar yang td kita drop

    note: gambar hanya berhasil di simpan pada local direcory, tidak pada database!

### 32. Delete gallery images
   
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/products
    coba klik button edit pada salah satu data, 
    akan diarahkan ke halaman edit product sesui dengan data yang di klik.
    coba klik button delete pada image gallery, jika berhasil gambar akan terhapus dari halaman.
    untuk lebih memastikan lihat pada pbuli/product_imag/<id+namagambar yang kita pilih>/gallery/thumbs akan ada file gambar yang yang berkurang.

    note: gambar hanya berhasil di simpan pada local direcory, tidak pada database!

### 33. Delete product
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/products
    coba klik button delete pada salah satu data, jika berhasil gambar akan terhapus dari halaman.
    untuk lebih memastikan lihat pada pbuli/product_imag data <id+namagambar yang kita pilih untuk dihapus>
    sudah tidak ada.

### 34. Front menu display
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost

    jika kamu coba masuk kehalaman  : http://localhost:3000/admin/pages
    coba pindahkan pisisi contoh blog pada bagian setelah home,
    maka setelah kamu restart server (nodemon app.js), 
    kamu akan liat susunan sesuai dengan yang td kita ubah,
    pada halaman http://localhost:3000/admin/pages

### 35. Admin page changes not reflected in frontend fix

    coba masuk kehalaman  : http://localhost:3000/admin/pages
    kemudian lakukan CRUD, setelah melakukan perubahan create misalnya 
    kemudian lakukan restart server
    restart server : nodemon app.js
    dan lihat perubahan pada browser: http://localhost
    jika berhasil halaman hanya perlu di refresh untuk melihat perubahan,
    tapa harus restart server.

### 36. Display page content
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost
    kemudian coba klik menu2 pada navbar, jika berhasil content akan berganti.

### 37. Front display categories

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/categories
    kemudian coba lakukan CRUD , untuk melihat hasil coba pada : http://localhost:3000/
    jika datanya berubah sehabis di refresh artinya setup yang kita lakukan berhasil.

### 38. Display all products

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000
    kemudian klik All product, akan diarahkan ke halaman : http://localhost:3000/products
    jika berhasil akan tampil product dari database.

### 39. Display products by category

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000
    kemudian klik dan pilih category yang ingin dilihat, 
    akan diarahkan ke halaman : http://localhost:3000/products/<nama parameter category yang dipilih>
    jika berhasil akan tampil product berdasarkan category dari database.

### 40. Display product details

    Fancybox Documentation : https://cdnjs.com/libraries/fancybox/3.1.20

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000
    kemudian klik dan pilih category yang ingin dilihat, 
    akan diarahkan ke halaman : http://localhost:3000/products/<nama parameter category yang dipilih>
    coba klik pada salah satu photo gallery, jika gambarnya mengambang dan bisa digeser, 
    berarti fancybox yang kita pasang berhasil.

### 41. Cart route and header display

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000
    lihat pada navbar ada menu cart

### 42. Add to cart

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/products
    kemudian coba pilih salah satu product lalu klik add to cart,
    dan perhatikan pada menu navbar cart akan bertambah nilainya jika di klik add to cart
    perhatikan juga pada terminal !

### 43. Checkout page
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: 
    http://localhost:3000/cart/checkout
    http://localhost:3000/admin/products

### 44. Cart updating
   
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/products
    coba klik salah satu product, kemudian add product, klik menu My Cart
    kemudian coba klik tanda minus atau clear, jika berhasil kehapus productnya 
    maka setup yang kita buat berhasil.

### 45. Clear cart
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/products
    coba klik salah satu product, kemudian add product, klik menu My Cart
    kemudian coba klik clear cart, jika berhasil kehapus productnya 
    maka setup yang kita buat berhasil.

### 46. Adding paypal checkout

    Documentation : https://www.paypal.com/ms/smarthelp/article/how-do-i-add-paypal-checkout-to-my-custom-shopping-cart-ts1200

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/products
    coba klik salah satu product, kemudian add product, klik menu My Cart
    kemudian klik button paypal buy now,maka akan diarahkan kehalaman 
    form pembayaran dengan paypal.

    jika pada saat mengkil button paypal buy now terkunci,
    coba buka situs paypal, lalu login kemudian : https://www.paypal.com/businessmanage/preferences/payments
    pada encription payment rubah menjadi off/tidak

### 47. Enhancing checkout
     
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/products
    coba klik salah satu product, kemudian add product, klik menu My Cart
    kemudian klik button buy now,maka akan diarahkan kehalaman 
    form pembayaran dengan paypal.

    note : jika add 2 barang yang sama akan ada keterangan tambahan pada tampilan pembayaran paypal

### 48. User model and passport setup

    install package : npm install --save passport passport-local bcryptjs

### 49. Register view

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/users/register

### 50. Register post

    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/users/register
    kemudian coba isi form register jika berhasil
    ter-ridirect ke halamanan : http://localhost:3000/users/login

    note: agar flash alert yang kita pasang dapat kita lihat jika user salah melakukan register,
    kosongkan semua isian form kemudian klik buttom submit,
    maka flash alert akan muncul, lakukan juga pada isian form seperti :
    - tidak samanya password dan confirm password 
    - kosongnya name/email/username/password

### 51. Login
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/users/login
    kemudian coba isi form login jika berhasil
    ter-ridirect ke halamanan : http://localhost:3000 (home page)

### 51. Authentication 
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/users/register
    kemudian coba isi form register
        name: john 
        email:john@mail.com
        username: john
        password: admin0k8
        confirm password: admin0k8
    jika berhasil ter-ridirect ke halamanan : http://localhost:3000/users/login
    kemudian login dengan user diatas.

    note :perhatikan pada navbar menu akan ada perbedaan jika sudah login dan belom login
    coba pula add product , jika belum login tidak akan ada button add product,
    sebaliknya jika sudah login button akan muncul.

### 52. Logout 
   
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/users/login
    kemudian coba isi form login dengan user yang terdaftar;
        username: john
        password : admin0k8
    jika berhasil ter-ridirect ke halamanan : http://localhost:3000 (home page)

    kemudian coba logout, 

    note: untuk user admin, pada halaman admin area akan ada menu logut
    pada materi ini juga terdapat cara mengatasi error user is not undefined
    jika pada halaman register mencoba register namun di kosongkan formnya 

### 53. Access control 
    
    untuk mengetahui semua berjalan dengan baik lakukan restart server
    restart server : nodemon app.js
    pada browser: http://localhost:3000/admin/pages
    jika belum login sebagai admin akan ada notifikasi alert.

    note: halaman admin hanya bisa diaccess oleh admin, jika user biasa akan di redirect ke halaman user.

### 54. Adding more text and headings to pages 