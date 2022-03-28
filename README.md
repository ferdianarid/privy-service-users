# Privy Users Services

<img src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/2f981f1837f2afbc70ef05415e01d984.jpeg" alt="privy" />

### Technology Used
Build with Express.js, Sequelize, JsonWebToken and Bcrypt

## Cara Memulai dan Menjalankan Project

### Cloning the Project
-   Clone project ini dengan -> git clone https://gitlab.com/ferdianar/service-users.git
-   Install Package dan Dependencies -> npm install

### Konfigurasi Environtment
-   Rename .env.example menjadi .env
-   Isikan Secret key untuk Refresh Token dan Access Token Key ( Acak )
-   Isi PORT nya sesuai keinginan, contoh ( 9999, 7500, 5000, 8888 etc. )

-   Masuk ke Directory Databases terus masuk file database.js
-   Rubah Nama Database, Username dan Password sesuai yang di local. Untuk Dialect nya kali ini saya pakai Mysql, dan untuk host nya default localhost / 127.0.0.1. Disini saya buat database dengan nama privyuser, username root dan password nya kosong.

### Generate Users Table Automatically
Untuk men generate table user secara otomatis,
-   Masuk ke menu helpers terus CheckDBConnected.js
-   Hapus Comment require(model/users) dan Hapus Comment Users.sync()
-   Simpan. Dan jalankan dengan perintah npm start

Setelah itu di terminal akan keluar deskripsi generate table seperti CREATE TABLE USERS ......

Biarkan berjalan, masuk ke menu sebelumnya, yaitu 

helpers -> CheckDBConnected.js

terus kembalikan seperti awal. Nge comment require model user dan nge comment Users.sync(). Disini berfungsi agar server tidak men generate terus menerus seumpama nanti nya ada yang berubah di file model nya.

Dan berikutnya, terminal akan otomatis mengeluarkan output Database connected dan Server Running on PORT ...

### Test Endpooint API
Untuk API Testing bisa pakai Postman / Insomnia. Saya pakai kedua nya.

Base API URL nya http://localhost:PORT/v1/endpoint
-   PORT itu akan menyesuaikan config env yang awal tadi.
-   v1 adalah prefix api version.
-   Endpoint nya ada di lihat di directory routes/.
Example : http://localhost:8888/v1/users -> Get all users

### API Response
<img src="https://raw.githubusercontent.com/ferdianar/privy-service-users/master/response.png?token=GHSAT0AAAAAABMD4XBVYAF7EZV2YXKZ7SB6YSB7UCQ" alt="response" />

### Struktur Table User di Database
<img src="https://raw.githubusercontent.com/ferdianar/privy-service-users/master/database.png?token=GHSAT0AAAAAABMD4XBVT3LW4N7YCKWJUPJEYSB7V4Q" alt="db" />

## Thank You in advance....
Author : Ferdian Ahmad R
