const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  otherLanguages: ['de'],
  localeSubpaths: {
    en: 'en',
    de: 'de'
  }
})
