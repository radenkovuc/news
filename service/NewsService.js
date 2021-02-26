import NewsAPI from 'newsapi'

const newsApi = new NewsAPI('6a924d8da586431fa7a913062dfad941', {
  corsProxyUrl: 'https://cors-anywhere.herokuapp.com/'
})

const DEFAULT_PAGE_SIZE = 100

export const getTopNews = ({country, category = null, term, pageSize = DEFAULT_PAGE_SIZE}) => {
  try {
    const request = {country, pageSize}
    if (category) {
      request.category = category
    }
    if (term) {
      request.q = term
    }

    const response = newsApi.v2.topHeadlines(request)
    return response.articles
  } catch (e) {
    return []
  }
}
