/**
 * Author: maxine yang
 * Copyright 2026 Maxine yang (Updated version)
 */
// import { notFound } from 'next/navigation';
// import { getRequestConfig } from 'next-intl/server';

// // Can be imported from a shared config
// const locales = ['en', 'jp'];

// export default getRequestConfig(async ({ locale }) => {
//     // Validate that the incoming `locale` parameter is valid
//     if (!locales.includes(locale as any)) notFound();

//     return {
//         messages: (await import(`./messages/${locale}.json`)).default
//     };
// });
import { getRequestConfig } from 'next-intl/server';


export default getRequestConfig(async ({ locale }) => ({
  // 確保它會動態去抓取對應的 json 文件
  // ./i18n.ts
messages: (await import(`./messages/${locale}.json`)).default
}));