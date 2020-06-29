import NewsAPI from 'newsapi'

const newsApi = new NewsAPI(process.env.NEWS_API_KEY)

const DEFAULT_PAGE_SIZE = 100

export const getTopNews = ({country, category = null, term, pageSize = DEFAULT_PAGE_SIZE}) => {
  const request = {country, pageSize}
  if (category) {
    request.category = category
  }
  if (term) {
    request.q = term
  }

  return newsApi.v2.topHeadlines(request)
}
