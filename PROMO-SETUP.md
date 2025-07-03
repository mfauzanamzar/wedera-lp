# 🎯 Panduan Setup Promo Banner

Panduan cepat untuk mengonfigurasi promo banner di website Wedera.

## 📋 Langkah Setup

### 1. Copy Environment File
```bash
# Copy file template
cp env-example.txt .env

# Atau buat manual file .env dengan isi dari env-example.txt
```

### 2. Edit Konfigurasi Promo
Buka file `.env` dan ubah nilai berikut:

```env
# Tampilkan banner promo (true/false)
NEXT_PUBLIC_SHOW_DISCOUNT_BANNER=true

# Judul promo
NEXT_PUBLIC_PROMO_TITLE=Flash Sale Weekend!

# Persentase diskon (tanpa simbol %)
NEXT_PUBLIC_PROMO_PERCENTAGE=50

# Deskripsi promo
NEXT_PUBLIC_PROMO_DESCRIPTION=Penawaran terbatas akhir pekan! Jangan sampai terlewat:

# Tanggal berakhir (format: YYYY-MM-DDTHH:mm:ss)
NEXT_PUBLIC_PROMO_END_DATE=2025-02-28T23:59:59

# Harga paket (format: 99.000)
NEXT_PUBLIC_PRICE_NON_FOTO_ORIGINAL=79.000
NEXT_PUBLIC_PRICE_NON_FOTO=39.500
NEXT_PUBLIC_PRICE_PREMIUM_ORIGINAL=129.000
NEXT_PUBLIC_PRICE_PREMIUM=64.500
```

### 3. Restart Development Server
```bash
npm run dev
```

## 🎨 Contoh Konfigurasi

### Valentine's Day Promo
```env
NEXT_PUBLIC_SHOW_DISCOUNT_BANNER=true
NEXT_PUBLIC_PROMO_TITLE=Promo Valentine!
NEXT_PUBLIC_PROMO_PERCENTAGE=35
NEXT_PUBLIC_PROMO_DESCRIPTION=Rayakan cinta dengan undangan digital romantis. Promo berakhir:
NEXT_PUBLIC_PROMO_END_DATE=2025-02-14T23:59:59
NEXT_PUBLIC_PRICE_NON_FOTO_ORIGINAL=79.000
NEXT_PUBLIC_PRICE_NON_FOTO=51.350
NEXT_PUBLIC_PRICE_PREMIUM_ORIGINAL=129.000
NEXT_PUBLIC_PRICE_PREMIUM=83.850
```

### Ramadan Sale
```env
NEXT_PUBLIC_SHOW_DISCOUNT_BANNER=true
NEXT_PUBLIC_PROMO_TITLE=Promo Ramadan Mubarak!
NEXT_PUBLIC_PROMO_PERCENTAGE=25
NEXT_PUBLIC_PROMO_DESCRIPTION=Berkah Ramadan dengan undangan digital yang penuh makna:
NEXT_PUBLIC_PROMO_END_DATE=2025-04-30T23:59:59
NEXT_PUBLIC_PRICE_NON_FOTO_ORIGINAL=79.000
NEXT_PUBLIC_PRICE_NON_FOTO=59.250
NEXT_PUBLIC_PRICE_PREMIUM_ORIGINAL=129.000
NEXT_PUBLIC_PRICE_PREMIUM=96.750
```

### Independence Day Sale
```env
NEXT_PUBLIC_SHOW_DISCOUNT_BANNER=true
NEXT_PUBLIC_PROMO_TITLE=Promo Kemerdekaan!
NEXT_PUBLIC_PROMO_PERCENTAGE=45
NEXT_PUBLIC_PROMO_DESCRIPTION=Merdeka berkarya dengan undangan digital terdepan:
NEXT_PUBLIC_PROMO_END_DATE=2025-08-17T23:59:59
NEXT_PUBLIC_PRICE_NON_FOTO_ORIGINAL=79.000
NEXT_PUBLIC_PRICE_NON_FOTO=43.450
NEXT_PUBLIC_PRICE_PREMIUM_ORIGINAL=129.000
NEXT_PUBLIC_PRICE_PREMIUM=70.950
```

### No Promo Mode
```env
NEXT_PUBLIC_SHOW_DISCOUNT_BANNER=false
# Set harga normal tanpa diskon
NEXT_PUBLIC_PRICE_NON_FOTO_ORIGINAL=79.000
NEXT_PUBLIC_PRICE_NON_FOTO=79.000
NEXT_PUBLIC_PRICE_PREMIUM_ORIGINAL=129.000
NEXT_PUBLIC_PRICE_PREMIUM=129.000
```

## ⚠️ Catatan Penting

- **Restart Required**: Setelah mengubah environment variables, restart development server
- **Format Tanggal**: Gunakan format ISO 8601 (YYYY-MM-DDTHH:mm:ss)
- **Timezone**: Timer menggunakan WIB (UTC+7)
- **Persentase**: Hanya masukkan angka tanpa simbol % (contoh: 30, bukan 30%)
- **Format Harga**: Gunakan format 99.000 (dengan titik sebagai pemisah ribuan)
- **Banner Toggle**: Set `NEXT_PUBLIC_SHOW_DISCOUNT_BANNER=false` untuk menyembunyikan banner
- **Pricing Sync**: Diskon di pricing section otomatis mengikuti NEXT_PUBLIC_PROMO_PERCENTAGE
- **Auto Calculate**: Tidak perlu menghitung harga diskon secara manual, cukup set harga final yang diinginkan

## 🚀 Tips Pro

1. **Jadwalkan Promo**: Set tanggal berakhir yang strategis (akhir pekan, hari raya)
2. **A/B Testing**: Coba persentase diskon yang berbeda untuk melihat konversi terbaik
3. **Urgency**: Gunakan kata-kata yang menciptakan urgensi dalam deskripsi
4. **Seasonal**: Sesuaikan tema promo dengan musim/perayaan
5. **Hide When Needed**: Sembunyikan banner saat tidak ada promo aktif untuk tampilan yang bersih
6. **Price Flexibility**: Gunakan pricing variables untuk menyesuaikan harga tanpa mengubah kode
7. **Normal Mode**: Set harga asli = harga promo untuk mode tanpa diskon

## 📞 Support

Jika ada masalah atau pertanyaan, hubungi developer team melalui WhatsApp atau email. 