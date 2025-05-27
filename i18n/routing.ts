import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'sp'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  pathnames: {
    "/": {
      en: "/",
      sp: "/"
    },
    "/about": {
      en: "/about",
      sp: "/acerca"
    },
    "/works": {
      en: "/works",
      sp: "/trabajos"
    },
    "/contact": {
      en: "/contact",
    sp: "/contacto"
  },
}
});
