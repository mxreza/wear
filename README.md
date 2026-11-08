# تولیدی پوشاک پزشکی مهرپوش — لندینگ پیج

## اجرا
```bash
npm install
npm run dev     # پیش‌نمایش: http://localhost:3000
npm run build   # خروجی استاتیک در پوشه‌ی out
```

## ویرایش محتوا
همه‌ی متن‌ها، محصولات، شماره تماس و مسیر عکس‌ها در `content/site.ts` است.

## گذاشتن عکس واقعی
1. عکس را در `public/images/` بگذار (مثلاً `hero.jpg`).
2. در `content/site.ts` مقدار `image` همان بخش را بکن `"/images/hero.jpg"`.
اگر `image` خالی باشد، جای‌خالی نمایش داده می‌شود.

## انتشار
بعد از `npm run build` محتوای پوشه‌ی `out` را روی هر هاست معمولی آپلود کن؛ سرور Node لازم نیست.

## سایت منتشرشده
https://wear-gilt.vercel.app — هر پوش به شاخه‌ی `main` خودکار روی Vercel منتشر می‌شود.

آپلود روی هاست ایرانی با FTP هم آماده است (`.github/workflows/deploy-ftp.yml`)، ولی فقط دستی اجرا می‌شود؛
اول اطلاعات FTP را در Settings → Secrets and variables → Actions وارد کنید.
