# News
Web application for reading news from https://newsapi.org/docs/endpoints/top-headlines.

Currently, support English and German languages

## Commands

- dev: start next dev environment
- build: build next files
- start: start next server
- test: run unit tests
- linter:check: check for ,

## Localisation
Localisation is done by using next-i18next mode.
For basic usage "t" function should be used. Components defined inside "pages" directory will receive this function
as a prop. Translation key should be passed as an argument when function is called.

Official documentation can be found at https://react.i18next.com/
