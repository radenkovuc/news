import NewsAPI from 'newsapi'

const newsApi = new NewsAPI('6a924d8da586431fa7a913062dfad941')

const DEFAULT_PAGE_SIZE = 100

export const getTopNews = (country, category = null, pageSize = DEFAULT_PAGE_SIZE) => {
  return newsApi.v2.topHeadlines({
    category,
    country,
    pageSize
  })
}
