const FA = "۰۱۲۳۴۵۶۷۸۹";

/** Latin → Persian digits (keeps everything else). */
export const faDigits = (value: string | number) => String(value).replace(/\d/g, (d) => FA[Number(d)]);

/** 2000 → "۲,۰۰۰" (Persian digits, Latin comma to match the site's style). */
export const faNumber = (n: number) => faDigits(Math.round(n).toLocaleString("en-US"));
