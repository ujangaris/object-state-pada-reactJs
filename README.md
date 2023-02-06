# Object & State React Js

## Object

    Todo:
        1. Object.js
            buat object dari motor
        2. App.js
            Import & panggil component Object yang sudah kita buat
        3. Liat pada browser dan console
            dapat dilihat untuk nilai dari property status masih belum berubah 'ON' walaupun button sudah di klik.

## State nyalakan mesin dan bensin

    Todo:
        1. Object.js
            buat state dan setState untuk menampilkan mengubah status,
            serta gunakan  spread operator agar data lamanya tidak tertimpa dengan setState
        2. pada browser ketika tombol nyalakan di klik , status akan jd 'ON' dan bensin akan berkurang 5L jadi 15L

## setState pada functin matikan() & memasang kondisi

    Todo:
        1. Object.js
            - merubah status 'ON'  menjadi 'OFF'  memasang function matikan()
              yang didalamnya terdapat setState yang terhubung dengan tombol button
              ketika diklik akan membuat status menjadi 'OFF
            - kondisi jika bensi 0, maka akan tampil pesan peringatan
            - disable untuk tiap button dengan kondisi
